"use client";

import { cn } from "@/lib/utils";
import { SectionReveal } from "./SectionReveal";

export type Education = {
  readonly institution: string;
  readonly degree: string;
  readonly location: string;
  readonly period: string;
  readonly description: string;
  readonly type: "diplome" | "certification" | "formation";
};

export type EducationItemProps = Education & {
  readonly className?: string;
  readonly delay?: number;
};

export const EducationItem = ({
  institution,
  degree,
  location,
  period,
  description,
  type,
  className,
  delay = 0,
}: EducationItemProps) => {
  const typeLabel = {
    diplome: "Diplôme",
    certification: "Certification",
    formation: "Formation",
  }[type];

  return (
    <SectionReveal delay={delay}>
      <article
        role="listitem"
        className={cn(
          "grid grid-cols-1 gap-6 border-t border-border py-6 md:grid-cols-[200px_1fr] md:gap-12",
          className,
        )}
      >
        {/* Colonne gauche : Date */}
        <div className="text-muted" style={{ fontSize: "0.82rem" }}>
          {period}
        </div>

        {/* Colonne droite : Contenu */}
        <div className="space-y-2.5">
          <h3
            className="font-display text-primary transition-colors duration-300 hover:text-muted"
            style={{ fontSize: "1.2rem" }}
          >
            {institution}
          </h3>

          <div className="space-y-1">
            <p
              className="font-body uppercase tracking-wide text-body"
              style={{ fontSize: "0.82rem", fontWeight: 500 }}
            >
              {degree}
            </p>

            <p
              className="font-body text-muted"
              style={{ fontSize: "0.82rem" }}
            >
              {location}
            </p>
          </div>

          <p
            className="font-body leading-relaxed text-body"
            style={{ fontSize: "1rem", fontWeight: 300 }}
          >
            {description}
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
            {typeLabel}
          </div>
        </div>
      </article>
    </SectionReveal>
  );
};
