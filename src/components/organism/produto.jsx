import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Carousel from '../atom/carosel.jsx';
import DropDown from '../atom/dropdown.jsx';
import { text } from 'framer-motion/client';




function Produto() {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get('https://node-vercel-app-rho.vercel.app/api/produtos')
            .then((response) => setData(response.data.produtos))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    const produto = data?.find((item) => item._id === id.substring(1));

    if (!data) return <p>Carregando...</p>;
    if (!produto) return <p>Produto não encontrado.</p>;
    console.log(produto);

    const image = [
        "https://drogariamedfacil.com.br/BACKOFFICE/Uploads/Produto/Normal/7898593050488.jpg",
        "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/ndm/ndm02718/y/8.jpg",
        "https://www.maxinutri.com.br/wp/wp-content/uploads/2016/09/VITAMINA-B12-LINHA-VERDE-3D.png"
    ];

    const grandeDivStyle = {
        shadowradius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        borderRadius: '10px',
        border: '1px solid #000000ff',
        width: "900px",
        height: "300px"
    };

    const textoEstilo = {
        fontSize: '16px',
        color: '#333',
        textAlign: 'left',
    };

    const tituloEStilo = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#222',
        marginBottom: '10px',
        textAlign: 'left',
    };

    return (


        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>

            <div>
                <Carousel images={image} />
            </div>

            <div>

                <div>
                    <h2 style={tituloEStilo}>{produto.nome}</h2>
                </div>
                <div>
                    <h2 style={tituloEStilo}>Marca: {produto.marca}</h2>
                </div>

                <div>
                    <h3 style={textoEstilo}>{produto.descricao}</h3>
                </div>

                <div>
                    <h3 style={textoEstilo}>
                        Um pré-treino insano é um tipo de suplemento formulado para proporcionar
                        um nível extremo de energia, foco e desempenho durante os treinos mais
                        intensos. Ele é projetado para atletas e praticantes que buscam aquele
                        “estímulo a mais” quando a rotina de exercícios exige maior explosão,
                        resistência e concentração.
                    </h3>
                </div>
                

                <div>
                    <DropDown/>
                </div>

                <br />
                <br />

                <div style={grandeDivStyle}>
                    
                </div>

            </div>

            {/* 
            <p>Categoria: {produto.categoria}</p>
            <p>Subcategoria: {produto.subcategoria}</p>
            <p>descricao: {produto.descricao}</p>
            <p>preco: {produto.preco.valor}</p>
            <p>estoque: {produto.estoque.quantidade}</p>

            <ul>
                <h2>Caracteristicas:</h2>
                <li><p>peso_liquido: {produto.caracteristicas.peso_liquido}</p></li>
                <li><p>sabor: {produto.caracteristicas.sabor}</p></li>
                <li><p>composicao: {produto.caracteristicas.composicao}</p></li>
            </ul>

            <p>Subcategoria: {produto.subcategoria}</p>
            <p>Subcategoria: {produto.subcategoria}</p>
            <p>Subcategoria: {produto.subcategoria}</p>
            <p>Subcategoria: {produto.subcategoria}</p> */}
        </div>
    )

}

export default Produto;