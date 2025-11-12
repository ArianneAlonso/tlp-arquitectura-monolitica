import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // 🔸 Función para hacer scroll suave
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-amber-900 text-amber-100 py-12 px-8 relative overflow-hidden">
      {/* Efecto de luz suave */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-800/40 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Columna 1 - Logo */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-3 text-2xl font-bold">
            <FontAwesomeIcon
              icon={faMugHot}
              className="text-amber-400 animate-pulse"
            />
            {/* Título con estilos diferenciados */}
            <h1 className="text-xl sm:text-2xl font-extrabold drop-shadow-[0_0_10px_rgba(255,180,100,0.5)]">
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
          <p className="text-sm text-amber-200 max-w-xs">
            Un espacio donde cada taza cuenta una historia y cada aroma despierta una sonrisa.
          </p>
        </div>

        {/* Columna 2 - Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold text-amber-300 mb-3">Explorar</h3>
          <ul className="space-y-2">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "tipoMenu", label: "Tipo de Menú" },
              { id: "historia", label: "Nuestra Historia" },
              { id: "horarios", label: "Horarios" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="hover:text-amber-400 transition-colors duration-300 bg-transparent"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 - Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-amber-300 mb-3">Contacto</h3>
          <p className="text-sm text-amber-200 mb-4">
            📍 Av. 25 de Mayo 717, P3600 Formosa
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="#"
              className="hover:text-amber-400 transition-transform transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-transform transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="mailto:info@cafearomas.com"
              className="hover:text-amber-400 transition-transform transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-amber-700/50 pt-4 text-center text-sm text-amber-300/80">
        © {new Date().getFullYear()} Byte Coffee — Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
