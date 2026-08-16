export type Lang = "es" | "en";

export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  tech: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  accent: string;
}

export interface TimelineStep {
  label: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  duration: string;
  duties: string[];
  status: string;
}

export interface ThinkStep {
  step: string;
  title: string;
  description: string;
}

export interface Content {
  meta: {
    downloadCv: string;
  };
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    tech: string;
    contact: string;
    cv: string;
  };
  hero: {
    greeting: string;
    name: string;
    roles: string[];
    text: string;
    ctaProjects: string;
    ctaCv: string;
    scrollHint: string;
  };
  about: {
    eyebrow: string;
    title: string;
    timeline: TimelineStep[];
    paragraphs: string[];
  };
  stats: StatItem[];
  tech: {
    eyebrow: string;
    title: string;
    groups: { name: string; items: string[] }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    item: ExperienceItem;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    demo: string;
    code: string;
    caseStudy: string;
    items: Project[];
  };
  github: {
    eyebrow: string;
    title: string;
    subtitle: string;
    repos: string;
    followers: string;
    following: string;
    loading: string;
    error: string;
    viewProfile: string;
  };
  think: {
    eyebrow: string;
    title: string;
    steps: ThinkStep[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    infoTitle: string;
    location: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}
