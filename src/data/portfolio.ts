import type { BadgeData } from "@/components/organisms/HeroSection";
import type { Stat } from "@/components/organisms/AboutSection";
import type { Experience } from "@/components/molecules/ExperienceItem";

import type { Project } from "@/components/molecules/ProjectCard";
import type { SkillGroup } from "@/components/organisms/SkillsSection";
import { Education } from "@/components/molecules/EducationItem";

export const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Formation", href: "#education" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const badges: BadgeData[] = [
  { label: "Disponible pour missions", variant: "primary" },
  { label: "3+ ans d'expérience", variant: "secondary" },
  { label: "JavaScript / TypeScript", variant: "accent" },
];

export const aboutStats: Stat[] = [
  { label: "Années d'expérience", value: "3+" },
  { label: "Clients majeurs", value: "6" },
  { label: "Composants livrés", value: "30+" },
];

export const experiences: Experience[] = [
  {
    company: "Projet confidentiel",
    role: "Développeur Full-stack",
    period: "Déc. 2025 — Mai 2026",
    description:
      "Développement full-stack au sein d'une équipe Agile sur une solution d'intégration de LLMs, administrable par les clients via une interface dédiée. Contribution au front-end en React/Next.js, au back-end en Node.js/Fastify, et aux API typées via tRPC. Manipulation de données avec Prisma et PostgreSQL, dans une architecture monorepo avec Turborepo.",
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "Fastify",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Turborepo",
    ],
  },
  {
    company: "Vidéotron",
    role: "Développeur Front-end",
    period: "Nov. 2025 — Déc. 2025",
    description:
      "Participation à la refonte d'une plateforme Drupal vers une architecture moderne découplée, au sein d'une équipe multi-équipes. Responsable du front-end et du BFF, avec une stack React, Next.js et NestJS. Drupal utilisé en mode headless pour la gestion de contenu, le tout déployé via Kubernetes et Jenkins.",
    tags: ["React", "Next.js", "NestJS", "Drupal", "Kubernetes", "Jenkins"],
  },
  {
    company: "Modcodepattern (Personnel)",
    role: "Développeur Full-stack",
    period: "Juil. 2025 — Aujourd'hui",
    description:
      "Développement solo d'une extension VS Code publiée sur le Marketplace, avec un site web en Next.js. L'extension surveille les fichiers d'un projet et génère une todo liste interactive pour maintenir la cohérence entre fichiers interdépendants.",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind",
      "Stripe",
      "Supabase",
    ],
  },
  {
    company: "Saraga (Alithya)",
    role: "Développeur Full-stack",
    period: "Jan. 2025 — Avr. 2025",
    description:
      "Participation à la refonte d'un système d'administration et de réclamation au sein d'une équipe full-stack. Intervention aussi bien côté front-end que back-end selon les besoins, sur une architecture moderne avec React, NestJS et MySQL. Le projet visait à améliorer l'expérience utilisateur, la flexibilité des outils et la sécurité des données.",
    tags: ["React", "NestJS", "MySQL", "TypeScript"],
  },
  {
    company: "MIZA (Alithya)",
    role: "Développeur Front-end",
    period: "Nov. 2023 — Nov. 2024",
    description:
      "Développement en équipe d'une bibliothèque d'une trentaine de composants React réutilisables, couvrant la quasi-totalité des besoins UI courants. Composants conçus pour être mobile-friendly et conformes aux standards d'accessibilité universelle, documentés via Storybook et testés avec Jest.",
    tags: [
      "React",
      "TypeScript",
      "Storybook",
      "Jest",
      "Material UI",
      "Accessibility",
    ],
  },
  {
    company: "Aéroport de Montréal",
    role: "Développeur Front-end",
    period: "Avr. 2023 — Sep. 2023",
    description:
      "Développement du site administrateur d'un système de régulation des taxis de l'aéroport, en collaboration avec les équipes mobile. Responsable de la construction de l'interface avec React, Next.js et Material UI, ainsi que de l'intégration des appels API pour l'affichage des données en temps réel. Tests automatisés avec Cypress et validation des données avec Zod.",
    tags: ["React", "Next.js", "Material UI", "Cypress", "Zod"],
  },
  {
    company: "Air France",
    role: "Développeur Front-end",
    period: "Mar. 2023 — Avr. 2023",
    description:
      "Développement d'un site interne de collaboration d'équipe au sein d'une équipe Agile/Scrum. Contribution à la construction d'une bibliothèque de composants réutilisables avec Material UI, documentée via Storybook et conçue pour être partagée à travers les différents sites de la marque.",
    tags: ["React", "Material UI", "Storybook", "Agile/Scrum"],
  },
];

