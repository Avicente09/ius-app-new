import type { FilledInputProps } from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

import type { CustomProps, FormInputTextProps } from './form-input-text.types';
import { FormInputType } from './form-input-text.types';

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export const FormInputText = ({
  name,
  label,
  type = FormInputType.Text,
  fControl,
  validations,
  placeholder,
}: FormInputTextProps<FieldValues>) => {
  let inputParams: FilledInputProps;
  let elementType: React.HTMLInputTypeAttribute = 'text';
  //determine which type of component is this
  switch (type) {
    case FormInputType.Number: {
      break;
    }
    case FormInputType.Phone: {
      elementType = 'number';
      inputParams = {
        inputComponent: TextMaskCustom as any,
      };
      break;
    }
    case FormInputType.Currency: {
      elementType = 'number';
      inputParams = {
        startAdornment: <InputAdornment position="start">Q</InputAdornment>,
        inputComponent: TextMaskCustom as any,
      };
      break;
    }
  }

  return (
    <Controller
      name={name}
      control={fControl}
      rules={{ required: validations?.required }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={elementType}
          variant="filled"
          error={!!error}
          helperText={error ? validations?.customErrorMsg : ''}
          placeholder={placeholder}
          InputProps={inputParams}
        />
      )}
    />
  );
};
