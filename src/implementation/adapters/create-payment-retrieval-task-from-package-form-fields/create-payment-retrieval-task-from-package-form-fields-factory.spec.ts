import { createPaymentRetrievalTaskFromPackageFormFieldsFactory } from './create-payment-retrieval-task-from-package-form-fields-factory';

describe('implementation:adapters:create-pick-up-task-from-package-form-fields', () => {
  test('It should  return the payment retrieval task with cashRetrieval option', async () => {
    expect.assertions(1);

    const pickUpTask =
      await createPaymentRetrievalTaskFromPackageFormFieldsFactory({
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
      id: 'PR-1',
      type: 'paymentRetrieval',
      status: 'pending',
      address: {
        department: 'Quetzaltenango',
        town: 'Cantel',
        village: 'Pasac 2',
        address: 'Av. Francisco Rodas 1-54A',
      },
      instruction: 'Entregar dinero en efectivo a la dirección indicada',
    });
  });
  test('It should  return the payment retrieval task with bankDeposit option', async () => {
    expect.assertions(1);

    const pickUpTask =
      await createPaymentRetrievalTaskFromPackageFormFieldsFactory({
        fields: {
          name: 'Shirley Robles',
          phone: '41104365',
          paymentRetrievalOption: 'bankDeposit',
          amount: '45.00',
          bankAccount: '2453453',
          pickUpLocation: 'Some address',
          deliveryLocation: 'Some other address',
          paymentRetrievalLocation: 'Any other location',
        },
      } as any)();

    expect(pickUpTask).toStrictEqual({
      id: 'PR-1',
      type: 'paymentRetrieval',
      status: 'pending',
      address: {
        department: 'Quetzaltenango',
        town: 'Cantel',
        village: 'Pasac 2',
        address: 'Av. Francisco Rodas 1-54A',
      },
      instruction:
        'Depositar el monto del paquete a los datos de la cuenta: 2453453 y enviar foto de comprobante de depósito',
    });
  });
  test('It should  return the payment retrieval task with clientVoucher option', async () => {
    expect.assertions(1);

    const pickUpTask =
      await createPaymentRetrievalTaskFromPackageFormFieldsFactory({
        fields: {
          name: 'Shirley Robles',
          phone: '41104365',
          paymentRetrievalOption: 'clientVoucher',
          amount: '45.00',
          bankAccount: '2453453',
          pickUpLocation: 'Some address',
          deliveryLocation: 'Some other address',
          paymentRetrievalLocation: 'Any other location',
        },
      } as any)();

    expect(pickUpTask).toStrictEqual({
      id: 'PR-1',
      type: 'paymentRetrieval',
      status: 'pending',
      address: {
        department: 'Quetzaltenango',
        town: 'Cantel',
        village: 'Pasac 2',
        address: 'Av. Francisco Rodas 1-54A',
      },
      instruction:
        'Enviar foto de boleta de depósito o comprobante equivalente que muestre el cliente',
    });
  });
});
