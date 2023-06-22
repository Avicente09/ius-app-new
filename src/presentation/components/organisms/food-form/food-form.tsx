import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Form, FormInputText } from '@presentation/components/molecules';

import type { FoodFormProps } from './food-form.types';

export const FoodForm = ({ onSubmit, control }: FoodFormProps) => {
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
            name="restaurant"
            fControl={control}
            label="Restaurante"
            validations={{
              required: true,
              customErrorMsg: 'El campo restaurante es requerido',
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
              customErrorMsg: 'El campo detalle es requerido',
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
              customErrorMsg: 'El campo ubicación de entrega es requerido',
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          mt={theme => theme.spacing(4)}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button type="submit" variant={'contained'}>
            Agregar a la Orden
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};
