import { z, defineCollection } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updated: z.date(),
    category: z.string(),
    image: z.string().optional(),
    featured: z.boolean().optional().default(false),
    comparison_table: z.object({
      headers: z.array(z.string()),
      rows: z.array(z.array(z.string())),
    }).optional(),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).optional(),
  }),
});

export const collections = { articles };
