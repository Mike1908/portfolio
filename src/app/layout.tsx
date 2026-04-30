import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mike Useni | Full-Stack Developer',
  description:
    'Portfolio professionnel de Mike Useni, développeur full-stack basé à Montréal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
