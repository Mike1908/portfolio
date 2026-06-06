"use client";

import { SectionReveal } from "../molecules/SectionReveal";
import { StatCard } from "../atoms/StatCard";

export type Stat = {
  readonly label: string;
  readonly value: string | number;
};

export type AboutSectionProps = {
  readonly bio: string;
  readonly stats: Stat[];
};

export const AboutSection = ({ bio, stats }: AboutSectionProps) => {
  return (
    <section className="relative w-full py-section px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Grid 2 colonnes, responsive */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Colonne gauche : Bio */}
          <SectionReveal delay={0}>
            <div
              className="max-w-none font-body text-lg leading-relaxed text-body [&>strong]:font-medium"
              dangerouslySetInnerHTML={{ __html: bio }}
              style={{
                fontWeight: 300,
              }}
            />
          </SectionReveal>

          {/* Colonne droite : Stats */}
          <SectionReveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <StatCard
                  key={`${stat.label}-${index}`}
                  label={stat.label}
                  value={stat.value}
                />
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
