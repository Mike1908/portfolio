"use client";

import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  readonly label: string;
  readonly title: string;
  readonly count?: string;
  readonly titleId: string;
  readonly className?: string;
};

export const SectionHeader = ({
  label,
  title,
  count,
  titleId,
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-row items-end justify-between border-b border-border pb-6 mb-10",
        className,
      )}
    >
      <div className="space-y-1">
        <p
          className="font-body uppercase tracking-wide text-muted"
          style={{ fontSize: "0.82rem", fontWeight: 500 }}
        >
          {label}
        </p>
        <h2
          id={titleId}
          className="font-display text-4xl font-bold tracking-tight lg:text-5xl"
        >
          {title}
        </h2>
      </div>
      
      {count && (
        <span className="text-muted" style={{ fontSize: "0.85rem" }}>
          {count}
        </span>
      )}
    </div>
  );
};
