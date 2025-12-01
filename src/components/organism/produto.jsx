import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Carousel from '../atom/carosel.jsx';
import DropDown from '../atom/dropdown.jsx';
import Contador from '../atom/contador.jsx';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';





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
        borderRadius: '10px',
        border: '1px solid #000000ff',
        width: "539px",
        height: "300px"

    };

    const textoEstilo = {
        fontSize: '16px',
        color: '#333',
        textAlign: 'left',
        width: "539px"
    };

    const tituloEStilo = {
        fontSize: '38px',
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'left',
        marginTop: '0px'
    };

    return (


        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>

            <div style={{ width: "644px", height: "771px" }}>

                {/* <Carousel images={image} /> */}

                <img src="/src/assets/Frame17.jpg" alt="" />
            </div>

            <div style={{ width: "644px", height: "945px", marginLeft: "50px" }}>

                <div>
                    <h2 style={tituloEStilo}>{produto.nome} <br /> Marca: {produto.marca}</h2>
                </div>


                <div>
                    <h3 style={textoEstilo}>{produto.descricao}</h3>
                </div>

                <div>
                    <p style={textoEstilo}>
                        Um pré-treino insano é um tipo de suplemento formulado para proporcionar
                        um nível extremo de energia, foco e desempenho durante os treinos mais
                        intensos. Ele é projetado para atletas e praticantes que buscam aquele
                        “estímulo a mais” quando a rotina de exercícios exige maior explosão,
                        resistência e concentração.
                    </p>
                </div>


                <div style={{ width: "539px" }}>
                    <DropDown nome={"Sabor"} conteudo={"Sem sabor"} />
                </div>

                <br />
                <br />

                <div style={grandeDivStyle}>

                    <div style={{ display: "flex", flex: "row", justifyContent: "space-between", padding: "16px", border: "1px solid #000000ff", borderRadius: "9px 9px 0px 0px" }}>
                        <div>
                            <input type="radio" name='subscribe' id='subscribe1' />
                            <label htmlFor="subscribe1">Compra única</label>
                        </div>
                        <div>
                            R${produto.preco.valor}
                        </div>
                    </div>

                    <div style={{ display: "flex", flex: "row", justifyContent: "space-between", padding: "16px" }}>
                        <div>
                            <input type="radio" name='subscribe' id='subscribe2' />
                            <label htmlFor="subscribe2">Inscrever-se e salvar</label>
                        </div>
                        <div>
                            R${parseInt(produto.preco.valor / 1.5)}
                        </div>
                    </div>

                    <div style={{ width: "507px", margin: "auto" }}>
                        <DropDown nome={"delivery"} conteudo={"A cada 1 mês"} />
                    </div>

                    <div style={{textAlign:"left"}}>
                        <ul>
                            <li>
                                Free to pause or cancel anytime
                            </li>
                            <li>
                                Save with every recurring delivery
                            </li>
                            <li>
                                Access to exclusive flavors
                            </li>
                        </ul>
                    </div>

                </div>

                <br />

                <div style={{display:"flex", justifyContent:"space-between", width:"539px", alignItems:"center"}}>
                    <div>
                        <Contador />
                    </div>

                    <div>
                        <Button variant="contained" color="success" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"411px", borderRadius:"600px", padding:"10px"}}>
                            <div style={{fontSize:"14px"}}>Adicionar ao carrinho</div>
                            <ArrowForwardIosIcon/>
                        </Button>
                    </div>
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