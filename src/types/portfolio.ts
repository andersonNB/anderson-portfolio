export type NavigationItem = {
  label: string;
  href: string;
};

export type Locale = "es" | "en";

export type GuideMessageTrigger = "idle" | "hover" | "focus" | "tap" | "click";

export type GuideCtaIntent = "contact" | "explore";

export type AnimatedGuideVariant = "terminal";

export type GuideAnchorCorner = "bottom-right";

export type GuideSizeMode = "compact";

export type GuideVisualPriority = "supporting";

export type GuideMotionProfile = "ambient" | "reduced";

export type GuideBodyPartRole = "arm" | "hand" | "leg" | "foot";

export type GuideBodyPartSide = "left" | "right";

export type GuideBodyPartPose = "rest" | "wave" | "stance";

export type GuideMessage = {
  id: string;
  text: string;
  trigger: GuideMessageTrigger;
  ctaIntent: GuideCtaIntent;
};

export type GuideBodyPart = {
  id: string;
  role: GuideBodyPartRole;
  side: GuideBodyPartSide;
  pose: GuideBodyPartPose;
};

export type AnimatedGuideContent = {
  ariaLabel: string;
  assistantName: string;
  statusLabel: string;
  hintLabel: string;
  greetingLabel: string;
  ctaLabel: string;
  ctaHref: string;
  variant: AnimatedGuideVariant;
  anchorCorner: GuideAnchorCorner;
  sizeMode: GuideSizeMode;
  visualPriority: GuideVisualPriority;
  motionProfile: GuideMotionProfile;
  bodyParts: GuideBodyPart[];
  messages: GuideMessage[];
};

export type AnimatedGuideInteractionState = {
  idle: boolean;
  hovered: boolean;
  focused: boolean;
  pressed: boolean;
  messageVisible: boolean;
  reducedMotion: boolean;
};

export type ProjectCard = {
  title: string;
  href: string;
  summary: string;
  meta: string;
  image: string;
  imageAlt: string;
  impact: string;
  tags: string[];
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
  emailLabel: string;
  githubLabel: string;
  linkedinLabel: string;
  cvLabel: string;
};

export type ProfileCardContent = {
  name: string;
  subtitle: string;
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
  animatedGuide: AnimatedGuideContent;
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
