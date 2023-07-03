import type { ModalType } from './info-modal.types';

export interface InfoModalState {
  isOpen: boolean;
  title: string;
  type: ModalType;
  messages: Array<string>;
}
