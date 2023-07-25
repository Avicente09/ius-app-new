import { useForm } from 'react-hook-form';

import { render, setup, waitFor } from '../../../../../test/test-utils';
import { LittleErrandsForm } from './little-errands-form';
import { defaultValues } from './little-errands-form.config';

describe('presentation:components:organisms:little-errands-form:control', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function WrappedForm({ onSubmit = jest.fn() }) {
    const { control, handleSubmit } = useForm({ defaultValues });

    return (
      <LittleErrandsForm control={control} onSubmit={handleSubmit(onSubmit)} />
    );
  }

  test('It should render without crashing', () => {
    expect(() => render(<WrappedForm />)).not.toThrow();
  });

  test('It should fill the [withdrawalAddress] field', async () => {
    expect.hasAssertions();

    const { getByLabelText, user } = setup(<WrappedForm />);
    const withdrawalAddressInput = getByLabelText(/Dirección de Retiro/i);
    expect(withdrawalAddressInput).toBeInTheDocument();
    await user.type(withdrawalAddressInput, '38.8951,-77.0364');
    expect(withdrawalAddressInput).toHaveValue('38.8951,-77.0364');
  });

  test('It should fill the [deliveryAddress] field', async () => {
    expect.hasAssertions();

    const { getByLabelText, user } = setup(<WrappedForm />);
    const deliveryAddressInput = getByLabelText(/Dirección de Entrega/i);
    expect(deliveryAddressInput).toBeInTheDocument();
    await user.type(deliveryAddressInput, '32.8951,-80.0364');
    expect(deliveryAddressInput).toHaveValue('32.8951,-80.0364');
  });

  test('It should fill the [thirdPartyName] field', async () => {
    expect.hasAssertions();

    const { getByLabelText, user } = setup(<WrappedForm />);
    const thirdPartyNameInput = getByLabelText(/Nombre de Terceros/i);
    expect(thirdPartyNameInput).toBeInTheDocument();
    await user.type(thirdPartyNameInput, 'Proveedor Tercero');
    expect(thirdPartyNameInput).toHaveValue('Proveedor Tercero');
  });

  test('It should fill the [thirdPartyPhone] field', async () => {
    expect.hasAssertions();
    const { getByLabelText, user } = setup(<WrappedForm />);
    const thirdPartyPhoneInput = getByLabelText(/Teléfono de Terceros/i);
    expect(thirdPartyPhoneInput).toBeInTheDocument();
    await user.type(thirdPartyPhoneInput, '53565223');
    expect(thirdPartyPhoneInput).toHaveValue('(502) 5356-5223');
  });

  test('It should fill the [cancelAmountSomewhere] field', async () => {
    expect.hasAssertions();
    const { getByLabelText, user } = setup(<WrappedForm />);
    const cancelAmountSomewhereInput = getByLabelText(
      /Cancelar cantidad en algún lugar/i
    );
    expect(cancelAmountSomewhereInput).toBeInTheDocument();
    await user.type(cancelAmountSomewhereInput, '100.00');
    expect(cancelAmountSomewhereInput).toHaveValue('Q100.00');
  });

  test('It should fill the [dontHaveCancelAnything] field', async () => {
    expect.hasAssertions();
    const { getByLabelText, user } = setup(<WrappedForm />);
    const dontHaveCancelAnythingInput = getByLabelText(
      /No tienes que cancelar nada/i
    );
    expect(dontHaveCancelAnythingInput).toBeInTheDocument();
    await user.type(dontHaveCancelAnythingInput, 'NO');
    expect(dontHaveCancelAnythingInput).toHaveValue('NO');
  });

  test('It should fill the [additionalInstructions] field', async () => {
    expect.hasAssertions();
    const { getByLabelText, user } = setup(<WrappedForm />);
    const additionalInstructionsInput = getByLabelText(
      /Instrucciones Adicionales/i
    );
    expect(additionalInstructionsInput).toBeInTheDocument();
    await user.type(
      additionalInstructionsInput,
      'Favor pedir factura 4123123-4'
    );
    expect(additionalInstructionsInput).toHaveValue(
      'Favor pedir factura 4123123-4'
    );
  });

  test('It should fill all the fields and submit the form', async () => {
    expect.hasAssertions();
    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <WrappedForm onSubmit={onSubmit} />
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
    const submitButton = getByText(/Agregar a la Orden/i);
    expect(submitButton).toBeInTheDocument();
    await user.click(submitButton);
    await waitFor(() => {
      expect(onSubmit).toBeCalled();
    });

    // TODO: Add assertion to check the values of the form
  }, 10000);

  test('It should not submit the form if the [withdrawalAddress] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <WrappedForm onSubmit={onSubmit} />
    );
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
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(
        getByText(/El campo dirección de retiro es requerido/i)
      ).toBeInTheDocument();
    });
  });

  test('It should not submit the form if the [deliveryAddress] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <WrappedForm onSubmit={onSubmit} />
    );
    await user.type(getByLabelText(/Dirección de Retiro/i), '38.8951,-77.0364');
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
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(
        getByText(/El campo dirección de entrega es requerido/i)
      ).toBeInTheDocument();
    });
  });

  test('It should not submit the form if the [thirdPartyName] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <WrappedForm onSubmit={onSubmit} />
    );
    await user.type(getByLabelText(/Dirección de Retiro/i), '38.8951,-77.0364');
    await user.type(
      getByLabelText(/Dirección de Entrega/i),
      '32.8951,-80.0364'
    );
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
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(
        getByText(/El campo nombre de terceros es requerido/i)
      ).toBeInTheDocument();
    });
  });

  test('It should not submit the form if the [thirdPartyPhone] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <WrappedForm onSubmit={onSubmit} />
    );
    await user.type(getByLabelText(/Dirección de Retiro/i), '38.8951,-77.0364');
    await user.type(
      getByLabelText(/Dirección de Entrega/i),
      '32.8951,-80.0364'
    );
    await user.type(getByLabelText(/Nombre de Terceros/i), 'Proveedor Tercero');
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
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(
        getByText(/El campo teléfono de terceros es requerido/i)
      ).toBeInTheDocument();
    });
  });

  test('It should not submit the form if the [cancelAmountSomewhere] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <WrappedForm onSubmit={onSubmit} />
    );
    await user.type(getByLabelText(/Dirección de Retiro/i), '38.8951,-77.0364');
    await user.type(
      getByLabelText(/Dirección de Entrega/i),
      '32.8951,-80.0364'
    );
    await user.type(getByLabelText(/Nombre de Terceros/i), 'Proveedor Tercero');
    await user.type(getByLabelText(/Teléfono de Terceros/i), '53565223');
    await user.type(getByLabelText(/No tienes que cancelar nada/i), 'NO');
    await user.type(
      getByLabelText(/Instrucciones Adicionales/i),
      'Favor pedir factura 4123123-4'
    );
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(
        getByText(/El campo cancelar algo es requerido/i)
      ).toBeInTheDocument();
    });
  });

  test('It should not submit the form if the [dontHaveCancelAnything] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <WrappedForm onSubmit={onSubmit} />
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
    await user.type(
      getByLabelText(/Instrucciones Adicionales/i),
      'Favor pedir factura 4123123-4'
    );
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(
        getByText(/El campo no tiene que cancelar es requerido/i)
      ).toBeInTheDocument();
    });
  });

  test('It should not submit the form if the [additionalInstructions] field is empty', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByLabelText, getByText, user } = setup(
      <WrappedForm onSubmit={onSubmit} />
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
    await user.click(getByText(/Agregar a la Orden/i));
    await waitFor(() => {
      expect(onSubmit).not.toBeCalled();
    });
    await waitFor(() => {
      expect(
        getByText(/El campo intrucciones adicionales es requerido/i)
      ).toBeInTheDocument();
    });
  });
});
