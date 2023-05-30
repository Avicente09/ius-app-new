import type { SaveOrderRepository } from '@domain/repositories';

import type { SetOrderToContextFactoryParams } from './set-order-to-context-factory.types';

export function setOrderToContextFactory(
  params: SetOrderToContextFactoryParams
): SaveOrderRepository {
  return order => {
    params.context.orderSetter(order);
    return Promise.resolve(order);
  };
}
