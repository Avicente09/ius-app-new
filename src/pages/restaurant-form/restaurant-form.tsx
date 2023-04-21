import { FieldValues, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FormInputText } from '../../components';

const defaultValues: FieldValues = {
  firstName: '',
  lastName: '',
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
      <FormInputText name="lastName" fControl={control} label="Apellido" />

      <Button onClick={handleSubmit(onSubmit)} variant={'contained'}>
        Submit
      </Button>
    </Paper>
  );
};
