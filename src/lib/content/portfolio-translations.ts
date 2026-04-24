import type { Locale, PortfolioTranslation } from "@/types/portfolio";

export const portfolioTranslations: Record<Locale, PortfolioTranslation> = {
  es: {
    navigation: [
      { label: "Inicio", href: "#inicio" },
      { label: "Trabajo", href: "#trabajo" },
      { label: "Stack", href: "#stack" },
      { label: "Contacto", href: "#contacto" },
    ],
    headerName: "Anderson Navarro",
    hero: {
      eyebrow: "Portfolio 2026",
      title: "Desarrollador Frontend",
      typedPrefix: "Especializado en",
      typedWords: ["React", "Next.js", "Redux", "TypeScript"],
      description:
        "Trabajo con React y Next.js para construir interfaces modernas, formularios complejos, manejo de estado y componentes reutilizables.",
      facts: ["3+ anos de experiencia", "React / Next.js", "Frontend de producto"],
      ctaWork: "Ver trabajo",
      ctaEmail: "Email",
    },
    about: {
      eyebrow: "Sobre mi",
      title: "Menos discurso. Mas producto.",
      description:
        "Me muevo mejor en apps reales: validaciones, procesos, UI reusable y decisiones de frontend que duren.",
    },
    caseStudies: [
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
    ],
    experience: {
      eyebrow: "Experiencia",
      title: "Experiencia reciente.",
      items: [
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
      ],
    },
    work: {
      eyebrow: "Repos",
      title: "Trabajo seleccionado.",
      ctaAll: "Ver todos",
    },
    selectedWork: [
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
    ],
    stackSection: {
      eyebrow: "Stack",
      title: "Lo que uso.",
    },
    stack: [
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
    ],
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos.",
      description:
        "La siguiente fase puede entrar ya con LinkedIn, CV actualizado y casos de estudio mas completos.",
    },
    profileCard: {
      name: "Anderson Navarro",
      subtitle: "React / Next.js",
      level: "LV 03",
      labels: {
        mainStack: "Main stack",
        style: "Style",
      },
      values: {
        mainStack: "React / Next.js",
        style: "UI reusable",
      },
      stats: ["Forms 92", "State 88", "UX 90"],
    },
  },
  en: {
    navigation: [
      { label: "Home", href: "#inicio" },
      { label: "Work", href: "#trabajo" },
      { label: "Stack", href: "#stack" },
      { label: "Contact", href: "#contacto" },
    ],
    headerName: "Anderson Navarro",
    hero: {
      eyebrow: "Portfolio 2026",
      title: "Frontend Developer",
      typedPrefix: "Specialized in",
      typedWords: ["React", "Next.js", "Redux", "TypeScript"],
      description:
        "I build modern interfaces with React and Next.js, including complex forms, state management, and reusable components.",
      facts: ["3+ years of experience", "React / Next.js", "Product frontend"],
      ctaWork: "View work",
      ctaEmail: "Email",
    },
    about: {
      eyebrow: "About",
      title: "Less talk. More product.",
      description:
        "I work best on real apps: validations, workflows, reusable UI, and frontend decisions that last.",
    },
    caseStudies: [
      {
        label: "01",
        title: "Reusable UI",
        body: "Component migration toward a more consistent and scalable base.",
      },
      {
        label: "02",
        title: "Forms and data",
        body: "Experience with validations, async states, and business-driven flows.",
      },
    ],
    experience: {
      eyebrow: "Experience",
      title: "Recent experience.",
      items: [
        {
          period: "2024 - Present",
          company: "Nelumbo consultores",
          summary: "Next.js, React Query, forms, and business applications.",
        },
        {
          period: "2022 - 2024",
          company: "Avanzo",
          summary: "Reusable UI, shared patterns, and frontend optimization.",
        },
        {
          period: "2022",
          company: "Comfaoriente SAS",
          summary: "Migration from Django to React.",
        },
      ],
    },
    work: {
      eyebrow: "Repos",
      title: "Selected work.",
      ctaAll: "View all",
    },
    selectedWork: [
      {
        title: "UIKIT Nelumbo",
        href: "https://github.com/andersonNB/UIKITNelumbo",
        summary: "Reusable components and forms built on top of Next.js.",
        meta: "Next.js / React Query / RHF",
      },
      {
        title: "Nelumbo Front NextJS",
        href: "https://github.com/andersonNB/NelumboFrontNexJS",
        summary: "Application base with Ant Design and a more product-oriented structure.",
        meta: "Next.js / Ant Design",
      },
      {
        title: "Blizzard Page",
        href: "https://github.com/andersonNB/Blizzard-Page",
        summary: "Visual project focused on composition, hierarchy, and layout.",
        meta: "React / Bootstrap",
      },
    ],
    stackSection: {
      eyebrow: "Stack",
      title: "What I use.",
    },
    stack: [
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
    ],
    contact: {
      eyebrow: "Contact",
      title: "Let’s talk.",
      description:
        "The next phase can already include LinkedIn, an updated CV, and deeper case studies.",
    },
    profileCard: {
      name: "Anderson Navarro",
      subtitle: "React / Next.js",
      level: "LV 03",
      labels: {
        mainStack: "Main stack",
        style: "Style",
      },
      values: {
        mainStack: "React / Next.js",
        style: "Reusable UI",
      },
      stats: ["Forms 92", "State 88", "UX 90"],
    },
  },
};
