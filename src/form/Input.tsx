import { twMerge } from 'tailwind-merge';
import type { FormFieldProps } from './schema';
import { FieldWrapper } from './FieldWrapper';

export function Input({
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
    <FieldWrapper name={name} label={label} errorId={errorId}>
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
    </FieldWrapper>
  );
}
