import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    title: z.string(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};