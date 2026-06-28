"use client";

import { SectionHeader } from "../molecules/SectionHeader";
import { EducationItem, type Education } from "../molecules/EducationItem";
import { cn } from "@/lib/utils";

export type EducationSectionProps = {
  readonly label?: string;
  readonly title?: string;
  readonly education: Education[];
  readonly className?: string;
};

export const EducationSection = ({
  label = "Académique",
  title = "Formation & Certifications",
  education,
  className,
}: EducationSectionProps) => {
  return (
    <section id="education" className={cn("relative w-full py-section px-6 lg:px-8", className)}>
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader 
          label={label} 
          title={title} 
          titleId="education-title"
          count={`${education.length} élément${education.length > 1 ? 's' : ''}`}
        />

        <div role="list">
          {education.map((item, index) => (
            <EducationItem
              key={`${item.institution}-${index}`}
              {...item}
              delay={0.1 + index * 0.1}
              className={index === education.length - 1 ? "border-b border-border" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
