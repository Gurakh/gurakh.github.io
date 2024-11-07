import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    website: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};