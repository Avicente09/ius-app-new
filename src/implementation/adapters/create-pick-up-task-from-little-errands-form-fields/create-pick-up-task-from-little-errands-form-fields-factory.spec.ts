import { createPickUpTaskFromLittleErrandsFormFieldsFactory } from './create-pick-up-task-from-little-errands-form-fields-factory';

describe('implementation:adapters:create-pick-up-task-from-little-errands-form-fields', () => {
  test('It should  return the pick up task', async () => {
    expect.assertions(1);

    const pickUpTask = await createPickUpTaskFromLittleErrandsFormFieldsFactory(
      {
        fields: {
          withdrawalAddress: '38.8951,-77.0364',
          deliveryAddress: '32.8951,-80.0364',
          thirdPartyName: 'Proveedor Tercero',
          thirdPartyPhone: '(502) 5356-5223',
          cancelAmountSomewhere: 'Q100.00',
          dontHaveCancelAnything: 'NO',
          additionalInstructions:
            'Comprar una compu y pedir factura 4123123-4 en 38.8951,-77.0364 y entregar en 32.8951,-80.0364',
        },
      } as any
    )();
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
      instruction: `Comprar una compu y pedir factura 4123123-4 en 38.8951,-77.0364 y entregar en 32.8951,-80.0364`,
    });
  });
});
