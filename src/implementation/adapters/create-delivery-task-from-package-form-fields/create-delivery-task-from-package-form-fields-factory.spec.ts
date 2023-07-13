import { createDeliveryTaskFromPackageFormFieldsFactory } from './create-delivery-task-from-package-form-fields-factory';

describe('implementation:adapters:create-delivery-task-from-package-form-fields', () => {
  test('It should  return the delivery task', async () => {
    expect.assertions(1);

    const deliveryTask = await createDeliveryTaskFromPackageFormFieldsFactory({
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

    expect(deliveryTask).toStrictEqual({
      id: 'DT-2',
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
