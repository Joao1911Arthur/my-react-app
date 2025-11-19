import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavHeader from './components/molecule/navHeader.jsx';
import Home2 from './components/aulas/aula7/Home2.jsx';
import About from './components/aulas/aula6/About.jsx';
import Produto from './components/organism/produto.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <NavHeader />
            <Routes>
                <Route path="/" element={<Home2 />} />
                <Route path="/home" element={<Home2 />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/:id" element={<About />} />
                <Route path="/produto/:id" element={<Produto />} />

            </Routes>
        </BrowserRouter>
    );
}
export default App;
