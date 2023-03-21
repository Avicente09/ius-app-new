export type ModalProps = {
  type: ModalType;
  title?: string;
  message: string;
  open?: boolean;
  onClose: () => void;
};

export enum ModalType {
  Success,
  Warning,
  Error,
  Info,
}
