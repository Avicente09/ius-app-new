import { attachFoodDeliveryTasksUC } from './attach-food-delivery-tasks-uc';

describe('domain:use-cases:attach-food-delivery-tasks', () => {
  test('It should resolve an updated existing order with the new tasks', async () => {
    expect.assertions(6);

    const provider = {
      getExistingDraftOrder: jest.fn(() =>
        Promise.resolve({
          id: '1',
          status: 'draft' as const,
          userId: '1',
          tasks: [],
        })
      ),
      createNewDraftOrder: jest.fn(() =>
        Promise.resolve({
          id: '2',
          status: 'draft' as const,
          userId: '1',
          tasks: [],
        })
      ),
      saveOrder: jest.fn(order => Promise.resolve(order)),
      getDeliveryTask: jest.fn(() =>
        Promise.resolve({
          id: '2',
          type: 'deliver',
          status: 'pending',
          address: {
            department: 'Suchitepequez',
            town: 'PuebloNuevo',
            village: 'Centro',
            address: "Raw's Home",
          },
          instruction: 'Entregar paquete',
        } as const)
      ),
      getPickUpTask: jest.fn(() =>
        Promise.resolve({
          id: '1',
          type: 'pickUp',
          status: 'pending',
          address: {
            department: 'Quetzaltenango',
            town: 'Cantel',
            village: 'Pasac 2',
            address: 'Av. Francisco Rodas 1-54A',
          },
          instruction: 'Recoger paquete',
        } as const)
      ),
    };

    const result = await attachFoodDeliveryTasksUC(provider);

    expect(result).toStrictEqual({
      id: '1',
      status: 'draft',
      userId: '1',
      tasks: [
        {
          id: '1',
          type: 'pickUp',
          status: 'pending',
          address: {
            department: 'Quetzaltenango',
            town: 'Cantel',
            village: 'Pasac 2',
            address: 'Av. Francisco Rodas 1-54A',
          },
          instruction: 'Recoger paquete',
        },
        {
          id: '2',
          type: 'deliver',
          status: 'pending',
          address: {
            department: 'Suchitepequez',
            town: 'PuebloNuevo',
            village: 'Centro',
            address: "Raw's Home",
          },
          instruction: 'Entregar paquete',
          dependencies: ['1'],
        },
      ],
    });
    expect(provider.getExistingDraftOrder).toHaveBeenCalledTimes(1);
    expect(provider.createNewDraftOrder).toHaveBeenCalledTimes(0);
    expect(provider.saveOrder).toHaveBeenCalledTimes(1);
    expect(provider.getDeliveryTask).toHaveBeenCalledTimes(1);
    expect(provider.getPickUpTask).toHaveBeenCalledTimes(1);
  });

  test('It should resolve an updated draft order with the new tasks', async () => {
    expect.assertions(6);

    const provider = {
      getExistingDraftOrder: jest.fn(() => Promise.resolve(undefined)),
      createNewDraftOrder: jest.fn(() =>
        Promise.resolve({
          id: '2',
          status: 'draft' as const,
          userId: '1',
          tasks: [],
        })
      ),
      saveOrder: jest.fn(order => Promise.resolve(order)),
      getDeliveryTask: jest.fn(() =>
        Promise.resolve({
          id: '2',
          type: 'deliver',
          status: 'pending',
          address: {
            department: 'Suchitepequez',
            town: 'PuebloNuevo',
            village: 'Centro',
            address: "Raw's Home",
          },
          instruction: 'Entregar paquete',
        } as const)
      ),
      getPickUpTask: jest.fn(() =>
        Promise.resolve({
          id: '1',
          type: 'pickUp',
          status: 'pending',
          address: {
            department: 'Quetzaltenango',
            town: 'Cantel',
            village: 'Pasac 2',
            address: 'Av. Francisco Rodas 1-54A',
          },
          instruction: 'Recoger paquete',
        } as const)
      ),
    };

    const result = await attachFoodDeliveryTasksUC(provider);

    expect(result).toStrictEqual({
      id: '2',
      status: 'draft',
      userId: '1',
      tasks: [
        {
          id: '1',
          type: 'pickUp',
          status: 'pending',
          address: {
            department: 'Quetzaltenango',
            town: 'Cantel',
            village: 'Pasac 2',
            address: 'Av. Francisco Rodas 1-54A',
          },
          instruction: 'Recoger paquete',
        },
        {
          id: '2',
          type: 'deliver',
          status: 'pending',
          address: {
            department: 'Suchitepequez',
            town: 'PuebloNuevo',
            village: 'Centro',
            address: "Raw's Home",
          },
          instruction: 'Entregar paquete',
          dependencies: ['1'],
        },
      ],
    });
    expect(provider.getExistingDraftOrder).toHaveBeenCalledTimes(1);
    expect(provider.createNewDraftOrder).toHaveBeenCalledTimes(1);
    expect(provider.saveOrder).toHaveBeenCalledTimes(1);
    expect(provider.getDeliveryTask).toHaveBeenCalledTimes(1);
    expect(provider.getPickUpTask).toHaveBeenCalledTimes(1);
  });
});
