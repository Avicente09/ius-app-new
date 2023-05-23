import type { EntityId } from './entity';
import type { Order } from './order';

export const TRIP_STATUSES = [
  'pending',
  'inProgress',
  'completed',
  'cancelled',
  'rejected',
] as const;
export type TripStatus = typeof TRIP_STATUSES[number];

export interface Trip {
  id: EntityId;
  orders: Order[];
  status: TripStatus;
}
