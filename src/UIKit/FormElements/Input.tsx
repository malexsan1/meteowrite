import { tw } from 'twind';
import { ControllerRenderProps } from 'react-hook-form';

type CombinedProps = Omit<ControllerRenderProps, 'ref'> &
  React.HTMLProps<HTMLInputElement>;

interface InputProps extends CombinedProps {
  id: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  type = 'text',
  ...props
}) => {
  return (
    <input
      type={type}
      className={tw`focus:outline-none ${className}`}
      {...props}
    />
  );
};
