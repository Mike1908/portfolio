import Link from "next/link";

export interface LogoProps {
  readonly text: string;
  readonly href?: string;
  readonly className?: string;
}

export function Logo({ text, href = "/", className = "" }: LogoProps) {
  return (
    <Link
      href={href}
      className={`font-display text-xl font-bold tracking-tight text-primary transition-colors hover:text-body focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className}`.trim()}
    >
      {text}
    </Link>
  );
}
