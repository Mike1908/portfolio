"use client";

import { SectionHeader } from "../molecules/SectionHeader";
import { ExperienceItem, type Experience } from "../molecules/ExperienceItem";
import { cn } from "@/lib/utils";

export type ExperienceSectionProps = {
  readonly title?: string;
  readonly subtitle?: string;
  readonly experiences: Experience[];
  readonly className?: string;
};

export const ExperienceSection = ({
  title = "Expérience",
  subtitle,
  experiences,
  className,
}: ExperienceSectionProps) => {
  return (
    <section className={cn("relative w-full py-section px-6 lg:px-8", className)}>
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader title={title} subtitle={subtitle} />

        <div role="list">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={`${experience.company}-${index}`}
              {...experience}
              delay={0.1 + index * 0.1}
              className={index === experiences.length - 1 ? "border-b border-border" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
