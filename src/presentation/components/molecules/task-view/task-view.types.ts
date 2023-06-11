import type { EntityId, Order } from '@domain/entities';

export interface TaskViewProps {
  mainTaskId: EntityId;
  order: Order;
  onRemove: (taskId: EntityId) => void;
}
