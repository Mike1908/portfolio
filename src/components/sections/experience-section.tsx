'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';

import { trpc } from '@/lib/trpc/client';
import { formatDate } from '@/lib/utils';

export function ExperienceSection() {
  const locale = useLocale();
  const { data: experiences, isLoading } = trpc.experience.getAll.useQuery();

  if (isLoading) {
    return (
      <section id="experience" className="container py-12 md:py-24">
        <div className="text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section id="experience" className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Expérience
          </h2>
        </div>

        <div className="mx-auto max-w-[800px] space-y-6">
          {experiences?.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-card p-6"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {locale === 'fr' ? exp.roleFr : exp.role}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>{formatDate(exp.startDate, locale)}</p>
                    <p>
                      {exp.endDate
                        ? formatDate(exp.endDate, locale)
                        : locale === 'fr'
                          ? "Aujourd'hui"
                          : 'Present'}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {locale === 'fr' ? exp.descriptionFr : exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
