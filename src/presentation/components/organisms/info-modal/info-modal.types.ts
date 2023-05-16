export type ModalProps = {
  type: ModalType;
  title?: string;
  messages?: Array<string>;
  open?: boolean;
  onClose: () => void;
};

export enum ModalType {
  Success,
  Warning,
  Error,
  Info,
  Neutro,
}
