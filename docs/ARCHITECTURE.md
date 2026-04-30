# Architecture du Portfolio

Ce document décrit l'architecture technique du projet, les choix de conception et les bonnes pratiques appliquées.

## 🏗️ Vue d'ensemble

Le projet est un portfolio professionnel moderne construit avec une architecture **full-stack type-safe** utilisant Next.js 15 (App Router).

### Principes architecturaux

1. **Type-Safety** : TypeScript partout + tRPC pour l'API
2. **Separation of Concerns** : Séparation claire entre UI, logique métier, et données
3. **Server Components First** : Utilisation des composants serveur par défaut
4. **Progressive Enhancement** : Fonctionnalité de base sans JS, améliorations avec JS
5. **Performance** : Optimisations (code splitting, lazy loading, caching)

## 📁 Structure Détaillée

### `/src/app` - Next.js App Router

```
app/
├── layout.tsx                 # Root layout (minimal)
├── globals.css                # Styles globaux
├── [locale]/                  # Routes multilingues
│   ├── layout.tsx            # Layout avec providers
│   ├── page.tsx              # Page d'accueil
│   ├── about/                # Pages supplémentaires
│   ├── projects/
│   ├── blog/
│   ├── contact/
│   └── dashboard/            # Interface admin protégée
└── api/
    └── trpc/[trpc]/
        └── route.ts          # Endpoint tRPC
```

#### Pourquoi cette structure ?

- **`[locale]`** : Gestion automatique i18n par Next.js
- **App Router** : Server Components par défaut, meilleure performance
- **Colocation** : Routes et composants proches = meilleure lisibilité

### `/src/components` - Composants React

```
components/
├── ui/                        # Composants UI de base (shadcn/ui)
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   └── ...
├── layout/                    # Composants de layout
│   ├── header.tsx
│   └── footer.tsx
├── sections/                  # Sections de pages
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── projects-section.tsx
│   └── ...
└── forms/                     # Formulaires (admin)
    ├── project-form.tsx
    └── blog-form.tsx
```

#### Design System

- **shadcn/ui** : Composants copiables et personnalisables
- **Radix UI** : Primitives accessibles (A11y)
- **Tailwind CSS** : Styling utility-first
- **CVA** : Variants de composants type-safe

### `/src/lib` - Utilitaires et Configurations

```
lib/
├── db/
│   └── index.ts              # Prisma client singleton
├── auth/
│   ├── supabase.ts          # Clients Supabase
│   └── session.ts           # Gestion de session
├── trpc/
│   ├── client.ts            # tRPC client (React Query)
│   └── server.ts            # tRPC server caller
└── utils.ts                  # Fonctions utilitaires
```

#### Patterns utilisés

- **Singleton Pattern** : Prisma client unique
- **Factory Pattern** : Création de clients Supabase
- **Provider Pattern** : tRPC + React Query

### `/src/server` - Code Serveur

```
server/
├── api/
│   ├── trpc.ts              # Configuration tRPC
│   ├── root.ts              # Router principal
│   └── routers/             # Routers par entité
│       ├── project.ts
│       ├── blog.ts
│       ├── experience.ts
│       ├── skill.ts
│       └── contact.ts
└── services/                 # Logique métier (optionnel)
    └── email.ts
```

#### Architecture API (tRPC)

```typescript
// Flux de requête
Client (React Query)
  → tRPC Client
    → HTTP Request
      → Next.js API Route
        → tRPC Server
          → Router
            → Procedure (protected/public)
              → Context (user, prisma)
                → Business Logic
                  → Prisma
                    → Database
```

## 🔐 Authentification et Autorisation

### Flow d'authentification

1. **Login** : Supabase Auth (email/password)
2. **Session** : Cookie HTTP-only
3. **Vérification** : Middleware tRPC vérifie email === ADMIN_EMAIL
4. **Protection** : `protectedProcedure` pour routes admin

```typescript
// Exemple de protection
export const projectRouter = createTRPCRouter({
  // Public
  getAll: publicProcedure.query(/* ... */),
  
  // Protected (admin seulement)
  create: protectedProcedure.mutation(/* ... */),
});
```

### Sécurité

- ✅ Email unique autorisé (ADMIN_EMAIL)
- ✅ CSRF protection (Supabase)
- ✅ Input validation (Zod)
- ✅ Rate limiting (Vercel)
- ✅ HTTP-only cookies
- ✅ Pas de secrets côté client

## 🗄️ Base de Données

### ORM : Prisma

**Avantages :**
- Type-safety complète
- Migrations automatiques
- Excellent DX (Prisma Studio)
- Relations intuitives

