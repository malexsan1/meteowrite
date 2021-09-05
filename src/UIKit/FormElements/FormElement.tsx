import { tw } from 'twind';
import { content } from '@twind/content';
import { useController, Control, ControllerRenderProps } from 'react-hook-form';

interface FormElementChildrenProps extends Omit<ControllerRenderProps, 'ref'> {
  id: string;
}

export interface FormElementProps {
  id: string;
  label?: string;
  required?: boolean;
  className?: string;
  control: Control<any>;
  children(fieldProps: FormElementChildrenProps): React.ReactElement;
}

export const FormElement: React.FC<FormElementProps> = ({
  id,
  label,
  control,
  required,
  className = '',
  children,
}) => {
  const {
    field: { ref, ...field },
    fieldState: { isDirty, error, invalid },
  } = useController({ name: id, control });

  const hasError = (invalid || isDirty) && error;

  return (
    <>
      <div
        className={tw`flex flex-col border(1 purple-200) px-4 py-2 rounded-md focus-within:border-purple-500 hover:border-purple-500 ${
          hasError && 'border-red-400 hover:border-red-600'
        } ${className}`}
      >
        <label
          htmlFor={id}
          className={tw`
          font-semibold
          text(uppercase blue-800 xs)
          after::(${content(required ? '"*"' : '')} text-red-500 ml-1)`}
        >
          {label}
        </label>

        {children({ ...field, id })}
      </div>
      {hasError && (
        <span className={tw`text-sm text-red-400`}>{error.message}</span>
      )}
    </>
  );
};
