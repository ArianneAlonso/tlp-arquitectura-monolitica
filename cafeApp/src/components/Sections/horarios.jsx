// 📂 src/components/Sections/Horarios.jsx
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMugHot } from "@fortawesome/free-solid-svg-icons";

const Horarios = () => {
  return (
    <section
      id="horarios"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100 text-amber-950 px-6 overflow-hidden"
    >
      {/* ☀️ Fondo decorativo degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-200/50 via-transparent to-white/30"></div>

      {/* 🌤️ Resplandor ambiental */}
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-300/30 blur-3xl rounded-full"></div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* 🏷️ Encabezado */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <FontAwesomeIcon
              icon={faMugHot}
              className="text-6xl text-amber-700 drop-shadow-lg"
            />
          </motion.div>

          <h2 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-600 bg-clip-text text-transparent drop-shadow-md">
              Horarios
            </span>
          </h2>

          <p className="text-amber-700/90 text-lg mt-3 italic">
            Disfrutá de tu café favorito cuando más lo necesites.
          </p>
        </div>

        {/* 🕰️ Tarjeta de horarios */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-amber-300/40 hover:shadow-amber-400/30 transition-all duration-300"
        >
          <ul className="space-y-5 text-lg">
            <li className="flex items-center justify-between text-amber-900">
              <span className="font-semibold">Lunes a Viernes</span>
              <span className="font-bold text-amber-700">8:00 - 20:00</span>
            </li>
            <li className="flex items-center justify-between text-amber-900">
              <span className="font-semibold">Sábados</span>
              <span className="font-bold text-amber-700">9:00 - 18:00</span>
            </li>
            <li className="flex items-center justify-between text-amber-900">
              <span className="font-semibold">Domingos</span>
              <span className="font-semibold">Cerrado</span>
            </li>
          </ul>
        </motion.div>

        {/* ✨ Línea decorativa */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "33%" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mx-auto mt-10 h-[2px] bg-gradient-to-r from-orange-400 to-amber-500 rounded-full shadow-[0_0_15px_rgba(255,180,100,0.4)]"
        ></motion.div>

        {/* 🕒 Pie de sección */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-sm text-amber-800 italic flex items-center justify-center gap-2"
        >
          <FontAwesomeIcon icon={faClock} className="text-amber-600" />
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
            “Cada momento tiene su aroma.”
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Horarios;
