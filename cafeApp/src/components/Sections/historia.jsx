// 📂 src/components/Sections/Historia.jsx
import React from "react";
import { motion } from "framer-motion";

const Historia = () => {
  return (
    <section
      id="historia"
      className="relative h-screen bg-cover bg-center flex items-center justify-end px-12"
      style={{
        backgroundImage: "url('/WhatsApp Image 2025-11-05 at 15.18.18.jpeg')", // ☕ tu imagen de fondo
      }}
    >
      {/* Luz cálida decorativa */}
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-amber-300/20 blur-3xl rounded-full"></div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-2xl z-10 text-right space-y-6 text-amber-50 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
      >
        <h2 className="text-5xl sm:text-6xl font-serif font-bold text-amber-100 tracking-tight">
          Nuestra Historia
        </h2>

        <p className="text-lg sm:text-xl leading-relaxed font-light text-amber-50/90 bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10 shadow-lg shadow-amber-900/10 transition-transform duration-700 hover:scale-[1.02]">
          Nacimos en el corazón de la ciudad con un sueño simple: crear un espacio donde cada taza de café
          cuente una historia.  
          A lo largo de los años, crecimos gracias a vos, manteniendo siempre el sabor, el aroma y la calidez
          que nos distinguen.
        </p>

        <p className="text-base sm:text-lg italic text-amber-100/80">
          “Cada sorbo es un recuerdo, cada aroma una historia que sigue viva.”
        </p>
      </motion.div>
    </section>
  );
};

export default Historia;
