# 🛠️ Guide de Développement

Ce guide vous aidera à ajouter de nouvelles fonctionnalités au projet.

## 🎯 Comment ajouter une nouvelle entité

### Exemple : Ajouter une entité "Certification"

#### 1. Modifier le schéma Prisma

Éditer `prisma/schema.prisma` :

```prisma
model Certification {
  id           String   @id @default(cuid())
  name         String
  nameFr       String   @map("name_fr")
  organization String
  date         DateTime
  credentialUrl String? @map("credential_url")
  order        Int      @default(0)
  createdAt    DateTime @default(now()) @map("created_at")
  updatedAt    DateTime @updatedAt @map("updated_at")

  @@map("certifications")
}
```

#### 2. Pousser le schéma vers la DB

```bash
npm run db:push
```

#### 3. Créer le router tRPC

Créer `src/server/api/routers/certification.ts` :

```typescript
import { z } from 'zod';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

const certificationSchema = z.object({
  name: z.string().min(1),
  nameFr: z.string().min(1),
  organization: z.string().min(1),
  date: z.date(),
  credentialUrl: z.string().url().optional().nullable(),
  order: z.number().int().default(0),
});

export const certificationRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.certification.findMany({
      orderBy: [{ order: 'asc' }, { date: 'desc' }],
    });
  }),

  create: protectedProcedure
    .input(certificationSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.certification.create({ data: input });
    }),

  update: protectedProcedure
    .input(z.object({ id: z.string(), data: certificationSchema.partial() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.certification.update({
        where: { id: input.id },
        data: input.data,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.certification.delete({ where: { id: input.id } });
    }),
});
```

#### 4. Ajouter au router principal

Éditer `src/server/api/root.ts` :

```typescript
import { certificationRouter } from './routers/certification';

export const appRouter = createTRPCRouter({
  // ... autres routers
  certification: certificationRouter,
});
```

#### 5. Créer le composant UI

Créer `src/components/sections/certifications-section.tsx` :

```typescript
'use client';

import { trpc } from '@/lib/trpc/client';
import { Card } from '@/components/ui/card';

export function CertificationsSection() {
  const { data: certifications } = trpc.certification.getAll.useQuery();

  return (
    <section id="certifications" className="container py-12 md:py-24">
      <h2 className="text-3xl font-bold">Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications?.map((cert) => (
          <Card key={cert.id}>
            <h3>{cert.name}</h3>
            <p>{cert.organization}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
```

#### 6. Créer le formulaire admin

Créer `src/components/forms/certification-form.tsx` :

```typescript
'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { trpc } from '@/lib/trpc/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const schema = z.object({
  name: z.string().min(1),
  nameFr: z.string().min(1),
  organization: z.string().min(1),
  date: z.string(),
  credentialUrl: z.string().url().optional(),
  order: z.number().int().default(0),
});

type FormData = z.infer<typeof schema>;

export function CertificationForm({ onSuccess }: { onSuccess?: () => void }) {
  const { register, handleSubmit } = useForm<FormData>();
  const createMutation = trpc.certification.create.useMutation({
    onSuccess,
  });

  const onSubmit = (data: FormData) => {
    createMutation.mutate({
      ...data,
      date: new Date(data.date),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input {...register('name')} placeholder="Name (EN)" />
      <Input {...register('nameFr')} placeholder="Nom (FR)" />
      <Input {...register('organization')} placeholder="Organization" />
      <Input {...register('date')} type="date" />
      <Input {...register('credentialUrl')} placeholder="URL (optional)" />
      <Button type="submit">Create</Button>
    </form>
  );
}
```

## 🎨 Comment ajouter une nouvelle section à la page d'accueil

### 1. Créer le composant de section

Créer `src/components/sections/ma-section.tsx`

### 2. L'ajouter à la page d'accueil

Éditer `src/app/[locale]/page.tsx` :

```typescript
import { MaSection } from '@/components/sections/ma-section';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        {/* ... autres sections */}
        <MaSection />
      </main>
      <Footer />
    </div>
  );
}
```

### 3. Ajouter les traductions

