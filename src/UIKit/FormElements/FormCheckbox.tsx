import { tw } from 'twind';
import { useController, Control } from 'react-hook-form';

interface FormCheckboxProps {
  id: string;
  control: Control<any>;
  className?: string;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  id,
  control,
  children,
  className,
}) => {
  const {
    field: { onChange, value },
  } = useController({ name: id, control });

  return (
    <div
      tabIndex={0}
      className={tw`flex cursor-pointer items-baseline ${className}`}
      onClick={() => {
        onChange(!value);
      }}
    >
      <button
        type="button"
        className={tw`mr-2 rounded-lg w-12 h-8 border(1 purple-200) text(sm purple-500) font-semibold`}
      >
        {value ? 'YES' : 'NO'}
      </button>
      {children}
    </div>
  );
};
