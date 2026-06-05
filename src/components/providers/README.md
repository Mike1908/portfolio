# Providers

Les **Providers** sont des composants React Context qui fournissent des données ou des fonctionnalités globales à l'ensemble de l'application.

## Structure

```
src/components/providers/
├── ThemeProvider.tsx    # Gestion du thème (next-themes)
└── index.ts             # Exports centralisés
```

## ThemeProvider

Le `ThemeProvider` utilise la bibliothèque **`next-themes`** pour gérer les thèmes de manière élégante et performante.

### Avantages de next-themes

✅ **Zéro FOUC** (Flash Of Unstyled Content) - Le thème est appliqué avant le rendu
✅ **SSR-safe** - Fonctionne parfaitement avec Next.js
✅ **Gestion automatique** - localStorage, préférences système, etc.
✅ **Léger** - Seulement ~1kb gzippé
✅ **TypeScript** - Types inclus

### Configuration actuelle

```tsx
<ThemeProvider
  attribute="data-theme"        // Utilise l'attribut data-theme sur <html>
  defaultTheme="system"         // Suit les préférences système par défaut
  enableSystem                  // Active la détection auto dark/light
  disableTransitionOnChange={false} // Active les transitions CSS
>
  {children}
</ThemeProvider>
```

### Utilisation dans le Layout

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

**Note importante :** `suppressHydrationWarning` sur `<html>` est nécessaire car `next-themes` modifie l'attribut `data-theme` côté client avant l'hydratation React.

### Consommer le thème dans un composant

```tsx
"use client";

import { useTheme } from "next-themes";

export function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div>
      <p>Thème actuel : {theme}</p>
      <p>Thème résolu : {resolvedTheme}</p>
      <button onClick={() => setTheme("dark")}>Mode sombre</button>
      <button onClick={() => setTheme("light")}>Mode clair</button>
      <button onClick={() => setTheme("system")}>Système</button>
    </div>
  );
}
```

### API useTheme()

| Propriété | Type | Description |
|-----------|------|-------------|
| `theme` | `string \| undefined` | Thème actuel (`"light"`, `"dark"`, `"system"`) |
| `setTheme` | `(theme: string) => void` | Change le thème |
| `resolvedTheme` | `string \| undefined` | Thème effectif (résout "system" en "light" ou "dark") |
| `themes` | `string[]` | Liste des thèmes disponibles |
| `systemTheme` | `"light" \| "dark"` | Préférence système de l'OS |

### Pattern de montage pour éviter hydratation mismatch

Toujours utiliser ce pattern dans les composants qui affichent du contenu dépendant du thème :

```tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeAwareComponent() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Rendu placeholder pendant SSR/hydratation
    return <div>Loading...</div>;
  }

  // Rendu final après hydratation
  return <div>Le thème est {resolvedTheme}</div>;
}
```

## Ajouter d'autres Providers

Pour ajouter un nouveau provider (ex: AuthProvider, QueryProvider) :

### 1. Créer le provider

```tsx
// src/components/providers/AuthProvider.tsx
"use client";

import { createContext, useContext, type ReactNode } from "react";

interface AuthContextValue {
  user: User | null;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Logique d'authentification...

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
```

### 2. Exporter depuis index.ts

```tsx
// src/components/providers/index.ts
export { ThemeProvider } from './ThemeProvider';
export { AuthProvider, useAuth } from './AuthProvider';
```

### 3. Composer dans le Layout

```tsx
// src/app/layout.tsx
import { ThemeProvider, AuthProvider } from "@/components/providers";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## Ordre des Providers

L'ordre d'imbrication des providers est important. Suivez cette hiérarchie :

```tsx
<ThemeProvider>           {/* 1. Thème (pas de dépendances) */}
  <I18nProvider>          {/* 2. Internationalisation */}
    <AuthProvider>        {/* 3. Authentification */}
      <QueryProvider>     {/* 4. Data fetching (peut dépendre de auth) */}
        <ToastProvider>   {/* 5. Notifications UI */}
          {children}
        </ToastProvider>
      </QueryProvider>
    </AuthProvider>
  </I18nProvider>
</ThemeProvider>
```

## Ressources

- [Documentation next-themes](https://github.com/pacocoursey/next-themes)
- [React Context best practices](https://react.dev/learn/passing-data-deeply-with-context)
- [Next.js avec Context Providers](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-context-providers)
