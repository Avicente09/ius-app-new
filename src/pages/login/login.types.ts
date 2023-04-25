import type { ModalType } from '../../components/info-modal';

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
