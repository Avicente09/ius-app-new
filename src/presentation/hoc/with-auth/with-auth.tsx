import { useAuth } from '@presentation/hooks/use-auth';
import { type ComponentType, type FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import type { WithAuthProps } from './with-auth.types';

export function withAuth<TProps extends JSX.IntrinsicAttributes>(
  Component: ComponentType<TProps>,
  options?: WithAuthProps
): FC<TProps> {
  const { loginPath = '/login' } = options || {};

  return (props: TProps): JSX.Element => {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (!user && !isLoading) {
        navigate(loginPath);
      }
    }, [user, isLoading, navigate]);

    return <Component {...props} />;
  };
}
