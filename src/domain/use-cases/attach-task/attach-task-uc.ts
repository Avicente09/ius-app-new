import type { Order, Task } from '@domain/entities';
import type { AttachTaskRepository } from '@domain/repositories';

export function attachTaskUC(
  provider: AttachTaskRepository,
  task: Task
): Promise<Order> {
  const { getExistingDraftOrder, createNewDraftOrder, saveOrder } = provider;

  return getExistingDraftOrder()
    .then(order => order || createNewDraftOrder())
    .then(order => {
      // TODO: Improve this logic with validations and error handling
      order.tasks.push(task);
      return order;
    })
    .then(saveOrder);
}
