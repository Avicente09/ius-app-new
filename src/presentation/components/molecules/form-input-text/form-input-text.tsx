import TextField from '@mui/material/TextField';
import * as React from 'react';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { NumericFormat, PatternFormat } from 'react-number-format';

import type { FormInputTextProps } from './form-input-text.types';
import { FormInputType } from './form-input-text.types';

export const FormInputText = ({
  name,
  label,
  type = FormInputType.Text,
  fControl,
  validations,
  placeholder,
}: FormInputTextProps<FieldValues>) => {
  let typedComponent: React.ReactNode;

  //Functions to render every component according to its type
  const phoneInput = (): React.ReactNode => {
    return (
      <Controller
        name={name}
        control={fControl}
        rules={{ required: validations?.required }}
        render={({ field, fieldState: { error } }) => (
          <PatternFormat
            format="(502) ####-####"
            mask="_"
            value={field.value}
            name={field.name}
            onChange={field.onChange}
            customInput={TextField}
            label={label}
            error={!!error}
            variant="filled"
            helperText={error ? validations?.customErrorMsg : ''}
            placeholder={placeholder}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      />
    );
  };
  const currencyInput = (): React.ReactNode => {
    return (
      <Controller
        name={name}
        control={fControl}
        rules={{ required: validations?.required }}
        render={({ field, fieldState: { error } }) => (
          <NumericFormat
            customInput={TextField}
            value={field.value}
            name={field.name}
            onChange={field.onChange}
            prefix="Q"
            decimalScale={2}
            label={label}
            error={!!error}
            helperText={error ? validations?.customErrorMsg : ''}
            placeholder={placeholder}
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      />
    );
  };
  const numericInput = (): React.ReactNode => {
    return (
      <Controller
        name={name}
        control={fControl}
        rules={{ required: validations?.required }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={label}
            type="number"
            variant="filled"
            error={!!error}
            helperText={error ? validations?.customErrorMsg : ''}
            placeholder={placeholder}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      />
    );
  };

  const textInput = (): React.ReactNode => {
    return (
      <Controller
        name={name}
        control={fControl}
        rules={{ required: validations?.required }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={label}
            variant="filled"
            error={!!error}
            helperText={error ? validations?.customErrorMsg : ''}
            placeholder={placeholder}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      />
    );
  };

  //determine which type of component is this
  switch (type) {
    case FormInputType.Currency:
      typedComponent = currencyInput();
      break;
    case FormInputType.Phone:
      typedComponent = phoneInput();
      break;
    case FormInputType.Number:
      typedComponent = numericInput();
      break;

    default:
      typedComponent = textInput();
  }
  return <>{typedComponent}</>;
};