### Schéma

```prisma
Project ─────┐
BlogPost ────┤
Experience ──┼──→ PostgreSQL (Supabase)
Skill ───────┤
ContactMessage ┘
```

### Bonnes pratiques appliquées

1. **Naming** : `snake_case` en DB, `camelCase` en TS (mapping automatique)
2. **Indexes** : Sur les champs fréquemment requêtés (slug, publishedAt)
3. **Timestamps** : `createdAt`, `updatedAt` sur toutes les tables
4. **Soft deletes** : Non implémenté (simplicité) - peut être ajouté

## 🌍 Internationalisation (i18n)

### next-intl

**Pourquoi ?**
- Meilleur support App Router
- Type-safe
- Server Components compatible
- Routing automatique

### Structure

```
messages/
├── en.json                    # Traductions anglaises
└── fr.json                    # Traductions françaises
```

### Usage

```typescript
// Composant
const t = useTranslations('section');
<h1>{t('title')}</h1>

// Serveur
import { getTranslations } from 'next-intl/server';
const t = await getTranslations('section');
```

### Contenu multilingue en DB

Les modèles stockent les deux langues :
- `title` / `titleFr`
- `description` / `descriptionFr`
- `content` / `contentFr`

## 🎨 Styling et Animations

### Tailwind CSS

**Pourquoi ?**
- Utility-first = DX rapide
- Tree-shaking automatique
- Design system cohérent
- Excellent avec TypeScript

### Framer Motion

**Usage modéré** pour :
- Fade-in au scroll (sections)
- Transitions de page
- Micro-interactions

**Pas d'animations excessives** : Performance + accessibilité

### Thème (Dark/Light)

- **next-themes** : Détection système + switch manuel
- **CSS Variables** : Couleurs dynamiques
- **Persistance** : localStorage

## 📊 Performance

### Optimisations appliquées

1. **Server Components** : Rendering côté serveur par défaut
2. **Code Splitting** : Automatique (Next.js)
3. **Image Optimization** : Next.js Image component
4. **Font Optimization** : next/font
5. **React Query** : Caching automatique
6. **Static Generation** : Pages statiques quand possible

### Métriques cibles

- **LCP** : < 2.5s
- **FID** : < 100ms
- **CLS** : < 0.1
- **Lighthouse** : > 90

## 🧪 Qualité du Code

### ESLint + Prettier

Configuration stricte :
- Import order
- Type imports séparés
- Formatage cohérent

### Husky + lint-staged

Pre-commit hooks :
- Lint
- Format
- Type-check

### TypeScript Strict Mode

Toutes les options strictes activées.

## 🚀 Déploiement

### Architecture de déploiement

```
GitHub (Code)
  → Vercel (Frontend + API)
  → Supabase (PostgreSQL + Auth + Storage)
```

### CI/CD

GitHub Actions :
1. Lint + Type-check
2. Build
3. Deploy (automatique via Vercel)

### Variables d'environnement

Gérées dans :
- `.env.local` (développement)
- Vercel Dashboard (production)

## 🔄 Flux de Développement

### Feature Development

1. Créer une branche depuis `main`
2. Développer la feature
3. Tests locaux
4. PR vers `main`
5. Review + CI
6. Merge → Deploy automatique

### Ajout d'un nouveau modèle

1. Modifier `prisma/schema.prisma`
2. `npm run db:push`
3. Créer le router tRPC dans `server/api/routers/`
4. Ajouter au `appRouter` dans `server/api/root.ts`
5. Créer les composants UI
6. Tester

## 📈 Évolutions Futures Possibles

### Court terme
- [ ] Upload d'images (Supabase Storage)
- [ ] Pagination des projets/blog
- [ ] Recherche full-text
- [ ] Newsletter (Resend)

### Moyen terme
- [ ] Analytics (Plausible)
- [ ] Tests E2E (Playwright)
- [ ] Storybook
- [ ] Content versioning

### Long terme
- [ ] API publique
- [ ] Application mobile (React Native)
- [ ] Multi-tenancy (plusieurs portfolios)

## 📚 Références

### Documentation
- [Next.js App Router](https://nextjs.org/docs/app)
- [tRPC](https://trpc.io/docs)
- [Prisma](https://www.prisma.io/docs)
- [Supabase](https://supabase.com/docs)

### Articles
- [Next.js Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Type-Safe APIs with tRPC](https://trpc.io/docs/concepts)

---

Cette architecture favorise la **maintenabilité**, la **performance** et la **developer experience** tout en restant **simple** et **évolutive**.
