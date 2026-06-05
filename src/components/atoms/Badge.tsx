import { cn } from "@/lib/utils";

export type BadgeProps = {
  readonly label: string;
  readonly variant?: "primary" | "secondary" | "accent";
  readonly className?: string;
};

export const Badge = ({
  label,
  variant = "primary",
  className,
}: BadgeProps) => {
  const variantStyles = {
    primary: "bg-bg-surface text-primary border-border",
    secondary: "bg-bg-hover text-body border-border",
    accent: "bg-primary/10 text-primary border-primary/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-badge border text-sm font-medium transition-colors",
        variantStyles[variant],
        className,
      )}
    >
      {label}
    </span>
  );
};
