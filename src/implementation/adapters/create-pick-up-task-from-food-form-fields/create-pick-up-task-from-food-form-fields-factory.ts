import type { Task } from '@domain/entities';
import type { GetTaskRepository } from '@domain/repositories';

import type { CreatePickUpTaskFromFoodFormFieldsFactoryParams } from './create-pick-up-task-from-food-form-fields-factory.types';

export function createDeliveryTaskFromFoodFormFieldsFactory({
  fields,
}: CreatePickUpTaskFromFoodFormFieldsFactoryParams): GetTaskRepository {
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
      instruction: fields.instruction,
    };

    return Promise.resolve(pickUpTask);
  };
}
