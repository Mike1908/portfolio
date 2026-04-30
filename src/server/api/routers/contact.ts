import { z } from 'zod';

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

const contactMessageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().optional().nullable(),
  message: z.string().min(10),
});

export const contactRouter = createTRPCRouter({
  send: publicProcedure
    .input(contactMessageSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.contactMessage.create({
        data: input,
      });
    }),

  getAll: protectedProcedure
    .input(
      z
        .object({
          unreadOnly: z.boolean().default(false),
        })
        .optional()
    )
    .query(async ({ ctx, input }) => {
      const where = input?.unreadOnly ? { read: false } : {};

      return ctx.prisma.contactMessage.findMany({
        where,
        orderBy: { createdAt: 'desc' },
      });
    }),

  markAsRead: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.contactMessage.update({
        where: { id: input.id },
        data: { read: true },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.contactMessage.delete({
        where: { id: input.id },
      });
    }),
});
