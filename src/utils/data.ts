import z from 'zod';
import { requiredMessage } from './consts';

export const countrySchema = z.object({
  id: z.string(),
  name: z.string(),
  emoji: z.string(),
});

export type Country = z.infer<typeof countrySchema>;

export const countriesSchema = z.array(countrySchema);

export const tabSchema = z.union([
  z.literal('Hot'),
  z.literal('New'),
  z.literal('Recommended'),
]);

export type Tab = z.infer<typeof tabSchema>;

export const datumSchema = z.object({
  id: z.number(),
  fruit: z.string().min(1, requiredMessage),
  tab: tabSchema,
  country: z.string().min(1, requiredMessage),
  icon: z.string().min(1, requiredMessage),
  description: z.string().min(1, requiredMessage),
  price: z.coerce
    .number({ invalid_type_error: requiredMessage })
    .finite()
    .min(0, 'This field is must be a positive number!'),
});

export type Datum = z.infer<typeof datumSchema>;

export const dataSchema = z.array(datumSchema);
