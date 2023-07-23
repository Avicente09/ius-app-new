import type { Task } from '@domain/entities';
import type { GetTaskRepository } from '@domain/repositories';

import type { CreatePickUpTaskFromPurchaseFormFieldsFactoryParams } from './create-pick-up-task-from-purchase-form-fields-factory.types';
export function createPickUpTaskFromPurchaseFormFieldsFactory({
  fields,
}: CreatePickUpTaskFromPurchaseFormFieldsFactoryParams): GetTaskRepository {
  return () => {
    const pickUpTask: Task = {
      id: '1',
      type: 'pickUp',
      status: 'pending',
      // TODO: use the actual field values for address or location
      address: {
        department: 'Quetzaltenango',
        town: 'Cantel',
        village: 'Pasac 2',
        address: 'Av. Francisco Rodas 1-54A',
      },
      instruction: `Comprar: ${fields.purchaseDetail} en ${fields.shopPlace}`,
    };

    return Promise.resolve(pickUpTask);
  };
}
