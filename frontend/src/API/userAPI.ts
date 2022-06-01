import axios from 'axios';
import jwt_decode from 'jwt-decode';

import {
  IUserForSignIn,
  IUser,
  IToken,
  localStorageSetItem,
  tokenFromLS
} from '../Helpers';

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${tokenFromLS}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export const signUp = async (body: IUser) => {
  const { data }: { data: IToken } = await $authHost.post(
    'api/user/registration',
    body
  );
  localStorageSetItem('token', data.token);
  return jwt_decode(data.token);
};

export const loginUser = async (body: IUserForSignIn) => {
  const { data }: { data: IToken } = await $authHost.post(
    'api/user/login',
    body
  );
  localStorageSetItem('token', data.token);
  return jwt_decode(data.token);
};
