import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {
  FormInputText,
  FormInputType,
} from '@presentation/components/molecules';
import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';

interface LittleErrandsProps {
  onSubmit: (data: FieldValues) => void;
}

const defaultValues: FieldValues = {
  withdrawalAddress: '',
  deliveryAddress: '',
  thirdPartyName: '',
  thirdPartyPhone: '',
  cancelAmountSomewhere: '',
  dontHaveCancelAnything: '',
  additionalInstructions: '',
};
export const LittleErrandsForm = ({ onSubmit }: LittleErrandsProps) => {
  const { handleSubmit, control } = useForm({ defaultValues });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormInputText
          name="withdrawalAddress"
          fControl={control}
          label="Dirección de Retiro"
          validations={{
            required: true,
            customErrorMsg: 'El campo dirección de retiro es requerido',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="deliveryAddress"
          fControl={control}
          label="Dirección de Entrega"
          validations={{
            required: true,
            customErrorMsg: 'El campo dirección de entrega es requerido',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="thirdPartyName"
          fControl={control}
          label="Nombre de Terceros"
          validations={{
            required: true,
            customErrorMsg: 'El campo nombre de terceros es requerido',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="thirdPartyPhone"
          type={FormInputType.Phone}
          fControl={control}
          label="Teléfono de Terceros"
          validations={{
            required: true,
            customErrorMsg: 'El campo teléfono de terceros es requerido',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="cancelAmountSomewhere"
          type={FormInputType.Currency}
          fControl={control}
          label="Cancelar cantidad en algún lugar"
          validations={{
            required: true,
            customErrorMsg: 'El campo cancelar algo es requerido',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="dontHaveCancelAnything"
          fControl={control}
          label="No tienes que cancelar nada"
          validations={{
            required: true,
            customErrorMsg: 'El campo no tiene que cancelar es requerido',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          name="additionalInstructions"
          fControl={control}
          label="Instrucciones Adicionales"
          validations={{
            required: true,
            customErrorMsg: 'El campo intrucciones adicionales es requerido',
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
