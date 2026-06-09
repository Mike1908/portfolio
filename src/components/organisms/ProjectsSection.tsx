"use client";

import { SectionHeader } from "../molecules/SectionHeader";
import { ProjectCard, type Project } from "../molecules/ProjectCard";
import { SectionReveal } from "../molecules/SectionReveal";
import { cn } from "@/lib/utils";

export type ProjectsSectionProps = {
  readonly label?: string;
  readonly title?: string;
  readonly projects: Project[];
  readonly className?: string;
};

export const ProjectsSection = ({
  label = "Portfolio",
  title = "Projets",
  projects,
  className,
}: ProjectsSectionProps) => {
  return (
    <section id="projects" className={cn("relative w-full py-section px-6 lg:px-8", className)}>
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader 
          label={label} 
          title={title} 
          titleId="projects-title"
          count={`${projects.length} projet${projects.length > 1 ? 's' : ''}`}
        />

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
