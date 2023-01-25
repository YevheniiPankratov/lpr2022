import axios from 'axios';
import jwt_decode from 'jwt-decode';

import {
  IUserForSignIn,
  IUser,
  IToken,
  localStorageSetItem,
  tokenFromLS,
  IUpdateUserProfile,
  IS3BucketUrl,
  bodyTypeForPuttingImgToS3Bucket,
  IimageFile
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

export const updateUserProfile = async (body: IUpdateUserProfile) => {
  const { data }: { data: IToken } = await $authHost.put(
    'api/user/updateUserProfile',
    body
  );
  localStorageSetItem('token', data.token);
  return jwt_decode(data.token);
};

export const updateUserAvatar = async (body: IimageFile) => {
  const { data }: { data: IS3BucketUrl } = await $authHost.get(
    'api/user/s3Url',
    { data: body }
  );
  return data;
};

export const putImgToS3Bucket = async (
  body: bodyTypeForPuttingImgToS3Bucket
) => {
  const { url, imageFile } = body;
  await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: imageFile
  });
};
