"use client";

import { Logo } from "../atoms/Logo";
import { NavLink as NavLinkAtom, type NavLinkProps } from "../atoms/NavLink";
import { ThemeToggle } from "../molecules/ThemeToggle";

export interface NavBarProps {
  readonly links: NavLinkProps[];
  readonly logoText: string;
  readonly logoHref?: string;
}

export const NavBar = ({ links, logoText, logoHref = "/" }: NavBarProps) => {
  return (
    <>
      {/* Skip link pour l'accessibilité */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-60 focus:rounded-button focus:bg-bg-surface focus:px-4 focus:py-2 focus:text-body focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Aller au contenu principal
      </a>

      {/* NavBar */}
      <header
        className="fixed left-0 top-0 z-50 w-full border-b border-border"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="h-[64px] w-full bg-bg-base/80">
          <nav
            className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8"
            aria-label="Navigation principale"
          >
            {/* Logo */}
            <div className="flex items-center">
              <Logo text={logoText} href={logoHref} />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-1 items-center justify-center gap-1 sm:justify-end sm:gap-2 lg:gap-4">
              <ul className="flex items-center gap-1 sm:gap-2 lg:gap-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <NavLinkAtom {...link} />
                  </li>
                ))}
              </ul>

              {/* Theme Toggle */}
              <div className="ml-2 flex items-center lg:ml-4">
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer pour compenser le fixed positioning */}
      <div className="h-[64px]" aria-hidden="true" />
    </>
  );
};
