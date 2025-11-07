import React from "react";

const Register = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full relative">
        <h2 className="text-2xl font-bold text-amber-900 mb-5 text-center">
          Crear Cuenta
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="border border-amber-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border border-amber-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border border-amber-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <button
            type="submit"
            className="bg-amber-800 text-white py-2 rounded-lg hover:bg-amber-700 transition"
          >
            Registrarse
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-amber-600 hover:text-amber-800 text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Register;
