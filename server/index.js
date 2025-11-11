import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "secreto123";
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/cafeteria";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("conectado a mongodb"))
  .catch((err) => console.error("error al conectar mongodb:", err));

app.use(express.json());

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const pedidoSchema = new mongoose.Schema({
  userEmail: String,
  items: [
    {
      title: String,
      price: String,
      quantity: Number,
    },
  ],
  total: Number,
  metodoPago: String,
  fecha: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
const Pedido = mongoose.model("Pedido", pedidoSchema);

app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ message: "el correo ya está registrado" });

    const hashed = await bcrypt.hash(password, 10);
    const nuevo = new User({ name, email, password: hashed });
    await nuevo.save();

    res.status(201).json({ message: "usuario registrado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "error al registrar usuario", error });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(400).json({ message: "usuario no encontrado" });

    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido) return res.status(400).json({ message: "contraseña incorrecta" });

    const token = jwt.sign({ id: usuario._id }, JWT_SECRET, { expiresIn: "2h" });
    res.json({
      message: "login exitoso",
      token,
      user: { id: usuario._id, name: usuario.name, email: usuario.email },
    });
  } catch (error) {
    res.status(500).json({ message: "error al iniciar sesión", error });
  }
});

app.post("/api/pedidos", async (req, res) => {
  try {
    const { userEmail, cart, total, metodoPago } = req.body;
    const pedido = new Pedido({
      userEmail,
      items: cart,
      total,
      metodoPago,
    });
    await pedido.save();
    res.status(201).json({ message: "pedido guardado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "error al guardar el pedido", error });
  }
});

app.get("/api/pedidos/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const pedidos = await Pedido.find({ userEmail: email }).sort({ fecha: -1 });
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ message: "error al obtener pedidos", error });
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  if (req.originalUrl.startsWith("/api")) return next();
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});