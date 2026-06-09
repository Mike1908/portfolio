"use client";

import { cn } from "@/lib/utils";

export type FooterProps = {
  readonly year: number;
  readonly name: string;
  readonly location: string;
  readonly className?: string;
};

export const Footer = ({
  year,
  name,
  location,
  className,
}: FooterProps) => {
  return (
    <footer
      role="contentinfo"
      className={cn(
        "flex flex-row flex-wrap items-center justify-between gap-4 border-t border-border px-6 py-8 lg:px-8",
        "text-muted",
        className,
      )}
      style={{ fontSize: "0.8rem" }}
    >
      <p>
        &copy; {year} {name}. All rights reserved.
      </p>
      
      <p>
        {location} · {name}
      </p>
    </footer>
  );
};
