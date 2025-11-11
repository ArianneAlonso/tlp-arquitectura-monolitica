import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faMugHot } from "@fortawesome/free-solid-svg-icons";

const Register = ({ isOpen, onClose, onOpenLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registro exitoso. Ahora podés iniciar sesión.");
        onClose();
        onOpenLogin();
      } else {
        alert(data.message || "Error al registrarse");
      }
    } catch {
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-amber-50 to-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-amber-700 hover:text-amber-900 text-2xl font-bold">✕</button>

        <div className="flex flex-col items-center mb-6">
          <FontAwesomeIcon icon={faMugHot} className="text-5xl text-amber-800 mb-2" />
          <h2 className="text-3xl font-extrabold text-amber-900">Crear Cuenta</h2>
          <p className="text-sm text-amber-700">Sumate a nuestra comunidad cafetera</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <div className="flex items-center border border-amber-300 rounded-lg px-3 py-2">
            <FontAwesomeIcon icon={faUser} className="text-amber-700 mr-2" />
            <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-transparent outline-none text-amber-900 placeholder-amber-400"
            />
          </div>

          <div className="flex items-center border border-amber-300 rounded-lg px-3 py-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-amber-700 mr-2" />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent outline-none text-amber-900 placeholder-amber-400"
            />
          </div>

          <div className="flex items-center border border-amber-300 rounded-lg px-3 py-2">
            <FontAwesomeIcon icon={faLock} className="text-amber-700 mr-2" />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-transparent outline-none text-amber-900 placeholder-amber-400"
            />
          </div>

          <button type="submit" className="mt-2 bg-gradient-to-r from-amber-800 to-amber-700 text-white py-2 rounded-xl font-semibold hover:from-amber-700 hover:to-amber-600 transition">
            Registrarse
          </button>
        </form>

        <p className="text-center text-sm text-amber-700 mt-5">
          ¿Ya tenés cuenta?{" "}
          <span
            className="text-amber-900 font-semibold cursor-pointer hover:underline"
            onClick={() => {
              onClose();
              onOpenLogin();
            }}
          >
            Iniciá sesión
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;