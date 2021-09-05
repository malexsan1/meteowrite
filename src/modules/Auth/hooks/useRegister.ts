import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { registerSchema, basicInfoSchema } from '../hooks/validationSchemas';
import { authService } from '../AuthAPIService';

export interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  agreeTOC: boolean;
  first_name: string;
  last_name: string;
  company: string;
  job: string;
}

const defaultValues: RegisterFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
  agreeTOC: true,
  company: '',
  job: '',
  first_name: '',
  last_name: '',
};

export type RegisterStepType = 'register' | 'basicInfo' | 'verification';

export const useRegister = () => {
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState<RegisterStepType>('register');

  const schema = useMemo(() => {
    return step === 'register' ? registerSchema : basicInfoSchema;
  }, [step]);

  const { control, handleSubmit, formState } = useForm<RegisterFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(
    ({ email, password, first_name, last_name, company, job }) => {
      setError('');
      if (step === 'register') {
        return authService
          .register({ email, password })
          .then((r: any) => {
            console.log('r -> ', r);
            setStep('basicInfo');
            setUserId(r.id);
          })
          .catch((err) => {
            setError(err.message);
          });
      }

      if (step === 'basicInfo') {
        return authService
          .updateProfile({ first_name, last_name, company, job }, userId)
          .then((r: any) => {
            console.log('dupa update ->', r);
            setStep('verification');
          });
      }
    },
  );

  return {
    step,
    error,
    control,
    onSubmit,
    isLoading: formState.isSubmitting,
  };
};
