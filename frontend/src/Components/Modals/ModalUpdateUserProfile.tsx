import React from 'react';
import { Field, Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';

import { updateUserProfile } from '../../API/userAPI';

import {
  ValidationTextField,
  UpdateUserProfileValidationSchema,
  IModalEditProfileChildren,
  IUpdateUserProfile,
  IUser,
  localStorageSetItem
} from '../../Helpers';
import { userStore } from '../../Stores';

export const ModalUpdateUserProfile = ({
  handleCloseModal,
  FieldToChange
}: IModalEditProfileChildren) => {
  const [setUser, user] = userStore((state) => [state.setUser, state.user]);
  const { email } = user;

  const modifyField = () => {
    if (FieldToChange === 'First Name') {
      return 'firstName';
    }
    if (FieldToChange === 'Last Name') {
      return 'lastName';
    }
  };

  const updateUserProfileHandler = async (values: IUpdateUserProfile) => {
    const userData = (await updateUserProfile(values)) as unknown as IUser;
    localStorageSetItem('user', JSON.stringify(userData));
    setUser(userData);
    handleCloseModal();
  };

  return (
    <>
      <DialogContentText>
        Please enter your new {FieldToChange}
      </DialogContentText>
      <Formik
        initialValues={{
          email,
          firstName: '',
          lastName: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={UpdateUserProfileValidationSchema}
        onSubmit={(values) => {
          setTimeout(() => {
            updateUserProfileHandler(values);
          }, 500);
        }}
      >
        <Form>
          {FieldToChange === 'Password' ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '415px'
              }}
            >
              <Field
                name="password"
                type="password"
                label={`Enter ${FieldToChange}`}
                margin="normal"
                autoFocus
                fullWidth
                component={ValidationTextField}
              />
              <Field
                id="input-with-sx"
                name="confirmPassword"
                type="password"
                label={`Confirm your ${FieldToChange}`}
                margin="normal"
                fullWidth
                component={ValidationTextField}
              />
            </Box>
          ) : (
            <Field
              name={modifyField()}
              label={`Enter ${FieldToChange}`}
              margin="normal"
              autoFocus
              fullWidth
              component={ValidationTextField}
            />
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Change {FieldToChange}
          </Button>
        </Form>
      </Formik>
    </>
  );
};
