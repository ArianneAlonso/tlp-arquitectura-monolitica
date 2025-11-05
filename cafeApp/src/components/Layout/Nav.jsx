import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMugHot, faBookOpen, faClock } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-amber-900/75 border border-white/10 backdrop-blur-md text-white shadow-md shadow-amber-900 z-50 rounded-b-3xl transition-all duration-500">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <span className="text-2xl font-bold tracking-wide transition-all duration-500 transform group-hover:translate-x-1 group-hover:text-amber-300">
            Café Aromas
          </span>
        </div>

        {/* Menú */}
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
                className="group flex items-center overflow-hidden bg-transparent hover:bg-white hover:text-amber-900 transition-all duration-300 px-2 py-2 rounded-full w-10 hover:w-40 font-bold"
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
    </nav>
  );
};

export default Nav ;
