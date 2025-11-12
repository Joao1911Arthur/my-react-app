import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavHeader from './components/molecule/navHeader.jsx';
import Home from './components/aulas/aula6/Home.jsx';
import About from './components/aulas/aula6/About.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <NavHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/:id" element={<About />} />

            </Routes>
        </BrowserRouter>
    );
}
export default App;
