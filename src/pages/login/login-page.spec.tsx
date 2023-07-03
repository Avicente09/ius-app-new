import { renderPage, setupPage } from '../../../test/test-utils';
import { LoginPage } from './login-page';

function MockGoogleLoginError(props: { onSuccess: (response: any) => void }) {
  return (
    <button onClick={() => props.onSuccess({})}>Acceder con Google</button>
  );
}

jest.mock('@greatsumini/react-facebook-login');
jest.mock('@react-oauth/google', () => ({
  GoogleLogin: MockGoogleLoginError,
}));

describe('pages:login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('It should render without crashing', () => {
    expect(() => renderPage(<LoginPage />)).not.toThrow();
  });

  test('It should call the onError callback using the MockGoogleLoginError component. The modal has to be shown.', async () => {
    expect.assertions(1);
    const { user, getByText } = setupPage(<LoginPage />);
    await user.click(getByText('Acceder con Google'));

    expect(getByText('Lo sentimos, algo salió mal')).toBeInTheDocument();
  });

  test('It should call the onInfo callback to show the disclaimer linked button. The modal has to be shown.', async () => {
    expect.assertions(1);
    const { user, getByText } = setupPage(<LoginPage />);
    await user.click(getByText('Aviso Importante'));

    expect(getByText('Aviso Importante para los Usuarios')).toBeInTheDocument();
  });
});
