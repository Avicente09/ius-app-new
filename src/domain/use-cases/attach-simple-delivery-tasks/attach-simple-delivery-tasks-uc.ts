import type { Order } from '@domain/entities';
import { AppError } from '@domain/error-definition';
import type { AttachSimpleDeliveryTasksRepository } from '@domain/repositories';

export function attachSimpleDeliveryTasksUC(
  provider: AttachSimpleDeliveryTasksRepository
): Promise<Order> {
  const {
    getExistingDraftOrder,
    createNewDraftOrder,
    saveOrder,
    getDeliveryTask,
    getPickUpTask,
  } = provider;

  return getExistingDraftOrder()
    .then(order =>
      Promise.all([
        order ?? createNewDraftOrder(),
        getPickUpTask(),
        getDeliveryTask(),
      ])
    )
    .then(([order, pickUpTask, deliveryTask]) => {
      deliveryTask.dependencies = [
        ...(deliveryTask?.dependencies ?? []),
        pickUpTask.id,
      ];
      order.tasks.push(pickUpTask);
      order.tasks.push(deliveryTask);
      return order;
    })
    .then(saveOrder)
    .catch(AppError.rejectionHandler());
}
