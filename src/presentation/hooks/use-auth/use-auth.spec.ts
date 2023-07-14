import { useState } from 'react';

import { act, renderHook } from '../../../../test/test-utils';
import { useAuth } from './use-auth';

// TODO: Implement deeper mocks once the tests are completed on the generic hooks
jest.mock('@presentation/context/auth', () => ({
  useAuthContext: jest.fn().mockImplementation(() => {
    const [user, setUser] = useState(null);
    return { user, setUser };
  }),
}));
const mockClear = jest.fn();
jest.mock('@utils/hook/use-loadable-from-local-storage', () => ({
  useLoadableFromLocalStorage: jest.fn().mockImplementation(() => {
    const [data, set] = useState(null);
    return {
      status: 'ready',
      data,
      set,
      clear: mockClear,
      errors: [],
    };
  }),
}));
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('presentation:hooks:use-auth', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('It should render the hook in an initial state', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current).toStrictEqual({
      errors: [],
      login: expect.any(Function),
      logout: expect.any(Function),
      status: 'ready',
      user: null,
    });
  });

  test('It should call the logout callback', async () => {
    expect.assertions(1);

    const { result } = renderHook(() => useAuth());
    await act(() => {
      result.current.logout();
    });

    expect(mockClear).toHaveBeenCalled();
  });

  test('It should call the login callback and verify the user', async () => {
    expect.assertions(1);

    const { result } = renderHook(() => useAuth());
    await act(() => {
      result.current.login({
        id: 'user-id',
        name: 'some user name',
        email: 'user@domain.com',
      });
    });

    expect(result.current).toStrictEqual({
      errors: [],
      login: expect.any(Function),
      logout: expect.any(Function),
      status: 'ready',
      user: {
        id: 'user-id',
        name: 'some user name',
        email: 'user@domain.com',
      },
    });
  });
});
