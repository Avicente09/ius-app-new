import type { GetOptionalOrderRepository } from '@domain/repositories';

import type { GetOrderFromContextFactoryParams } from './get-order-from-context-factory.types';

export function getOrderFromContextFactory(
  params: GetOrderFromContextFactoryParams
): GetOptionalOrderRepository {
  return () => Promise.resolve(params.context.order ?? undefined);
}
