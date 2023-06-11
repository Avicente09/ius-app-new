import type { EntityId, Order, Task } from '@domain/entities';

export function getChildren(
  taskId: EntityId,
  order: Order
): Task[] | undefined {
  let children: Task[] | undefined = undefined;
  const mainTask = order.tasks.find(task => task.id === taskId);

  if (order.tasks?.length > 0 && mainTask) {
    const possibleChildren = mainTask.dependencies
      ?.map(dependencyId => order.tasks.find(task => task.id === dependencyId))
      .filter(Boolean) as Task[] | undefined;

    if (possibleChildren && possibleChildren.length > 0)
      children = possibleChildren;
  }

  return children;
}
