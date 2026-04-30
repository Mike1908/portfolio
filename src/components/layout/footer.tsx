import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Mike Useni</h3>
            <p className="text-sm text-muted-foreground">
              {t('builtWith')}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="mailto:usenimikesefu@gmail.com"
                className="text-muted-foreground hover:text-foreground"
              >
                usenimikesefu@gmail.com
              </a>
              <span className="text-muted-foreground">Montréal, QC</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Réseaux</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:usenimikesefu@gmail.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Mike Useni. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
