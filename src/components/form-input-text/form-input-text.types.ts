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

export interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export enum FormInputType {
  Text,
  Number,
  Phone,
  Currency,
}
