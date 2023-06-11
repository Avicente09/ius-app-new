import type { EntityId, Order } from '@domain/entities';

export function isChild(taskId: EntityId, order: Order): boolean {
  const parentTask = order.tasks.find(task =>
    task.dependencies?.includes(taskId)
  );
  return !!parentTask;
}
