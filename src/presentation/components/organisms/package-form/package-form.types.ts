import type { FormEventHandler } from 'react';
import type { Control, FieldValues } from 'react-hook-form';

export const PAYMENT_RETRIEVAL_OPTIONS = [
  'bankDeposit',
  'clientVoucher',
  'cashRetrieval',
] as const;
export type PaymentRetrievalOption = typeof PAYMENT_RETRIEVAL_OPTIONS[number];
export interface PackageFormFieldValues extends FieldValues {
  name: string;
  phone: string;
  amount?: string;
  bankAccount?: string;
  /**
   * TODO: Implement real select component for paymentRetrievalOption
   */
  paymentRetrievalOption: PaymentRetrievalOption;
  /**
   * TODO: Implement real location picker
   */
  pickUpLocation: string;
  deliveryLocation: string;
  paymentRetrievalLocation?: string;
}

export interface PackageFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  control: Control<PackageFormFieldValues>;
}
