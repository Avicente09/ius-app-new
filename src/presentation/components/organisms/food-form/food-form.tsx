import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { FormInputText } from '@presentation/components/molecules';
import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';

interface FoodFormProps {
  onSubmit: (data: FieldValues) => void;
}

const defaultValues: FieldValues = {
  restaurant: '',
  menuComboDetailAndQuantity: '',
  deliveryLocation: '',
};
export const FoodForm = ({ onSubmit }: FoodFormProps) => {
  const { handleSubmit, control } = useForm({ defaultValues });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormInputText
          name="restaurant"
          fControl={control}
          label="Restaurante"
          validations={{
            required: true,
            customErrorMsg: 'El campo nombre es requerido',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="menuComboDetailAndQuantity"
          fControl={control}
          label="Detalle de Menú o Combo y Cantidad"
          validations={{
            required: true,
            customErrorMsg: 'El campo nombre es requerido',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="deliveryLocation"
          fControl={control}
          label="Ubicación de entrega"
          validations={{
            required: true,
            customErrorMsg: 'El campo nombre es requerido',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleSubmit(onSubmit)} variant={'contained'}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
