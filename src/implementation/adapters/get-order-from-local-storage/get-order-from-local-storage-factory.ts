import type { Order } from '@domain/entities';
import type { GetOrderRepository } from '@domain/repositories';

export function getOrderFromLocalStorageFactory(): GetOrderRepository {
  return () => {
    //TODO: Actually implement this
    return Promise.resolve({} as Order);
  };
}
