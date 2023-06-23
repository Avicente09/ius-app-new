import type { Order } from '@domain/entities';

import { renderPage } from '../../../test/test-utils';
import { FoodPage, providerFactory } from './food-page';

describe('pages:food', () => {
  test('It should render without crashing', () => {
    expect(() => renderPage(<FoodPage />)).not.toThrow();
  });

  test('It should create a provider manually and match the structure', () => {
    const order = { id: '1' } as Order;
    const save = jest.fn();
    const getValues = jest.fn().mockReturnValue({});

    const provider = providerFactory({ order, save, getValues });

    expect(provider).toStrictEqual({
      getExistingDraftOrder: expect.any(Function),
      createNewDraftOrder: expect.any(Function),
      saveOrder: expect.any(Function),
      getPickUpTask: expect.any(Function),
      getDeliveryTask: expect.any(Function),
    });
  });

  // TODO: Actually test the page behavior
});
