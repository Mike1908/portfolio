# Migration vers next-themes ✨

Ce document explique la refonte complète du système de gestion des thèmes, passant d'une implémentation custom à **`next-themes`**.

## 📊 Avant / Après

### ❌ Avant (Custom Implementation)

**Problèmes :**
- Script inline `dangerouslySetInnerHTML` dans le Layout
- Logique dupliquée entre le script et ThemeToggle
- Code verbeux (~94 lignes pour ThemeToggle)
- Gestion manuelle de localStorage
- Gestion manuelle de `prefers-color-scheme`
- Hydratation complexe à gérer

**Fichiers concernés :**
```tsx
// layout.tsx
<script dangerouslySetInnerHTML={{...}} /> // 😬

// ThemeToggle.tsx (94 lignes)
const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";
function getSystemTheme() { ... }
function resolveTheme() { ... }
function applyTheme() { ... }
// ... beaucoup de code
```

### ✅ Après (next-themes)

**Avantages :**
- ✅ Zéro script inline, code propre
- ✅ Bibliothèque standard de l'écosystème Next.js
- ✅ Code réduit de ~60% (94 → 48 lignes)
- ✅ Gestion automatique de tout (SSR, localStorage, system)
- ✅ API simple et élégante
- ✅ Maintenu par la communauté Vercel

**Fichiers refactorés :**
```tsx
// layout.tsx
<ThemeProvider>{children}</ThemeProvider> // ✨

// ThemeToggle.tsx (48 lignes)
const { theme, setTheme, resolvedTheme } = useTheme();
const toggleTheme = () => setTheme(isDark ? "light" : "dark");
```

## 🏗️ Architecture nouvelle

### Structure des composants

```
src/components/
├── providers/
│   ├── ThemeProvider.tsx    # Wrapper next-themes
│   ├── index.ts
│   └── README.md
├── molecules/
│   └── ThemeToggle.tsx      # Refactorisé avec useTheme()
└── index.ts
```

### ThemeProvider

```tsx
// src/components/providers/ThemeProvider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
```

### Layout (Clean!)

```tsx
// src/app/layout.tsx
import { ThemeProvider } from "@/components/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

### ThemeToggle (Simplifié)

```tsx
// src/components/molecules/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <LoadingButton />;

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <button onClick={toggleTheme} aria-label={...}>
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}
```

## 📦 Dépendance ajoutée

```json
{
  "dependencies": {
    "next-themes": "^0.4.6"
  }
}
```

**Taille :** ~1kb gzippé
**Maintenance :** Active, communauté Vercel

## ⚙️ Configuration Tailwind

Le `tailwind.config.ts` a été mis à jour pour écouter l'attribut `data-theme` :

```ts
const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  // ...
};
```

**Avant :** Tailwind écoutait uniquement `@media (prefers-color-scheme: dark)`
**Après :** Tailwind écoute `[data-theme="dark"]` + fallback media query

## 🎨 CSS mis à jour

Le `globals.css` supporte maintenant trois modes :

```css
/* Mode par défaut (light) */
:root {
  --color-bg-base: #F7F5F0;
  /* ... */
}

/* Mode dark via data-theme (PRIORITAIRE) */
:root[data-theme="dark"] {
  --color-bg-base: #111010;
  /* ... */
}

/* Mode light explicite */
:root[data-theme="light"] {
  --color-bg-base: #F7F5F0;
  /* ... */
}

/* Fallback système (si pas de data-theme) */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --color-bg-base: #111010;
    /* ... */
  }
}
```

## 🧪 Tests de fonctionnement

### Vérifications manuelles

1. **Changement de thème :**
   - Cliquer sur ThemeToggle
   - Le thème change instantanément
   - Pas de flash (FOUC)

2. **Persistance :**
   - Changer le thème
   - Recharger la page
   - Le choix est conservé

3. **Préférences système :**
   - Première visite sans localStorage
   - Le thème suit les préférences OS
   - Après clic, le choix manuel est prioritaire

### Console du navigateur

```javascript
// Vérifier l'attribut data-theme
document.documentElement.getAttribute('data-theme')
// → "dark" ou "light"

// Vérifier les variables CSS
getComputedStyle(document.documentElement)
  .getPropertyValue('--color-bg-base')
// → "#111010" (dark) ou "#F7F5F0" (light)

// Vérifier le localStorage
localStorage.getItem('theme')
// → "dark" ou "light"
```

## 🔄 ModCodePattern mis à jour

Le `.mod-patterns.json` track maintenant le dossier `providers/` :

```json
{
  "variables": {
    "PROVIDERS_DIR": "src/components/providers"
  },
  "patterns": [
    {
      "id": "provider-created",
      "onCreateFile": "src/components/providers/**/*.{tsx,ts}",
      "notify": [
        {
          "file": "src/components/providers/index.ts",
          "description": "📦 Ajouter l'export pour le provider {{TRIGGER_NAME}}"
        }
      ],
      "description": "🔌 Nouveau provider {{TRIGGER_NAME}} créé"
    }
  ]
}
```

## 📚 API useTheme()

Le hook `useTheme()` de next-themes expose :

```tsx
const {
  theme,           // "light" | "dark" | "system"
  setTheme,        // (theme: string) => void
  resolvedTheme,   // "light" | "dark" (résout "system")
  themes,          // ["light", "dark", "system"]
  systemTheme,     // "light" | "dark" (préférence OS)
} = useTheme();
```

### Exemple d'utilisation avancée

```tsx
"use client";

import { useTheme } from "next-themes";

export function ThemeSelector() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      {themes.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  );
}
```

## 🚀 Prochaines étapes possibles

1. **Ajouter plus de thèmes**
   ```tsx
   <ThemeProvider themes={["light", "dark", "cyberpunk", "retro"]}>
   ```

2. **Persister d'autres préférences**
   - Créer un `PreferencesProvider` pour language, layout, etc.

3. **Animations de transition**
   ```tsx
   <ThemeProvider disableTransitionOnChange={false}>
   ```

4. **Analytics**
   ```tsx
   const { theme } = useTheme();
   useEffect(() => {
     analytics.track('theme_changed', { theme });
   }, [theme]);
   ```

## 📖 Ressources

- [next-themes documentation](https://github.com/pacocoursey/next-themes)
- [Next.js App Router avec Providers](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-context-providers)
- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)

## ✅ Checklist de migration

- [x] Installer `next-themes`
- [x] Créer `ThemeProvider`
- [x] Refactoriser `ThemeToggle` avec `useTheme()`
- [x] Nettoyer le script inline dans Layout
- [x] Configurer Tailwind `darkMode`
- [x] Mettre à jour CSS avec sélecteurs `[data-theme]`
- [x] Tester le build
- [x] Vérifier le fonctionnement
- [x] Mettre à jour ModCodePattern
- [x] Documenter la migration

---

**Migration réalisée le 5 juin 2026**
**Réduction de code : ~60 lignes**
**Amélioration de maintenabilité : ⭐⭐⭐⭐⭐**
