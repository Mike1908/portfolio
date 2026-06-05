import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        "bg-base": "var(--color-bg-base)",
        "bg-surface": "var(--color-bg-surface)",
        "bg-hover": "var(--color-bg-hover)",
        border: "var(--color-border)",
        card: "var(--color-card)",
        primary: "var(--color-text-primary)",
        body: "var(--color-text-body)",
        muted: "var(--color-text-muted)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
        mono: "var(--font-mono)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        section: "var(--spacing-section)",
        hero: "var(--spacing-hero)",
      },
      borderRadius: {
        tag: "var(--radius-tag)",
        button: "var(--radius-button)",
        card: "var(--radius-card)",
        project: "var(--radius-project)",
        badge: "var(--radius-badge)",
      },
      transitionTimingFunction: {
        "ease-out": "var(--ease-out)",
        spring: "var(--spring)",
      },
      transitionDuration: {
        reveal: "var(--duration-reveal)",
      },
    },
  },
};

export default config;
