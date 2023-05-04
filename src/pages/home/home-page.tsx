import { MainMenu } from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { useAuth } from '@presentation/hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
