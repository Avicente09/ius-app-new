import type { FormEventHandler } from 'react';
import type { Control, FieldValues } from 'react-hook-form';

export interface LittleErrandsFormFieldValues extends FieldValues {
  withdrawalAddress: string;
  deliveryAddress: string;
  thirdPartyName: string;
  thirdPartyPhone: string;
  cancelAmountSomewhere: string;
  dontHaveCancelAnything: string;
  additionalInstructions: string;
}

export interface LittleErrandsFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  control: Control<LittleErrandsFormFieldValues>;
}
