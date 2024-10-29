import { z } from 'zod';

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
  description: z.string(),
});

export const cartItemSchema = z
  .object({
    quantity: z.number(),
  })
  .merge(productSchema);

export const cartStateSchema = z.object({
  items: z.array(cartItemSchema),
  isOverviewVisible: z.boolean(),
});

export type ProductType = z.infer<typeof productSchema>;
export type CartItemType = z.infer<typeof cartItemSchema>;
export type CartStateType = z.infer<typeof cartStateSchema>;
