import type { Order } from '@domain/entities';
import type { GetOptionalOrderRepository } from '@domain/repositories';

export function getOptionalOrderUC(
  provider: GetOptionalOrderRepository
): Promise<Order | undefined> {
  return provider();
}
