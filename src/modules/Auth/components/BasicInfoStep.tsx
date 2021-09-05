import { tw } from 'twind';
import { Control } from 'react-hook-form';

import { Input, FormElement } from 'UIKit';

interface BasicInfoStepProps {
  error: string;
  isLoading: boolean;
  control: Control<any>;
}

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({
  control,
  error,
  isLoading,
}) => {
  return (
    <>
      <FormElement
        required
        id="first_name"
        label="First Name"
        control={control}
      >
        {(field) => <Input {...field} placeholder="First name..." />}
      </FormElement>

      <FormElement
        required
        id="last_name"
        className="mt-8"
        label="Last Name"
        control={control}
      >
        {(field) => <Input {...field} placeholder="Last name..." />}
      </FormElement>

      <FormElement
        id="company"
        label="Company"
        className="mt-8"
        control={control}
      >
        {(field) => (
          <Input {...field} placeholder="Where are you working right now?" />
        )}
      </FormElement>

      <FormElement
        id="job"
        className="mt-8"
        control={control}
        label="Company Role"
      >
        {(field) => (
          <Input {...field} placeholder="What is your role in the company?" />
        )}
      </FormElement>

      <button
        className={tw`bg-yellow-400 h-12 text-white text-uppercase font-semibold cursor-pointer mt-8`}
      >
        {isLoading ? 'Loading...' : 'sign up'}
      </button>

      {error && <span className={tw`text(center red-500) mt-4`}>{error}</span>}
    </>
  );
};
