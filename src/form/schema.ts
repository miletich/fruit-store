import type { HTMLInputTypeAttribute } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

import { datumSchema } from '../utils/data';
import { requiredMessage } from '../utils/consts';

const urlOrFile = z
  .object({
    iconUrl: z.string().min(1, requiredMessage),
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

export type FormSchema = z.infer<typeof formSchema>;

export type FormFieldProps = {
  type: HTMLInputTypeAttribute;
  label: string;
  placeholder?: string;
  name: keyof FormSchema;
  register: UseFormRegister<FormSchema>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};
