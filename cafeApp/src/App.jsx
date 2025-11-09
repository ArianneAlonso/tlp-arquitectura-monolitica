import { useState } from "react";
import Nav from "./components/Layout/Nav";
import Inicio from "./components/Sections/inicio";
import Historia from "./components/Sections/historia";
import Horarios from "./components/Sections/horarios";
import TipoMenu from "./components/Sections/tipoMenu";
import Footer from "./components/Layout/Footer";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Nav />
      <Inicio
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />
      <TipoMenu/>
      <Historia />
      <Horarios />
      <Footer />

      <Login
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onOpenRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />

      <Register
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onOpenLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />
    </>
  );
}

export default App;
