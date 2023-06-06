import {
  InfoModal,
  MainMenu,
  ModalType,
} from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
import { useEffect, useReducer } from 'react';

import type {
  LoginAction,
  LoginState,
} from '../../pages/login/login-page.types';

const loginReducer = (
  state: LoginState,
  action: Partial<LoginAction>
): LoginState => {
  switch (action.type) {
    case 'modalToggle':
      return { ...state, ...action } as LoginState;
    default:
      return { ...state } as LoginState;
  }
};

const initialState: LoginState = {
  toggleModal: false,
  modalTitle: '',
  modalMsgs: [''],
  modalType: ModalType.Info,
};

function Page(): JSX.Element {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const handleCloseModal = () =>
    dispatch({ type: 'modalToggle', toggleModal: false });

  const triggerModal = () => {
    //Logic to show privacy text modal
    dispatch({
      type: 'modalToggle',
      toggleModal: true,
      modalTitle: 'Terminos y Condiciones',
      modalMsgs: [
        'Somos una empresa totalmente independiente de cualquier lugar, por lo que no podemos regresar ningún producto salido de tienda, por lo que pedimos que su pedido sea 100% seguro para que podamos seguir brindando este servicio, confiable, seguro y con el beneficio de pago contra entrega.',
        'Si luego de leer nuestra única condición y desea solicitar nuestro servicio presione aceptar',
      ],
      modalType: ModalType.Neutro,
    });
  };

  useEffect(() => {
    triggerModal();
  }, []);

  return (
    <NarrowStack title="SERVICIOS">
      <MainMenu />
      <InfoModal
        onClose={handleCloseModal}
        open={state.toggleModal}
        title={state.modalTitle}
        type={state.modalType}
        messages={state.modalMsgs}
      />
    </NarrowStack>
  );
}

export const HomePage = withAuth(Page);
