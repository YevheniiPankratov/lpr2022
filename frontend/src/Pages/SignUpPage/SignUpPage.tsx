import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { signUp } from '../../API/userAPI';
import RoutesList from '../../Layout/RoutesList';
import { userStore, appStore } from '../../Stores';
import {
  renderSignUpFields,
  signUpValidationSchema,
  IUser,
  initialUser,
  localStorageSetItem
} from '../../Helpers';
import { CustomAlert } from '../../Components';

const theme = createTheme();

export const SignUpPage: React.FC = () => {
  const history = useNavigate();
  const { Login, UserAccount } = RoutesList;
  const [msgAlert, setMsgAlert] = useState('');

  const [setIsAuth, setUser] = userStore((state) => [
    state.setIsAuth,
    state.setUser
  ]);
  const [setAlert] = appStore((state) => [state.setAlert]);

  const signUpUserHandler = async (values: IUser) => {
    try {
      const { firstName, lastName, email, password, role } = values;
      const resonse: unknown = await signUp({
        email,
        password,
        firstName,
        lastName,
        role
      });
      const userData: IUser = resonse as IUser;
      localStorageSetItem('user', JSON.stringify(userData));
      setIsAuth(true);
      setUser(userData);
      history(UserAccount);
      setAlert(false);
    } catch (error: any) {
      setMsgAlert(error.response.data.message);
      setAlert(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Formik
            initialValues={{ ...initialUser, confirmPassword: '' }}
            validationSchema={signUpValidationSchema}
            onSubmit={(values: IUser) => {
              setTimeout(() => {
                signUpUserHandler(values);
              }, 500);
            }}
          >
            <Form>
              <Grid m={1} container spacing={1}>
                {renderSignUpFields}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 2 }}
              >
                Sign Up
              </Button>
              <Grid ml={2}>
                <CustomAlert severity="error" msg={msgAlert} />
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid mb={3} item>
                  <Link to={Login} className="authLink">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
