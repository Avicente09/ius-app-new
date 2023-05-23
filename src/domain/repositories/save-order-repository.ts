import type { Order } from '../entities';

export interface SaveOrderRepository {
  (order: Order): Promise<Order>;
}
