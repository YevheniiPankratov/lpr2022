/* eslint-disable no-unused-vars */
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
