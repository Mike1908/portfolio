"use client";

import { Badge, ScrollHint, BackgroundGrid } from "@/components";

export type BadgeData = {
  readonly label: string;
  readonly variant?: "primary" | "secondary" | "accent";
};

export type HeroSectionProps = {
  readonly firstName: string;
  readonly lastName: string;
  readonly eyebrow?: string;
  readonly tagline: string;
  readonly badges: BadgeData[];
  readonly scrollTarget?: string;
};

export const HeroSection = ({
  scrollTarget = "#content",
  firstName,
  lastName,
  eyebrow,
  tagline,
  badges,
}: HeroSectionProps) => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-bg-base">
      <BackgroundGrid opacity={0.15} />

      <div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-6 lg:px-8"
        style={{ paddingTop: "calc(64px + 3rem)" }}
      >
        {eyebrow && (
          <p className="animate-reveal stagger-1 text-xs font-medium tracking-[0.2em] uppercase text-muted">
            {eyebrow}
          </p>
        )}

        <h1 className="animate-reveal stagger-2 font-display font-extrabold leading-[0.85] tracking-tighter text-[clamp(3rem,7vw,7rem)]">
          <span className="flex flex-col">
            <span className="text-primary">{firstName}</span>
            <span
              style={{
                WebkitTextStroke: "2px var(--color-text-primary)",
                WebkitTextFillColor: "transparent",
              }}
            >
              {lastName}
            </span>
          </span>
        </h1>

        <p
          className="animate-reveal stagger-3 text-base font-normal leading-relaxed text-body"
          style={{ maxWidth: "448px", width: "100%" }}
        >
          {tagline}
        </p>

        <div className="animate-reveal stagger-4 flex flex-wrap items-center gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={`${badge.label}-${index}`}
              label={badge.label}
              variant={badge.variant}
            />
          ))}
        </div>

        <div className="animate-reveal stagger-4 mt-6">
          <ScrollHint targetId={scrollTarget} label="Scroll" variant="line" />
        </div>
      </div>
    </section>
  );
};
