import type { GetOptionalOrderRepository } from './get-optional-order-repository';
import type { GetOrderRepository } from './get-order-repository';
import type { GetTaskRepository } from './get-task-repository';
import type { SaveOrderRepository } from './save-order-repository';

export interface AttachFoodDeliveryTasksRepository {
  getExistingDraftOrder: GetOptionalOrderRepository;
  createNewDraftOrder: GetOrderRepository;
  saveOrder: SaveOrderRepository;
  getPickUpTask: GetTaskRepository;
  getDeliveryTask: GetTaskRepository;
}
