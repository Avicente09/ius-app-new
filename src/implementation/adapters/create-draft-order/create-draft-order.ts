import type { Order } from '@domain/entities';
import type { GetOrderRepository } from '@domain/repositories';

export const createDraftOrder: GetOrderRepository = () => {
  const draftOrder: Order = {
    id: undefined,
    userId: undefined,
    status: 'draft',
    tasks: [],
  };

  return Promise.resolve(draftOrder);
};
