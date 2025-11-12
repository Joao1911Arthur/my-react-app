import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        width="10"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqwFs2ve2AngzuA5EpqcxGC3BoHdxTbR_CrABrBFhpvbeqmmCrTkdrPNEVfhYPlBzyIo&usqp=CAU"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" style={{display: "flex", alignSelf: 'center'}}>Neh</Button>
      </CardActions>
    </Card>
  );
}