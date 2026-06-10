"use client";

import { cn } from "@/lib/utils";
import { TechTagList } from "./TechTagList";

export type Project = {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly stack: string[];
  readonly url?: string;
};

export type ProjectCardProps = Project & {
  readonly className?: string;
};

export const ProjectCard = ({
  number,
  title,
  description,
  stack,
  url,
  className,
}: ProjectCardProps) => {
  const content = (
    <>
      <span
        className="font-mono text-muted"
        style={{ fontSize: "0.73rem" }}
      >
        {number}
      </span>

      <h3
        className="font-display text-primary"
        style={{ fontSize: "1.2rem" }}
      >
        {title}
      </h3>

      <p
        className="font-body leading-relaxed text-body"
        style={{ fontSize: "1rem", fontWeight: 300 }}
      >
        {description}
      </p>

      <TechTagList tags={stack} />
    </>
  );

  const baseClasses = cn(
    "group flex flex-col gap-4 rounded-project border border-border bg-card p-6 transition-all duration-300 ease-spring hover:-translate-y-[5px] hover:border-muted focus-within:outline focus-within:outline-2 focus-within:outline-primary focus-within:outline-offset-2",
    className,
  );

  if (url) {
    return (
      <article className={baseClasses}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-4 focus:outline-none"
        >
          {content}
        </a>
      </article>
    );
  }

  return (
    <article className={baseClasses}>
      {content}
    </article>
  );
};
