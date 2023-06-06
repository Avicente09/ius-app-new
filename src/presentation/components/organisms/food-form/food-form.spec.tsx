import { render, setup, waitFor } from '../../../../../test/test-utils';
import { FoodForm } from './food-form';

describe('presentation:components:organisms:food-form', () => {
  test('It should render without crashing', () => {
    expect(() => render(<FoodForm onSubmit={jest.fn()} />)).not.toThrow();
  });

  test('It should fill the [Restaurant] field', async () => {
    expect.hasAssertions();

    const { getByLabelText, user } = setup(<FoodForm onSubmit={jest.fn()} />);
    const restaurantInput = getByLabelText(/Restaurante/i);
    expect(restaurantInput).toBeInTheDocument();
    await user.type(restaurantInput, 'McDonalds');
    expect(restaurantInput).toHaveValue('McDonalds');
  });

  test('It should fill the [MenuComboDetailAndQuantity] field', async () => {
    expect.hasAssertions();

    const { getByLabelText, user } = setup(<FoodForm onSubmit={jest.fn()} />);
    const menuComboDetailAndQuantityInput = getByLabelText(
      /Detalle de Menú o Combo y Cantidad/i
    );
    expect(menuComboDetailAndQuantityInput).toBeInTheDocument();
    await user.type(menuComboDetailAndQuantityInput, 'Combo Big Mac');
    expect(menuComboDetailAndQuantityInput).toHaveValue('Combo Big Mac');
  });

  test('It should fill the [DeliveryLocation] field', async () => {
    expect.hasAssertions();

    const { getByLabelText, user } = setup(<FoodForm onSubmit={jest.fn()} />);
    const deliveryLocationInput = getByLabelText(/Ubicación de entrega/i);
    expect(deliveryLocationInput).toBeInTheDocument();
    await user.type(deliveryLocationInput, 'Calle 123');
  });

  test('It should fill all the fields and submit the form', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <FoodForm onSubmit={onSubmit} />
    );
    await user.type(getByLabelText(/Restaurante/i), 'McDonalds');
    await user.type(
      getByLabelText(/Detalle de Menú o Combo y Cantidad/i),
      'Combo Big Mac'
    );
    await user.type(getByLabelText(/Ubicación de entrega/i), 'Calle 123');
    const submitButton = getByText(/Agregar a la Orden/i);
    expect(submitButton).toBeInTheDocument();
    await user.click(submitButton);
    await waitFor(() => {
      expect(onSubmit).toBeCalled();
    });

    // TODO: Add assertion to check the values of the form
  });

  test('It should not submit the form if the [Restaurant] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <FoodForm onSubmit={onSubmit} />
    );
    await user.type(
      getByLabelText(/Detalle de Menú o Combo y Cantidad/i),
      'Combo Big Mac'
    );
    await user.type(getByLabelText(/Ubicación de entrega/i), 'Calle 123');
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(
        getByText(/El campo restaurante es requerido/i)
      ).toBeInTheDocument();
    });
  });

  test('It should not submit the form if the [MenuComboDetailAndQuantity] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <FoodForm onSubmit={onSubmit} />
    );
    await user.type(getByLabelText(/Restaurante/i), 'McDonalds');
    await user.type(getByLabelText(/Ubicación de entrega/i), 'Calle 123');
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(getByText(/El campo detalle es requerido/i)).toBeInTheDocument();
    });
  });

  test('It should not submit the form if the [DeliveryLocation] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <FoodForm onSubmit={onSubmit} />
    );
    await user.type(getByLabelText(/Restaurante/i), 'McDonalds');
    await user.type(
      getByLabelText(/Detalle de Menú o Combo y Cantidad/i),
      'Combo Big Mac'
    );
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(
        getByText(/El campo ubicación de entrega es requerido/i)
      ).toBeInTheDocument();
    });
  });
});
