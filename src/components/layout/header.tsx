'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const t = useTranslations('nav');
  const { theme, setTheme } = useTheme();

  const navItems = [
    { href: '#about', label: t('about') },
    { href: '#projects', label: t('projects') },
    { href: '#blog', label: t('blog') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">MU</span>
        </Link>

        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
