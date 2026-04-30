'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

import { trpc } from '@/lib/trpc/client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

export function BlogSection() {
  const t = useTranslations('blog');
  const locale = useLocale();
  const { data: posts, isLoading } = trpc.blog.getRecent.useQuery({ limit: 3 });

  if (isLoading) {
    return (
      <section id="blog" className="bg-muted/50 py-12 md:py-24">
        <div className="container text-center">Loading...</div>
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <section id="blog" className="bg-muted/50 py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-muted-foreground">{t('noPostsYet')}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="bg-muted/50 py-12 md:py-24">
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
              {t('title')}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>
                        {t('readingTime', { minutes: post.readingTime })}
                      </span>
                    </div>
                    <CardTitle>{locale === 'fr' ? post.titleFr : post.title}</CardTitle>
                    <CardDescription>
                      {locale === 'fr' ? post.excerptFr : post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        {t('readMore')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
