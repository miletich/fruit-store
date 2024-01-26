import { PropsWithChildren } from 'react';
import ErrorMessage from './ErrorMessage';
import InputLabel from './InputLabel';
import type { FormFieldProps } from './schema';

type Props = PropsWithChildren<
  Pick<FormFieldProps, 'name' | 'label'> & {
    errorId?: string;
    errorMessage?: string;
  }
>;
export function FieldWrapper({ name, label, errorMessage, children }: Props) {
  const errorId = `${name}-error`;
  return (
    <div className="flex mb-6">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <div className="flex flex-col w-full">
        {children}
        {errorMessage && (
          <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>
        )}
      </div>
    </div>
  );
}
