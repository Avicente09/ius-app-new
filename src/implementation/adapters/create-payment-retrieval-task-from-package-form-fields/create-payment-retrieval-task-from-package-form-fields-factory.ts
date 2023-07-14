import type { Task } from '@domain/entities';
import type { GetTaskRepository } from '@domain/repositories';

import type { CreatePaymentRetrievalTaskFromPackageFormFieldsFactoryParams } from './create-payment-retrieval-task-from-package-form-fields-factory.types';

export function createPaymentRetrievalTaskFromPackageFormFieldsFactory({
  fields,
}: CreatePaymentRetrievalTaskFromPackageFormFieldsFactoryParams): GetTaskRepository {
  return () => {
    let instructions: string = '';
    switch (fields.paymentRetrievalOption) {
      case 'bankDeposit': {
        instructions = `Depositar el monto del paquete a los datos de la cuenta: ${fields.bankAccount} y enviar foto de comprobante de depósito`;
        break;
      }
      case 'cashRetrieval': {
        instructions = 'Entregar dinero en efectivo a la dirección indicada';
        break;
      }
      case 'clientVoucher': {
        instructions =
          'Enviar foto de boleta de depósito o comprobante equivalente que muestre el cliente';
        break;
      }
    }
    const paymentRetrievalTask: Task = {
      // TODO: generate unique id according to task type
      id: 'PR-1',
      type: 'paymentRetrieval',
      status: 'pending',
      // TODO: use the actual field values for address or location
      address: {
        department: 'Quetzaltenango',
        town: 'Cantel',
        village: 'Pasac 2',
        address: 'Av. Francisco Rodas 1-54A',
      },
      instruction: instructions,
    };

    return Promise.resolve(paymentRetrievalTask);
  };
}
