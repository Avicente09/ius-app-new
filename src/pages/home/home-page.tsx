import { MainMenu, useInfoModal } from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
import { useAuth } from '@presentation/hooks/use-auth';
import { useEffect } from 'react';

import { notifications } from './home-page.config';

function Page(): JSX.Element {
  const { renderedModal, updateModalState } = useInfoModal({
    title: notifications.termsAndConditions.title,
    messages: notifications.termsAndConditions.messages,
  });

  useEffect(() => {
    updateModalState({ isOpen: true });
  }, [updateModalState]);

  const { logout } = useAuth();

  return (
    <NarrowStack title="SERVICIOS">
      <MainMenu />
      {renderedModal}
      <button onClick={logout}>LOGOUT</button>
    </NarrowStack>
  );
}

export const HomePage = withAuth(Page);
