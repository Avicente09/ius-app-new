import type { GetOptionalOrderRepository } from './get-optional-order-repository';
import type { GetOrderRepository } from './get-order-repository';

export interface GetDraftOrderRepository {
  getExistingDraftOrder: GetOptionalOrderRepository;
  createNewDraftOrder: GetOrderRepository;
}
