import { useForm } from 'react-hook-form';

import { render, setup, waitFor } from '../../../../../test/test-utils';
import { PackageForm } from './package-form';
import { defaultValues } from './package-form.config';

describe('presentation:components:organisms:package-form:control', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function WrappedForm({ onSubmit = jest.fn() }) {
    const { control, handleSubmit } = useForm({ defaultValues });

    return <PackageForm control={control} onSubmit={handleSubmit(onSubmit)} />;
  }

  test('It should render without crashing', () => {
    expect(() => render(<WrappedForm />)).not.toThrow();
  });

  test('It should fill the [Name] field', async () => {
    expect.hasAssertions();

    const { getByLabelText, user } = setup(<WrappedForm />);
    const nameInput = getByLabelText(/Nombre Completo/i);
    expect(nameInput).toBeInTheDocument();
    await user.type(nameInput, 'Shirley Robles');
    expect(nameInput).toHaveValue('Shirley Robles');
  });

  test('It should fill the [Phone] field', async () => {
    expect.hasAssertions();

    const { getByLabelText, user } = setup(<WrappedForm />);
    const phoneInput = getByLabelText(/Teléfono/i);
    expect(phoneInput).toBeInTheDocument();
    await user.type(phoneInput, '5555-5555');
    expect(phoneInput).toHaveValue('(502) 5555-5555');
  });

  test('It should fill the [PaymentRetrievalOption] field', async () => {
    expect.hasAssertions();

    const { getByLabelText } = setup(<WrappedForm />);
    const PaymentRetrievalOptionInput = getByLabelText(
      /Opción de entrega de pago/i
    );
    expect(PaymentRetrievalOptionInput).toBeInTheDocument();
    expect(PaymentRetrievalOptionInput).toHaveValue('cashRetrieval');
  });

  test('It should fill the [Amount] field', async () => {
    expect.hasAssertions();

    const { getByLabelText, user } = setup(<WrappedForm />);
    const amountInput = getByLabelText(/Monto del paquete/i);
    expect(amountInput).toBeInTheDocument();
    await user.type(amountInput, '10.00');
    expect(amountInput).toHaveValue('Q10.00');
  });

  test('It should fill the [BankAccount] field', async () => {
    expect.hasAssertions();

    const { getByLabelText, user } = setup(<WrappedForm />);
    const bankAccountInput = getByLabelText(/Cuenta bancaria/i);
    expect(bankAccountInput).toBeInTheDocument();
    await user.type(bankAccountInput, '3309097790');
    expect(bankAccountInput).toHaveValue('3309097790');
  });

  test('It should fill the [PickUpLocation] field', async () => {
    expect.hasAssertions();

    const { getByLabelText, user } = setup(<WrappedForm />);
    const pickUpLocationInput = getByLabelText(
      /Dirección para recoger paquete/i
    );
    expect(pickUpLocationInput).toBeInTheDocument();
    await user.type(pickUpLocationInput, '3AV-20 Pueblo Nuevo Suchitepéquez');
    expect(pickUpLocationInput).toHaveValue(
      '3AV-20 Pueblo Nuevo Suchitepéquez'
    );
  });

  test('It should fill the [DeliveryLocation] field', async () => {
    expect.hasAssertions();

    const { getByLabelText, user } = setup(<WrappedForm />);
    const deliveryLocationInput = getByLabelText(/Dirección de entrega/i);
    expect(deliveryLocationInput).toBeInTheDocument();
    await user.type(deliveryLocationInput, 'San Felipe Retalhuleu');
    expect(deliveryLocationInput).toHaveValue('San Felipe Retalhuleu');
  });

  test('It should fill the [PaymentRetrievalLocation] field', async () => {
    expect.hasAssertions();

    const { getByLabelText, user } = setup(<WrappedForm />);
    const paymentRetrievalLocationInput = getByLabelText(
      /Dirección para entrega del dinero/i
    );
    expect(paymentRetrievalLocationInput).toBeInTheDocument();
    await user.type(
      paymentRetrievalLocationInput,
      '3AV-20 Pueblo Nuevo Suchitepéquez'
    );
    expect(paymentRetrievalLocationInput).toHaveValue(
      '3AV-20 Pueblo Nuevo Suchitepéquez'
    );
  });

  test('It should fill all the fields and submit the form', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <WrappedForm onSubmit={onSubmit} />
    );
    await user.type(
      getByLabelText(/Nombre Completo/i),
      'Shirley Mirella Robles Lau'
    );
    await user.type(getByLabelText(/Teléfono/i), '5555-5555');
    await user.type(getByLabelText(/Monto del paquete/i), '10.00');
    await user.type(getByLabelText(/Cuenta bancaria/i), '3309097790');
    await user.type(
      getByLabelText(/Dirección para recoger paquete/i),
      '3AV-20 Pueblo Nuevo Suchitepéquez'
    );
    await user.type(
      getByLabelText(/Dirección de entrega/i),
      'San Felipe Retalhuleu'
    );
    await user.type(
      getByLabelText(/Dirección para entrega del dinero/i),
      '3AV-20 Pueblo Nuevo Suchitepéquez'
    );
    const submitButton = getByText(/Agregar a la Orden/i);
    expect(submitButton).toBeInTheDocument();
    await user.click(submitButton);
    await waitFor(() => {
      expect(onSubmit).toBeCalled();
    });

    // TODO: Add assertion to check the values of the form
  }, 10000);

  test('It should not submit the form if the [Name] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <WrappedForm onSubmit={onSubmit} />
    );
    await user.type(getByLabelText(/Teléfono/i), '(502) 5555-5555');
    await user.type(getByLabelText(/Monto del paquete/i), '10.00');
    await user.type(getByLabelText(/Cuenta bancaria/i), '3309097790');
    await user.type(
      getByLabelText(/Dirección para recoger paquete/i),
      '3AV-20 Pueblo Nuevo Suchitepéquez'
    );
    await user.type(
      getByLabelText(/Dirección de entrega/i),
      'San Felipe Retalhuleu'
    );
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(getByText(/El campo nombre es requerido/i)).toBeInTheDocument();
    });
  });

  test('It should not submit the form if the [Phone] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <WrappedForm onSubmit={onSubmit} />
    );
    await user.type(
      getByLabelText(/Nombre Completo/i),
      'Shirley Mirella Robles Lau'
    );
    await user.type(getByLabelText(/Monto del paquete/i), '10.00');
    await user.type(getByLabelText(/Cuenta bancaria/i), '3309097790');
    await user.type(
      getByLabelText(/Dirección para recoger paquete/i),
      '3AV-20 Pueblo Nuevo Suchitepéquez'
    );
    await user.type(
      getByLabelText(/Dirección de entrega/i),
      'San Felipe Retalhuleu'
    );
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(
        getByText(/El número telefónico es requerido/i)
      ).toBeInTheDocument();
    });
  });

  test('It should not submit the form if the [PickUpLocation] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <WrappedForm onSubmit={onSubmit} />
    );
    await user.type(
      getByLabelText(/Nombre Completo/i),
      'Shirley Mirella Robles Lau'
    );
    await user.type(getByLabelText(/Teléfono/i), '(502) 5555-5555');
    await user.type(getByLabelText(/Monto del paquete/i), '10.00');
    await user.type(getByLabelText(/Cuenta bancaria/i), '3309097790');
    await user.type(
      getByLabelText(/Dirección de entrega/i),
      'San Felipe Retalhuleu'
    );
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(
        getByText(/La dirección para recoger paquete es requerida/i)
      ).toBeInTheDocument();
    });
  });

  test('It should not submit the form if the [DeliveryLocation] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <WrappedForm onSubmit={onSubmit} />
    );
    await user.type(
      getByLabelText(/Nombre Completo/i),
      'Shirley Mirella Robles Lau'
    );
    await user.type(getByLabelText(/Teléfono/i), '(502) 5555-5555');
    await user.type(getByLabelText(/Monto del paquete/i), '10.00');
    await user.type(getByLabelText(/Cuenta bancaria/i), '3309097790');
    await user.type(
      getByLabelText(/Dirección para recoger paquete/i),
      '3AV-20 Pueblo Nuevo Suchitepéquez'
    );
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(
        getByText(/La dirección de entrega es requerida/i)
      ).toBeInTheDocument();
    });
  });
});
