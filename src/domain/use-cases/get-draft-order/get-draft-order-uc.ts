import type { Order } from '@domain/entities';
import type { GetDraftOrderRepository } from '@domain/repositories';

export function getDraftOrderUC(
  provider: GetDraftOrderRepository
): Promise<Order> {
  const { getExistingDraftOrder, createNewDraftOrder } = provider;

  return getExistingDraftOrder().then(order => order ?? createNewDraftOrder());
}
