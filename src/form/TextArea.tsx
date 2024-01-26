import ErrorMessage from './ErrorMessage';
import InputLabel from './InputLabel';
import { FormFieldProps } from './schema';

export function TextArea({
  placeholder,
  name,
  label,
  register,
  error,
  valueAsNumber,
}: Omit<FormFieldProps, 'type'>) {
  const errorId = `${name}-error`;

  return (
    <div className="flex">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <div className="flex flex-col w-full">
        <textarea
          id={name}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={errorId}
          rows={3}
          className="bg-purple-800 p-2 rounded-lg text-sm text-white focus:outline-none focus:ring-0 focus:outline-purple-600 focus:outline-offset-0"
          {...register(name, { valueAsNumber })}
        />
        {error && <ErrorMessage id={errorId}>{error.message}</ErrorMessage>}
      </div>
    </div>
  );
}
