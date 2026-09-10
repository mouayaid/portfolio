import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "CheckPoint",
    label: "Featured project",
    description: "A full-stack workplace management mobile platform combining employee services, workspace reservations, real-time communication and AI-assisted meeting workflows.",
    stack: ["React Native", "Expo", "ASP.NET Core", "SQL Server", "SignalR", "AI"],
    features: ["JWT & refresh tokens", "Role-based access", "QR workflows", "Push notifications", "AI summaries"],
    github: "https://github.com/mouayaid/CheckPoint",
    featured: true,
  },
  {
    title: "Evalyze",
    label: "AI / NLP",
    description: "AI-powered web platform for automating root-cause and corrective-action evaluation with local inference support.",
    stack: ["Django", "Hugging Face", "NLP", "Local LLMs"],
  },
  {
    title: "Android Auction App",
    label: "Native mobile",
    description: "Real-time auction management app with reactive UI states, countdown timers and Firebase synchronization.",
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Firestore"],
  },
  {
    title: "Automated Testing Framework",
    label: "Quality engineering",
    description: "End-to-end testing framework using Page Object Model, BDD scenarios, explicit waits and maintainable test reports.",
    stack: ["Java", "Selenium", "Cucumber", "JUnit", "Maven"],
  },
  {
    title: "Sentiment Analysis",
    label: "Machine learning",
    description: "Flask application for classifying text sentiment with TF-IDF preprocessing and logistic regression.",
    stack: ["Python", "Flask", "scikit-learn", "TF-IDF", "NLP"],
  },
];
