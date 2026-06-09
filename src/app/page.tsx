import { NavBar, HeroSection, SectionReveal, AboutSection, ExperienceSection, ProjectsSection, SkillsSection, ContactSection } from "@/components";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const badges = [
  { label: "Développeur Full Stack", variant: "primary" as const },
  { label: "React & Next.js", variant: "secondary" as const },
  { label: "TypeScript", variant: "accent" as const },
];

const aboutStats = [
  { label: "Années d'expérience", value: "5+" },
  { label: "Projets réalisés", value: "50+" },
  { label: "Clients satisfaits", value: "30+" },
  { label: "Tasses de café", value: "∞" },
];

const experiences = [
  {
    company: "TechCorp Innovation",
    role: "Lead Developer Front-End",
    period: "2022 - Présent",
    description: "Direction technique d'une équipe de 5 développeurs sur la refonte complète d'une plateforme SaaS. Mise en place d'un design system et migration vers Next.js 14 avec amélioration des performances de 40%.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    company: "Digital Solutions Inc.",
    role: "Développeur Full Stack",
    period: "2020 - 2022",
    description: "Développement d'applications web modernes pour des clients internationaux. Création d'APIs REST et GraphQL, intégration de solutions de paiement et optimisation SEO.",
    tags: ["Node.js", "React", "PostgreSQL", "GraphQL", "Docker"],
  },
  {
    company: "Startup Labs",
    role: "Développeur Front-End",
    period: "2019 - 2020",
    description: "Développement d'interfaces utilisateur réactives et accessibles pour des startups en phase de croissance. Collaboration étroite avec les designers pour implémenter des expériences utilisateur optimales.",
    tags: ["React", "JavaScript", "SASS", "Redux", "Jest"],
  },
];

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    description: "Plateforme de commerce en ligne complète avec gestion des stocks, paiements et tableau de bord administrateur.",
    stack: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    url: "https://example.com",
  },
  {
    number: "02",
    title: "Dashboard Analytics",
    description: "Interface de visualisation de données en temps réel avec graphiques interactifs et exports personnalisés.",
    stack: ["React", "D3.js", "Node.js", "MongoDB"],
    url: "https://example.com",
  },
  {
    number: "03",
    title: "Design System",
    description: "Système de design complet avec composants réutilisables, documentation interactive et thème personnalisable.",
    stack: ["React", "Storybook", "TypeScript", "CSS-in-JS"],
  },
  {
    number: "04",
    title: "Mobile App",
    description: "Application mobile cross-platform avec authentification, notifications push et synchronisation offline.",
    stack: ["React Native", "Firebase", "Redux", "TypeScript"],
    url: "https://example.com",
  },
  {
    number: "05",
    title: "CMS Headless",
    description: "Système de gestion de contenu découplé avec API GraphQL et interface d'administration moderne.",
    stack: ["Node.js", "GraphQL", "React", "PostgreSQL"],
  },
  {
    number: "06",
    title: "Portfolio Creator",
    description: "Outil de création de portfolios avec templates personnalisables et déploiement automatique.",
    stack: ["Next.js", "Vercel", "Tailwind", "MDX"],
    url: "https://example.com",
  },
];

