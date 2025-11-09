import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = ({ isOpen, onClose, onOpenRegister }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-amber-50 to-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-700 hover:text-amber-900 text-2xl font-bold"
        >
          ✕
        </button>

        <div className="flex flex-col items-center mb-6">
          <FontAwesomeIcon icon={faCoffee} className="text-5xl text-amber-800 mb-2" />
          <h2 className="text-3xl font-extrabold text-amber-900">Bienvenido</h2>
          <p className="text-sm text-amber-700">Iniciá sesión para disfrutar tu café</p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex items-center border border-amber-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-amber-400">
            <FontAwesomeIcon icon={faEnvelope} className="text-amber-700 mr-2" />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full bg-transparent outline-none text-amber-900 placeholder-amber-400"
            />
          </div>

          <div className="flex items-center border border-amber-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-amber-400">
            <FontAwesomeIcon icon={faLock} className="text-amber-700 mr-2" />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full bg-transparent outline-none text-amber-900 placeholder-amber-400"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-amber-800 to-amber-700 text-white py-2 rounded-xl font-semibold hover:from-amber-700 hover:to-amber-600 transition"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-amber-700 mt-5">
          ¿No tenés cuenta?{" "}
          <span
            className="text-amber-900 font-semibold cursor-pointer hover:underline"
            onClick={() => {
              onClose(); // cerrar login
              onOpenRegister(); // abrir register
            }}
          >
            Registrate
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
