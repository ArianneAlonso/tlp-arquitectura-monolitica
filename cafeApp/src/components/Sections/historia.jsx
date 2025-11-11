// 📂 src/components/Sections/Historia.jsx
import React from "react";
import { motion } from "framer-motion";

const Historia = () => {
  return (
    <section
      id="historia"
      className="relative h-screen bg-cover bg-center flex items-center justify-end px-12"
      style={{
        backgroundImage: "url('/WhatsApp Image 2025-11-05 at 15.18.18.jpeg')",
      }}
    >
      {/* 🌑 Degradado sutil para resaltar el texto */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent z-0"></div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-2xl z-10 text-right space-y-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
      >
        {/* 🟤 Título con degradado cálido */}
        <h2 className="text-5xl sm:text-6xl font-serif font-bold tracking-tight">
          Nuestra{" "}
          <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400 bg-clip-text text-transparent drop-shadow-md">
            Historia
          </span>
        </h2>

        <p className="text-lg sm:text-xl leading-relaxed font-light text-orange-100/95 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-amber-100/20 shadow-lg shadow-amber-900/10 transition-transform duration-700 hover:scale-[1.02]">
          Desde nuestros inicios, buscamos elevar el café a una experiencia de lujo accesible.
          Cada grano es cuidadosamente seleccionado, tostado y preparado para ofrecer una taza que combina aroma, sabor y elegancia.
          Crecimos gracias a la pasión de quienes valoran la excelencia en cada detalle y la dedicación detrás de cada sorbo.
        </p>

        <p className="text-base sm:text-lg italic bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400 bg-clip-text text-transparent drop-shadow-md">
          “Cada taza refleja nuestra dedicación; cada aroma despierta momentos inolvidables.”
        </p>


        {/* ✨ Línea decorativa igual que la del inicio */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "40%" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="ml-auto h-[2px] bg-gradient-to-r from-orange-400 to-amber-500 rounded-full shadow-[0_0_15px_rgba(255,180,100,0.3)]"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Historia;
