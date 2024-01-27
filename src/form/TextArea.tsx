import { FieldWrapper } from './FieldWrapper';
import type { FormFieldProps } from './schema';

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
    <FieldWrapper
      name={name}
      label={label}
      errorId={errorId}
      errorMessage={error?.message}
    >
      <textarea
        id={name}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={errorId}
        rows={3}
        className="bg-purple-800 p-2 rounded-lg text-sm text-white focus:outline-none focus:ring-0 focus:outline-purple-600 focus:outline-offset-0"
        {...register(name, { valueAsNumber })}
      />
    </FieldWrapper>
  );
}
