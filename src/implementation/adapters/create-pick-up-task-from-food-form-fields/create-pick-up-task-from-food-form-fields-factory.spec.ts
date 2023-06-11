import { createPickUpTaskFromFoodFormFieldsFactory } from './create-pick-up-task-from-food-form-fields-factory';

describe('implementation:adapters:create-pick-up-task-from-food-form-fields', () => {
  test('It should  return the pick up task', async () => {
    expect.assertions(1);

    const pickUpTask = await createPickUpTaskFromFoodFormFieldsFactory({
      fields: {
        menuComboDetailAndQuantity: 'Combo 1 - 1',
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
      instruction: 'Combo 1 - 1',
    });
  });
});
