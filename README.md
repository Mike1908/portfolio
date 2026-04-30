# Portfolio Mike Useni

Portfolio professionnel moderne développé avec Next.js 15, TypeScript, et Tailwind CSS.

## 🚀 Fonctionnalités

- ✨ Design moderne et responsive
- 🌓 Mode sombre/clair
- 🌍 Multilingue (FR/EN) avec next-intl
- 🎨 Animations fluides avec Framer Motion
- 🔐 Authentification sécurisée (Supabase Auth)
- 📝 Blog technique
- 🗂️ Gestion de projets
- 📧 Formulaire de contact
- 🎯 SEO optimisé
- ⚡ Performance optimale

## 🛠️ Stack Technique

### Frontend
- **Framework** : Next.js 15 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS + shadcn/ui
- **Animations** : Framer Motion
- **State Management** : TanStack Query
- **Forms** : React Hook Form + Zod

### Backend
- **API** : tRPC (type-safe)
- **Database** : PostgreSQL (Supabase)
- **ORM** : Prisma
- **Auth** : Supabase Auth

### DevOps
- **Déploiement** : Vercel
- **CI/CD** : GitHub Actions
- **Code Quality** : ESLint + Prettier + Husky

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/votre-username/portfolio.git

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local

# Générer le client Prisma
npm run db:generate

# Lancer le serveur de développement
npm run dev
```

## 🔧 Configuration

### 1. Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Copier l'URL et les clés API dans `.env.local`
3. Exécuter les migrations Prisma : `npm run db:push`

### 2. Variables d'environnement

Voir `.env.example` pour la liste complète des variables requises.

### 3. Email administrateur

Définir votre email dans `ADMIN_EMAIL` pour restreindre l'accès à l'interface d'administration.

## 📝 Scripts disponibles

```bash
npm run dev          # Lancer en mode développement
npm run build        # Build de production
npm run start        # Démarrer le serveur de production
npm run lint         # Vérifier le code
npm run lint:fix     # Corriger les erreurs de lint
npm run format       # Formater le code
npm run type-check   # Vérifier les types TypeScript
npm run db:generate  # Générer le client Prisma
npm run db:push      # Pousser le schéma vers la DB
npm run db:migrate   # Créer une migration
npm run db:studio    # Ouvrir Prisma Studio
```

## 🏗️ Structure du projet

```
portfolio/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # Composants React
│   ├── lib/              # Utilitaires et configs
│   ├── server/           # Code serveur (tRPC, services)
│   └── types/            # Types TypeScript
├── prisma/               # Schéma et migrations
├── public/               # Assets statiques
└── messages/             # Traductions i18n
```

## 🎨 Design System

Le projet utilise **shadcn/ui** avec une palette de couleurs personnalisée et un système de thèmes (clair/sombre).

## 🔐 Sécurité

- Authentification par email (Supabase)
- Protection CSRF
- Validation des entrées (Zod)
- Sanitization des données
- Rate limiting sur les API

## 📄 Licence

Ce projet est sous licence MIT.

## 👤 Auteur

**Mike Useni**
- Email : usenimikesefu@gmail.com
- GitHub : [@votre-username]
- LinkedIn : [Votre profil]

---

Développé avec ❤️ à Montréal
