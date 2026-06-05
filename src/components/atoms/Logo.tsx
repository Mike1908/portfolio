import Link from "next/link";
import { cn } from "@/lib/utils";

export type LogoProps = {
  readonly text: string;
  readonly href?: string;
  readonly className?: string;
};

export const Logo = ({ text, href = "/", className }: LogoProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "font-display text-xl font-bold tracking-tight text-primary transition-colors hover:text-body focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        className,
      )}
    >
      {text}
    </Link>
  );
};