Éditer `messages/fr.json` et `messages/en.json` :

```json
{
  "maSection": {
    "title": "Mon Titre",
    "description": "Ma description"
  }
}
```

## 🌍 Comment ajouter une nouvelle page

### 1. Créer le dossier de la page

```bash
mkdir -p src/app/[locale]/ma-page
```

### 2. Créer le fichier page.tsx

Créer `src/app/[locale]/ma-page/page.tsx` :

```typescript
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function MaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold">Ma Page</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
```

### 3. Ajouter au menu

Éditer `src/components/layout/header.tsx` pour ajouter le lien.

## 🔐 Comment protéger une page (admin seulement)

### Option 1 : Protection côté serveur (recommandé)

```typescript
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth/session';

export default async function AdminPage() {
  const user = await getSession();
  
  if (!user) {
    redirect('/login');
  }

  return <div>Page admin protégée</div>;
}
```

### Option 2 : Layout protégé

Créer `src/app/[locale]/admin/layout.tsx` :

```typescript
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth/session';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSession();

  if (!user) {
    redirect('/login');
  }

  return (
    <div>
      <div>Admin Navigation</div>
      {children}
    </div>
  );
}
```

## 📝 Comment utiliser les traductions

### Dans un composant client

```typescript
'use client';

import { useTranslations } from 'next-intl';

export function MonComposant() {
  const t = useTranslations('section');
  
  return <h1>{t('title')}</h1>;
}
```

### Dans un composant serveur

```typescript
import { getTranslations } from 'next-intl/server';

export default async function MaPage() {
  const t = await getTranslations('section');
  
  return <h1>{t('title')}</h1>;
}
```

### Avec des paramètres

```json
{
  "welcome": "Bonjour {name} !"
}
```

```typescript
t('welcome', { name: 'Mike' }); // "Bonjour Mike !"
```

## 🎨 Comment personnaliser le thème

### Changer les couleurs

Éditer `src/app/globals.css` :

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Bleu */
  --secondary: 210 40% 96.1%;
  /* ... */
}
```

### Changer les fonts

Éditer `src/app/[locale]/layout.tsx` :

```typescript
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});
```

## 📤 Comment gérer l'upload d'images

### 1. Configurer Supabase Storage

1. Dans Supabase, créer un bucket "portfolio-images"
2. Configurer les permissions publiques

### 2. Créer une fonction d'upload

Créer `src/lib/upload.ts` :

```typescript
import { createSupabaseClient } from './auth/supabase';

export async function uploadImage(file: File, folder: string = 'projects') {
  const supabase = createSupabaseClient();
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = `${folder}/${fileName}`;

  const { data, error } = await supabase.storage
    .from('portfolio-images')
    .upload(filePath, file);

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from('portfolio-images')
    .getPublicUrl(filePath);

  return publicUrl;
}
```

### 3. Utiliser dans un formulaire

```typescript
const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const url = await uploadImage(file, 'projects');
  // Utiliser l'URL...
};
```

## 🧪 Comment ajouter des tests

### Tests unitaires (Jest)

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

Créer `jest.config.js` et ajouter des tests dans `__tests__/`.

### Tests E2E (Playwright)

```bash
npm install --save-dev @playwright/test
```

Créer des tests dans `e2e/`.

## 🚀 Déploiement

### Variables d'environnement requises sur Vercel

```
DATABASE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
ADMIN_EMAIL
NEXT_PUBLIC_APP_URL
```

### Build command

```bash
npm run build
```

### Deploy

Push sur `main` → Déploiement automatique sur Vercel

## 📚 Ressources Utiles

### Documentation
- [Next.js App Router](https://nextjs.org/docs/app)
- [tRPC React](https://trpc.io/docs/client/react)
- [Prisma Client API](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)
- [Supabase JS Library](https://supabase.com/docs/reference/javascript/introduction)

### Exemples de code
- [shadcn/ui Examples](https://ui.shadcn.com/examples)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

---

💡 **Besoin d'aide ?** Consultez la documentation officielle ou ouvrez une issue !
