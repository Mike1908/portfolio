import { cn } from "@/lib/utils";

export type StatCardProps = {
  readonly label: string;
  readonly value: string | number;
  readonly className?: string;
};

export const StatCard = ({ label, value, className }: StatCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-card border border-border bg-bg-surface p-6 transition-all duration-300 ease-spring hover:-translate-y-1",
        className,
      )}
    >
      <span className="font-display font-extrabold text-primary tracking-tight" style={{ fontSize: "2.25rem" }}>
        {value}
      </span>
      <span className="font-body font-normal text-muted" style={{ fontSize: "0.82rem" }}>
        {label}
      </span>
    </div>
  );
};
