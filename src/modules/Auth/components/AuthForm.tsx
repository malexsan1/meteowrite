import { tw } from 'twind';
import React from 'react';

import { LogoIcon } from 'Assets';

interface AuthFormProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  onSubmit(): void;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  icon,
  title,
  children,
  onSubmit,
  description,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className={tw`
    bg-white flex flex-col w-full h-full p-8
    sm:(h-auto w-4/5 border(1 purple-100) rounded-lg p-12)
    md:w-2/3 xl:w-1/2
  `}
    >
      <LogoIcon className={tw`mb-4 self-center`} />

      {icon}

      <h2 className={tw`text-center font-semibold mb-8 text-xl`}>{title}</h2>
      {description && (
        <span
          className={tw`text-gray-600 text-center mb-8`}
          dangerouslySetInnerHTML={{ __html: description }}
        ></span>
      )}

      {children}
    </form>
  );
};
