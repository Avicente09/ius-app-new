import { renderPage, setupPage } from '../../../../../test/test-utils';
import { Header } from './header';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const mockLogout = jest.fn();
jest.mock('@presentation/hooks/use-auth', () => ({
  useAuth: () => ({ logout: mockLogout }),
}));

describe('components:layout:header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('It should render without crashing', () => {
    // Using render page since Headers needs the page providers. Use render instead of renderPage if possible.
    expect(() => renderPage(<Header />)).not.toThrow();
  });

  test('It should click on the ShoppingCart icon and navigate to Summary page', async () => {
    expect.hasAssertions();

    const { user, getByTestId } = setupPage(<Header />);
    await user.click(getByTestId('shopping-cart-button'));

    expect(mockNavigate).toHaveBeenCalledWith('/summary');
  });

  test('It should click on the Logout option on Profile menu and call logout mock', async () => {
    expect.hasAssertions();

    const { user, getByTestId, getByText } = setupPage(<Header />);
    await user.click(getByTestId('profile-button'));
    await user.click(getByText('Cerrar Sesión'));

    expect(mockLogout).toHaveBeenCalled();
  });
});
