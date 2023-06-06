import { CURRENT_ORDER_KEY } from '@config/local-storage-keys';
import type { Order } from '@domain/entities';
import { useLoadableFromLocalStorage } from '@utils/hook/use-loadable-from-local-storage';
import { useCallback } from 'react';

import { useOrderContext } from '../../context/order';

export function useCurrentOrder() {
  const { order: contextOrder, orderSetter: contextSetter } = useOrderContext();

  const {
    data: order,
    set: internalSet,
    errors,
  } = useLoadableFromLocalStorage({
    key: CURRENT_ORDER_KEY,
    initialData: contextOrder,
  });

  const save = useCallback(
    (order: Order) => {
      internalSet(order);
      contextSetter(order);
    },
    [internalSet, contextSetter]
  );

  return {
    order,
    save,
    errors,
  };
}
