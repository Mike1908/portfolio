"use client";

import { cn } from "@/lib/utils";
import { TechTag } from "../atoms/TechTag";

export type TechTagListProps = {
  readonly tags: string[];
  readonly className?: string;
};

export const TechTagList = ({ tags, className }: TechTagListProps) => {
  if (tags.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag, index) => (
        <TechTag key={`${tag}-${index}`} label={tag} />
      ))}
    </div>
  );
};
