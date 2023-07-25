import { renderPage, setupPage, waitFor } from '../../../test/test-utils';
import { LittleErrandsPage } from './little-errands-page';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('pages:purchase', () => {
  test('It should render without crashing', () => {
    expect(() => renderPage(<LittleErrandsPage />)).not.toThrow();
  });

  test('It should fill the form, submit it and navigate to the summary page', async () => {
    expect.hasAssertions();

    const { getByLabelText, getByText, user } = setupPage(
      <LittleErrandsPage />
    );
    await user.type(getByLabelText(/Dirección de Retiro/i), '38.8951,-77.0364');
    await user.type(
      getByLabelText(/Dirección de Entrega/i),
      '32.8951,-80.0364'
    );
    await user.type(getByLabelText(/Nombre de Terceros/i), 'Proveedor Tercero');
    await user.type(getByLabelText(/Teléfono de Terceros/i), '53565223');
    await user.type(
      getByLabelText(/Cancelar cantidad en algún lugar/i),
      '100.00'
    );
    await user.type(getByLabelText(/No tienes que cancelar nada/i), 'NO');
    await user.type(
      getByLabelText(/Instrucciones Adicionales/i),
      'Favor pedir factura 4123123-4'
    );
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(mockNavigate).toBeCalledWith('/summary');
    });

    //TODO: Add assertion to check the result values in the context8
  });
});
