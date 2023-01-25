import React from 'react';
import { Field } from 'formik';
import Grid from '@mui/material/Grid';
import { ValidationTextField } from './ValidationTextField';
import { IAuthField } from './commonInterfaces';

const loginFields: IAuthField[] = [
  {
    name: 'email',
    label: 'Email Address',
    margin: 'normal',
    type: 'email',
    autoFocus: true
  },
  {
    name: 'password',
    label: 'Password',
    margin: 'normal',
    type: 'password'
  }
];

const signUpFields: IAuthField[] = [
  {
    name: 'firstName',
    label: 'First Name *',
    autoFocus: true
  },
  {
    name: 'lastName',
    label: 'Last Name *'
  },
  {
    name: 'email',
    label: 'Email Address *',
    type: 'email'
  },
  {
    name: 'password',
    label: 'Password *',
    type: 'password'
  },
  {
    name: 'confirmPassword',
    label: 'Confirm your password *',
    type: 'password'
  }
];

export const renderLoginFields = loginFields.map((item: IAuthField) => {
  const { name, label, autoFocus, type } = item;
  return (
    <Field
      key={name}
      name={name}
      type={type}
      label={label}
      margin="normal"
      autoFocus={autoFocus}
      fullWidth
      component={ValidationTextField}
    />
  );
});

export const renderSignUpFields = signUpFields.map((item: IAuthField) => {
  const { name, label, autoFocus, type } = item;
  return (
    <Grid item xs={12} key={name}>
      <Field
        name={name}
        type={type}
        label={label}
        autoFocus={autoFocus}
        fullWidth
        component={ValidationTextField}
      />
    </Grid>
  );
});
