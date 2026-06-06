import { cn } from "@/lib/utils";

export type ScrollHintProps = {
  readonly targetId?: string;
  readonly label?: string;
  readonly variant?: "arrow" | "line";
  readonly className?: string;
};

export const ScrollHint = ({
  targetId = "#content",
  label = "Scroll",
  variant = "line",
  className,
}: ScrollHintProps) => {
  const handleClick = () => {
    const target = document.querySelector(targetId);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group flex items-center gap-3 text-muted transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        className,
      )}
      aria-label={label}
    >
      {variant === "line" && (
        <span className="block h-px w-8 bg-current transition-all group-hover:w-12" aria-hidden="true" />
      )}
      <span className="text-xs font-medium tracking-[0.2em] uppercase">{label}</span>
    </button>
  );
};
