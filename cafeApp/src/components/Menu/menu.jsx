import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // para animaciones
import FormaPago from "./FormaPago";

// ... tu array de images y categorías queda igual
const images = [
  {
    img: "/Americano Coffee_ 5 Surprising Benefits That Make It Better Than Regular Coffee.jfif",
    title: "Café Espresso",
    ingredients: "Café molido, agua",
    texture: "Intensa, cremosa, ligera espuma en la superficie",
    category: ["todos", "cafés"],
    price: "$250",
  },
  {
    img: "/Cinnamon Cappuccino Delight_ Coffee Lovers Rejoice with Peet's Coffee.jfif",
    title: "Cappuccino",
    ingredients: "Café espresso, leche vaporizada, espuma de leche",
    texture: "Cremosa, suave, con espuma aireada",
    category: ["todos", "cafés"],
    price: "$350",
  },
  {
    img: "/Oops!.jfif",
    title: "Latte Vainilla",
    ingredients: "Café espresso, leche vaporizada, jarabe de vainilla",
    texture: "Suave, cremosa, dulce",
    category: ["todos", "cafés"],
    price: "$380",
  },
  {
    img: "/Cozy Moments with Hot Chocolate.jfif",
    title: "Chocolate Caliente",
    ingredients: "Cacao, leche, azúcar, crema batida",
    texture: "Cremosa, espesa, reconfortante",
    category: ["todos", "cafés"],
    price: "$320",
  },
  {
    img: "/descarga.jfif",
    title: "Té Chai Latte",
    ingredients: "Té negro, leche, especias (canela, clavo, jengibre), azúcar",
    texture: "Cremosa, especiada, aromática",
    category: ["todos", "cafés"],
    price: "$330",
  },
  {
    img: "/cheesecake.jfif",
    title: "Cheesecake de Frutos Rojos",
    ingredients: "Queso crema, galletas, manteca, frutos rojos, azúcar",
    texture: "Suave, cremosa, base crocante",
    category: ["todos", "postres y panadería"],
    price: "$550",
  },
  {
    img: "/brownie.jfif",
    title: "Brownie de Chocolate",
    ingredients: "Chocolate, manteca, huevos, harina, azúcar",
    texture: "Densa, húmeda, fudgy",
    category: ["todos", "postres y panadería"],
    price: "$300",
  },
  {
    img: "/tartamanzana.jfif",
    title: "Tarta de Manzana",
    ingredients: "Masa quebrada, manzana, azúcar, canela, manteca",
    texture: "Crujiente por fuera, tierna por dentro",
    category: ["todos", "postres y panadería"],
    price: "$450",
  },
  {
    img: "/croassaint.jfif",
    title: "Croissant de Manteca",
    ingredients: "Harina, manteca, levadura, azúcar, sal",
    texture: "Hoja ligera, crocante por fuera, suave por dentro",
    category: ["todos", "postres y panadería"],
    price: "$220",
  },
  {
    img: "/🫐 MAGDALENAS DE ARÁNDANOS _ MUFFINS CON FRUTOS ROJOS _ DESAYUNO GOURMET.jfif",
    title: "Muffin de Arándanos",
    ingredients: "Harina, huevos, manteca, arándanos, azúcar",
    texture: "Suave, esponjosa, ligeramente húmeda",
    category: ["todos", "postres y panadería"],
    price: "$250",
  },
  {
    img: "/sandwich.jfif",
    title: "Sándwich de Jamón y Queso",
    ingredients: "Pan de molde, jamón, queso, mayonesa, lechuga",
    texture: "Suave, cremosa, con contraste crujiente de lechuga",
    category: ["todos", "salados"],
    price: "$400",
  },
  {
    img: "/Empanadas de Carne – Flaky, Savory & Handheld.jfif",
    title: "Empanada de Carne",
    ingredients: "Masa, carne picada, cebolla, pimiento, huevo, especias",
    texture: "Crujiente por fuera, jugosa por dentro",
    category: ["todos", "salados"],
    price: "$250",
  },
  {
    img: "/Quiche de espinacas y gambas - Juanan Sempere.jfif",
    title: "Quiche de Espinaca y Queso",
    ingredients: "Masa quebrada, espinaca, crema, huevos, queso rallado",
    texture: "Suave, cremosa, con base crujiente",
    category: ["todos", "salados"],
    price: "$500",
  },
  {
    img: "/bagel.jfif",
    title: "Bagel de Salmón Ahumado",
    ingredients: "Bagel, queso crema, salmón ahumado, alcaparras",
    texture: "Densa, masticable, cremosa por el queso",
    category: ["todos", "salados"],
    price: "$650",
  },
];


