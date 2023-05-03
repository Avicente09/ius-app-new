import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { MainMenu } from '../../components/organisms';
import { NarrowStack } from '../../components/templates';
import { useAuth } from '../../hooks';

export function HomePage(): JSX.Element {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoading) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);

  return (
    <NarrowStack title="SERVICIOS">
      <MainMenu />
    </NarrowStack>
  );
}
