import type { Task } from '@domain/entities';
import type { GetTaskRepository } from '@domain/repositories';

import type { CreatePickUpTaskFromPackageFormFieldsFactoryParams } from './create-pick-up-task-from-package-form-fields-factory.types';

export function createPickUpTaskFromPackageFormFieldsFactory({
  fields,
}: CreatePickUpTaskFromPackageFormFieldsFactoryParams): GetTaskRepository {
  return () => {
    const pickUpTask: Task = {
      id: 'PT-1',
      type: 'pickUp',
      status: 'pending',
      // TODO: use the actual field values for address or location
      address: {
        department: 'Quetzaltenango',
        town: 'Cantel',
        village: 'Pasac 2',
        address: 'Av. Francisco Rodas 1-54A',
      },
      instruction: 'Recoger paquete',
    };

    return Promise.resolve(pickUpTask);
  };
}
