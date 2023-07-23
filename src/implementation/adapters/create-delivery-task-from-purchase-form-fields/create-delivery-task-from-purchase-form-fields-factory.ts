import type { Task } from '@domain/entities';
import type { GetTaskRepository } from '@domain/repositories';

import type { CreateDeliveryTaskFromPurchaseFormFieldsFactoryParams } from './create-delivery-task-from-purchase-form-fields-factory.types';

export function createDeliveryTaskFromPurchaseFormFieldsFactory({
    fields,
}: CreateDeliveryTaskFromPurchaseFormFieldsFactoryParams): GetTaskRepository {
    return () => {
        const deliveryTask: Task = {
            id: '2',
            type: 'deliver',
            status: 'pending',
            // TODO: use the actual field values for address or location
            address: {
                department: 'Suchitepequez',
                town: 'PuebloNuevo',
                village: 'Centro',
                address: "Raw's Home",
            },
            instruction: 'Entregar a direccion',
        };

        return Promise.resolve(deliveryTask);
    };
}
