export interface NavLinkProps {
  readonly label: string;
  readonly href: string;
  readonly className?: string;
}

export function NavLink({ label, href, className = "" }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`rounded-button px-3 py-2 text-sm font-medium text-body transition-colors hover:bg-bg-hover hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className}`.trim()}
    >
      {label}
    </a>
  );
}
