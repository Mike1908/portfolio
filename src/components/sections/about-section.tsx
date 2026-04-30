'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="about" className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[800px] space-y-6"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {t('title')}
        </h2>
        <p className="text-lg text-muted-foreground">{t('description')}</p>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            Diplômé en informatique de l'Université de Montréal, j'ai rapidement 
            contribué à des projets concrets chez Alithya après une formation intensive. 
            Je conçois des solutions performantes et maintenables en utilisant 
            principalement React, Next.js, TypeScript et Node.js.
          </p>
          <p>
            Mon parcours m'a permis de travailler sur des projets variés : 
            de la création de bibliothèques de composants réutilisables, 
            à la refonte complète d'architectures existantes, en passant par 
            le développement d'applications full-stack modernes.
          </p>
        </div>

        <Button size="lg" variant="outline">
          <Download className="mr-2 h-4 w-4" />
          {t('downloadCV')}
        </Button>
      </motion.div>
    </section>
  );
}
