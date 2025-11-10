import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const frontendDistPath = path.join(__dirname, '../cafeapp/dist');

// Servir los archivos estáticos (HTML, JS, CSS, imágenes)
app.use(express.static(frontendDistPath));

// Capturar cualquier ruta que no sea un archivo estático
app.use((req, res) => {
  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
