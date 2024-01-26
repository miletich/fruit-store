import { twMerge } from 'tailwind-merge';
import ErrorMessage from './ErrorMessage';
import InputLabel from './InputLabel';
import { FormFieldProps } from './schema';

export function FormField({
  type,
  placeholder,
  name,
  label,
  register,
  error,
  valueAsNumber,
  className,
}: FormFieldProps & { className?: string }) {
  const errorId = `${name}-error`;
  return (
    <div className="flex mb-6">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <div className="flex flex-col w-full">
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={twMerge(
            'bg-purple-800 p-2 rounded-lg text-sm text-white focus:outline-none focus:ring-0 focus:outline-purple-600 focus:outline-offset-0',
            className
          )}
          {...register(name, { valueAsNumber })}
        />
        {error && <ErrorMessage id={errorId}>{error.message}</ErrorMessage>}
      </div>
    </div>
  );
}
export default FormField;
