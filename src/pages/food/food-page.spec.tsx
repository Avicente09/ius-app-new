import { renderPage, setupPage, waitFor } from '../../../test/test-utils';
import { FoodPage } from './food-page';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('pages:food', () => {
  test('It should render without crashing', () => {
    expect(() => renderPage(<FoodPage />)).not.toThrow();
  });

  test('It should fill the form, submit it and navigate to the summary page', async () => {
    expect.hasAssertions();

    const { getByLabelText, getByText, user } = setupPage(<FoodPage />);
    await user.type(getByLabelText(/Restaurante/i), 'McDonalds');
    await user.type(
      getByLabelText(/Detalle de Menú o Combo y Cantidad/i),
      'Combo Big Mac'
    );
    await user.type(getByLabelText(/Ubicación de entrega/i), 'Calle 123');
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(mockNavigate).toBeCalledWith('/summary');
    });

    //TODO: Add assertion to check the result values in the context
  });
});
