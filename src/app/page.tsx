import Image from "next/image";
import { NavBar, HeroSection, SectionReveal } from "@/components";

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
              <div className="p-6 rounded-lg border border-border bg-bg-subtle">
                <h4 className="text-xl font-medium mb-2">Élément 1</h4>
                <p className="text-body">Apparaît en premier avec 0.1s de délai</p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="p-6 rounded-lg border border-border bg-bg-subtle">
                <h4 className="text-xl font-medium mb-2">Élément 2</h4>
                <p className="text-body">Apparaît ensuite avec 0.2s de délai</p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="p-6 rounded-lg border border-border bg-bg-subtle">
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
