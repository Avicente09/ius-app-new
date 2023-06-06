import type { SaveOrderRepository } from '@domain/repositories';

import type { SetOrderWithSyncSetterFactoryParams } from './set-order-with-sync-setter-factory.types';

export function setOrderWithSyncSetterFactory(
  params: SetOrderWithSyncSetterFactoryParams
): SaveOrderRepository {
  return order => {
    params.orderSetter(order);
    return Promise.resolve(order);
  };
}
