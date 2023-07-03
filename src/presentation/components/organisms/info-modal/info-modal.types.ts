export type ModalProps = {
  type: ModalType;
  title?: string;
  messages?: Array<string>;
  open?: boolean;
  onClose: () => void;
};

export const MODAL_TYPES = [
  'success',
  'warning',
  'error',
  'info',
  'neutral',
] as const;

export type ModalType = typeof MODAL_TYPES[number];
