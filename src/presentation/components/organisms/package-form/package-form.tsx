import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {
  FormInputText,
  FormInputType,
} from '@presentation/components/molecules';
import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';

interface PackageFormProps {
  onSubmit: (data: FieldValues) => void;
}

const defaultValues: FieldValues = {
  fullName: '',
  phone: '',
  amount: '',
  bankAccount: '',
  mapAddress: '',
};
export const PackageForm = ({ onSubmit }: PackageFormProps) => {
  const { handleSubmit, control } = useForm({ defaultValues });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormInputText
          name="fullName"
          fControl={control}
          label="Nombre Completo"
          validations={{
            required: true,
            customErrorMsg: 'El campo nombre es requerido',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="phone"
          type={FormInputType.Phone}
          fControl={control}
          label="Teléfono"
          placeholder="(502) 5555-5555"
          validations={{
            required: true,
            customErrorMsg: 'El número telefónico es requerido',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="amount"
          type={FormInputType.Currency}
          fControl={control}
          label="Monto del Paquete"
          placeholder="Q0.00"
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="bankAccount"
          fControl={control}
          label="Cuenta bancaria"
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="mapAddress"
          fControl={control}
          label="Posición de entrega"
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
