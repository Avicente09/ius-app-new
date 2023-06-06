import type { IUser } from '@domain/entities';
import { useAuthContext } from '@presentation/context/auth';
import { useCallback, useEffect, useState } from 'react';

export const useAuth = () => {
  const context = useAuthContext();
  const [user, setUser] = useState(context?.user ?? null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userItem = localStorage.getItem('user');
    const user = userItem ? (JSON.parse(userItem) as IUser) : null;
    if (userItem) {
      context?.setUser(user);
      setUser(user);
    }
    setIsLoading(false);
  }, [context]);

  const login = useCallback(
    (user: IUser) => {
      localStorage.setItem('user', JSON.stringify(user));
      context?.setUser(user);
      setUser(user);
    },
    [context]
  );

  const logout = useCallback(() => {
    context?.setUser(null);
    setUser(null);
    localStorage.removeItem('user');
  }, [context]);

  return { user, login, logout, isLoading };
};
