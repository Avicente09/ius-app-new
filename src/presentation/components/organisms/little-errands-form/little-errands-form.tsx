import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  Form,
  FormInputText,
  FormInputType,
} from '@presentation/components/molecules';

import type { LittleErrandsFormProps } from './little-errands-form.types';

export const LittleErrandsForm = ({
  onSubmit,
  control,
}: LittleErrandsFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} marginBottom={theme => theme.spacing(4)}>
          <Typography align="center" variant="h6">
            Detalla lo más específico posible.
          </Typography>
        </Grid>
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
        <Grid
          item
          xs={12}
          mt={theme => theme.spacing(4)}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Button type="submit" variant={'contained'}>
            Agregar a la Orden
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};
