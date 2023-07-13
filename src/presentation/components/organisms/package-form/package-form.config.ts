import type { PackageFormFieldValues } from './package-form.types';

export const defaultValues: PackageFormFieldValues = {
  name: '',
  phone: '',
  amount: '',
  bankAccount: '',
  pickUpLocation: '',
  deliveryLocation: '',
  paymentRetrievalOption: 'cashRetrieval',
  paymentRetrievalLocation: '',
};
