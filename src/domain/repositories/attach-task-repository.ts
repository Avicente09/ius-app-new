import type { GetOrderRepository } from './get-order-repository';
import type { SaveOrderRepository } from './save-order-repository';

export interface AttachTaskRepository {
  getExistingDraftOrder: GetOrderRepository;
  createNewDraftOrder: GetOrderRepository;
  saveOrder: SaveOrderRepository;
}
