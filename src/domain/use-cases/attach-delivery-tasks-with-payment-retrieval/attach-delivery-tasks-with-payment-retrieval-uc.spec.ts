import { attachDeliveryTasksWithPaymentRetrievalUC } from './attach-delivery-tasks-with-payment-retrieval-uc';

describe('domain:use-cases:attach-delivery-tasks-with-payment-retrieval', () => {
  test('It should resolve an updated existing order with the new tasks', async () => {
    expect.assertions(7);

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
          instruction: 'Entregar a direccion',
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
      getPaymentRetrievalTask: jest.fn(() =>
        Promise.resolve({
          id: '3',
          type: 'paymentRetrieval',
          status: 'pending',
          address: {
            department: 'Quetzaltenango',
            town: 'Cantel',
            village: 'Pasac 2',
            address: 'Av. Francisco Rodas 1-54A',
          },
          instruction: 'Entregar dinero en efectivo a la dirección indicada',
        } as const)
      ),
    };

    const result = await attachDeliveryTasksWithPaymentRetrievalUC(provider);

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
          instruction: 'Entregar a direccion',
          dependencies: ['1'],
        },
        {
          id: '3',
          type: 'paymentRetrieval',
          status: 'pending',
          address: {
            department: 'Quetzaltenango',
            town: 'Cantel',
            village: 'Pasac 2',
            address: 'Av. Francisco Rodas 1-54A',
          },
          instruction: 'Entregar dinero en efectivo a la dirección indicada',
          dependencies: ['2'],
        },
      ],
    });
    expect(provider.getExistingDraftOrder).toHaveBeenCalledTimes(1);
    expect(provider.createNewDraftOrder).toHaveBeenCalledTimes(0);
    expect(provider.saveOrder).toHaveBeenCalledTimes(1);
    expect(provider.getDeliveryTask).toHaveBeenCalledTimes(1);
    expect(provider.getPickUpTask).toHaveBeenCalledTimes(1);
    expect(provider.getPaymentRetrievalTask).toHaveBeenCalledTimes(1);
  });

  test('It should resolve an updated draft order with the new tasks', async () => {
    expect.assertions(7);

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
      getPaymentRetrievalTask: jest.fn(() =>
        Promise.resolve({
          id: '3',
          type: 'paymentRetrieval',
          status: 'pending',
          address: {
            department: 'Quetzaltenango',
            town: 'Cantel',
            village: 'Pasac 2',
            address: 'Av. Francisco Rodas 1-54A',
          },
          instruction: 'Entregar dinero en efectivo a la dirección indicada',
        } as const)
      ),
    };

    const result = await attachDeliveryTasksWithPaymentRetrievalUC(provider);

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
        {
          id: '3',
          type: 'paymentRetrieval',
          status: 'pending',
          address: {
            department: 'Quetzaltenango',
            town: 'Cantel',
            village: 'Pasac 2',
            address: 'Av. Francisco Rodas 1-54A',
          },
          instruction: 'Entregar dinero en efectivo a la dirección indicada',
          dependencies: ['2'],
        },
      ],
    });
    expect(provider.getExistingDraftOrder).toHaveBeenCalledTimes(1);
    expect(provider.createNewDraftOrder).toHaveBeenCalledTimes(1);
    expect(provider.saveOrder).toHaveBeenCalledTimes(1);
    expect(provider.getDeliveryTask).toHaveBeenCalledTimes(1);
    expect(provider.getPickUpTask).toHaveBeenCalledTimes(1);
    expect(provider.getPaymentRetrievalTask).toHaveBeenCalledTimes(1);
  });
});
