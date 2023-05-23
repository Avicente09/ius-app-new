import type { Order } from '../entities';

export interface PlaceOrderRepository {
  (order: Order): Promise<Order>;
}
