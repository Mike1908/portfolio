// Atoms - Composants de base réutilisables
export { Logo, type LogoProps } from './atoms/Logo';
export { NavLink, type NavLinkProps } from './atoms/NavLink';
export { Badge, type BadgeProps } from './atoms/Badge';
export { ScrollHint, type ScrollHintProps } from './atoms/ScrollHint';
export { BackgroundGrid, type BackgroundGridProps } from './atoms/BackgroundGrid';
export { StatCard, type StatCardProps } from './atoms/StatCard';
export { TechTag, type TechTagProps } from './atoms/TechTag';

// Molecules - Combinaisons d'atomes
export { ThemeToggle } from './molecules/ThemeToggle';
export { CustomCursor, type CustomCursorProps } from './molecules/CustomCursor';
export { SectionReveal, type SectionRevealProps } from './molecules/SectionReveal';
export { SectionHeader, type SectionHeaderProps } from './molecules/SectionHeader';
export { ExperienceItem, type ExperienceItemProps, type Experience } from './molecules/ExperienceItem';
export { ProjectCard, type ProjectCardProps, type Project } from './molecules/ProjectCard';

// Organisms - Combinaisons complexes
export { NavBar, type NavBarProps } from './organisms/NavBar';
export { HeroSection, type HeroSectionProps, type BadgeData } from './organisms/HeroSection';
export { AboutSection, type AboutSectionProps, type Stat } from './organisms/AboutSection';
export { ExperienceSection, type ExperienceSectionProps } from './organisms/ExperienceSection';
export { ProjectsSection, type ProjectsSectionProps } from './organisms/ProjectsSection';

// Providers - Context providers
export { ThemeProvider, type ThemeProviderProps } from './providers';
