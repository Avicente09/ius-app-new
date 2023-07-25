import type { Task } from '@domain/entities';
import type { GetTaskRepository } from '@domain/repositories';

import type { CreateDeliveryTaskFromLittleErrandsFormFieldsFactoryParams } from './create-delivery-task-from-little-errands-form-fields-factory.type';

export function createDeliveryTaskFromLittleErrandsFormFieldsFactory({
  fields,
}: CreateDeliveryTaskFromLittleErrandsFormFieldsFactoryParams): GetTaskRepository {
  return () => {
    const deliveryTask: Task = {
      id: '1',
      type: 'deliver',
      status: 'pending',
      // TODO: use the actual field values for address or location
      address: {
        department: 'Suchitepequez',
        town: 'PuebloNuevo',
        village: 'Centro',
        address: "Raw's Home",
      },
      instruction:
        'Comprar una compu y pedir factura 4123123-4 en 38.8951,-77.0364 y entregar en 32.8951,-80.0364',
    };

    return Promise.resolve(deliveryTask);
  };
}
