# Guide de Configuration du Portfolio

Ce guide vous aidera à configurer et déployer votre portfolio professionnel.

## 📋 Prérequis

- Node.js 20+ installé
- npm 10+ installé
- Compte GitHub
- Compte Supabase (gratuit)
- Compte Vercel (gratuit)

## 🚀 Installation Locale

### 1. Cloner et installer les dépendances

```bash
cd portfolio
npm install
```

### 2. Configuration de Supabase

#### a) Créer un projet Supabase

1. Aller sur [supabase.com](https://supabase.com)
2. Créer un nouveau projet
3. Attendre la fin de la création (2-3 minutes)

#### b) Récupérer les credentials

1. Dans votre projet Supabase, aller dans `Settings` → `API`
2. Copier :
   - `Project URL` (NEXT_PUBLIC_SUPABASE_URL)
   - `anon public` key (NEXT_PUBLIC_SUPABASE_ANON_KEY)
   - `service_role` key (SUPABASE_SERVICE_ROLE_KEY)

3. Aller dans `Settings` → `Database`
4. Copier la `Connection string` → `URI` (DATABASE_URL)
   - Remplacer `[YOUR-PASSWORD]` par votre mot de passe

#### c) Configurer les variables d'environnement

```bash
cp .env.example .env.local
```

Éditer `.env.local` avec vos vraies valeurs.

### 3. Initialiser la base de données

```bash
# Générer le client Prisma
npm run db:generate

# Pousser le schéma vers Supabase
npm run db:push
```

### 4. Lancer le projet

```bash
npm run dev
```

Votre portfolio est maintenant accessible sur [http://localhost:3000](http://localhost:3000) !

## 🗄️ Ajouter des données initiales

### Option 1 : Via Prisma Studio (Recommandé)

```bash
npm run db:studio
```

Cela ouvre une interface graphique pour ajouter vos projets, expériences, etc.

### Option 2 : Créer un script de seed

Créez un fichier `prisma/seed.ts` avec vos données initiales.

## 🔐 Authentification Admin

### Configurer l'authentification

1. Dans Supabase, aller dans `Authentication` → `Providers`
2. Activer `Email` provider
3. Dans `Settings` → `Auth`, configurer :
   - Site URL : `http://localhost:3000` (dev) ou votre domaine (prod)
   - Redirect URLs : ajouter vos URLs autorisées

### Se connecter

1. Créer un compte avec votre email dans Supabase Auth
2. S'assurer que l'email correspond à `ADMIN_EMAIL` dans `.env.local`
3. Accéder au dashboard : `/fr/dashboard`

## 🚢 Déploiement sur Vercel

### 1. Préparer le repository

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votre-username/portfolio.git
git push -u origin main
```

### 2. Déployer sur Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer sur `Import Project`
3. Sélectionner votre repository GitHub
4. Configurer les variables d'environnement (copier depuis `.env.local`)
5. Cliquer sur `Deploy`

### 3. Configuration post-déploiement

1. Copier l'URL de production Vercel
2. Dans Supabase `Settings` → `Auth` :
   - Ajouter l'URL Vercel dans `Site URL`
   - Ajouter l'URL Vercel dans `Redirect URLs`

## 📦 Structure du Projet

```
portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── [locale]/       # Pages multilingues
│   │   └── api/            # API Routes
│   ├── components/          # Composants React
│   │   ├── ui/             # Composants UI (shadcn)
│   │   ├── layout/         # Layout components
│   │   ├── sections/       # Sections de pages
│   │   └── forms/          # Formulaires
│   ├── lib/                 # Utilitaires
│   │   ├── db/             # Prisma client
│   │   ├── auth/           # Supabase auth
│   │   └── trpc/           # tRPC setup
│   ├── server/              # Code serveur
│   │   └── api/            # tRPC routers
│   └── i18n/                # Configuration i18n
├── prisma/                  # Schéma de base de données
├── messages/                # Traductions
└── public/                  # Assets statiques
```

## 🎨 Personnalisation

### Couleurs et thème

Éditer `tailwind.config.ts` et `src/app/globals.css` pour personnaliser les couleurs.

### Traductions

Modifier `messages/fr.json` et `messages/en.json` pour ajuster les textes.

### Schéma de base de données

1. Modifier `prisma/schema.prisma`
2. Exécuter `npm run db:push` pour mettre à jour la DB

## 🧪 Tests et Qualité du Code

```bash
# Linter
npm run lint

# Formatter
npm run format

# Type checking
npm run type-check
```

## 🐛 Dépannage

### Erreur "Cannot find module '@prisma/client'"

```bash
npm run db:generate
```

### Erreur de connexion à la base de données

Vérifier que `DATABASE_URL` dans `.env.local` est correct.

### Problème d'authentification

Vérifier que :
- `ADMIN_EMAIL` correspond à l'email dans Supabase Auth
- Les URLs de redirection sont correctement configurées dans Supabase

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 💡 Conseils

1. **Commencez simple** : Ajoutez d'abord 2-3 projets pour tester
2. **Optimisez les images** : Utilisez Next.js Image pour de meilleures performances
3. **SEO** : Ajoutez des métadonnées dans chaque page
4. **Analytics** : Intégrez Google Analytics ou Plausible
5. **Performance** : Utilisez Vercel Analytics pour monitorer

---

Besoin d'aide ? Consultez la documentation ou ouvrez une issue sur GitHub !
