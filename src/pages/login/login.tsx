import type { ProfileSuccessResponse } from '@greatsumini/react-facebook-login';
import FacebookLogin from '@greatsumini/react-facebook-login';
import DeliveryDiningTwoToneIcon from '@mui/icons-material/DeliveryDiningTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import type { CredentialResponse } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt from 'jwt-decode';
import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { InfoModal, ModalType } from '../../components/info-modal';
import { useAuth } from '../../hooks';
import type { LoginAction, LoginState } from './login.types';

const fbAppId: string = process.env.REACT_APP_FB_ID || '';
const loginReducer = (
  state: LoginState,
  action: Partial<LoginAction>
): LoginState => {
  switch (action.type) {
    case 'modalToggle':
      return { ...state, ...action } as LoginState;
    default:
      return { ...state } as LoginState;
  }
};

const initialState: LoginState = {
  toggleModal: false,
  modalTitle: '',
  modalMsg: '',
  modalType: ModalType.Info,
};

export const Login = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const handleCloseModal = () =>
    dispatch({ type: 'modalToggle', toggleModal: false });
  const { login, user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !isLoading) {
      navigate('/home');
    }
  }, [user, isLoading, navigate]);

  const handleNoticeClick = () => {
    //Logic to show privacy text modal
    dispatch({
      type: 'modalToggle',
      toggleModal: true,
      modalTitle: 'Aviso Importante para los Usuarios',
      modalMsg:
        'Lorem pisupasdsfi asdfpaosdifu dfsfñalsdj pdsifasdf pasdfoiasdfpou',
      modalType: ModalType.Info,
    });
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
      dispatch({
        type: 'modalToggle',
        toggleModal: true,
        modalTitle: 'Lo sentimos, algo salió mal',
        modalMsg:
          'Por favor intenta más tarde, estamos trabajando para solucionar el problema',
        modalType: ModalType.Error,
      });
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
      <InfoModal
        onClose={handleCloseModal}
        open={state.toggleModal}
        title={state.modalTitle}
        type={state.modalType}
        message={state.modalMsg}
      />
    </Container>
  );
};
