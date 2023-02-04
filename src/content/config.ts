import { z, defineCollection } from 'astro:content';

const work = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedDate: z.string().transform((str) => new Date(str)),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    author: z.string().default('Anonymous'),
    draft: z.boolean().optional(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    authorContact: z.string().email().optional(),
    category: z.string().optional(),
    // An optional frontmatter property. Very common!
    footnote: z.string().optional(),
    // Convert a standard date-string into a `Date` object
    // Advanced: Validate that the string is also an email
    // Advanced: Validate that the string is also a URL
    canonicalURL: z.string().url(),
  }),
});

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),

    canonical: z.string().url().optional(),

    publishDate: z.date().or(z.string()).optional(),
    draft: z.boolean().optional(),

    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});
export const collections = {
  work: work,
  post: post,
};
