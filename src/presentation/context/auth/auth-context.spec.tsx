import { render, renderHook } from '@testing-library/react';

import { AuthProvider, useAuthContext } from './auth-context';

describe('presentation:context:auth', () => {
  describe('OrderProvider', () => {
    test('It should render without crashing', () => {
      expect(() => render(<AuthProvider />)).not.toThrow();
    });
  });

  describe('useOrderContext', () => {
    test('It should throw an error if used outside of OrderProvider', () => {
      expect(() => renderHook(() => useAuthContext())).toThrow();
    });

    test('It should return the context if used inside of OrderProvider', () => {
      const { result } = renderHook(() => useAuthContext(), {
        wrapper: AuthProvider,
      });

      expect(result.current).toBeDefined();
    });
  });
});
