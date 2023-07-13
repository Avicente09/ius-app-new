import { renderPage, setupPage, waitFor } from '../../../test/test-utils';
import { PackagePage } from './package-page';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('pages:package', () => {
  test('It should render without crashing', () => {
    expect(() => renderPage(<PackagePage />)).not.toThrow();
  });
  test('It should fill the form, submit it and navigate to the summay page', async () => {
    expect.hasAssertions();

    const { getByLabelText, getByText, user } = setupPage(<PackagePage />);
    await user.type(getByLabelText(/Nombre Completo/i), 'Shakira Mebarak');
    await user.type(getByLabelText(/Teléfono/i), '52185108');
    // TODO: simulate paymentRetrievalOption selection
    await user.type(getByLabelText(/Monto del paquete/i), '45.00');
    await user.type(getByLabelText(/Cuenta bancaria/i), '3609897760');
    await user.type(
      getByLabelText(/Dirección para recoger paquete/i),
      'Calle Rodolfo Robles'
    );
    await user.type(getByLabelText(/Dirección de entrega/i), 'Calle Minerva');
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(mockNavigate).toBeCalledWith('/summary');
    });

    //TODO: Add assertion to check the result values in the context
  });
});
