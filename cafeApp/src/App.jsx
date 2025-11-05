import { useState } from 'react'
import Nav from './components/Layout/Nav'

function App() {
  return (
    <>
      <Nav />

      {/* SECTION: INICIO */}
      <section
        id="inicio"
        className="min-h-screen flex flex-col items-center justify-center bg-amber-50 text-center px-6"
      >
        <h1 className="text-5xl font-bold mb-4 text-amber-900">Bienvenido a Nuestra Cafetería</h1>
        <p className="text-lg max-w-2xl text-amber-800">
          Un rincón donde el aroma del café se mezcla con momentos inolvidables.  
          Disfrutá cada sorbo, cada charla y cada sonrisa ☕.
        </p>
      </section>

      {/* SECTION: TIPO DE MENÚ */}
      <section
        id="tipoMenu"
        className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6"
      >
        <h2 className="text-4xl font-semibold mb-6 text-amber-900">Tipos de Menú</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
          <div className="bg-amber-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-2">Desayunos</h3>
            <p className="text-amber-800">Cafés, medialunas, tostadas y más para arrancar el día con energía.</p>
          </div>
          <div className="bg-amber-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-2">Meriendas</h3>
            <p className="text-amber-800">Tartas, licuados, y combos especiales para compartir con amigos.</p>
          </div>
          <div className="bg-amber-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-2">Especialidades</h3>
            <p className="text-amber-800">Platos artesanales con ingredientes frescos y locales.</p>
          </div>
        </div>
      </section>

      {/* SECTION: HISTORIA */}
      <section
        id="historia"
        className="min-h-screen flex flex-col items-center justify-center bg-amber-50 text-center px-6"
      >
        <h2 className="text-4xl font-semibold mb-6 text-amber-900">Nuestra Historia</h2>
        <p className="max-w-2xl text-amber-800 text-lg leading-relaxed">
          Nacimos en el corazón de la ciudad con un sueño simple: crear un espacio donde cada taza de café 
          cuente una historia.  
          A lo largo de los años, crecimos gracias a vos, manteniendo siempre el sabor y la calidez que nos distinguen.
        </p>
      </section>

      {/* SECTION: HORARIOS */}
      <section
        id="horarios"
        className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6"
      >
        <h2 className="text-4xl font-semibold mb-6 text-amber-900">Horarios</h2>
        <div className="bg-amber-100 p-6 rounded-2xl shadow-md max-w-md">
          <p className="text-lg text-amber-800 mb-2">🕗 Lunes a Viernes: 8:00 - 20:00</p>
          <p className="text-lg text-amber-800 mb-2">☕ Sábados: 9:00 - 18:00</p>
          <p className="text-lg text-amber-800">🚪 Domingos: Cerrado</p>
        </div>
      </section>
    </>
  )
}

export default App
