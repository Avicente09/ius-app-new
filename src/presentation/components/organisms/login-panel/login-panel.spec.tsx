import { render, setup } from '../../../../../test/test-utils';
import { LoginPanel } from './login-panel';

function MockGoogleLoginError(props: { onSuccess: (response: any) => void }) {
  return (
    <button onClick={() => props.onSuccess({})}>Acceder con Google</button>
  );
}

function MockGoogleLoginSuccess(props: {
  onSuccess: (response: { clientId: string; credential: string }) => void;
}) {
  const handleClick = () => {
    props.onSuccess({
      clientId: 'some-client-id',
      credential:
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzNDFkZWRlZWUyZDE4NjliNjU3ZmE5MzAzMDAwODJmZTI2YjNkOTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODgyNDk5MjQsImF1ZCI6Ijk5MzA1MDAyMTk1Ny0wanRjamR2c2Y4dmgzcmZjdWR2NWpubXFvbmhsdGhrcS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMzk2MzI0NTEwMjc4ODYzODA4NyIsImVtYWlsIjoiaGVyYmVyY29sb3BAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6Ijk5MzA1MDAyMTk1Ny0wanRjamR2c2Y4dmgzcmZjdWR2NWpubXFvbmhsdGhrcS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJIZXJiZXIgQ29sb3AiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0Y1N5R2Fyai1ncTdMNVNTclU2azVkTHk4QlBNS2FGMFdzNTIzTVBrNEhmQWMwPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkhlcmJlciIsImZhbWlseV9uYW1lIjoiQ29sb3AiLCJpYXQiOjE2ODgyNTAyMjQsImV4cCI6MTY4ODI1MzgyNCwianRpIjoiMWFhMzFmOTAwZjJkNTVjMjM1ZDJlMTY0YTljYjg3MzdiY2MyMDMyYyJ9.oBV7EPz3GVI3br9sviOqHSe-Dq_ZEkJKrpJ14ZAEKOnHCAV6uDQZlf8OoVV1Y16YG0pCB-rxhNNdQW8hkqB5CrEWYENI9h4hCC7N5PYT0XZfxOU4actY9g0-kzKp2HZlDY_v07dx3PLp1W4d7UAUOCzdf90KvKkRUqVHs159E0Xk2VUKO8bq4sucZAGV57c7zEcXzEnlCE-cCyKRCRoY21ek5FdN5dGIVZr9yNdWnZvPxqL_VA4POlsNAXYcBuDurbdRb7op3ej0bIAUU9TkPmAvCL6z1jP4U40rcGD5BGSTjBK2x1j1noiPSMpTS8_r6JxccnLKfP5Lahy2z9vGBw',
    });
  };
  return <button onClick={handleClick}>Acceder con Google</button>;
}

function MockFacebookLoginError(props: {
  onProfileSuccess: (response: any) => void;
}) {
  return (
    <button onClick={() => props.onProfileSuccess({})}>
      Acceder con Facebook
    </button>
  );
}

function MockFacebookLoginSucess(props: {
  onProfileSuccess: (response: any) => void;
}) {
  return (
    <button
      onClick={() =>
        props.onProfileSuccess({
          id: 'some-client-id',
          email: 'herbercolop@gmail.com',
          name: 'Herber Colop',
        })
      }
    >
      Acceder con Facebook
    </button>
  );
}

jest.mock('@greatsumini/react-facebook-login');
jest.mock('@react-oauth/google', () => ({
  GoogleLogin: jest.fn(),
}));

const mockGoogleLogin = jest.requireMock('@react-oauth/google').GoogleLogin;
const mockFacebookLogin = jest.requireMock(
  '@greatsumini/react-facebook-login'
).default;

