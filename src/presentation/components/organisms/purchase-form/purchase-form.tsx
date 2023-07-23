import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Form, FormInputText } from '@presentation/components/molecules';

import type { PurchaseFormProps } from './purchase-form.types'

export const PurchaseForm = ({ onSubmit, control }: PurchaseFormProps) => {
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
        <Grid item xs={12} mt={theme => theme.spacing(4)} sx={{ display: 'flex', justifyContent: 'center', }}>
          <Button type="submit" variant={'contained'}>
            Agregar a la Orden
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};
