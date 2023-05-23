import type { GetOrderRepository } from './get-order-repository';

export interface GetDraftOrderRepository {
  getExistingDraftOrder: GetOrderRepository;
  createNewDraftOrder: GetOrderRepository;
}
