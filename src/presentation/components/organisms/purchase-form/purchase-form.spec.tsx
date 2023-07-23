import { useForm } from 'react-hook-form';

import { render, setup, waitFor } from '../../../../../test/test-utils';
import { PurchaseForm } from './purchase-form';
import { defaultValues } from './purchase-form.config';

describe('presentation:components:organisms:purchase-form:control', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    function WrappedForm({ onSubmit = jest.fn() }) {
        const { control, handleSubmit } = useForm({ defaultValues });

        return <PurchaseForm control={control} onSubmit={handleSubmit(onSubmit)} />;
    }

    test('It should render without crashing', () => {
        expect(() => render(<WrappedForm />)).not.toThrow();
    });

    test('It should fill the [shopPlace] field', async () => {
        expect.hasAssertions();

        const { getByLabelText, user } = setup(<WrappedForm />);
        const shopPlaceInput = getByLabelText(/Lugar de Compra/i);
        expect(shopPlaceInput).toBeInTheDocument();
        await user.type(shopPlaceInput, 'Max Distelsa');
        expect(shopPlaceInput).toHaveValue('Max Distelsa');
    });

    test('It should fill the [buyPosition] field', async () => {
        expect.hasAssertions();

        const { getByLabelText, user } = setup(<WrappedForm />);
        const buyPositionInput = getByLabelText(/Posicion de Compra/i);
        expect(buyPositionInput).toBeInTheDocument();
        await user.type(buyPositionInput, '38.8951,-77.0364');
        expect(buyPositionInput).toHaveValue('38.8951,-77.0364');
    });

    test('It should fill the [purchaseDetail] field', async () => {
        expect.hasAssertions();

        const { getByLabelText, user } = setup(<WrappedForm />);
        const purchaseDetailInput = getByLabelText(/Detalle de Compra/i);
        expect(purchaseDetailInput).toBeInTheDocument();
        await user.type(purchaseDetailInput, 'Comprar un iphone 14 pro max');
        expect(purchaseDetailInput).toHaveValue('Comprar un iphone 14 pro max');
    });

    test('It should fill the [referencePhotos] field', async () => {
        expect.hasAssertions();

        const { getByLabelText, user } = setup(<WrappedForm />);
        const referencePhotosInput = getByLabelText(/Fotos de referencia/i);
        expect(referencePhotosInput).toBeInTheDocument();
        await user.type(referencePhotosInput, 'photo.jpg');
        expect(referencePhotosInput).toHaveValue('photo.jpg');
    });


    test('It should fill the [deliveryLocationl] field', async () => {
        expect.hasAssertions();

        const { getByLabelText, user } = setup(<WrappedForm />);
        const deliveryLocationlInput = getByLabelText(/Ubicación de entrega/i);
        expect(deliveryLocationlInput).toBeInTheDocument();
        await user.type(deliveryLocationlInput, '32.8951,-80.0364');
        expect(deliveryLocationlInput).toHaveValue('32.8951,-80.0364');
    });

    test('It should fill all the fields and submit the form', async () => {
        expect.hasAssertions();

        const onSubmit = jest.fn();
        const { getByLabelText, getByText, user } = setup(
            <WrappedForm onSubmit={onSubmit} />
        );
        await user.type(getByLabelText(/Lugar de Compra/i), 'Max Distelsa');
        await user.type(getByLabelText(/Posicion de Compra/i), '38.8951,-77.0364');
        await user.type(getByLabelText(/Detalle de Compra/i), 'Comprar un iphone 14 pro max');
        await user.type(getByLabelText(/Fotos de referencia/i), 'photo.jpg');
        await user.type(getByLabelText(/Ubicación de entrega/i), '32.8951,-80.0364');
        const submitButton = getByText(/Agregar a la Orden/i);
        expect(submitButton).toBeInTheDocument();
        await user.click(submitButton);
        await waitFor(() => {
            expect(onSubmit).toBeCalled();
        });

        // TODO: Add assertion to check the values of the form
    }, 10000);

    test('It should not submit the form if the [shopPlace] field is empty', async () => {
        expect.hasAssertions();

        const onSubmit = jest.fn();
        const { getByLabelText, getByText, user } = setup(
            <WrappedForm onSubmit={onSubmit} />
        );
        await user.type(getByLabelText(/Posicion de Compra/i), '38.8951,-77.0364');
        await user.type(getByLabelText(/Detalle de Compra/i), 'Comprar un iphone 14 pro max');
        await user.type(getByLabelText(/Fotos de referencia/i), 'photo.jpg');
        await user.type(getByLabelText(/Ubicación de entrega/i), '32.8951,-80.0364');
        await user.click(getByText(/Agregar a la Orden/i));
        await waitFor(() => {
            expect(onSubmit).not.toBeCalled();
        });
        await waitFor(() => {
            expect(
                getByText(/El campo lugar de compra es requerido/i)
            ).toBeInTheDocument();
        });
    });

    test('It should submit the form if the [buyPosition] field is not empty', async () => {
        expect.hasAssertions();

        const onSubmit = jest.fn();
        const { getByLabelText, getByText, user } = setup(
            <WrappedForm onSubmit={onSubmit} />
        );
        await user.type(getByLabelText(/Lugar de Compra/i), 'Max Distelsa');
        await user.type(getByLabelText(/Posicion de Compra/i), '38.8951,-77.0364');
        await user.type(getByLabelText(/Detalle de Compra/i), 'Comprar un iphone 14 pro max');
        await user.type(getByLabelText(/Fotos de referencia/i), 'photo.jpg');
        await user.type(getByLabelText(/Ubicación de entrega/i), '32.8951,-80.0364');
        await user.click(getByText(/Agregar a la Orden/i));
        await waitFor(() => {
            expect(onSubmit).toBeCalled();
        });
    });

    test('It should submit the form if the [buyPosition] field is empty', async () => {
        expect.hasAssertions();

        const onSubmit = jest.fn();
        const { getByLabelText, getByText, user } = setup(
            <WrappedForm onSubmit={onSubmit} />
        );
        await user.type(getByLabelText(/Lugar de Compra/i), 'Max Distelsa');
        await user.type(getByLabelText(/Posicion de Compra/i), '');
        await user.type(getByLabelText(/Detalle de Compra/i), 'Comprar un iphone 14 pro max');
        await user.type(getByLabelText(/Fotos de referencia/i), 'photo.jpg');
        await user.type(getByLabelText(/Ubicación de entrega/i), '32.8951,-80.0364');
        await user.click(getByText(/Agregar a la Orden/i));
        await waitFor(() => {
            expect(onSubmit).toBeCalled();
        });
    });

});
