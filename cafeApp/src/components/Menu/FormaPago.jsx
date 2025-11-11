import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaCreditCard } from "react-icons/fa";

function FormaPago({ cart, total, onBack }) {
  const [paymentMethod, setPaymentMethod] = useState("efectivo");
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    exp: "",
    cvv: "",
  });

  const handlePayment = () => {
    alert("Pago realizado con éxito 💳 ¡Gracias por tu compra!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50 px-6 py-12 relative overflow-hidden">
      {/* Sombras decorativas suaves */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-amber-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl -z-10"></div>

      {/* Contenedor principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/80 backdrop-blur-lg border border-amber-200 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] p-8"
      >
        {/* Título */}
        <h1 className="text-3xl font-extrabold text-amber-900 text-center mb-8">
          Forma de Pago
        </h1>

        {/* Total */}
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-2xl shadow-md p-5 text-center mb-8">
          <p className="text-lg font-medium">Total a pagar</p>
          <p className="text-4xl font-bold mt-2">
            ${total.toLocaleString("es-AR")}
          </p>
        </div>

        {/* Método de pago */}
        <div className="mb-6">
          <p className="font-semibold text-amber-800 mb-3 text-center">
            Seleccioná tu método de pago
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setPaymentMethod("efectivo")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-200 ${
                paymentMethod === "efectivo"
                  ? "bg-amber-500 text-white shadow-md"
                  : "bg-white border border-amber-300 text-amber-700 hover:bg-amber-50"
              }`}
            >
              <FaMoneyBillWave className="text-lg" /> Efectivo
            </button>
            <button
              onClick={() => setPaymentMethod("tarjeta")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-200 ${
                paymentMethod === "tarjeta"
                  ? "bg-amber-500 text-white shadow-md"
                  : "bg-white border border-amber-300 text-amber-700 hover:bg-amber-50"
              }`}
            >
              <FaCreditCard className="text-lg" /> Tarjeta
            </button>
          </div>
        </div>

        {/* Datos de tarjeta */}
        {paymentMethod === "tarjeta" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Número de tarjeta"
              value={cardInfo.number}
              onChange={(e) =>
                setCardInfo({ ...cardInfo, number: e.target.value })
              }
              className="w-full p-3 rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400 shadow-sm"
            />
            <input
              type="text"
              placeholder="Nombre en la tarjeta"
              value={cardInfo.name}
              onChange={(e) =>
                setCardInfo({ ...cardInfo, name: e.target.value })
              }
              className="w-full p-2 rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400 shadow-sm"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MM/AA"
                value={cardInfo.exp}
                onChange={(e) =>
                  setCardInfo({ ...cardInfo, exp: e.target.value })
                }
                className="flex-1 p-1 rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400 shadow-sm"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cardInfo.cvv}
                onChange={(e) =>
                  setCardInfo({ ...cardInfo, cvv: e.target.value })
                }
                className="flex-1 p-1 rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400 shadow-sm"
              />
            </div>
          </motion.div>
        )}

        {/* Botones */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={onBack}
            className="flex-1 py-3 bg-white border border-amber-300 text-amber-700 font-semibold rounded-xl hover:bg-amber-100 transition-all duration-200"
          >
            ← Volver
          </button>
          <button
            onClick={handlePayment}
            className="flex-1 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200"
          >
            Confirmar Pago
          </button>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-8 text-amber-700 text-sm italic">
        “Gracias por elegirnos ☕ Tu momento perfecto comienza aquí.”
      </footer>
    </div>
  );
}

export default FormaPago;
