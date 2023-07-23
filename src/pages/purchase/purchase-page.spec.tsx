import { renderPage, setupPage, waitFor } from '../../../test/test-utils';
import { PurchasePage } from './purchase-page';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('pages:purchase', () => {
  test('It should render without crashing', () => {
    expect(() => renderPage(<PurchasePage />)).not.toThrow();
  });

  test('It should fill the form, submit it and navigate to the summary page', async () => {
    expect.hasAssertions();

    const { getByLabelText, getByText, user } = setupPage(<PurchasePage />);
    await user.type(getByLabelText(/Lugar de Compra/i), 'Max Distelsa');
    await user.type(getByLabelText(/Posicion de Compra/i), '38.8951,-77.0364');
    await user.type(getByLabelText(/Detalle de Compra/i), 'Comprar un iphone 14 pro max');
    await user.type(getByLabelText(/Fotos de referencia/i), 'photo.jpg');
    await user.type(getByLabelText(/Ubicación de entrega/i), '32.8951,-80.0364');
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(mockNavigate).toBeCalledWith('/summary');
    });

    //TODO: Add assertion to check the result values in the context8
  });

});
