/* eslint-disable no-unused-vars */

import React from 'react';

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  id?: number;
  password?: string;
  confirmPassword?: string;
  role: string;
  exp?: number;
  iat?: number;
}

export interface IToken {
  token: string;
}

export interface IUserForSignIn {
  email: string;
  password: string;
}

export interface IAppStore {
  loading: boolean;
  alert: boolean;
  setAlert: (alert: boolean) => void;
  setLoading: (loading: boolean) => void;
}

export interface IUserStore {
  isAuth: boolean;
  user: IUser;
  setIsAuth: (isAuth: boolean) => void;
  setUser: (user: IUser) => void;
}

export interface IAuthField {
  name: string;
  label: string;
  margin?: string;
  autoFocus?: boolean;
  type?: string;
}

export const initialUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: 'USER'
};

export type ServerError = { message: string };

export interface IChangeInfoModal {
  isOpenModal: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
}

export interface IModalEditProfileChildren {
  handleCloseModal: () => void;
  FieldToChange: string;
}

export interface IUpdateUserProfile {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface IimageFile {
  imageFile: File;
}

export interface IS3BucketUrl {
  url: string;
}

export type bodyTypeForPuttingImgToS3Bucket = IS3BucketUrl & IimageFile;
