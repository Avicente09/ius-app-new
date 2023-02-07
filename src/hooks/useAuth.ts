import { useState, useEffect } from 'react';
import { useAuthContext } from '../context/authContext';
import { IUser } from '../business/models';

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

  const login = (user: IUser) => {
    localStorage.setItem('user', JSON.stringify(user));
    context?.setUser(user);
    setUser(user);
  };

  const logout = () => {
    context?.setUser(null);
    setUser(null);
    localStorage.removeItem('user');
  };

  return { user, login, logout, isLoading };
};
