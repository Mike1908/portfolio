import { z } from 'zod';

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

const blogPostSchema = z.object({
  title: z.string().min(1),
  titleFr: z.string().min(1),
  slug: z.string().min(1),
  excerpt: z.string().min(1),
  excerptFr: z.string().min(1),
  content: z.string().min(1),
  contentFr: z.string().min(1),
  coverImage: z.string().url().optional().nullable(),
  tags: z.array(z.string()),
  readingTime: z.number().int().positive().default(5),
  publishedAt: z.date().optional().nullable(),
});

export const blogRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z
        .object({
          includeUnpublished: z.boolean().default(false),
          tag: z.string().optional(),
        })
        .optional()
    )
    .query(async ({ ctx, input }) => {
      const where = {
        ...(input?.includeUnpublished ? {} : { publishedAt: { not: null } }),
        ...(input?.tag ? { tags: { has: input.tag } } : {}),
      };

      return ctx.prisma.blogPost.findMany({
        where,
        orderBy: { publishedAt: 'desc' },
      });
    }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.blogPost.findUnique({
        where: { slug: input.slug },
      });
    }),

  getRecent: publicProcedure
    .input(z.object({ limit: z.number().int().positive().default(3) }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.blogPost.findMany({
        where: { publishedAt: { not: null } },
        orderBy: { publishedAt: 'desc' },
        take: input.limit,
      });
    }),

  getAllTags: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.blogPost.findMany({
      where: { publishedAt: { not: null } },
      select: { tags: true },
    });

    const allTags = posts.flatMap((post) => post.tags);
    return Array.from(new Set(allTags)).sort();
  }),

  create: protectedProcedure
    .input(blogPostSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.blogPost.create({
        data: input,
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        data: blogPostSchema.partial(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.blogPost.update({
        where: { id: input.id },
        data: input.data,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.blogPost.delete({
        where: { id: input.id },
      });
    }),

  publish: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.blogPost.update({
        where: { id: input.id },
        data: { publishedAt: new Date() },
      });
    }),

  unpublish: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.blogPost.update({
        where: { id: input.id },
        data: { publishedAt: null },
      });
    }),
});
