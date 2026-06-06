import { cn } from "@/lib/utils";

export type TechTagProps = {
  readonly label: string;
  readonly className?: string;
};

export const TechTag = ({ label, className }: TechTagProps) => {
  return (
    <span
      className={cn(
        "inline-block rounded-tag border border-border bg-bg-surface px-3 py-1 font-mono text-muted transition-colors duration-200 hover:bg-bg-hover",
        className,
      )}
      style={{ fontSize: "0.73rem" }}
    >
      {label}
    </span>
  );
};
