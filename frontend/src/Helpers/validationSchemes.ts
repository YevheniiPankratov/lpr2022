/* eslint-disable no-useless-escape */
import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required('Required field')
    .matches(
      /^[^\s\-]+[a-zA-Z\-\][\w\d]+\@[\w]+\.[a-zA-Z]+$/,
      'Enter valid email'
    ),
  password: Yup.string()
    .required('Required field')
    .matches(
      /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{3,}$/,
      'The password must contain at least 6 characters, only letters and numbers, password must contain at least 1 uppercase, 1 small and 1 digit'
    )
});

export const signUpValidationSchema = Yup.object({
  firstName: Yup.string()
    .required('Required field')
    .min(3, 'First Name is too short')
    .max(20, 'First Name is too long'),
  lastName: Yup.string()
    .required('Required field')
    .min(3, 'Last Name is too short')
    .max(20, 'Last Name is too long'),
  email: Yup.string()
    .required('Required field')
    .matches(
      /^[^\s\-]+[a-zA-Z\-\][\w\d]+\@[\w]+\.[a-zA-Z]+$/,
      'Enter valid email'
    ),
  password: Yup.string()
    .required('Required field')
    .matches(
      /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{3,}$/,
      'The password must contain at least 6 characters, only letters and numbers, password must contain at least 1 uppercase, 1 small and 1 digit'
    ),
  confirmPassword: Yup.string()
    .required('Required field')
    .when('password', {
      is: (val: string) => val && val.length > 0,
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Both password need to be the same'
      )
    }),
  role: Yup.string()
});
