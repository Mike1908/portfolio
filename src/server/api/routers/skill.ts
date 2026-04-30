import { z } from 'zod';

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

const skillSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  level: z.number().int().min(1).max(5).default(3),
  order: z.number().int().default(0),
});

export const skillRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.skill.findMany({
      orderBy: [{ order: 'asc' }, { name: 'asc' }],
    });
  }),

  getByCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.skill.findMany({
        where: { category: input.category },
        orderBy: [{ order: 'asc' }, { level: 'desc' }],
      });
    }),

  getCategories: publicProcedure.query(async ({ ctx }) => {
    const skills = await ctx.prisma.skill.findMany({
      select: { category: true },
      distinct: ['category'],
    });
    return skills.map((s) => s.category).sort();
  }),

  create: protectedProcedure
    .input(skillSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.skill.create({
        data: input,
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        data: skillSchema.partial(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.skill.update({
        where: { id: input.id },
        data: input.data,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.skill.delete({
        where: { id: input.id },
      });
    }),
});
