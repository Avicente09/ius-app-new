import type { Order } from '@domain/entities';

import { setOrderWithSyncSetterFactory } from './set-order-with-sync-setter-factory';

describe('implementation:adapters:set-order-with-sync-setter', () => {
  test('It should return the order', async () => {
    expect.assertions(2);

    const orderSetter = jest.fn();
    const order = { id: '1' } as Order;
    const saveOrder = setOrderWithSyncSetterFactory({ orderSetter });

    const result = await saveOrder(order);

    expect(result).toStrictEqual(order);
    expect(orderSetter).toHaveBeenCalledWith(order);
  });
});
