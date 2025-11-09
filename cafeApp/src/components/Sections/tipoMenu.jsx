// src/components/TipoMenu.jsx
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faIceCream,
  faBreadSlice,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import ModalMenu from "../Menu/modalMenu"; // 👈 Importamos el modal

const TipoMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTipo, setSelectedTipo] = useState(null); // para saber qué tarjeta se abrió

  useEffect(() => {
    console.log("✅ El componente TipoMenu se montó correctamente");
  }, []);

  const tipos = [
    {
      titulo: "Bebidas",
      descripcion:
        "Cafés, licuados, jugos naturales, infusiones frías y calientes.",
      icono: faMugHot,
    },
    {
      titulo: "Postres",
      descripcion:
        "Tartas, brownies, tortas caseras y opciones dulces para acompañar tu café.",
      icono: faIceCream,
    },
    {
      titulo: "Panadería",
      descripcion:
        "Medialunas, facturas, panes artesanales y productos recién horneados.",
      icono: faBreadSlice,
    },
    {
      titulo: "Salados",
      descripcion:
        "Sandwiches, empanadas, tartas saladas y opciones gourmet para disfrutar.",
      icono: faUtensils,
    },
  ];

  const abrirModal = (tipo) => {
    setSelectedTipo(tipo);
    setIsModalOpen(true);
  };

  return (
    <section
      id="tipoMenu"
      className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6"
    >
      <h2 className="text-4xl font-semibold mb-6 text-amber-900">
        Tipos de Menú
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        {tipos.map((tipo, index) => (
          <div
            key={index}
            onClick={() => abrirModal(tipo)} // 👈 abre el modal al hacer clic
            className="cursor-pointer bg-amber-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform flex flex-col items-center"
          >
            <FontAwesomeIcon
              icon={tipo.icono}
              className="text-amber-700 text-5xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-amber-900">
              {tipo.titulo}
            </h3>
            <p className="text-amber-800">{tipo.descripcion}</p>
          </div>
        ))}
      </div>

      {/* 👇 Modal que se abre al hacer clic */}
      <ModalMenu
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tipo={selectedTipo}
      />
    </section>
  );
};

export default TipoMenu;
