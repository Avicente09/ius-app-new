import { useAuth } from '@presentation/hooks/use-auth';
import { type ComponentType, type FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import type { WithAuthProps } from './with-auth.types';

export function withAuth<TProps extends JSX.IntrinsicAttributes>(
  Component: ComponentType<TProps>,
  options?: WithAuthProps
): FC<TProps> {
  const {
    loginPath = '/login',
    homePath = '/home',
    isLoginPage = false,
  } = options || {};

  return (props: TProps): JSX.Element => {
    const { user, status } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (status === 'ready') {
        if (isLoginPage && user) {
          navigate(homePath);
        } else if (!isLoginPage && !user) {
          navigate(loginPath);
        }
      }
    }, [user, status, navigate]);

    return <Component {...props} />;
  };
}
