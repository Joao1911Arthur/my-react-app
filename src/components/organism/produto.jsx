import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';




function Produto() {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get('https://node-vercel-app-rho.vercel.app/api/funcionarios')
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    const produto = data?.find((item) => item._id === id.substring(1));

    if (!data) return <p>Carregando...</p>;
    if (!produto) return <p>Produto não encontrado.</p>;

    return (
        <div>
            <img src={produto.foto} alt="" />
            <h1>Nome: {produto.nome}</h1>
            <p>Data de Nascimento: {produto.dtNascimento}</p>
            <p>Cargo: {produto.cargo}</p>
        </div>
    )

}

export default Produto;