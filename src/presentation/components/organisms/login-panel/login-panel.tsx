import type { ProfileSuccessResponse } from '@greatsumini/react-facebook-login';
import FacebookLogin from '@greatsumini/react-facebook-login';
import DeliveryDiningTwoToneIcon from '@mui/icons-material/DeliveryDiningTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import type { CredentialResponse } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt from 'jwt-decode';

import { fbAppId, notifications } from './login-panel.config';
import type { LoginPanelProps } from './login-panel.types';

export function LoginPanel({
  onError,
  onInfo,
  onLogin,
}: LoginPanelProps): JSX.Element {
  const handleFBLogin = ({ id, name, email }: ProfileSuccessResponse) =>
    id && name && email
      ? onLogin({
          id,
          name,
          email,
        })
      : onError(
          notifications.unknownError.title,
          notifications.unknownError.messages
        );

  const handleGoogleLogin = (response: CredentialResponse) => {
    const clientId = response.clientId;
    const { name, email }: { name?: string; email?: string } =
      response.credential ? jwt(response.credential) : {};

    if (clientId && name && email)
      onLogin({
        id: clientId,
        name,
        email,
      });
    else
      onError(
        notifications.unknownError.title,
        notifications.unknownError.messages
      );
  };

  const handleNoticeClick = () =>
    onInfo(notifications.disclaimer.title, notifications.disclaimer.messages);

  return (
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
          onProfileSuccess={handleFBLogin}
          render={({ onClick }) => (
            <Button
              startIcon={<FacebookIcon />}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ textTransform: 'none' }}
              onClick={onClick}
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
          {/* TODO: Handle this user preference  */}
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
  );
}
