import { renderHook } from '../../../../test/test-utils';
import { useLoadableFromLocalStorage } from './use-loadable-from-local-storage';

const mockSetItem = jest.fn();
const mockGetItem = jest.fn();
Object.defineProperty(global, 'localStorage', {
  value: {
    setItem: mockSetItem,
    getItem: mockGetItem,
  },
});

describe('storage:save-object', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    mockSetItem.mockClear();
    mockGetItem.mockClear();
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

  // TODO: Add tests for clear and set functions to complete the coverage
});
