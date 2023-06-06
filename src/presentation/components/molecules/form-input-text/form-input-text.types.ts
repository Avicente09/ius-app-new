import type { Control, FieldValues, Path } from 'react-hook-form';

export interface FormInputTextValidations {
  required: boolean;
  pattern?: string;
  customErrorMsg?: string;
}

export interface FormInputTextProps<T extends FieldValues> {
  name: Path<T>;
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
