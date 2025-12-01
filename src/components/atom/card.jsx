import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function MediaCard({ id, img, nome, valor }) {
    const navigate = useNavigate();

    const centralizar = {
        margin: '0 auto',
        width: '260px'
    }

    return (
        <Card sx={{ maxWidth: 345, maxHeight: 400, minHeight: 400, boxShadow: 3 }}>
            <CardMedia>
                <img src="/src/assets/produto1.png" alt="" style={{ height: "200px" }} />
            </CardMedia>
            <div style={{textAlign: 'left', paddingLeft: '10px'}}>
                <h3>{nome}</h3>
                <h4>R${valor}</h4>
            </div>
            <CardActions >
                <Button size="large" style={centralizar} variant="contained" color="success" onClick={() => navigate(`/produto/:${id}`)}>Comprar</Button>
            </CardActions>
        </Card>
    );
}