# Portfolio Personnel - Mike Useni

Portfolio moderne de développeur front-end et full-stack, construit avec Next.js 15 et React 19.

## 🚀 Présentation

Portfolio professionnel présentant mon parcours, mes compétences et mes projets. Développé avec les technologies les plus récentes et une attention particulière portée à l'expérience utilisateur, aux animations fluides et à l'accessibilité.

## ✨ Fonctionnalités

- **Design moderne et minimaliste** avec animations fluides
- **Architecture atomique** (atoms, molecules, organisms) pour une meilleure réutilisabilité
- **Animations scroll-based** avec Framer Motion
- **Responsive design** optimisé mobile-first
- **Performance optimisée** avec Next.js 15
- **Design system cohérent** avec Tailwind CSS
- **Accessibilité** prise en compte dès la conception

## 🛠️ Technologies

### Frontend
- **React 19** - Bibliothèque UI
- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations fluides

### Outils
- **ESLint** - Linting du code
- **PostCSS** - Transformation CSS
- **Geist Font** - Police moderne de Vercel

## 📁 Structure du projet

```
src/
├── app/                    # App Router Next.js
│   ├── page.tsx           # Page d'accueil (composants uniquement)
│   └── layout.tsx         # Layout principal
├── components/
│   ├── atoms/             # Composants de base réutilisables
│   │   ├── Badge.tsx
│   │   ├── ContactLink.tsx
│   │   ├── ScrollHint.tsx
│   │   ├── SkillTag.tsx
│   │   ├── StatCard.tsx
│   │   └── TechTag.tsx
│   ├── molecules/         # Composants composés d'atoms
│   │   ├── ExperienceItem.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionHeader.tsx
│   │   └── SectionReveal.tsx
│   └── organisms/         # Composants complexes
│       ├── AboutSection.tsx
│       ├── ContactSection.tsx
│       ├── ExperienceSection.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── NavBar.tsx
│       ├── ProjectsSection.tsx
│       └── SkillsSection.tsx
├── data/                  # Données du portfolio
│   └── portfolio.ts       # Toutes les données (expériences, projets, compétences, etc.)
├── lib/                   # Utilitaires et helpers
└── styles/               # Styles globaux
```

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ 
- pnpm (recommandé) ou npm/yarn/bun

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/Mike1908/portfolio.git

# Installer les dépendances (avec pnpm)
pnpm install

# Ou avec npm
npm install
```

### Développement

```bash
# Lancer le serveur de développement
pnpm dev

# Ou avec npm
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build

```bash
# Créer un build de production
pnpm build

# Lancer le serveur de production
pnpm start
```

### Linting

```bash
# Vérifier le code avec ESLint
pnpm lint
```

### Déploiement

```bash
# Déploiement automatique via GitHub Actions (Recommandé)
# Poussez simplement sur main
git push origin main

# Ou déploiement manuel avec gh-pages
pnpm deploy
```

Pour plus de détails, consultez le [guide de déploiement](./DEPLOYMENT.md).

## 📦 Architecture

Le projet suit une **architecture atomique** inspirée d'Atomic Design avec une séparation claire entre données et présentation :

### Composants (Architecture Atomique)

- **Atoms** : Composants de base (Badge, Button, Tag, etc.)
- **Molecules** : Combinaisons d'atoms (Cards, Headers, etc.)
- **Organisms** : Sections complètes (Hero, About, Experience, etc.)

### Organisation des données

- **`src/data/portfolio.ts`** : Fichier centralisé contenant toutes les données du portfolio
  - Informations personnelles (nom, titre, localisation)
  - Expériences professionnelles (7 postes)
  - Projets (3 projets phares)
  - Compétences techniques (4 catégories)
  - Liens de contact

Cette approche permet :
- Une meilleure réutilisabilité des composants
- Un code plus maintenable et scalable
- Une séparation claire entre présentation et données
- Une cohérence visuelle à travers tout le site
- Une modification facile des données sans toucher à l'UI

## 🎨 Design System

Le projet utilise un design system cohérent basé sur :

- **Variables CSS** pour les couleurs, espacements et transitions
- **Tailwind CSS** pour le styling utilitaire
- **Framer Motion** pour les animations
- **Design responsive** avec breakpoints mobiles, tablettes et desktop

## 🌟 Sections

- **Hero** : Présentation avec nom, titre et badges
- **À propos** : Biographie et statistiques clés
- **Expérience** : Parcours professionnel détaillé (7 postes)
- **Projets** : Projets personnels et professionnels (3 projets phares)
- **Compétences** : Compétences techniques organisées en 4 catégories
- **Contact** : Liens de contact et réseaux

## 📧 Contact

- **Email** : usenimikesefu@gmail.com
- **Téléphone** : (514) 224-3712
- **Site Web** : [modcodepattern.com](https://modcodepattern.com)
- **VS Code Extension** : [Modcodepattern](https://marketplace.visualstudio.com/items?itemName=modcodepattern.modcodepattern)

## 📄 Licence

Tous droits réservés © 2026 Mike Useni

---

**Développé avec ❤️ par Mike Useni**
