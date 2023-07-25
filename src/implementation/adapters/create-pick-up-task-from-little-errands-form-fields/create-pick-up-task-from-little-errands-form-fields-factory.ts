import type { Task } from '@domain/entities';
import type { GetTaskRepository } from '@domain/repositories';

import type { CreatePickUpTaskFromLittleErrandsFormFieldsFactoryParams } from './create-pick-up-task-from-little-errands-form-fields-factory.types';
export function createPickUpTaskFromLittleErrandsFormFieldsFactory({
  fields,
}: CreatePickUpTaskFromLittleErrandsFormFieldsFactoryParams): GetTaskRepository {
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
      instruction: `Comprar una compu y pedir factura 4123123-4 en ${fields.withdrawalAddress} y entregar en ${fields.deliveryAddress}`,
    };

    return Promise.resolve(pickUpTask);
  };
}
