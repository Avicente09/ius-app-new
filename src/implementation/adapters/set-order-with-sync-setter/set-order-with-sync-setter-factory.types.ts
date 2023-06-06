import type { Order } from '@domain/entities';

export interface SetOrderWithSyncSetterFactoryParams {
  orderSetter: (order: Order) => void;
}
