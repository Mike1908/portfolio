"use client";

import { SectionHeader } from "../molecules/SectionHeader";
import { ProjectCard, type Project } from "../molecules/ProjectCard";
import { SectionReveal } from "../molecules/SectionReveal";
import { cn } from "@/lib/utils";

export type ProjectsSectionProps = {
  readonly title?: string;
  readonly subtitle?: string;
  readonly projects: Project[];
  readonly className?: string;
};

export const ProjectsSection = ({
  title = "Projets",
  subtitle,
  projects,
  className,
}: ProjectsSectionProps) => {
  return (
    <section className={cn("relative w-full py-section px-6 lg:px-8", className)}>
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader title={title} subtitle={subtitle} />

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                {...project}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
