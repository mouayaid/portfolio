import {
  BrainCircuit,
  Code2,
  Database,
  Smartphone,
  TestTube2,
} from "lucide-react";
import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend & Mobile",
    icon: Smartphone,
    featured: true,
    skills: ["React", "React Native", "TypeScript", "Expo", "Tailwind CSS", "Kotlin", "Jetpack Compose"],
  },
  {
    title: "Backend",
    icon: Code2,
    skills: ["ASP.NET Core", ".NET 8", "EF Core", "Node.js", "Express.js", "Django", "Spring Boot", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL Server", "MySQL", "MongoDB", "Firebase Firestore"],
  },
  {
    title: "AI & Data",
    icon: BrainCircuit,
    featured: true,
    skills: ["Python", "Machine Learning", "NLP", "Hugging Face", "Faster-Whisper", "scikit-learn", "Local LLMs"],
  },
  {
    title: "Engineering & Testing",
    icon: TestTube2,
    wide: true,
    skills: ["Git", "GitHub", "Swagger", "Postman", "Selenium", "Cucumber", "JUnit", "Detox"],
  },
];
