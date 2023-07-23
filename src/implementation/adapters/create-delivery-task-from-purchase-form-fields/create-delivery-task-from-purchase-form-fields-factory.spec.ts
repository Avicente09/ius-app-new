
import { createDeliveryTaskFromPurchaseFormFieldsFactory } from './create-delivery-task-from-purchase-form-fields-factory';

describe('implementation:adapters:create-delivery-task-from-purchase-form-fields', () => {
    test('It should  return the delivery task', async () => {
        expect.assertions(1);

        const deliveryTask = await createDeliveryTaskFromPurchaseFormFieldsFactory(
            {} as any
        )();

        expect(deliveryTask).toStrictEqual({
            id: '2',
            type: 'deliver',
            status: 'pending',
            address: {
                department: 'Suchitepequez',
                town: 'PuebloNuevo',
                village: 'Centro',
                address: "Raw's Home",
            },
            instruction: 'Entregar a direccion',
        });
    });
});