describe('presentation:components:organisms:login-panel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('It should render without crashing', () => {
    expect(() =>
      render(
        <LoginPanel
          onError={jest.fn()}
          onInfo={jest.fn()}
          onLogin={jest.fn()}
        />
      )
    ).not.toThrow();
  });

  test('It should login successfully with Google', async () => {
    expect.assertions(3);
    const mockOnError = jest.fn();
    const mockOnInfo = jest.fn();
    const mockOnLogin = jest.fn();
    mockGoogleLogin.mockImplementation(MockGoogleLoginSuccess);

    const { user, getByText } = setup(
      <LoginPanel
        onError={mockOnError}
        onInfo={mockOnInfo}
        onLogin={mockOnLogin}
      />
    );

    await user.click(getByText('Acceder con Google'));

    expect(mockOnError).not.toHaveBeenCalled();
    expect(mockOnInfo).not.toHaveBeenCalled();
    expect(mockOnLogin).toHaveBeenCalledWith({
      id: 'some-client-id',
      email: 'herbercolop@gmail.com',
      name: 'Herber Colop',
    });
  });

  test('It should login with Google and call the onError callback', async () => {
    expect.assertions(3);
    const mockOnError = jest.fn();
    const mockOnInfo = jest.fn();
    const mockOnLogin = jest.fn();
    mockGoogleLogin.mockImplementation(MockGoogleLoginError);

    const { user, getByText } = setup(
      <LoginPanel
        onError={mockOnError}
        onInfo={mockOnInfo}
        onLogin={mockOnLogin}
      />
    );

    await user.click(getByText('Acceder con Google'));

    expect(mockOnError).toHaveBeenCalledWith('Lo sentimos, algo salió mal', [
      'Por favor intenta más tarde, estamos trabajando para solucionar el problema',
    ]);
    expect(mockOnInfo).not.toHaveBeenCalled();
    expect(mockOnLogin).not.toHaveBeenCalled();
  });

  test('It should login with Facebook successfully', async () => {
    expect.assertions(3);
    const mockOnError = jest.fn();
    const mockOnInfo = jest.fn();
    const mockOnLogin = jest.fn();
    mockFacebookLogin.mockImplementation(MockFacebookLoginSucess);

    const { user, getByText } = setup(
      <LoginPanel
        onError={mockOnError}
        onInfo={mockOnInfo}
        onLogin={mockOnLogin}
      />
    );

    await user.click(getByText('Acceder con Facebook'));

    expect(mockOnError).not.toHaveBeenCalled();
    expect(mockOnInfo).not.toHaveBeenCalled();
    expect(mockOnLogin).toHaveBeenCalledWith({
      id: 'some-client-id',
      email: 'herbercolop@gmail.com',
      name: 'Herber Colop',
    });
  });

  test('It should login with Facebook and call the onError callback', async () => {
    expect.assertions(3);
    const mockOnError = jest.fn();
    const mockOnInfo = jest.fn();
    const mockOnLogin = jest.fn();
    mockFacebookLogin.mockImplementation(MockFacebookLoginError);

    const { user, getByText } = setup(
      <LoginPanel
        onError={mockOnError}
        onInfo={mockOnInfo}
        onLogin={mockOnLogin}
      />
    );

    await user.click(getByText('Acceder con Facebook'));

    expect(mockOnError).toHaveBeenCalledWith('Lo sentimos, algo salió mal', [
      'Por favor intenta más tarde, estamos trabajando para solucionar el problema',
    ]);
    expect(mockOnInfo).not.toHaveBeenCalled();
    expect(mockOnLogin).not.toHaveBeenCalled();
  });

  test('It should call the handleNoticeClick', async () => {
    expect.assertions(3);
    const mockOnError = jest.fn();
    const mockOnInfo = jest.fn();
    const mockOnLogin = jest.fn();

    const { user, getByText } = setup(
      <LoginPanel
        onError={mockOnError}
        onInfo={mockOnInfo}
        onLogin={mockOnLogin}
      />
    );

    await user.click(getByText('Aviso Importante'));

    expect(mockOnError).not.toHaveBeenCalled();
    expect(mockOnInfo).toHaveBeenCalledWith(
      'Aviso Importante para los Usuarios',
      ['Lorem pisupasdsfi asdfpaosdifu dfsfñalsdj pdsifasdf pasdfoiasdfpou']
    );
    expect(mockOnLogin).not.toHaveBeenCalled();
  });
});
