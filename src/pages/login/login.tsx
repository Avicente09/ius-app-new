import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import DeliveryDiningTwoToneIcon from '@mui/icons-material/DeliveryDiningTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import FacebookLogin, {
  ProfileSuccessResponse,
} from '@greatsumini/react-facebook-login';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import jwt from 'jwt-decode';
import { useAuth } from '../../hooks';

const fbAppId: string = process.env.REACT_APP_FB_ID || '';

export const Login = () => {
  const { login, user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !isLoading) {
      navigate('/home');
    }
  }, [user, isLoading, navigate]);

  const handleNoticeClick = () => {
    //Logic to show privacy text modal
  };
  const handleFBLogin = (response: ProfileSuccessResponse) => {
    login({
      id: response.id,
      name: response.name,
      email: response.email,
    });
  };
  const handleGoogleLogin = (response: CredentialResponse) => {
    if (response.credential) {
      const decodedToken: { name?: string; email?: string } = jwt(
        response.credential
      );
      login({
        id: response.clientId,
        name: decodedToken.name,
        email: decodedToken.email,
      });
    } else {
        // TODO: Show msg that something went wrong on a modal component
    }
  };

  return (
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
        <DeliveryDiningTwoToneIcon fontSize="large" />
        <Box justifyContent="center" mt="20px">
          <Typography variant="h4">Bienvenido a iUS</Typography>
        </Box>
        <Box component="form" noValidate>
          <FacebookLogin
            appId={fbAppId}
            onProfileSuccess={response => handleFBLogin(response)}
            render={() => (
              <Button
                startIcon={<FacebookIcon />}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ textTransform: 'none' }}
                onClick={handleFBLogin}
              >
                Acceder con Facebook
              </Button>
            )}
          />
          <GoogleLogin
            locale="es-gt"
            theme="filled_blue"
            width="400"
            text="signin_with"
            logo_alignment="center"
            onSuccess={handleGoogleLogin}
          />
          <Box justifyContent="center" mt="20px">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Mantenerme registrado"
            />
          </Box>
          <Box justifyContent="center" mt="20px">
            <Link onClick={handleNoticeClick} variant="button">
              Aviso Importante
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
