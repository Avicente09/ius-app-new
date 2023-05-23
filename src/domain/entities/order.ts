import type { EntityId } from './entity';
import type { Task } from './task';

export const ORDER_STATUSES = [
  'draft',
  'placed',
  'inProgress',
  'completed',
  'cancelled',
  'rejected',
] as const;

export type OrderStatus = typeof ORDER_STATUSES[number];

export interface Order {
  id: EntityId;
  tasks: Task[];
  status: OrderStatus;
  userId: EntityId;
}
