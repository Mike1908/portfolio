import { createCallerFactory, createTRPCRouter } from './trpc';
import { blogRouter } from './routers/blog';
import { experienceRouter } from './routers/experience';
import { projectRouter } from './routers/project';
import { skillRouter } from './routers/skill';
import { contactRouter } from './routers/contact';

export const appRouter = createTRPCRouter({
  project: projectRouter,
  blog: blogRouter,
  experience: experienceRouter,
  skill: skillRouter,
  contact: contactRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
