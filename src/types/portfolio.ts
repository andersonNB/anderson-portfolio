export type NavigationItem = {
  label: string;
  href: string;
};

export type Locale = "es" | "en";

export type ProjectCard = {
  title: string;
  href: string;
  summary: string;
  meta: string;
  image: string;
  imageAlt: string;
};

export type CaseStudy = {
  label: string;
  title: string;
  body: string;
};

export type ExperienceItem = {
  period: string;
  company: string;
  summary: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  typedPrefix: string;
  typedWords: string[];
  description: string;
  facts: string[];
  ctaWork: string;
  ctaEmail: string;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type WorkContent = {
  eyebrow: string;
  title: string;
  ctaAll: string;
};

export type StackContent = {
  eyebrow: string;
  title: string;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ProfileCardContent = {
  name: string;
  subtitle: string;
  level: string;
  labels: {
    mainStack: string;
    style: string;
  };
  values: {
    mainStack: string;
    style: string;
  };
  stats: string[];
};

export type PortfolioTranslation = {
  navigation: NavigationItem[];
  headerName: string;
  hero: HeroContent;
  about: AboutContent;
  caseStudies: CaseStudy[];
  experience: {
    eyebrow: string;
    title: string;
    items: ExperienceItem[];
  };
  work: WorkContent;
  selectedWork: ProjectCard[];
  stackSection: StackContent;
  stack: string[];
  contact: ContactContent;
  profileCard: ProfileCardContent;
};
