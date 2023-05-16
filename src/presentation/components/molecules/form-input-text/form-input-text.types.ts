import type { Control, FieldValues } from 'react-hook-form';

export interface FormInputTextValidations {
  required: boolean;
  pattern?: string;
  customErrorMsg?: string;
}

export interface FormInputTextProps<T extends FieldValues> {
  name: string;
  label: string;
  type?: FormInputType;
  mask?: string;
  fControl: Control<T>;
  validations?: FormInputTextValidations;
  placeholder?: string;
}

export enum FormInputType {
  Text,
  Number,
  Phone,
  Currency,
}
