import { defineCollection, z } from 'astro:content';

const common = {
  title: z.string(),
  date: z.coerce.date().optional(),
  year: z.number().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false)
};

const artwork = defineCollection({
  type: 'content',
  schema: z.object({
    ...common,
    title: z.string(),
    year: z.number().optional(),
    medium: z.string().optional(),
    dimensions: z.string().optional(),
    image: z.string(),
    highResImage: z.string().optional(),
    alt: z.string().default('Artwork')
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({ ...common, title: z.string(), substackUrl: z.string().url().optional() })
});

const playlists = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    number: z.number().optional(),
    year: z.number().optional(),
    date: z.coerce.date().optional(),
    service: z.enum(['apple-music', 'spotify']).default('apple-music'),
    embedUrl: z.string().url(),
    whenToListen: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false)
  })
});

const films = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number().optional(),
    youtubeUrl: z.string().url(),
    duration: z.string().optional(),
    description: z.string().optional()
  })
});

const sketchbooks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number().optional(),
    format: z.enum(['spread', 'notepad']),
    cover: z.string().optional(),
    pages: z.array(z.string()).default([]),
    description: z.string().optional()
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    ...common,
    title: z.string(),
    type: z.enum(['project', 'experiment', 'log', 'dump']).default('project'),
    media: z.array(z.object({ type: z.enum(['image', 'video', 'note']), src: z.string(), alt: z.string().optional(), caption: z.string().optional() })).default([])
  })
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    context: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

const rituals = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number().optional(),
    description: z.string().optional()
  })
});

export const collections = {
  artwork,
  blog,
  playlists,
  films,
  sketchbooks,
  projects,
  notes,
  rituals
};
