import { render, renderHook } from '@testing-library/react';

import { OrderProvider, useOrderContext } from './order-context';

describe('presentation:context:order', () => {
  describe('OrderProvider', () => {
    test('It should render without crashing', () => {
      expect(() => render(<OrderProvider />)).not.toThrow();
    });
  });

  describe('useOrderContext', () => {
    test('It should throw an error if used outside of OrderProvider', () => {
      expect(() => renderHook(() => useOrderContext())).toThrow();
    });

    test('It should return the context if used inside of OrderProvider', () => {
      const { result } = renderHook(() => useOrderContext(), {
        wrapper: OrderProvider,
      });

      expect(result.current).toBeDefined();
    });
  });
});
