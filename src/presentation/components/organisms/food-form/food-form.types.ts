import type { FieldValues } from 'react-hook-form';

export interface FoodFormFieldValues extends FieldValues {
  restaurant: string;
  menuComboDetailAndQuantity: string;
  /**
   * TODO: Implement real location picker
   */
  deliveryLocation: string;
}

export interface FoodFormProps {
  onSubmit: (data: FoodFormFieldValues) => void;
}
