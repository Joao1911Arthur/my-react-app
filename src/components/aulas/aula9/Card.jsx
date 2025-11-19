import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function MediaCard({ id, img, nome, data, cargo }) {
    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={img}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {nome}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <>Data de Nascimento:{data}</>
                    <br />
                    <>Cargo: {cargo}</>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => navigate(`/produto/:${id}`)}>Share</Button>
            </CardActions>
        </Card>
    );
}
