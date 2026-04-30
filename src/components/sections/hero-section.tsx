'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="container flex min-h-[calc(100vh-4rem)] items-center py-12 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-4"
        >
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground">{t('greeting')}</p>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Mike Useni
            </h1>
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl md:text-4xl">
              {t('role')}
            </h2>
          </div>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            {t('description')}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#projects">
                {t('cta.projects')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">{t('cta.contact')}</Link>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5" />
        </motion.div>
      </div>
    </section>
  );
}