const categories = ["todos", "cafés", "postres y panadería", "salados"];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [totalChanged, setTotalChanged] = useState(false); // 🔔 para animar el total
  const [showPayment, setShowPayment] = useState(false); // 🔹 paso de pago

  // 🚫 Desactivar scroll global
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const filteredImages = images.filter(
    (img) =>
      img.category.includes(selectedCategory) &&
      img.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p.title === item.title);
      if (existing) {
        return prevCart.map((p) =>
          p.title === item.title ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    triggerTotalAnimation();
  };

  const decreaseQuantity = (title) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.title === title
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
    triggerTotalAnimation();
  };

  const increaseQuantity = (title) => {
    setCart((prev) =>
      prev.map((item) =>
        item.title === title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
    triggerTotalAnimation();
  };

  const removeFromCart = (title) => {
    setCart((prev) => prev.filter((item) => item.title !== title));
    triggerTotalAnimation();
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => {
      const price = parseInt(item.price.replace("$", "").replace(".", ""));
      return acc + price * item.quantity;
    }, 0);
  };

  // 🔔 Animar total
  const triggerTotalAnimation = () => {
    setTotalChanged(true);
    setTimeout(() => setTotalChanged(false), 400); // dura 0.4s
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden">
      {showPayment ? (
        // 🔹 Paso de forma de pago
        <FormaPago
          cart={cart}
          total={getTotal()}
          onBack={() => setShowPayment(false)} // volver al menú
        />
      ) : (
        <>
          {/* 🔶 Header */}
          <header className="sticky top-0 z-30 w-full bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 backdrop-blur-lg border-b border-amber-700/40 py-4 px-6 flex items-center justify-center">
            <div className="relative w-350">
              <input
                type="text"
                placeholder="Buscar.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-amber-600 placeholder-amber-600 py-2.5 pl-10 pr-4 focus:outline-none transition-all duration-300"
              />
              <span className="absolute right-3 top-2.5 text-amber-500 text-lg">🔍</span>
            </div>
          </header>

          {/* 🔶 Contenido principal */}
          <div className="flex flex-1 overflow-hidden">
            {/* 🟤 Sidebar */}
            <aside className="m-3 w-80 h-148 bg-amber-800/95 backdrop-blur-sm shadow-2xl border border-amber-700 p-6 flex flex-col rounded-3xl transition-all duration-300">

              {/* Contenedor scrollable */}
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">

                {/* 🔶 Categorías */}
                <h2 className="text-2xl font-bold text-amber-100 mb-4 text-center drop-shadow-md">
                  Categorías
                </h2>
                <ul className="space-y-3 mb-8">
                  {categories.map((category, i) => (
                    <li
                      key={i}
                      className={`cursor-pointer text-center py-3 rounded-xl transition-all font-semibold ${selectedCategory === category
                          ? "bg-amber-500 text-white shadow-md"
                          : "hover:bg-amber-700 hover:text-amber-100 text-amber-200"
                        }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category.toUpperCase()}
                    </li>
                  ))}
                </ul>

                {/* 🛒 Carrito */}
                <h2 className="text-xl font-bold text-amber-100 mb-4 text-center drop-shadow-md">
                  🛒 Carrito
                </h2>
                {cart.length === 0 ? (
                  <p className="text-center text-amber-300 text-sm italic">
                    No hay productos aún...
                  </p>
                ) : (
                  <ul className="space-y-4 pr-1">
                    {cart.map((item, i) => (
                      <li
                        key={i}
                        className="bg-amber-700/80 rounded-2xl p-3 flex items-center shadow-xl border border-amber-600 hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="relative w-16 h-16 flex-shrink-0 mr-3">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover rounded-xl shadow-inner"
                          />
                          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
                            {item.quantity}
                          </span>
                        </div>

                        <div className="flex-1 flex flex-col">
                          <p className="font-semibold text-amber-50">{item.title}</p>
                          <p className="text-sm text-amber-200 mt-1">{item.price}</p>

                          <div className="flex items-center mt-2 space-x-2">
                            <button
                              onClick={() => decreaseQuantity(item.title)}
                              className="bg-amber-500 hover:bg-amber-400 text-white px-3 py-1 rounded-full text-sm font-bold transition-shadow shadow-sm"
                            >
                              −
                            </button>
                            <span className="text-sm font-semibold text-amber-100 w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => increaseQuantity(item.title)}
                              className="bg-amber-500 hover:bg-amber-400 text-white px-3 py-1 rounded-full text-sm font-bold transition-shadow shadow-sm"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeFromCart(item.title)}
                              className="ml-auto text-amber-200 hover:text-red-400 font-bold transition"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* 💰 Total con animación */}
              <div className="mt-4 border-t border-amber-700 pt-3 text-center">
                <motion.p
                  key={getTotal()}
                  animate={totalChanged ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-amber-100 font-semibold text-lg"
                >
                  Total: ${getTotal().toLocaleString("es-AR")}
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 12px #facc15" }}
                  className={`mt-3 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg shadow-lg transition ${cart.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  disabled={cart.length === 0}
                  onClick={() => setShowPayment(true)}
                >
                  Confirmar Pedido
                </motion.button>
              </div>
            </aside>

            {/* 🟠 Galería */}
            <main className="flex-1 overflow-y-auto p-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {filteredImages.length > 0 ? (
                  filteredImages.map((item, index) => (
                    <div
                      key={index}
                      className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-96 flex flex-col"
                    >
                      {/* Imagen */}
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-[400px] object-cover rounded-t-2xl"
                      />

                      {/* Nombre y precio siempre visibles */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3 flex justify-between items-center">
                        <h3 className="font-bold text-sm sm:text-base truncate">{item.title}</h3>
                        <span className="font-semibold text-sm sm:text-base">{item.price}</span>
                      </div>

                      {/* Overlay con info + botón */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/70 text-white p-4 flex flex-col justify-between opacity-0"
                      >
                        <div>
                          <p className="text-sm mb-2"><strong>Ingredientes:</strong> {item.ingredients}</p>
                          <p className="text-sm"><strong>Textura:</strong> {item.texture}</p>
                        </div>
                        <button
                          onClick={() => addToCart(item)}
                          className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg shadow-md transition-colors"
                        >
                          AÑADIR AL PEDIDO
                        </button>
                      </motion.div>
                    </div>
                  ))
                ) : (
                  <p className="col-span-full text-center text-gray-600 text-lg font-semibold">
                    No se encontraron platos 🍰
                  </p>
                )}
              </div>
            </main>

          </div>
        </>
      )}
    </div>
  );

}

export default Menu;
