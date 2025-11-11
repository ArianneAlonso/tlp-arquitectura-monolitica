import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMugHot,
  faBookOpen,
  faClock,
  faMugSaucer,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] flex flex-col items-center z-50 rounded-3xl overflow-hidden backdrop-blur-md bg-[#5C3A1E]/70 shadow-lg shadow-black/30 border border-white/10 transition-all duration-500">
      {/* Contenedor superior: logo + botones */}
      <div className="flex items-center justify-between w-full px-6 py-3">
        {/* Logo y título */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <FontAwesomeIcon
            icon={faMugHot}
            className="text-3xl text-amber-400 group-hover:text-orange-300 transition-all duration-500 transform group-hover:rotate-12"
          />
          {/* Título con estilos diferenciados */}
          <h1 className="text-2xl sm:text-3xl font-extrabold drop-shadow-[0_0_10px_rgba(255,180,100,0.5)]">
            {/* Byte - moderno y brillante */}
            <span className="text-orange-400 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-300 to-amber-300 font-extrabold">
              Byte
            </span>{" "}
            {/* Coffee - elegante, cursiva y suave */}
            <span className="text-amber-200 font-serif italic bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300">
              Coffee
            </span>
          </h1>
        </div>

        {/* Botones animados con hover expandible (como antes) */}
        <ul className="flex space-x-4">
          {[
            { id: "inicio", icon: faHouse, label: "Inicio" },
            { id: "tipoMenu", icon: faMugHot, label: "Tipo de Menú" },
            { id: "historia", icon: faBookOpen, label: "Historia" },
            { id: "horarios", icon: faClock, label: "Horarios" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="group flex items-center overflow-hidden bg-transparent hover:bg-white hover:text-[#5C3A1E] transition-all duration-300 px-2 py-2 rounded-full w-10 hover:w-40 font-bold"
              >
                <FontAwesomeIcon icon={item.icon} className="text-xl" />
                <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Línea decorativa inferior */}
      <div className="h-[3px] w-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 shadow-[0_0_15px_rgba(255,180,90,0.6)] animate-pulse"></div>
    </nav>
  );
};

export default Nav;
