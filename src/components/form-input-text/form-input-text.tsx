import TextField from '@mui/material/TextField';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import type { FormInputTextProps } from './form-input-text.types';

export const FormInputText = ({
  name,
  label,
  fControl,
  validations,
  placeholder,
}: FormInputTextProps<FieldValues>) => {
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
          placeholder={placeholder}
        />
      )}
    />
  );
};
