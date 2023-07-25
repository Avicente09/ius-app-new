import { useForm } from 'react-hook-form';

import { defaultValues } from './little-errands-form.config';
import type { UseLittleErrandsFormParams } from './use-little-errands-form.types';

export const useLittleErrandsForm = (params?: UseLittleErrandsFormParams) => {
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
