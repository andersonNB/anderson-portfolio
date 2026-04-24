import type {
  CaseStudy,
  ExperienceItem,
  NavigationItem,
  ProjectCard,
} from "@/types/portfolio";

export const navigation: NavigationItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Trabajo", href: "#trabajo" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
];

export const quickFacts = [
  "3+ anos de experiencia",
  "React / Next.js",
  "Frontend de producto",
];

export const selectedWork: ProjectCard[] = [
  {
    title: "UIKIT Nelumbo",
    href: "https://github.com/andersonNB/UIKITNelumbo",
    summary: "Componentes reutilizables y formularios sobre Next.js.",
    meta: "Next.js / React Query / RHF",
  },
  {
    title: "Nelumbo Front NextJS",
    href: "https://github.com/andersonNB/NelumboFrontNexJS",
    summary: "Base de aplicacion con Ant Design y estructura mas cercana a producto.",
    meta: "Next.js / Ant Design",
  },
  {
    title: "Blizzard Page",
    href: "https://github.com/andersonNB/Blizzard-Page",
    summary: "Proyecto visual para composicion, jerarquia y maquetacion.",
    meta: "React / Bootstrap",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    label: "01",
    title: "UI reusable",
    body: "Migracion de componentes hacia una base mas consistente y escalable.",
  },
  {
    label: "02",
    title: "Forms y data",
    body: "Trabajo con validaciones, estados async y flujos conectados a negocio.",
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2024 - Actualidad",
    company: "Nelumbo consultores",
    summary: "Next.js, React Query, formularios y apps de negocio.",
  },
  {
    period: "2022 - 2024",
    company: "Avanzo",
    summary: "UI reusable, patrones compartidos y optimizacion frontend.",
  },
  {
    period: "2022",
    company: "Comfaoriente SAS",
    summary: "Migracion desde Django hacia React.",
  },
];

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "React Query",
  "React Hook Form",
  "Yup",
  "Redux",
  "Ant Design",
  "Sass",
  "Styled Components",
  "Git",
  "GitHub",
];
