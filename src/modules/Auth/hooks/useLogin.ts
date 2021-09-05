import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { authService } from '../AuthAPIService';
import { loginSchema } from './validationSchemas';

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const defaultValues: LoginFormValues = {
  email: '',
  password: '',
  rememberMe: false,
};

export const useLogin = () => {
  const { push } = useHistory();
  const [error, setError] = useState('');

  const { control, handleSubmit, formState, register } =
    useForm<LoginFormValues>({
      defaultValues,
      resolver: yupResolver(loginSchema),
    });

  const onSubmit = handleSubmit((values) => {
    setError('');
    return authService
      .login(values)
      .then(() => {
        push('/dashboard');
      })
      .catch((err: Error) => {
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
