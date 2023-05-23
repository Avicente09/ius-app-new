import type { Order } from '../entities';

export interface GetOrderRepository {
  (): Promise<Order>;
}