const skillGroups = [
  {
    label: "Front-End",
    skills: [
      { label: "React", featured: true },
      { label: "Next.js", featured: true },
      { label: "TypeScript", featured: true },
      { label: "JavaScript", featured: false },
      { label: "HTML/CSS", featured: false },
      { label: "Tailwind CSS", featured: true },
      { label: "Framer Motion", featured: false },
    ],
  },
  {
    label: "Back-End",
    skills: [
      { label: "Node.js", featured: true },
      { label: "Express", featured: false },
      { label: "PostgreSQL", featured: true },
      { label: "MongoDB", featured: false },
      { label: "GraphQL", featured: false },
      { label: "REST APIs", featured: true },
    ],
  },
  {
    label: "Outils & DevOps",
    skills: [
      { label: "Git", featured: true },
      { label: "Docker", featured: false },
      { label: "Vercel", featured: false },
      { label: "CI/CD", featured: false },
      { label: "Jest", featured: false },
      { label: "Webpack", featured: false },
    ],
  },
  {
    label: "Design & UX",
    skills: [
      { label: "Figma", featured: true },
      { label: "Design Systems", featured: true },
      { label: "Responsive Design", featured: true },
      { label: "Accessibility", featured: false },
      { label: "Animation", featured: false },
    ],
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "mike@example.com",
    href: "mailto:mike@example.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/mikeuseni",
    href: "https://github.com/mikeuseni",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mikeuseni",
    href: "https://linkedin.com/in/mikeuseni",
    external: true,
  },
  {
    label: "Twitter",
    value: "@mikeuseni",
    href: "https://twitter.com/mikeuseni",
    external: true,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <NavBar links={navLinks} logoText="MU" />
      
      <HeroSection
        firstName="Mike"
        lastName="Useni"
        eyebrow="Développeur Front-End & Full-Stack · Montréal, QC"
        tagline="Créateur d'expériences web modernes et performantes. Passionné par le design système et l'architecture logicielle."
        badges={badges}
        scrollTarget="#content"
      />

      {/* Section À propos avec AboutSection */}
      <AboutSection
        bio="Je suis un <strong>développeur passionné</strong> par la création d'expériences web exceptionnelles. Spécialisé en <strong>React et Next.js</strong>, je combine design moderne et architecture solide pour créer des applications performantes et scalables. Mon approche met l'accent sur <strong>l'expérience utilisateur</strong> et les meilleures pratiques de développement."
        stats={aboutStats}
      />

      {/* Section Expérience */}
      <ExperienceSection
        title="Expérience professionnelle"
        subtitle="Mon parcours de développeur à travers différentes entreprises"
        experiences={experiences}
      />

      {/* Section Projets */}
      <ProjectsSection
        title="Projets sélectionnés"
        subtitle="Une collection de mes réalisations récentes"
        projects={projects}
      />

      {/* Section Compétences */}
      <SkillsSection
        title="Compétences techniques"
        subtitle="Technologies et outils que je maîtrise"
        groups={skillGroups}
      />

      {/* Section Contact */}
      <ContactSection
        heading="Restons en contact"
        subtitle="N'hésitez pas à me contacter pour discuter de vos projets ou simplement échanger sur la technologie."
        links={contactLinks}
      />
      
      <main id="content" className="flex flex-1 w-full flex-col items-center py-32 px-6 sm:px-16">
        <div className="w-full max-w-4xl space-y-24">
          
          {/* Section 1 - Sans délai */}
          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-primary">
                Section avec SectionReveal
              </h2>
              <p className="text-lg text-body leading-relaxed">
                Cette section apparaît avec une animation d&apos;opacité 0→1 et y 20→0,
                avec un ease-out de 0.65s. Elle se déclenche quand vous scrollez jusqu&apos;à elle.
              </p>
            </div>
          </SectionReveal>

          {/* Section 2 - Délai 0.15s */}
          <SectionReveal delay={0.15}>
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold tracking-tight text-primary">
                Avec délai de 0.15s
              </h3>
              <p className="text-lg text-body leading-relaxed">
                Cette section a un délai de 0.15s, créant un effet de stagger par rapport à la section précédente.
              </p>
            </div>
          </SectionReveal>

          {/* Section 3 - Délai 0.3s */}
          <SectionReveal delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold tracking-tight text-primary">
                Avec délai de 0.3s
              </h3>
              <p className="text-lg text-body leading-relaxed">
                Cette section a un délai de 0.3s pour un effet encore plus marqué.
              </p>
            </div>
          </SectionReveal>

          {/* Section avec plusieurs enfants staggerés */}
          <div className="space-y-8">
            <SectionReveal>
              <h3 className="text-3xl font-semibold tracking-tight text-primary">
                Effet de stagger sur plusieurs éléments
              </h3>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="p-6 rounded-lg border border-border bg-bg-surface">
                <h4 className="text-xl font-medium mb-2">Élément 1</h4>
                <p className="text-body">Apparaît en premier avec 0.1s de délai</p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="p-6 rounded-lg border border-border bg-bg-surface">
                <h4 className="text-xl font-medium mb-2">Élément 2</h4>
                <p className="text-body">Apparaît ensuite avec 0.2s de délai</p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="p-6 rounded-lg border border-border bg-bg-surface">
                <h4 className="text-xl font-medium mb-2">Élément 3</h4>
                <p className="text-body">Apparaît en dernier avec 0.3s de délai</p>
              </div>
            </SectionReveal>
          </div>

          {/* Section avec once={false} */}
          <SectionReveal once={false}>
            <div className="p-8 rounded-lg bg-primary/10 border border-primary/20">
              <h3 className="text-2xl font-semibold tracking-tight text-primary mb-4">
                Animation répétée (once=false)
              </h3>
              <p className="text-lg text-body leading-relaxed">
                Cette section s&apos;anime à chaque fois qu&apos;elle entre dans la vue.
                Scrollez vers le haut puis redescendez pour voir l&apos;animation à nouveau!
              </p>
            </div>
          </SectionReveal>

        </div>
      </main>
    </div>
  );
}
