import { tw } from 'twind';
import { Link } from 'react-router-dom';

import { Input, FormElement } from 'UIKit';

import { AuthForm } from '../components';
import { useResetPassword } from '../hooks/useResetPassword';

export const ResetPassword = () => {
  const { control, onSubmit, isLoading, step, email } = useResetPassword();

  const description =
    step === 'email'
      ? 'Enter your Meteowrite.io email adress so we can reset your password.'
      : `
  An email has been sent to <strong>${email}</strong>. If this email adress is registered to Meteowrite.io, you’ll recieve instructions on how to set a new password.
  `;

  return (
    <AuthForm
      onSubmit={onSubmit}
      description={description}
      title={step === 'email' ? 'Reset your password' : 'Password sent'}
    >
      {step === 'email' && (
        <>
          <FormElement required id="email" label="Email" control={control}>
            {(field) => <Input {...field} placeholder="Email..." />}
          </FormElement>

          <button
            className={tw`bg-yellow-400 h-12 text(white uppercase) font-semibold cursor-pointer mt-8`}
          >
            {isLoading ? 'Loading...' : 'next'}
          </button>

          <div className={tw`text-center mt-8`}>
            <span>Remembered password?</span>

            <Link
              to="/"
              className={tw`border(b-2 purple-100) text-purple-500 ml-2 pb-1`}
            >
              Go back
            </Link>
          </div>
        </>
      )}

      {step === 'confirmation' && (
        <>
          <button
            className={tw`bg-yellow-400 h-12 text(white uppercase) font-semibold cursor-pointer mt-8`}
          >
            enter new password
          </button>

          <Link
            to="/"
            className={tw`border(b-2 purple-100) text-purple-500 ml-2 pb-1 mt-8 self-center`}
          >
            Didn't get an email?
          </Link>
        </>
      )}
    </AuthForm>
  );
};
