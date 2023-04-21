import { Control, FieldValues } from 'react-hook-form';

export interface FormInputProps<T extends FieldValues> {
  name: string;
  label: string;
  fControl: Control<T>;
  validations?: {
    required: boolean;
    pattern?: string;
    customErrorMsg?: string;
  };
}
