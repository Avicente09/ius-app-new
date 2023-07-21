import { TERMS_AND_CONDITIONS_KEY } from '@config/local-storage-keys';
import { useInfoModal } from '@presentation/components/organisms';
import { useLoadableFromLocalStorage } from '@utils/hook/use-loadable-from-local-storage';
import { useEffect } from 'react';

import { notifications } from './use-terms-and-conditions-modal.config';

export const useTermsAndConditionsModal = () => {
  const {
    data: tcAcceptedAt,
    set: setTcAcceptedAt,
    status: tcAcceptedAtStatus,
  } = useLoadableFromLocalStorage({ key: TERMS_AND_CONDITIONS_KEY });

  const { renderedModal, updateModalState } = useInfoModal(
    {
      title: notifications.termsAndConditions.title,
      messages: notifications.termsAndConditions.messages,
    },
    () => setTcAcceptedAt(new Date().toISOString())
  );

  useEffect(() => {
    if (tcAcceptedAtStatus === 'ready' && !tcAcceptedAt)
      updateModalState({ isOpen: true });
  }, [tcAcceptedAt, tcAcceptedAtStatus, updateModalState]);

  return {
    renderedModal,
  };
};
