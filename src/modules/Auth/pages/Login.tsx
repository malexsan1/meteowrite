import { tw } from 'twind';
import { Link } from 'react-router-dom';

import { Logo } from 'Assets';
import { FormElement, Input, PasswordInput, FormCheckbox } from 'UIKit';

import { useLogin } from '../hooks/useLogin';

export const Login = () => {
  const { onSubmit, control, isLoading, error } = useLogin();

  return (
    <form
      className={tw`
        bg-white flex flex-col w-full h-full p-8
        sm:(h-auto w-3/4 border(1 purple-100) rounded-lg p-16)
        md:w-1/2 xl:w-1/3
      `}
      onSubmit={onSubmit}
    >
      <Logo className={tw`mb-4 self-center`} />
      <h2 className={tw`text-center font-semibold mb-8 text-xl`}>Login</h2>

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
        className={tw`bg-yellow-400 h-12 text-white text-uppercase font-semibold cursor-pointer rounded-md mt-8`}
      >
        {isLoading ? 'Loading...' : 'login'}
      </button>

      {error && <span className={tw`text(center red-500) mt-4`}>{error}</span>}

      <div className={tw`text-center mt-8`}>
        <span>New to meteorwrite?</span>

        <Link
          to="/signup"
          className={tw`border(b-2 purple-100) text-purple-500 ml-2 pb-1`}
        >
          Register
        </Link>
      </div>
    </form>
  );
};
