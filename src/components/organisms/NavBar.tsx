"use client";

import { Logo } from "../atoms/Logo";
import { NavLink as NavLinkAtom, type NavLinkProps } from "../atoms/NavLink";
import { ThemeToggle } from "../molecules/ThemeToggle";
import { MobileMenu } from "../molecules/MobileMenu";

export type NavBarProps = {
  readonly links: NavLinkProps[];
  readonly logoText: string;
  readonly logoHref?: string;
};

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

            {/* Navigation Desktop - cachée sur mobile */}
            <div className="hidden flex-1 items-center justify-end gap-2 lg:flex lg:gap-4">
              <ul className="flex items-center gap-2 lg:gap-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <NavLinkAtom {...link} />
                  </li>
                ))}
              </ul>

              {/* Theme Toggle Desktop */}
              <div className="ml-4 flex items-center">
                <ThemeToggle />
              </div>
            </div>

            {/* Menu Mobile */}
            <MobileMenu links={links} />
          </nav>
        </div>
      </header>

      {/* Spacer pour compenser le fixed positioning */}
      <div className="h-[64px]" aria-hidden="true" />
    </>
  );
};
