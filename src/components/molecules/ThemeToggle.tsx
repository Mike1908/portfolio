"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  
  // Détecte si on est côté client (évite mismatch SSR/hydration)
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const baseClasses = cn(
    "flex h-[34px] w-[34px] items-center justify-center rounded-full border border-border bg-bg-surface text-body transition-colors hover:bg-bg-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
  );

  if (!mounted) {
    return (
      <button
        type="button"
        className={baseClasses}
        disabled
        aria-label="Chargement du thème"
      >
        <span className="sr-only">Chargement du thème…</span>
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={baseClasses}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      {isDark ? (
        <Moon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Sun className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
};
