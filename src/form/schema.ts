import { z } from 'zod';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { datumSchema } from '../utils/data';

const urlOrFile = z
  .object({
    iconUrl: z.string().url(),
    iconFile: z.instanceof(File),
  })
  .partial()
  .refine(
    ({ iconUrl, iconFile }) => iconUrl !== undefined || iconFile !== undefined,
    { message: 'Either a URL or a file must be provided!' }
  );

export const formSchema = z.intersection(
  datumSchema.omit({ id: true, icon: true }),
  urlOrFile
);

export type ValidFieldNames = keyof z.infer<typeof formSchema>;

export type FormFieldProps = {
  type: string | number;
  placeholder?: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};
