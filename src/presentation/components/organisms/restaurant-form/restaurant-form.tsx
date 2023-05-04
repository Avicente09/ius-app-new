import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {
  FormInputText,
  FormInputType,
} from '@presentation/components/molecules';
import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';

const defaultValues: FieldValues = {
  firstName: '',
  phone: '',
  money: '',
};
export const RestaurantForm = () => {
  const { handleSubmit, control } = useForm({ defaultValues });
  const onSubmit = (data: FieldValues) => console.log('My form data: ', data);

  return (
    <Paper>
      <Typography variant="h6"> Form Demo </Typography>
      <Typography variant="h6"> Look console to see form data </Typography>
      <FormInputText
        name="firstName"
        fControl={control}
        label="Nombre"
        validations={{
          required: true,
          customErrorMsg: 'El campo nombre es requerido',
        }}
      />
      <FormInputText
        name="phone"
        type={FormInputType.Phone}
        fControl={control}
        label="Phone"
      />
      <FormInputText
        name="money"
        type={FormInputType.Currency}
        fControl={control}
        label="Salary"
      />

      <Button onClick={handleSubmit(onSubmit)} variant={'contained'}>
        Submit
      </Button>
    </Paper>
  );
};
