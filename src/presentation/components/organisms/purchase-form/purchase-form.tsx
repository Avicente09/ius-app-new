import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { FormInputText } from '@presentation/components/molecules';
import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';

interface PurchaseFormProps {
  onSubmit: (data: FieldValues) => void;
}

const defaultValues: FieldValues = {
  shopPlace: '',
  buyPosition: '',
  purchaseDetail: '',
  referencePhotos: '',
  deliveryLocationl: '',
};
export const PurchaseForm = ({ onSubmit }: PurchaseFormProps) => {
  const { handleSubmit, control } = useForm({ defaultValues });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormInputText
          name="shopPlace"
          fControl={control}
          label="Lugar de Compra"
          validations={{
            required: true,
            customErrorMsg: 'El campo lugar de compra es requerido',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="buyPosition"
          fControl={control}
          label="Posicion de Compra"
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="purchaseDetail"
          fControl={control}
          label="Detalle de Compra"
          validations={{
            required: true,
            customErrorMsg: 'El campo detalle de compra es requerido',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="referencePhotos"
          fControl={control}
          label="Fotos de referencia"
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="deliveryLocationl"
          fControl={control}
          label="Ubicación de entrega"
          validations={{
            required: true,
            customErrorMsg: 'El campo ubicación de entrega es requerido',
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
