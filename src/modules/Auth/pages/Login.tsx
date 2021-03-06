import { tw } from 'twind';
import { Link } from 'react-router-dom';

import { Input, FormElement, FormCheckbox, PasswordInput } from 'UIKit';

import { AuthForm } from '../components';
import { useLogin } from '../hooks/useLogin';

export const Login = () => {
  const { onSubmit, control, isLoading, error } = useLogin();

  return (
    <AuthForm title="Login" onSubmit={onSubmit}>
      <FormElement id="email" label="Email" control={control}>
        {(field) => <Input {...field} placeholder="Email..." />}
      </FormElement>

      <FormElement
        id="password"
        label="Password"
        className="mt-8"
        control={control}
      >
        {(field) => <PasswordInput {...field} placeholder="Password..." />}
      </FormElement>

      <div
        className={tw`mt-8 flex flex-col items-start md:flex-row justify-between`}
      >
        <FormCheckbox id="rememberMe" control={control}>
          Remember me
        </FormCheckbox>

        <Link
          to="/reset-password"
          className={tw`border(b-2 purple-100) text-purple-500 ml-2 pb-1 mt-4 md:mt-0 self-end md:self-auto`}
        >
          Forgot password?
        </Link>
      </div>

      <button
        className={tw`bg-yellow-400 h-12 text-white text-uppercase font-semibold cursor-pointer mt-8`}
      >
        {isLoading ? 'Loading...' : 'login'}
      </button>

      {error && <span className={tw`text(center red-500) mt-4`}>{error}</span>}

      <div className={tw`text-center mt-8`}>
        <span>New to meteorwrite?</span>

        <Link
          to="/register"
          className={tw`border(b-2 purple-100) text-purple-500 ml-2 pb-1`}
        >
          Register
        </Link>
      </div>
    </AuthForm>
  );
};
