import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PaginaInicial from "./components/pages/PaginaInicial";
import CadastroAgendamento from "./components/pages/agendamento/CadastroAgendamento";
import Navbar from "./components/layout/header/Header";
import Perfil from "./components/pages/Perfil/Perfil";

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<PaginaInicial/>}/>
        <Route path="/agendamento" element={<CadastroAgendamento/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
      </Routes>
    </Router>
  )
}

export default App
