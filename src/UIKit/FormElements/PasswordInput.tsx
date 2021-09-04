import { tw } from 'twind';
import React, { useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

type InputType = 'text' | 'password';
type CombinedProps = Omit<ControllerRenderProps, 'ref'> &
  React.HTMLProps<HTMLInputElement>;

interface PasswordInputProps extends CombinedProps {
  id: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  type,
  className = '',
  ...props
}) => {
  const [inputType, setInputType] = useState<InputType>('password');

  const toggleInputType = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInputType((t) => (t === 'password' ? 'text' : 'password'));
  };

  return (
    <div className={tw`flex ${className}`}>
      <input
        className={tw`focus:outline-none flex-1`}
        type={inputType}
        {...props}
      />

      <button
        type="button"
        onClick={toggleInputType}
        className={tw`bg-purple-200 text-purple-800 text-uppercase font-semibold p-1 text-xs`}
      >
        {inputType === 'password' ? 'Show' : 'Hide'}
      </button>
    </div>
  );
};
