import { z } from 'zod';

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

const experienceSchema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  roleFr: z.string().min(1),
  description: z.string().min(1),
  descriptionFr: z.string().min(1),
  technologies: z.array(z.string()),
  startDate: z.date(),
  endDate: z.date().optional().nullable(),
  location: z.string().optional().nullable(),
  order: z.number().int().default(0),
});

export const experienceRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.experience.findMany({
      orderBy: [{ order: 'asc' }, { startDate: 'desc' }],
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.experience.findUnique({
        where: { id: input.id },
      });
    }),

  create: protectedProcedure
    .input(experienceSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.experience.create({
        data: input,
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        data: experienceSchema.partial(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.experience.update({
        where: { id: input.id },
        data: input.data,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.experience.delete({
        where: { id: input.id },
      });
    }),
});
