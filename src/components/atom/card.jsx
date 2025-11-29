import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function MediaCard({ id, img, nome, descricao, valor, marca }) {
    const navigate = useNavigate();

    const centralizar ={
        margin: '0 auto',
        width: '260px'
    }

    return (
        <Card sx={{ maxWidth: 345, maxHeight: 400, minHeight: 400, boxShadow: 3 }}>
            <CardMedia
                sx={{ height: 200 }}
                image='https://drogariamedfacil.com.br/BACKOFFICE/Uploads/Produto/Normal/7898593050488.jpg'
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ minHeight: 60 }}>
                    {nome}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <>Valor: {valor}</>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" style={centralizar} variant="contained" color="success" onClick={() => navigate(`/produto/:${id}`)}>Comprar</Button>
            </CardActions>
        </Card>
    );
}
