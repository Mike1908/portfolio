'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import { trpc } from '@/lib/trpc/client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export function ProjectsSection() {
  const t = useTranslations('projects');
  const { data: projects, isLoading } = trpc.project.getFeatured.useQuery();

  if (isLoading) {
    return (
      <section id="projects" className="container py-12 md:py-24">
        <div className="text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section id="projects" className="bg-muted/50 py-12 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('featured')}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    {project.demoUrl && (
                      <Button size="sm" variant="default" asChild>
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {t('viewProject')}
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          {t('viewCode')}
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
