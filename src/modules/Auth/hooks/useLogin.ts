import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { authService } from '../AuthAPIService';

const requiredMessage = 'This field is required';
const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const loginSchema = yup.object().shape({
  password: yup.string().trim().required(requiredMessage),
  email: yup
    .string()
    .trim()
    .required(requiredMessage)
    .matches(emailRegexp, 'Invalid email.'),
});

const defaultValues: LoginFormValues = {
  email: '',
  password: '',
  rememberMe: false,
};

export const useLogin = () => {
  const [error, setError] = useState('');

  const { control, handleSubmit, formState, register } =
    useForm<LoginFormValues>({
      defaultValues,
      resolver: yupResolver(loginSchema),
    });

  const onSubmit = handleSubmit((values) => {
    setError('');
    return authService.login(values).catch((err: Error) => {
      setError(err.message);
    });
  });

  return {
    error,
    control,
    onSubmit,
    register,
    isLoading: formState.isSubmitting,
  };
};
