"use client";

import { Badge, ScrollHint, BackgroundGrid } from "../atoms";

export type BadgeData = {
  readonly label: string;
  readonly variant?: "primary" | "secondary" | "accent";
};

export type HeroSectionProps = {
  readonly name: string;
  readonly tagline: string;
  readonly badges: BadgeData[];
  readonly scrollTarget?: string;
};

export const HeroSection = ({
  scrollTarget = "#content",
  name,
  tagline,
  badges,
}: HeroSectionProps) => {
  const nameParts = name.split(" ");
  const isNameContainsUseni = nameParts.some((part) =>
    part.toLowerCase().includes("useni"),
  );

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Grille de fond SVG */}
      <BackgroundGrid opacity={0.3} />

      {/* Contenu principal */}
      <div
        className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-8 px-6 text-center"
        style={{ paddingTop: "calc(64px + 4rem)" }}
      >
        {/* Titre principal avec animation */}
        <h1 className="animate-reveal font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-tight stagger-1">
          {isNameContainsUseni ? (
            <>
              {nameParts.map((part, index) =>
                part.toLowerCase().includes("useni") ? (
                  <span
                    key={index}
                    className="text-outline"
                    style={{
                      WebkitTextStroke: "2px currentColor",
                      WebkitTextFillColor: "transparent",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {part}
                  </span>
                ) : (
                  <span key={index} className="text-primary">
                    {part}{" "}
                  </span>
                ),
              )}
            </>
          ) : (
            <span className="text-primary">{name}</span>
          )}
        </h1>

        {/* Tagline avec animation */}
        <p className="animate-reveal max-w-2xl text-lg font-medium leading-relaxed text-body md:text-xl stagger-2">
          {tagline}
        </p>

        {/* Badges avec animation */}
        <div className="animate-reveal flex flex-wrap items-center justify-center gap-2 stagger-3">
          {badges.map((badge, index) => (
            <Badge
              key={`${badge.label}-${index}`}
              label={badge.label}
              variant={badge.variant}
            />
          ))}
        </div>

        {/* Scroll hint avec animation */}
        <div className="animate-reveal mt-8 stagger-4">
          <ScrollHint targetId={scrollTarget} label="Découvrir" />
        </div>
      </div>
    </section>
  );
};
