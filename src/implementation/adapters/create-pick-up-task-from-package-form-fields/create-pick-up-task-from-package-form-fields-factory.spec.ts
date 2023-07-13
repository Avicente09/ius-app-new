import { createPickUpTaskFromPackageFormFieldsFactory } from './create-pick-up-task-from-package-form-fields-factory';

describe('implementation:adapters:create-pick-up-task-from-package-form-fields', () => {
  test('It should  return the pick up task', async () => {
    expect.assertions(1);

    const pickUpTask = await createPickUpTaskFromPackageFormFieldsFactory({
      fields: {
        name: 'Shirley Robles',
        phone: '41104365',
        paymentRetrievalOption: 'cashRetrieval',
        amount: '45.00',
        bankAccount: '2453453',
        pickUpLocation: 'Some address',
        deliveryLocation: 'Some other address',
        paymentRetrievalLocation: 'Any other location',
      },
    } as any)();

    expect(pickUpTask).toStrictEqual({
      id: 'PT-1',
      type: 'pickUp',
      status: 'pending',
      address: {
        department: 'Quetzaltenango',
        town: 'Cantel',
        village: 'Pasac 2',
        address: 'Av. Francisco Rodas 1-54A',
      },
      instruction: 'Recoger paquete',
    });
  });
});
