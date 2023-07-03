import { act, renderHook } from '../../../../test/test-utils';
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

  test('Create and render the hook using a factory provider', () => {
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
    expect(mockProviderFactory).not.toHaveBeenCalledWith(
      mockProviderFactoryParams
    );
  });

  test('Create, render and invoke the hook using a factory provider', async () => {
    expect.assertions(3);

    const mockUseCase = jest.fn().mockImplementation(() => Promise.resolve());
    const mockProviderFactory = jest.fn(_ => jest.fn());
    const wrapMockProvider = (params: any) => mockProviderFactory(params);
    const mockProviderFactoryParams = { foo: 'bar' };

    const hook = createInvokeBusinessHook(mockUseCase, wrapMockProvider);
    const { result } = renderHook(() => hook(mockProviderFactoryParams as any));

    expect(result.current.state).toEqual({
      status: 'idle',
      errors: [],
    });
    expect(mockProviderFactory).not.toHaveBeenCalled();

    await act(() => {
      result.current.invoke({});
    });

    expect(mockProviderFactory).toHaveBeenCalledWith(mockProviderFactoryParams);
  });

  test('Create, render and invoke the hook using a fixed provider', async () => {
    expect.assertions(2);

    const mockUseCase = jest.fn().mockImplementation(() => Promise.resolve());
    const mockProvider = { foo: 'bar' };

    const hook = createInvokeBusinessHook(mockUseCase, mockProvider);
    const { result } = renderHook(() => hook());

    expect(result.current.state).toEqual({
      status: 'idle',
      errors: [],
    });

    await act(() => {
      result.current.invoke('some-param');
    });

    expect(mockUseCase).toHaveBeenCalledWith(mockProvider, 'some-param');
  });

  test('Create, render and invoke a failing hook', async () => {
    expect.assertions(3);
    const mockUseCase = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error('some-error')));
    const mockProvider = { foo: 'bar' };

    const hook = createInvokeBusinessHook(mockUseCase, mockProvider);
    const { result } = renderHook(() => hook());

    expect(result.current.state).toEqual({
      status: 'idle',
      errors: [],
    });

    await act(() => {
      result.current.invoke('some-param');
    });

    expect(mockUseCase).toHaveBeenCalledWith(mockProvider, 'some-param');
    expect(result.current.state).toStrictEqual({
      status: 'error',
      errors: expect.any(Array),
    });
  });

  // TODO: Add tests for complex scenarios
});
