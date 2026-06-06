"use client";

import { cn } from "@/lib/utils";
import { SectionReveal } from "./SectionReveal";

export type SectionHeaderProps = {
  readonly title: string;
  readonly subtitle?: string;
  readonly className?: string;
};

export const SectionHeader = ({
  title,
  subtitle,
  className,
}: SectionHeaderProps) => {
  return (
    <SectionReveal className={cn("mb-12", className)}>
      <div className="space-y-2">
        <h2 className="font-display text-primary" style={{ fontSize: "clamp(2rem, 2.25vw, 2.5rem)" }}>
          {title}
        </h2>
        {subtitle && (
          <p className="font-body text-lg text-muted" style={{ fontWeight: 300 }}>
            {subtitle}
          </p>
        )}
      </div>
    </SectionReveal>
  );
};
