"use client";

import { useState, useEffect } from "react";
import type { NavLinkProps } from "../atoms/NavLink";
import { ThemeToggle } from "./ThemeToggle";
import { MenuIcon } from "../atoms/MenuIcon";
import { ChevronLeftIcon } from "../atoms/ChevronLeftIcon";
import { ChevronRightIcon } from "../atoms/ChevronRightIcon";
import { cn } from "@/lib/utils";

export type MobileMenuProps = {
  readonly links: NavLinkProps[];
};

export const MobileMenu = ({ links }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Bouton Menu avec flèche */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-bg-base transition-all duration-300 hover:border-primary lg:hidden"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <ChevronRightIcon className="text-primary" />
        ) : (
          <div className="flex items-center gap-0.5">
            <MenuIcon className="text-primary" />
            <ChevronLeftIcon className="text-primary" />
          </div>
        )}
      </button>

      {/* Menu Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-bg-base/95 backdrop-blur-md lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Mobile */}
      <div
        className={cn(
          "fixed right-0 top-[64px] z-40 h-[calc(100vh-64px)] w-full transform bg-bg-base transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex h-full flex-col p-6">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-3 text-xl font-medium text-primary transition-colors duration-300 hover:text-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
            <span className="text-sm text-muted">Thème</span>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </>
  );
};
