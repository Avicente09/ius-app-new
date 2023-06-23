import { act, renderHook } from '../../../../test/test-utils';
import { useLoadableFromLocalStorage } from './use-loadable-from-local-storage';

const mockSetItem = jest.fn();
const mockGetItem = jest.fn();
const mockRemoveItem = jest.fn();
Object.defineProperty(global, 'localStorage', {
  value: {
    setItem: mockSetItem,
    getItem: mockGetItem,
    removeItem: mockRemoveItem,
  },
});

describe('storage:save-object', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    mockSetItem.mockClear();
    mockGetItem.mockClear();
    mockRemoveItem.mockClear();
  });

  test('It should render the hook with ready state', () => {
    expect.assertions(1);

    const { result } = renderHook(() =>
      useLoadableFromLocalStorage({
        initialData: undefined,
        key: 'foo',
      })
    );

    expect(result.current).toEqual({
      status: 'ready',
      errors: [],
      data: undefined,
      clear: expect.any(Function),
      set: expect.any(Function),
    });
  });

  test('It should render the hook and set a value', async () => {
    expect.assertions(2);

    const { result } = renderHook(() =>
      useLoadableFromLocalStorage<string | undefined>({
        initialData: undefined,
        key: 'foo',
      })
    );

    await act(() => {
      result.current.set('bar');
    });

    expect(mockSetItem).toBeCalledWith('foo', '"bar"');

    expect(result.current).toStrictEqual({
      status: 'ready',
      errors: [],
      data: 'bar',
      clear: expect.any(Function),
      set: expect.any(Function),
    });
  });

  test('It should render the hook and clear a value', async () => {
    expect.assertions(2);

    const { result } = renderHook(() =>
      useLoadableFromLocalStorage<string | undefined>({
        initialData: undefined,
        key: 'foo',
      })
    );

    await act(() => {
      result.current.clear();
    });

    expect(mockRemoveItem).toBeCalledWith('foo');

    expect(result.current).toStrictEqual({
      status: 'ready',
      errors: [],
      clear: expect.any(Function),
      set: expect.any(Function),
    });
  });

  // TODO: Add tests for clear and set functions to complete the coverage
});
