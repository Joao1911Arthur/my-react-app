import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';




function Produto() {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('https://node-vercel-app-rho.vercel.app/api/funcionarios')
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const { id } = useParams();

    const produto = data?.filter((item) => item._id == id);

    console.log(id);

    return (
        <div>
            
        </div>
    );
}

export default Produto;