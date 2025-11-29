import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from '../atom/Card.jsx';
import BigCard from '../molecule/bigCard.jsx';


const Home2 = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('https://node-vercel-app-rho.vercel.app/api/produtos')
      .then((response) => setData(response.data.produtos))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  { console.log(data) }

  return (

    <div>

      <div>
        <BigCard />
      </div>

      <br />
      <br />
      <br />

      <div className={'home'}>
        <Box sx={{ flexGrow: 1 }} >
          <Grid container spacing={3} >
            {data?.map((data, index) => (
              <Grid size={4} key={index}>
                <MediaCard id={data._id} nome={data.nome} img={data.imagens.url} marca={data.marca} descricao={data.descricao} valor={data.preco.valor} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>

    </div>


  )
}

export default Home2;