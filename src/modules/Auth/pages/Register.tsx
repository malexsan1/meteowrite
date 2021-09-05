import { tw } from 'twind';

import { VerificationIcon } from 'Assets';

import { useRegister, RegisterStepType } from '../hooks/useRegister';
import {
  AuthForm,
  RegisterStep,
  BasicInfoStep,
  VerificationStep,
} from '../components';

const stepValues: Record<
  RegisterStepType,
  { title: string; description?: string; icon?: React.ReactNode }
> = {
  basicInfo: {
    title: 'Basic information',
    description:
      'This is a placeholder description of why we need to know this type of information.',
  },
  register: { title: 'Register' },
  verification: {
    title: 'A verification link has been sent to your email account',
    description:
      'Please click on the link that has just been sent to your email account to verify your email and continue the registration process.',
    icon: <VerificationIcon className={tw`self-center`} />,
  },
};

export const Register = () => {
  const { control, onSubmit, error, isLoading, step } = useRegister();

  return (
    <AuthForm
      onSubmit={onSubmit}
      icon={stepValues[step].icon}
      title={stepValues[step].title}
      description={stepValues[step].description}
    >
      {step === 'register' && (
        <RegisterStep control={control} error={error} isLoading={isLoading} />
      )}
      {step === 'basicInfo' && (
        <BasicInfoStep control={control} error={error} isLoading={isLoading} />
      )}
      {step === 'verification' && (
        <VerificationStep isLoading={isLoading} error={error} />
      )}
    </AuthForm>
  );
};
