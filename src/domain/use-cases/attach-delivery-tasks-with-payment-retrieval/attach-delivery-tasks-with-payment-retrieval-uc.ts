import type { EntityId, Order } from '@domain/entities';
import { AppError } from '@domain/error-definition';
import type { AttachDeliveryTasksWithPaymentRetrievalRepository } from '@domain/repositories';

const addDependencies = (dependencies: EntityId[], newDependency: EntityId) => {
  return [...(dependencies ?? []), newDependency];
};

export function attachDeliveryTasksWithPaymentRetrievalUC(
  provider: AttachDeliveryTasksWithPaymentRetrievalRepository
): Promise<Order> {
  const {
    getExistingDraftOrder,
    createNewDraftOrder,
    saveOrder,
    getDeliveryTask,
    getPickUpTask,
    getPaymentRetrievalTask,
  } = provider;

  return getExistingDraftOrder()
    .then(order =>
      Promise.all([
        order ?? createNewDraftOrder(),
        getPickUpTask(),
        getDeliveryTask(),
        getPaymentRetrievalTask(),
      ])
    )
    .then(([order, pickUpTask, deliveryTask, paymentDeliveryTask]) => {
      deliveryTask.dependencies = addDependencies(
        deliveryTask.dependencies ?? [],
        pickUpTask.id
      );
      paymentDeliveryTask.dependencies = addDependencies(
        paymentDeliveryTask.dependencies ?? [],
        deliveryTask.id
      );
      order.tasks.push(pickUpTask);
      order.tasks.push(deliveryTask);
      order.tasks.push(paymentDeliveryTask);
      return order;
    })
    .then(saveOrder)
    .catch(AppError.rejectionHandler());
}
