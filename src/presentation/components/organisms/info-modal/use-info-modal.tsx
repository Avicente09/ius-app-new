import { useObjectReducer } from '@utils/hook/use-object-reducer';
import { useCallback } from 'react';

import { InfoModal } from './info-modal';
import type { InfoModalState } from './use-info-modal.types';

const defaultInitialState: InfoModalState = {
  isOpen: false,
  title: '',
  type: 'neutral',
  messages: [],
};

export const useInfoModal = (initialState?: Partial<InfoModalState>) => {
  const [state, dispatch] = useObjectReducer<InfoModalState>({
    ...defaultInitialState,
    ...initialState,
  });

  const handleClose = useCallback(() => {
    dispatch({ isOpen: false });
  }, [dispatch]);

  // Render control using the state
  const renderedModal = (
    <InfoModal
      open={state.isOpen}
      type={state.type}
      title={state.title}
      messages={state.messages}
      onClose={handleClose}
    />
  );

  return {
    renderedModal,
    updateModalState: dispatch,
    modalState: state,
  };
};