export const education: Education[] = [
  {
    institution: "Anthropic Academy",
    degree: "Claude 101",
    location: "En ligne",
    period: "Juin 2026",
    description:
      "Certification professionnelle démontrant la maîtrise des fondamentaux de Claude AI et des meilleures pratiques d'intégration des LLMs dans des applications modernes.",
    type: "certification",
  },
  {
    institution: "Académie Alithya",
    degree: "Formation intensive",
    location: "Montréal, Qc, Canada",
    period: "Mars 2023",
    description:
      "Programme intensif de formation en développement logiciel avec focus sur les technologies modernes et les pratiques de l'industrie.",
    type: "formation",
  },
  {
    institution: "Université de Montréal",
    degree: "Baccalauréat en informatique",
    location: "Montréal, QC, Canada",
    period: "2021",
    description:
      "Diplôme universitaire en informatique avec une formation complète en programmation, structures de données, algorithmes et génie logiciel.",
    type: "diplome",
  },
  {
    institution: "Université de Montréal",
    degree: "Année préparatoire en arts et sciences",
    location: "Montréal, QC, Canada",
    period: "2017",
    description:
      "Programme préparatoire multidisciplinaire pour développer les compétences fondamentales avant d'entreprendre des études universitaires spécialisées.",
    type: "diplome",
  },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Modcodepattern",
    description:
      "Extension VS Code publiée sur le Marketplace avec site web en Next.js. Surveille les fichiers d'un projet et génère une todo liste interactive pour maintenir la cohérence entre fichiers interdépendants.",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind",
      "Stripe",
      "Supabase",
    ],
    url: "https://modcodepattern.com",
  },
  {
    number: "02",
    title: "Portfolio Personnel",
    description:
      "Portfolio moderne développé avec Next.js 15 et React 19. Architecture atomique (atoms, molecules, organisms), animations fluides avec Framer Motion, design system cohérent et approche mobile-first.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    url: "https://github.com/Mike1908/portfolio",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      { label: "JavaScript", featured: false },
      { label: "TypeScript", featured: false },
      { label: "React", featured: false },
      { label: "Next.js", featured: false },
      { label: "Tailwind", featured: false },
      { label: "Material UI", featured: false },
      { label: "Storybook", featured: false },
      { label: "Framer Motion", featured: false },
      { label: "Astro", featured: false },
    ],
  },
  {
    label: "Backend",
    skills: [
      { label: "Node.js", featured: false },
      { label: "NestJS", featured: false },
      { label: "tRPC", featured: false },
      { label: "REST", featured: false },
      { label: "PostgreSQL", featured: false },
      { label: "MongoDB", featured: false },
      { label: "Prisma", featured: false },
      { label: "Zod", featured: false },
    ],
  },
  {
    label: "Data & DevOps",
    skills: [
      { label: "Git", featured: false },
      { label: "Bitbucket", featured: false },
      { label: "Docker", featured: false },
      { label: "Kubernetes", featured: false },
      { label: "Jenkins", featured: false },
      { label: "Supabase", featured: false },
      { label: "Turborepo", featured: false },
    ],
  },
  {
    label: "Qualité & Tests",
    skills: [
      { label: "Jest", featured: false },
      { label: "Cypress", featured: false },
      { label: "Storybook", featured: false },
      { label: "TypeScript", featured: false },
      { label: "Zod", featured: false },
    ],
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "usenimikesefu@gmail.com",
    href: "mailto:usenimikesefu@gmail.com",
    external: false,
  },
  {
    label: "Téléphone",
    value: "(514) 224-3712",
    href: "tel:+15142243712",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/mike-useni-13b707220/",
    external: true,
  },
  {
    label: "site web",
    value: "portfolio",
    href: "https://mike1908.github.io/portfolio/",
    external: true,
  },
];

export const heroData = {
  firstName: "Mike",
  lastName: "Useni",
  eyebrow: "Développeur Front-End & Full-Stack · Montréal, QC",
  tagline:
    "Mon boulot, c'est de faire en sorte que les bonnes idées deviennent de vrais produits — proprement, durablement. Avec React, Next.js et Node.js comme terrain de jeu.",
};

export const aboutBio =
  "Développeur front-end et full-stack basé à Montréal, avec plus de trois ans d'expérience sur des projets réels pour des clients comme <strong>Air France</strong>, l'<strong>Aéroport de Montréal</strong> et <strong>Vidéotron</strong>. Diplômé en informatique de l'Université de Montréal, je travaille principalement avec <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong> et <strong>Node.js</strong>.<br/><br/>Ce qui me tient à cœur : écrire du code propre, bien structuré, et construire des composants qu'on a vraiment envie de réutiliser. J'ai développé une bonne expérience en <strong>design systems</strong> et bibliothèques de composants, et je suis aussi à l'aise côté back-end quand le projet le demande.";

export const footerData = {
  year: new Date().getFullYear(),
  name: "Mike Useni",
  location: "Montréal, QC",
};
