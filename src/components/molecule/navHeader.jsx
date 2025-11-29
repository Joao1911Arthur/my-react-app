import { AppBar, Toolbar, Typography, Button, Box, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function NavHeader() {
    const navigate = useNavigate();

    return (
        <Box>
            <AppBar color='default' position="fixed">
                <Toolbar>
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                        <CardMedia
                            sx={{ height: 100 }}
                            image='/src/assets/LogoNaturalSupplements.png'
                            title="green iguana"
                            style={{width:"130px"}}
                        />
                    </Typography>

                    <Box>
                        <Button color="inherit" onClick={() => navigate("/home")}>Home</Button>
                        <Button color="inherit" onClick={() => navigate("/about")}>Sobre</Button>
                        <Button color="inherit" onClick={() => navigate("/contact")}>Contato</Button>
                        <Button color="inherit" onClick={() => navigate("/formulario")}>Formulario</Button>

                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavHeader;