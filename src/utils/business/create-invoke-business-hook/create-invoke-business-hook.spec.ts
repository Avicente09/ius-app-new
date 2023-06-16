import { renderHook } from '../../../../test/test-utils';
import { createInvokeBusinessHook } from './create-invoke-business-hook';

describe('utils:business:create-invoke-business-hook', () => {
  test('Create and render hook with idle state', () => {
    expect.assertions(1);

    const mockUseCase = jest.fn();
    const mockProvider = jest.fn();

    const hook = createInvokeBusinessHook(mockUseCase, mockProvider);
    const { result } = renderHook(() => hook(undefined));

    expect(result.current.state).toEqual({
      status: 'idle',
      errors: [],
    });
  });

  test('Create and render hook using a factory provider', () => {
    expect.assertions(2);

    const mockUseCase = jest.fn();
    const mockProviderFactory = jest.fn(_ => jest.fn());
    const wrapMockProvider = (params: any) => mockProviderFactory(params);
    const mockProviderFactoryParams = { foo: 'bar' };

    const hook = createInvokeBusinessHook(mockUseCase, wrapMockProvider);
    const { result } = renderHook(() => hook(mockProviderFactoryParams as any));

    expect(result.current.state).toEqual({
      status: 'idle',
      errors: [],
    });
    expect(mockProviderFactory).toHaveBeenCalledWith(mockProviderFactoryParams);
  });

  // TODO: Add tests for the invoke function and complete coverage
});
