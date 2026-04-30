import type { Locale } from '@/i18n/config';

export interface LocalizedContent {
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
}

export interface Project extends LocalizedContent {
  id: string;
  slug: string;
  content: string;
  contentFr: string;
  technologies: string[];
  imageUrl?: string | null;
  demoUrl?: string | null;
  githubUrl?: string | null;
  featured: boolean;
  order: number;
  publishedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  titleFr: string;
  slug: string;
  excerpt: string;
  excerptFr: string;
  content: string;
  contentFr: string;
  coverImage?: string | null;
  tags: string[];
  readingTime: number;
  publishedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  roleFr: string;
  description: string;
  descriptionFr: string;
  technologies: string[];
  startDate: Date;
  endDate?: Date | null;
  location?: string | null;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  read: boolean;
  createdAt: Date;
}

export type LocalizedField<T> = T extends { titleFr: string }
  ? T & {
      getTitle: (locale: Locale) => string;
      getDescription: (locale: Locale) => string;
    }
  : T;
