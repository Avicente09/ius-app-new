import type { ModalType } from '@presentation/components/organisms';

export type LoginState = {
  toggleModal: boolean;
  modalTitle: string;
  modalMsg: string;
  modalType: ModalType;
};

export type LoginAction = {
  type: 'modalToggle';
  toggleModal: boolean;
  modalTitle: string;
  modalMsg: string;
  modalType: ModalType;
};
