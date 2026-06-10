import {
  NavBar,
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from "@/components";
import {
  navLinks,
  badges,
  aboutStats,
  experiences,
  projects,
  skillGroups,
  contactLinks,
  heroData,
  aboutBio,
  footerData,
} from "@/data/portfolio";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <NavBar links={navLinks} logoText="MU" />

      <HeroSection
        firstName={heroData.firstName}
        lastName={heroData.lastName}
        eyebrow={heroData.eyebrow}
        tagline={heroData.tagline}
        badges={badges}
        scrollTarget="#about"
      />

      <AboutSection bio={aboutBio} stats={aboutStats} />

      <ExperienceSection
        title="Expérience professionnelle"
        experiences={experiences}
      />

      <ProjectsSection title="Projets sélectionnés" projects={projects} />

      <SkillsSection title="Compétences techniques" groups={skillGroups} />

      <ContactSection
        heading="Restons en contact"
        subtitle="N'hésitez pas à me contacter pour discuter de vos projets ou simplement échanger sur la technologie."
        links={contactLinks}
      />

      <Footer
        year={footerData.year}
        name={footerData.name}
        location={footerData.location}
      />
    </div>
  );
}
