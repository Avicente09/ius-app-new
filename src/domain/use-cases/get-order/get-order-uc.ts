import type { Order } from '@domain/entities';
import type { GetOrderRepository } from '@domain/repositories';

export function getOrderUC(provider: GetOrderRepository): Promise<Order> {
  return provider();
}
