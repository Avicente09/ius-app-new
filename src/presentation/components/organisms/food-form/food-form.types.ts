import type { FormEventHandler } from 'react';
import type { Control, FieldValues } from 'react-hook-form';

export interface FoodFormFieldValues extends FieldValues {
  restaurant: string;
  menuComboDetailAndQuantity: string;
  /**
   * TODO: Implement real location picker
   */
  deliveryLocation: string;
}

export interface FoodFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  control: Control<FoodFormFieldValues>;
}
