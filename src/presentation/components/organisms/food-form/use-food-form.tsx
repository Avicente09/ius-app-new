import { useForm } from 'react-hook-form';

import { defaultValues } from './food-form.config';
import type { UseFoodFormParams } from './use-food-form.types';

export const useFoodForm = (params?: UseFoodFormParams) => {
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
