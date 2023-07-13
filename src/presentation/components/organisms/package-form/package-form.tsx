import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {
  Form,
  FormInputText,
  FormInputType,
} from '@presentation/components/molecules';

import type { PackageFormProps } from './package-form.types';

export const PackageForm = ({ onSubmit, control }: PackageFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormInputText
            name="name"
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
            fControl={control}
            type={FormInputType.Phone}
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
            name="paymentRetrievalOption"
            fControl={control}
            label="Opción de entrega de pago"
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputText
            name="amount"
            type={FormInputType.Currency}
            fControl={control}
            label="Monto del paquete"
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
            name="pickUpLocation"
            fControl={control}
            label="Dirección para recoger paquete"
            validations={{
              required: true,
              customErrorMsg: 'La dirección para recoger paquete es requerida',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputText
            name="deliveryLocation"
            fControl={control}
            label="Dirección de entrega"
            validations={{
              required: true,
              customErrorMsg: 'La dirección de entrega es requerida',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputText
            name="paymentRetrievalLocation"
            fControl={control}
            label="Dirección para entrega del dinero"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant={'contained'}>
            Agregar a la Orden
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};
