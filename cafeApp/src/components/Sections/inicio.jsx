import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Inicio = ({ onLoginClick, onRegisterClick }) => {
  return (
    <section
      id="inicio"
      className="h-screen bg-cover bg-center relative flex items-center text-violet-950 justify-start px-12"
    >
      {/* Imagen de fondo */}
      <img
        src="top-view-cup-surrounded-by-coffee-beans.jpg"
        alt="Fondo de cafetería"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay semitransparente */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0"></div>

      {/* Contenido principal */}
      <div className="relative text-white max-w-4xl z-10 px-6 py-12">
        {/* Luces decorativas suaves */}
        <div className="absolute -top-24 -left-16 w-72 h-72 bg-amber-800/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-900/20 blur-3xl rounded-full"></div>

        {/* Encabezado */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl sm:text-7xl font-extrabold mb-6 flex items-center gap-5 tracking-tight"
        >
          {/* Taza animada */}
          <motion.span
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -5, 0],
              filter: [
                "drop-shadow(0 0 10px rgba(255,180,100,0.5))",
                "drop-shadow(0 0 20px rgba(255,200,120,0.8))",
                "drop-shadow(0 0 10px rgba(255,180,100,0.5))",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FontAwesomeIcon
              icon={faMugHot}
              className="text-orange-300"
              size="lg"
            />
          </motion.span>

          {/* Título con degradado suave */}
          <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400 bg-clip-text text-transparent drop-shadow-md">
            Café Aromas
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl font-semibold text-orange-100 mb-4 italic"
        >
          “Donde el sabor se encuentra con la seguridad”
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-100 leading-relaxed max-w-3xl backdrop-blur-sm px-2 sm:px-0"
        >
          En <span className="text-orange-200 font-semibold">Café Aromas</span> fusionamos el placer del buen café con la precisión tecnológica.
          La ciberseguridad protege tus sistemas, redes y datos frente a accesos no autorizados o daños.
          Nuestro objetivo: garantizar la{" "}
          <span className="text-orange-300 font-semibold">confidencialidad</span>, la{" "}
          <span className="text-orange-200 font-semibold">integridad</span> y la{" "}
          <span className="text-orange-400 font-semibold">disponibilidad</span> de la información digital.
        </motion.p>

        {/* Línea decorativa */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "33%" }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 h-[2px] bg-gradient-to-r from-orange-400 to-amber-500 rounded-full shadow-[0_0_15px_rgba(255,180,100,0.3)]"
        ></motion.div>

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-10 flex gap-6"
        >
          <button
            onClick={onLoginClick}
            className="px-6 py-3 rounded-full border-2 border-orange-400 text-orange-100 font-semibold text-lg hover:bg-orange-400/20 hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            Iniciar sesión
          </button>

          <button
            onClick={onRegisterClick}
            className="px-6 py-3 rounded-full bg-orange-400 text-white font-semibold text-lg hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Registrarse
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Inicio;
