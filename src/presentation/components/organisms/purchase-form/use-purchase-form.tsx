import { useForm } from 'react-hook-form';

import { defaultValues } from './purchase-form.config';
import type { UsePurchaseFormParams } from './use-purchase-form.type';

export const usePurchaseForm = (params?: UsePurchaseFormParams) => {
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
