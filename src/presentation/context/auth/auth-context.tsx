import type { IUser } from '@domain/entities';
import type { PropsWithChildren } from 'react';
import { createContext, useContext, useState } from 'react';

interface IAuthContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: PropsWithChildren): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context.setUser) {
    throw new Error('AuthContext is not initialized');
  }

  return context;
};
