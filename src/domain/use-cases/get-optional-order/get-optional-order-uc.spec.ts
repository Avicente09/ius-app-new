import type { Order } from '@domain/entities';

import { getOptionalOrderUC } from './get-optional-order-uc';

describe('domain:use-cases:get-optional-order', () => {
  test('It should invoke the provider and resolve the order', async () => {
    expect.assertions(2);

    const mockProvider = jest.fn(() => Promise.resolve({ id: '1' } as Order));

    const result = await getOptionalOrderUC(mockProvider);

    expect(result).toStrictEqual({ id: '1' });
    expect(mockProvider).toHaveBeenCalledTimes(1);
  });
});
