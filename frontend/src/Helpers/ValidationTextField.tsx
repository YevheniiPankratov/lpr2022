/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FieldProps, getIn } from 'formik';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export const ValidationTextField: React.FC<FieldProps & TextFieldProps> = (
  props
) => {
  const { error, helperText, field, form, ...rest } = props;

  const isTouched = getIn(form.touched, field.name);
  const errorMessage = getIn(form.errors, field.name);

  return (
    <TextField
      variant="outlined"
      error={error ?? Boolean(isTouched && errorMessage)}
      helperText={
        helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
      }
      {...rest}
      {...field}
    />
  );
};
