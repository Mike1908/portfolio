"use client";

import { cn } from "@/lib/utils";
import { SectionReveal } from "./SectionReveal";
import { TechTagList } from "./TechTagList";

export type Experience = {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly description: string;
  readonly tags: string[];
};

export type ExperienceItemProps = Experience & {
  readonly className?: string;
  readonly delay?: number;
};

export const ExperienceItem = ({
  company,
  role,
  period,
  description,
  tags,
  className,
  delay = 0,
}: ExperienceItemProps) => {
  return (
    <SectionReveal delay={delay}>
      <article
        role="listitem"
        className={cn(
          "grid grid-cols-1 gap-6 border-t border-border py-8 md:grid-cols-[200px_1fr] md:gap-12",
          className,
        )}
      >
        {/* Colonne gauche : Date */}
        <div className="text-muted" style={{ fontSize: "0.82rem" }}>
          {period}
        </div>

        {/* Colonne droite : Contenu */}
        <div className="space-y-4">
          <h3
            className="font-display text-primary transition-colors duration-300 hover:text-muted"
            style={{ fontSize: "1.2rem" }}
          >
            {company}
          </h3>

          <p
            className="font-body uppercase tracking-wide text-body"
            style={{ fontSize: "0.82rem", fontWeight: 500 }}
          >
            {role}
          </p>

          <p
            className="font-body leading-relaxed text-body"
            style={{ fontSize: "1rem", fontWeight: 300 }}
          >
            {description}
          </p>

          <TechTagList tags={tags} />
        </div>
      </article>
    </SectionReveal>
  );
};
