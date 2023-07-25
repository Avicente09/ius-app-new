import type { FieldValues } from 'react-hook-form';

export interface ProfileFormFieldValues extends FieldValues {
  name: string;
  // TODO: define type, masking and standarization to handle dates
  birthdate: string;
  email: string;
  phone: string;
  // TODO: define type and handling of array of addresses
  addresses?: string;
  picture?: any;
}

export interface ProfileFormProps {
  onSubmit: (data: FieldValues) => void;
}
