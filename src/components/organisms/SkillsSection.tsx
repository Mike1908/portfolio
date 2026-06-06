"use client";

import { SectionHeader } from "../molecules/SectionHeader";
import { SkillTag } from "../atoms/SkillTag";
import { SectionReveal } from "../molecules/SectionReveal";
import { cn } from "@/lib/utils";

export type Skill = {
  readonly label: string;
  readonly featured?: boolean;
};

export type SkillGroup = {
  readonly label: string;
  readonly skills: Skill[];
};

export type SkillsSectionProps = {
  readonly title?: string;
  readonly subtitle?: string;
  readonly groups: SkillGroup[];
  readonly className?: string;
};

export const SkillsSection = ({
  title = "Compétences",
  subtitle,
  groups,
  className,
}: SkillsSectionProps) => {
  return (
    <section className={cn("relative w-full py-section px-6 lg:px-8", className)}>
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader title={title} subtitle={subtitle} />

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
            {groups.map((group, groupIndex) => (
              <div key={`${group.label}-${groupIndex}`} className="space-y-4">
                <h3
                  className="font-body uppercase tracking-wide text-muted"
                  style={{ fontSize: "0.82rem", fontWeight: 500 }}
                >
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <SkillTag
                      key={`${skill.label}-${skillIndex}`}
                      label={skill.label}
                      featured={skill.featured}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
