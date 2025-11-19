import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavHeader from './components/molecule/navHeader.jsx';
import Home from './components/organism/Home.jsx';
import About from './components/aulas/aula6/About.jsx';
import Produto from './components/organism/produto.jsx';
import FormularioMultiCampos from './components/aulas/aula10/formulario.jsx'
import Contact from './components/aulas/aula10/formulario2.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <NavHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/:id" element={<About />} />
                <Route path="/produto/:id" element={<Produto />} />
                <Route path='/formulario' element={<FormularioMultiCampos/>}/>
                <Route path='/formulario2' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
