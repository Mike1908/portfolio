"use client";

import { ContactLink } from "../atoms/ContactLink";
import { SectionReveal } from "../molecules/SectionReveal";
import { cn } from "@/lib/utils";

export type ContactLinkData = {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly external?: boolean;
};

export type ContactSectionProps = {
  readonly heading: string;
  readonly subtitle: string;
  readonly links: ContactLinkData[];
  readonly className?: string;
};

export const ContactSection = ({
  heading,
  subtitle,
  links,
  className,
}: ContactSectionProps) => {
  return (
    <section className={cn("relative w-full py-section px-6 lg:px-8", className)}>
      <div className="mx-auto w-full max-w-[620px]">
        <SectionReveal>
          <h2 className="font-display text-4xl font-bold tracking-tight lg:text-5xl">
            {heading}
          </h2>
          {subtitle && (
            <p className="mt-4 text-muted">{subtitle}</p>
          )}
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <nav aria-label="Liens de contact" className="mt-12">
            <div className="flex flex-col">
              {links.map((link, index) => (
                <ContactLink
                  key={`${link.label}-${index}`}
                  label={link.label}
                  value={link.value}
                  href={link.href}
                  external={link.external}
                />
              ))}
            </div>
          </nav>
        </SectionReveal>
      </div>
    </section>
  );
};
