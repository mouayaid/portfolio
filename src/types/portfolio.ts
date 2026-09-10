import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  featured?: boolean;
  wide?: boolean;
  skills: string[];
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  period: string;
  stack: string;
  detail: string;
}

export interface Project {
  title: string;
  label: string;
  description: string;
  stack: string[];
  features?: string[];
  github?: string;
  featured?: boolean;
}

export interface EducationItem {
  period?: string;
  degree: string;
  school: string;
}
