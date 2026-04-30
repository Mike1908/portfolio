import { z } from 'zod';

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

const projectSchema = z.object({
  title: z.string().min(1),
  titleFr: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  descriptionFr: z.string().min(1),
  content: z.string().min(1),
  contentFr: z.string().min(1),
  technologies: z.array(z.string()),
  imageUrl: z.string().url().optional().nullable(),
  demoUrl: z.string().url().optional().nullable(),
  githubUrl: z.string().url().optional().nullable(),
  featured: z.boolean().default(false),
  order: z.number().int().default(0),
  publishedAt: z.date().optional().nullable(),
});

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z
        .object({
          includeUnpublished: z.boolean().default(false),
        })
        .optional()
    )
    .query(async ({ ctx, input }) => {
      const where = input?.includeUnpublished
        ? {}
        : { publishedAt: { not: null } };

      return ctx.prisma.project.findMany({
        where,
        orderBy: [{ featured: 'desc' }, { order: 'asc' }, { createdAt: 'desc' }],
      });
    }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.project.findUnique({
        where: { slug: input.slug },
      });
    }),

  getFeatured: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.project.findMany({
      where: {
        featured: true,
        publishedAt: { not: null },
      },
      orderBy: { order: 'asc' },
      take: 6,
    });
  }),

  create: protectedProcedure
    .input(projectSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.project.create({
        data: input,
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        data: projectSchema.partial(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.project.update({
        where: { id: input.id },
        data: input.data,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.project.delete({
        where: { id: input.id },
      });
    }),

  publish: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.project.update({
        where: { id: input.id },
        data: { publishedAt: new Date() },
      });
    }),

  unpublish: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.project.update({
        where: { id: input.id },
        data: { publishedAt: null },
      });
    }),
});
