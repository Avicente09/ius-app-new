import { USER_KEY } from '@config/local-storage-keys';
import type { IUser } from '@domain/entities';
import { useAuthContext } from '@presentation/context/auth';
import { useLoadableFromLocalStorage } from '@utils/hook/use-loadable-from-local-storage';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const { user: contextUser, setUser: contextSetter } = useAuthContext();

  // TODO: Remove this hack in order to solve the logout refresh problem
  const navigate = useNavigate();

  const {
    status,
    data: internalUser,
    set: internalSet,
    clear: internalClear,
    errors,
  } = useLoadableFromLocalStorage({
    key: USER_KEY,
    initialData: contextUser,
  });

  const login = useCallback(
    (user: IUser) => {
      internalSet(user);
      contextSetter(user);
    },
    [internalSet, contextSetter]
  );

  const logout = useCallback(() => {
    internalClear();
    contextSetter(null);

    // TODO: Remove this hack in order to solve the logout refresh problem
    navigate('/login');
  }, [contextSetter, internalClear, navigate]);

  const user = useMemo(() => {
    return contextUser || internalUser
      ? { ...contextUser, ...internalUser }
      : null;
  }, [contextUser, internalUser]);

  return {
    user,
    login,
    logout,
    errors,
    status,
  };
};
