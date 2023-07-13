import { useForm } from 'react-hook-form';

import { defaultValues } from './package-form.config';
import type { UsePackageFormParams } from './use-package-form.types';

export const usePackageForm = (params?: UsePackageFormParams) => {
  const { handleSubmit, control, getValues } = useForm({
    defaultValues,
    values: params?.values,
  });

  return {
    handleSubmit,
    control,
    getValues,
  };
};
