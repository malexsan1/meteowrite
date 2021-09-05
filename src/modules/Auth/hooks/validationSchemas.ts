import * as yup from 'yup';

const requiredMessage = 'This field is required';
const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required(requiredMessage)
    .matches(emailRegexp, 'Invalid email'),
});

export const loginSchema = emailSchema.shape({
  password: yup.string().trim().required(requiredMessage),
});

export const registerSchema = loginSchema.shape({
  confirmPassword: yup
    .string()
    .trim()
    .required(requiredMessage)
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});

export const basicInfoSchema = yup.object().shape({
  first_name: yup.string().required(requiredMessage),
  last_name: yup.string().required(requiredMessage),
});
