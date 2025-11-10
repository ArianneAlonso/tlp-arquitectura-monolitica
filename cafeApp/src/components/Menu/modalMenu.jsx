// src/components/ModalMenu.jsx
import React from "react";
import Menu from "./menu"; // importa tu componente Menu

const ModalMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Maneja el clic fuera del contenedor del modal
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
    >
      <div
        className="bg-amber-50 rounded-2xl shadow-2xl max-w-7xl w-full h-[95vh] relative overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro
      >

        {/* Contenido del modal */}
        <Menu />
      </div>
    </div>
  );
};

export default ModalMenu;
