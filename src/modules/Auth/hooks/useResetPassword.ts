import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { emailSchema } from './validationSchemas';

export type ResetPasswordStep = 'email' | 'confirmation';

export const useResetPassword = () => {
  const [step, setStep] = useState<ResetPasswordStep>('email');
  const { control, handleSubmit, formState, watch } = useForm<{
    email: string;
  }>({
    defaultValues: { email: '' },
    resolver: yupResolver(emailSchema),
  });

  const email = watch('email');

  const onSubmit = handleSubmit(() => {
    console.log('Sending an email...');
    setStep('confirmation');
  });

  return {
    step,
    email,
    control,
    onSubmit,
    isLoading: formState.isSubmitting,
    isSuccessful: formState.isSubmitSuccessful,
  };
};
