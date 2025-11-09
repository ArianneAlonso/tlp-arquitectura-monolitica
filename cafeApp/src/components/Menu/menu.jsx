import React, { useState, useEffect } from "react";

const images = [
  {
    img: "/a_tartadeplantadevoradoradehombres.webp",
    title: "Tarta de planta devoradora de hombres",
    ingredients:
      "Caldo de escorpión, gelatina de baba, Baraselia, Meeroak, Betan, sal, pimienta",
    texture:
      "Tarta horneada con superficie crujiente, decorada con rodajas de verduras, esponjosa por dentro",
    category: ["todos", "postres y panadería"],
    price: "$10.000",
  },
  {
    img: "/h_carnealaparrillaKelpie.webp",
    title: "Carne a la parrilla de Kelpie",
    ingredients:
      "Ronda, lomo, chuleta, filete, hígado, plato, cola, crin, repollo, cebolla",
    texture:
      "Gran variedad de texturas cárnicas, desde magras hasta jugosas, con vegetales suaves",
    category: ["todos", "salados"],
    price: "$8.000",
  },
  {
    img: "/k_tortillademandragoraybasilisco.webp",
    title: "Tortilla de mandrágora y basilisco",
    ingredients:
      "Mandrágora, tocino de basilisco, huevo de basilisco, sal, pimienta, ketchup",
    texture: "Cremosa y esponjosa, centro derretido con relleno jugoso",
    category: ["todos", "salados"],
    price: "$5.000",
  },
  {
    img: "/n_sorbetedeexorcismo.webp",
    title: "Sorbete de exorcismo",
    ingredients: "Agua bendita, frasco, cuerda sagrada, fantasmas",
    texture: "Sorbete suave y colorido, decorado con menta y caramelos",
    category: ["todos", "postres y panadería"],
    price: "$9.000",
  },
  {
    img: "/b_almuerzodeverdurasfrescasdelcampoGolem.webp",
    title: "Almuerzo de verduras frescas del campo Golem",
    ingredients:
      "Repollo, zanahorias, patatas, cebollas, tocino de basilisco, sal, pimienta",
    texture: "Sopa caliente y sustanciosa, verduras suaves, caldo con sabor a tocino",
    category: ["todos", "salados"],
    price: "$3.000",
  },
  {
    img: "/j_basiliscoasado.webp",
    title: "Café Basilisco",
    ingredients: "Granos mágicos tostados, aroma intenso, toque de hierba de maná",
    texture: "Espuma densa y aroma cautivante",
    category: ["todos", "cafés"],
    price: "$2.500",
  },
];

const categories = ["todos", "cafés", "postres y panadería", "salados"];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden">
      {/* 🔶 ENCABEZADO - buscador centrado y transparente */}
      <header className="sticky top-0 z-30 w-full bg-amber-600/30 backdrop-blur-md py-4 px-6 flex items-center justify-center border-b border-amber-200/30">
        <div className="relative w-350">
          <input
            type="text"
            placeholder="Buscar un plato mágico..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-amber-900 placeholder-amber-600 py-2.5 pl-10 pr-4 
                       focus:outline-none transition-all duration-300"
          />
          <span className="absolute right-3 top-2.5 text-amber-500 text-lg">🔍</span>
        </div>
      </header>

      {/* 🔶 CONTENIDO PRINCIPAL */}
      <div className="flex flex-1 overflow-hidden">
        {/* 🟤 SIDEBAR */}
        <aside
          className="m-3 w-64 h-135 bg-amber-800/95 backdrop-blur-sm shadow-2xl border border-amber-700 
             p-6 flex flex-col justify-between rounded-3xl transition-all duration-300"
        >
          <div>
            <h2 className="text-2xl font-bold text-amber-100 mb-6 text-center drop-shadow-sm">
              Categorías
            </h2>
            <ul className="space-y-3">
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
          </div>
        </aside>


        {/* 🟠 GALERÍA */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.length > 0 ? (
              filteredImages.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all border border-amber-100"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-amber-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-amber-700 font-semibold mb-2">
                      {item.price}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Ingredientes:</strong> {item.ingredients}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Textura:</strong> {item.texture}
                    </p>
                    <button className="mt-4 w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition">
                      AÑADIR AL PEDIDO
                    </button>
                  </div>
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
    </div>
  );
}

export default Menu;
