import { renderPage, setupPage } from '../../../../../test/test-utils';
import { MainMenu } from './main-menu';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('components:molecules:main-menu-option-button', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('It should render without crashing', () => {
    expect(() => renderPage(<MainMenu />)).not.toThrow();
  });

  test('It should click on COMPRA and navigate to /purchase', async () => {
    expect.assertions(1);

    const { user, getByText } = setupPage(<MainMenu />);
    await user.click(getByText('COMPRA'));

    expect(mockNavigate).toBeCalledWith('/purchase');
  });

  test('It should click on COMIDA and navigate to /purchase', async () => {
    expect.assertions(1);

    const { user, getByText } = setupPage(<MainMenu />);
    await user.click(getByText('COMIDA'));

    expect(mockNavigate).toBeCalledWith('/food');
  });

  test('It should click on MANDADITO and navigate to /purchase', async () => {
    expect.assertions(1);

    const { user, getByText } = setupPage(<MainMenu />);
    await user.click(getByText('MANDADITO'));

    expect(mockNavigate).toBeCalledWith('/errand');
  });

  test('It should click on PAQUETERIA and navigate to /purchase', async () => {
    expect.assertions(1);

    const { user, getByText } = setupPage(<MainMenu />);
    await user.click(getByText('PAQUETERIA'));

    expect(mockNavigate).toBeCalledWith('/package');
  });
});
