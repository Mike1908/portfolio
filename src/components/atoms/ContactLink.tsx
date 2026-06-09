import { cn } from "@/lib/utils";

export type ContactLinkProps = {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly external?: boolean;
  readonly className?: string;
};

export const ContactLink = ({
  label,
  value,
  href,
  external = false,
  className,
}: ContactLinkProps) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group flex justify-between border-t border-border py-[1.2rem]",
        "transition-[padding] duration-300 ease-spring",
        "hover:pl-2",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
        className,
      )}
    >
      <span className="font-medium">{label}</span>
      <span className="text-muted" style={{ fontSize: "0.85rem" }}>
        {value}
      </span>
    </a>
  );
};
