import { createContext, useContext } from 'react';
import { IUser } from '../business/models';

interface IAuthContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);
export const AuthProvider = AuthContext.Provider;
export const useAuthContext = () => useContext(AuthContext);