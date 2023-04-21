import { Controller, FieldValues } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FormInputProps } from './form-input-text.types';

export const FormInputText = ({
  name,
  label,
  fControl,
  validations,
}: FormInputProps<FieldValues>) => {
  return (
    <Controller
      name={name}
      control={fControl}
      rules={{ required: validations?.required }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          error={!!error}
          helperText={error ? validations?.customErrorMsg : ''}
        />
      )}
    />
  );
};
