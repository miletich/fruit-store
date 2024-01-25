import z from 'zod';

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
  z.undefined(),
]);

export type Tab = z.infer<typeof tabSchema>;

export const datumSchema = z.object({
  id: z.number(),
  fruit: z.string(),
  tab: tabSchema,
  country: z.string(),
  icon: z.string(),
  description: z.string(),
  price: z.number(),
});

export type Datum = z.infer<typeof datumSchema>;

export const dataSchema = z.array(datumSchema);
