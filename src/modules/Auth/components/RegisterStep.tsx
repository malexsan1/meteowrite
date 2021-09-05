import { tw } from 'twind';
import { Link } from 'react-router-dom';
import { Control } from 'react-hook-form';

import { Input, FormElement, FormCheckbox, PasswordInput } from 'UIKit';

interface RegisterStepProps {
  error: string;
  isLoading: boolean;
  control: Control<any>;
}

export const RegisterStep: React.FC<RegisterStepProps> = ({
  error,
  control,
  isLoading,
}) => {
  return (
    <>
      <FormElement required id="email" label="Email" control={control}>
        {(field) => <Input {...field} placeholder="Email..." />}
      </FormElement>

      <FormElement
        required
        id="password"
        label="Password"
        className="mt-8"
        control={control}
      >
        {(field) => <PasswordInput {...field} placeholder="Password..." />}
      </FormElement>

      <FormElement
        required
        label="Password"
        className="mt-8"
        control={control}
        id="confirmPassword"
      >
        {(field) => (
          <PasswordInput {...field} placeholder="Confirm Password..." />
        )}
      </FormElement>

      <div className={tw`flex justify-start items-baseline mt-8`}>
        <FormCheckbox id="agreeTOC" control={control}>
          I agree to the Meteowrite
        </FormCheckbox>
        <Link
          to="#"
          className={tw`border(b-2 purple-100) text-purple-500 ml-2 pb-1 mt-4 md:mt-0 self-end md:self-auto`}
        >
          Terms and Conditions
        </Link>
      </div>

      <button
        className={tw`bg-yellow-400 h-12 text-white text-uppercase font-semibold cursor-pointer mt-8`}
      >
        {isLoading ? 'Loading...' : 'create account'}
      </button>

      {error && <span className={tw`text(center red-500) mt-4`}>{error}</span>}

      <div className={tw`text-center mt-8`}>
        <span>Already have an account?</span>

        <Link
          to="/"
          className={tw`border(b-2 purple-100) text-purple-500 ml-2 pb-1`}
        >
          Login
        </Link>
      </div>
    </>
  );
};
