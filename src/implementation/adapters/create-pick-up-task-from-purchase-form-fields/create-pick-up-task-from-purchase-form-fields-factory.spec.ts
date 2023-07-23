import { createPickUpTaskFromPurchaseFormFieldsFactory } from './create-pick-up-task-from-purchase-form-fields-factory';

describe('implementation:adapters:create-pick-up-task-from-purchase-form-fields', () => {
    test('It should  return the pick up task', async () => {
        expect.assertions(1);

        const pickUpTask = await createPickUpTaskFromPurchaseFormFieldsFactory({
            fields: {
                shopPlace: 'Max Distelsa',
                buyPosition: 'Zona 6, Quetzaltenango',
                purchaseDetail: 'Iphone 25 pro max duo xD',
                referencePhotos: 'Foto aquí',
            },
        } as any)();

        console.log('[>] pickUpTask: ', pickUpTask);

        expect(pickUpTask).toStrictEqual({
            id: '1',
            type: 'pickUp',
            status: 'pending',
            address: {
                department: 'Quetzaltenango',
                town: 'Cantel',
                village: 'Pasac 2',
                address: 'Av. Francisco Rodas 1-54A',
            },
            instruction: `Comprar: Iphone 25 pro max duo xD en Max Distelsa`,
        });
    });
});
