'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { trpc } from '@/lib/trpc/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(10),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const sendMessage = trpc.contact.send.useMutation({
    onSuccess: () => {
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    },
    onError: () => {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    },
  });

  const onSubmit = (data: ContactForm) => {
    sendMessage.mutate(data);
  };

  return (
    <section id="contact" className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[800px] space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-muted-foreground">{t('description')}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  usenimikesefu@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Téléphone</p>
                <p className="text-sm text-muted-foreground">(514) 224-3712</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Localisation</p>
                <p className="text-sm text-muted-foreground">Montréal, QC</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                placeholder={t('form.name')}
                {...register('name', { required: true })}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-destructive">Requis</p>
              )}
            </div>
            <div>
              <Input
                type="email"
                placeholder={t('form.email')}
                {...register('email', { required: true })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">Email invalide</p>
              )}
            </div>
            <div>
              <Input placeholder={t('form.subject')} {...register('subject')} />
            </div>
            <div>
              <Textarea
                placeholder={t('form.message')}
                rows={5}
                {...register('message', { required: true, minLength: 10 })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-destructive">
                  Minimum 10 caractères
                </p>
              )}
            </div>

            {status === 'success' && (
              <p className="text-sm text-green-600">{t('form.success')}</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-destructive">{t('form.error')}</p>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? t('form.sending') : t('form.send')}
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
