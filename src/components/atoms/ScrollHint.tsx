import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ScrollHintProps {
  readonly targetId?: string;
  readonly label?: string;
  readonly className?: string;
}

export const ScrollHint = ({
  targetId = "#content",
  label = "Défiler",
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
        "group flex flex-col items-center gap-2 text-muted transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        className,
      )}
      aria-label={label}
    >
      <span className="text-sm font-medium">{label}</span>
      <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
    </button>
  );
};
