import z from "zod";

export const signedUpInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export type SignedUpInput = z.infer<typeof signedUpInput>;

export const signedInInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type SignedInInput = z.infer<typeof signedInInput>;

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});

export type CreateBlogInput = z.infer<typeof createBlogInput>;

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});

export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
