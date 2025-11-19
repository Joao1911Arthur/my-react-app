import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from '../atom/card.jsx';


const Home = () => {
  const [data, setData] = useState(null);
    useEffect(() => {
    axios.get('https://node-vercel-app-rho.vercel.app/api/funcionarios')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  { console.log(data)}

  return (
    <div className={'home'}>
      <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={2} >
          {data?.map((funcionario, index) => (
            <Grid size={5}  key={index}>
              <MediaCard id={funcionario._id} nome={funcionario.nome} img={funcionario.foto} data={funcionario.dtNascimento} cargo={funcionario.cargo}  />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default Home;