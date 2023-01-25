import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import axios, { AxiosError } from 'axios';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { CustomAlert } from '../../Components';
import { loginUser } from '../../API/userAPI';
import RoutesList from '../../Layout/RoutesList';
import { userStore, appStore } from '../../Stores';
import {
  renderLoginFields,
  loginValidationSchema,
  IUserForSignIn,
  IUser,
  localStorageSetItem,
  ServerError
} from '../../Helpers';

const theme = createTheme();

export const LoginPage: React.FC = () => {
  const history = useNavigate();
  const { SignUp, UserAccount } = RoutesList;
  const [msgAlert, setMsgAlert] = useState('');

  const [setIsAuth, setUser] = userStore((state) => [
    state.setIsAuth,
    state.setUser
  ]);
  const [setAlert] = appStore((state) => [state.setAlert]);

  const loginUserHandler = async (values: IUserForSignIn) => {
    try {
      const userData = (await loginUser(values)) as unknown as IUser;
      localStorageSetItem('user', JSON.stringify(userData));
      setIsAuth(true);
      setUser(userData);
      setAlert(false);
      history(UserAccount);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          setMsgAlert(serverError.response.data.message);
        }
      } else setMsgAlert('Unexpected error');
      setAlert(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '90vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#b5b7ba',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              validationSchema={loginValidationSchema}
              onSubmit={(values: IUserForSignIn) => {
                setTimeout(() => {
                  loginUserHandler(values);
                }, 500);
              }}
            >
              <Form>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '550px'
                  }}
                >
                  {renderLoginFields}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Login
                  </Button>
                </Box>

                <CustomAlert severity="error" msg={msgAlert} />
                <Grid container>
                  <Grid item>
                    <Link to={SignUp} className="authLink">
                      Do not have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
