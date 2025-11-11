// src/components/TipoMenu.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ModalMenu from "../Menu/modalMenu";

const TipoMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTipo, setSelectedTipo] = useState(null);

  useEffect(() => {
    console.log("✅ Componente TipoMenu montado");
  }, []);

  const tipos = [
    {
      titulo: "Cafés",
      descripcion:
        "Espresso, capuccino, latte, mocaccino y más variedades para los amantes del café.",
      imagen: "/cafe.png",
    },
    {
      titulo: "Postres",
      descripcion:
        "Tartas, brownies, tortas caseras y dulces que hacen feliz cualquier día.",
      imagen: "/dulce.png",
    },
    {
      titulo: "Salados",
      descripcion:
        "Sandwiches, empanadas y tartas gourmet para un almuerzo o merienda completa.",
      imagen: "/salado.png",
    },
  ];

  const abrirModal = (tipo) => {
    setSelectedTipo(tipo);
    setIsModalOpen(true);
  };

  return (
    <section
      id="tipoMenu"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100 py-20 px-6"
    >
      
      <h2 className="text-4xl font-bold text-amber-900 mb-25 tracking-wide drop-shadow-sm">
        Tipos de Menú
      </h2>
      
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl w-full">
        {tipos.map((tipo, index) => (
          <motion.div
            key={index}
            onClick={() => abrirModal(tipo)}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative bg-gradient-to-b from-amber-800 to-amber-900 rounded-3xl shadow-lg hover:shadow-[0_0_25px_rgba(255,193,100,0.5)] transition-all duration-300 p-6 pt-20 cursor-pointer flex flex-col items-center text-center border border-amber-700/60"
          >
            {/* Imagen posando */}
            <div className="absolute -top-16">
              <div className="relative">
                <img
                  src={tipo.imagen}
                  alt={tipo.titulo}
                  className="w-40 h-40 object-cover rounded-full border-4 border-amber-100 shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105"
                />
                {/* Luz suave detrás */}
                <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-lg -z-10 scale-110"></div>
              </div>
            </div>

            {/* Contenido */}
            <h3 className="text-2xl font-bold text-amber-50 mt-6 mb-2">
              {tipo.titulo}
            </h3>
            <p className="text-amber-200/90 text-sm max-w-xs leading-relaxed">
              {tipo.descripcion}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <ModalMenu
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tipo={selectedTipo}
      />
    </section>
  );
};

export default TipoMenu;
