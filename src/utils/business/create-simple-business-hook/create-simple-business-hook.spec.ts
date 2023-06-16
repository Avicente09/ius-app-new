import { renderHook } from '../../../../test/test-utils';
import { createSimpleBusinessHook } from './create-simple-business-hook';

describe('src/utils/business/create-simple-business-hook', () => {
  test('Create and render hook with loading state', () => {
    expect.assertions(1);

    const mockUseCase = jest.fn(() => Promise.resolve());
    const mockProvider = jest.fn();

    const hook = createSimpleBusinessHook(mockUseCase, mockProvider);
    const { result } = renderHook(() => hook(undefined, undefined));

    expect(result.current).toEqual({
      status: 'loading',
      errors: [],
    });
  });

  test('Create and render hook using a factory provider', () => {
    expect.assertions(2);

    const mockUseCase = jest.fn(() => Promise.resolve());
    const mockProviderFactory = jest.fn(_ => jest.fn());
    const wrapMockProvider = (params: any) => mockProviderFactory(params);
    const mockProviderFactoryParams = { foo: 'bar' };

    const hook = createSimpleBusinessHook(mockUseCase, wrapMockProvider);
    const { result } = renderHook(() =>
      hook(undefined, mockProviderFactoryParams as any)
    );

    expect(result.current).toEqual({
      status: 'loading',
      errors: [],
    });
    expect(mockProviderFactory).toHaveBeenCalledWith(mockProviderFactoryParams);
  });

  // TODO: Add test for more mutations on the state and complete the converage
});
