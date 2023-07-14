import { MainMenu, useInfoModal } from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
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

  return (
    <NarrowStack title="SERVICIOS">
      <MainMenu />
      {renderedModal}
    </NarrowStack>
  );
}

export const HomePage = withAuth(Page);
