import type { HTMLInputTypeAttribute } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

import { datumSchema } from '../utils/data';
import { imgMimeTypes, invalidImgMessage } from '../utils/consts';

const urlOrFile = z
  .object({
    iconUrl: z.string().optional(),
    iconFile: z
      .instanceof(FileList)
      .refine(
        (files) => imgMimeTypes.includes(files?.[0]?.type) || !files.length,
        {
          message: invalidImgMessage,
        }
      ),
  })
  .partial()
  .superRefine(({ iconUrl, iconFile }, ctx) => {
    if (!iconUrl && !iconFile?.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['iconUrl'],
        fatal: true,
        message: 'Either a URL or a file must be provided!',
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['iconFile'],
        fatal: true,
        message: 'Either a URL or a file must be provided!',
      });
    }
  });

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
