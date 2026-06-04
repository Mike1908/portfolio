"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = Exclude<Theme, "system">;

const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

function resolveTheme(theme: Theme): ResolvedTheme {
  return theme === "system" ? getSystemTheme() : theme;
}

function applyTheme(theme: ResolvedTheme): void {
  document.documentElement.setAttribute("data-theme", theme);
}

interface ThemeToggleProps {
  defaultTheme?: Theme;
}

export function ThemeToggle({ defaultTheme = "system" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<ResolvedTheme | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const resolved = resolveTheme(stored ?? defaultTheme);

    // localStorage n'est lisible que côté client : on synchronise après le montage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(resolved);
    applyTheme(resolved);

    // Suit les changements système tant que l'utilisateur n'a pas fait de choix explicite.
    const mediaQuery = window.matchMedia(DARK_QUERY);
    const handleChange = (event: MediaQueryListEvent) => {
      const current = localStorage.getItem(STORAGE_KEY);
      if (current && current !== "system") return;
      const next: ResolvedTheme = event.matches ? "dark" : "light";
      setTheme(next);
      applyTheme(next);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [defaultTheme]);

  const toggleTheme = () => {
    const next: ResolvedTheme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  if (!theme) {
    return (
      <button
        type="button"
        className={
          "flex h-[34px] w-[34px] items-center justify-center rounded-full border border-border bg-bg-surface text-body transition-colors hover:bg-bg-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        }
        disabled
      >
        <span className="sr-only">Chargement du thème…</span>
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={
        "flex h-[34px] w-[34px] items-center justify-center rounded-full border border-border bg-bg-surface text-body transition-colors hover:bg-bg-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      }
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      {isDark ? (
        <Moon className="h-4 w-4" aria-hidden />
      ) : (
        <Sun className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
