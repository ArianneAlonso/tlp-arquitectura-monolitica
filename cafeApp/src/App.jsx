import { useState } from 'react'
import Nav from './components/Layout/Nav'
import Inicio from './components/Sections/inicio'
import Historia from './components/Sections/historia'
import Horarios from './components/Sections/horarios'
import Footer from './components/Layout/Footer'
import Login from './components/Auth/login'
import Register from './components/Auth/register'

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Nav />

      {/* SECTION: INICIO */}
      <Inicio
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

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
      <Historia />

      {/* SECTION: HORARIOS */}
      <Horarios />

      {/*Footer*/}
      <Footer />

      {/* MODALES */}
      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <Register isOpen={showRegister} onClose={() => setShowRegister(false)} />
    </>
  )
}

export default App
