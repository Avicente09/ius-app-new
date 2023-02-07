import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel'; 
import Checkbox from '@mui/material/Checkbox'; 
import Link from '@mui/material/Link'; 
import Box from '@mui/material/Box'; 
import Container from '@mui/material/Container'; 
import Typography from '@mui/material/Typography';
import DeliveryDiningTwoToneIcon from '@mui/icons-material/DeliveryDiningTwoTone';
import FacebookLogin, { ProfileSuccessResponse } from '@greatsumini/react-facebook-login'; 
import { useAuth } from '../../hooks';

const fbAppId : string = process.env.REACT_APP_FB_ID || '';

export const Login = () => {
    const { login, logout, user, isLoading } = useAuth(); 
    const navigate = useNavigate();

    useEffect(() => {
        if (user && !isLoading) {
            navigate("/home");
        }
      }, [user, isLoading, navigate]);

    const handleNoticeClick = () => {
        //Logic to show privacy text modal
    }
    const handleFBLogin = (response : ProfileSuccessResponse) => {
        login({
            id: response.id,
            name: response.name,
            email: response.email
          });
    }
    const handleGoogleLogin = () => logout();

    return(      
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <DeliveryDiningTwoToneIcon fontSize='large'/>
                <Box justifyContent="center" mt="20px">                   
                    <Typography variant="h4">Bienvenido a iUS</Typography>
                </Box>
                <Box component="form" noValidate>
                    <FacebookLogin
                    appId={fbAppId}
                    onProfileSuccess={ (response) => handleFBLogin(response)}
                    render={({ onClick, logout }) => (
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleFBLogin}
                        >
                        Iniciar Sesión con Facebook
                        </Button>
                      )}
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleGoogleLogin}
                    >
                    Iniciar Sesión con Google
                    </Button>
                    <Box justifyContent="center" mt="20px">                   
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Mantenerme registrado" />
                    </Box>
                    <Box justifyContent="center" mt="20px">                   
                        <Link onClick={handleNoticeClick} variant="button">
                            Aviso Importante
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
