import { createDeliveryTaskFromLittleErrandsFormFieldsFactory } from './create-delivery-task-from-little-errands-form-fields-factory';

describe('implementation:adapters:create-delivery-task-from-little-errands-form-fields', () => {
  test('It should  return the delivery task', async () => {
    expect.assertions(1);

    const deliveryTask =
      await createDeliveryTaskFromLittleErrandsFormFieldsFactory({} as any)();
    expect(deliveryTask).toStrictEqual({
      id: '1',
      type: 'deliver',
      status: 'pending',
      address: {
        department: 'Suchitepequez',
        town: 'PuebloNuevo',
        village: 'Centro',
        address: "Raw's Home",
      },
      instruction:
        'Comprar una compu y pedir factura 4123123-4 en 38.8951,-77.0364 y entregar en 32.8951,-80.0364',
    });
  });
});
