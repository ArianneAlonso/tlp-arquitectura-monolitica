import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMugHot } from "@fortawesome/free-solid-svg-icons";

const Horarios = () => {
  return (
    <section
      id="horarios"
      className="min-h-screen flex flex-col items-center justify-center bg-amber-100 text-amber-950 px-6 relative overflow-hidden"
    >
      {/* Fondo decorativo suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-200/60 to-transparent pointer-events-none"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-2xl">
        <div className="flex flex-col items-center mb-6">
          <FontAwesomeIcon
            icon={faMugHot}
            className="text-5xl text-amber-700 animate-bounce"
          />
          <h2 className="text-5xl font-extrabold mt-4 mb-2 text-amber-900 tracking-wide">
            Horarios
          </h2>
          <p className="text-amber-700 text-lg">
            Disfrutá de tu café favorito cuando más lo necesites.
          </p>
        </div>

        {/* Tarjeta de horarios */}
        <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-amber-300">
          <ul className="space-y-4 text-lg">
            <li className="flex items-center justify-between">
              <span className="text-amber-800 font-medium">Lunes a Viernes</span>
              <span className="font-semibold text-amber-700">
                8:00 - 20:00
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-amber-800 font-medium">Sábados</span>
              <span className="font-semibold text-amber-700">
                9:00 - 18:00
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-amber-800 font-medium">Domingos</span>
              <span className="font-semibold text-red-500">Cerrado</span>
            </li>
          </ul>
        </div>

        {/* Pie de sección */}
        <div className="mt-10 text-sm text-amber-700 italic">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          “Cada momento tiene su aroma.”
        </div>
      </div>
    </section>
  );
};

export default Horarios;
