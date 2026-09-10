"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Smartphone,
  Sun,
  TestTube2,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const skillGroups = [
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

const experience = [
  {
    year: "2026",
    role: "Full-Stack Mobile Developer",
    company: "Tri-web",
    period: "Feb 2026 — Jul 2026",
    stack: "React Native · Expo · ASP.NET Core · SQL Server",
    detail: "Built a workplace management platform with secure role-based workflows, QR check-in, real-time notifications and AI-assisted meeting transcription.",
  },
  {
    year: "2025",
    role: "AI Developer Intern",
    company: "LEONI Wiring Systems",
    period: "Jul 2025 — Aug 2025",
    stack: "Django · Hugging Face · NLP · Local LLMs",
    detail: "Developed Evalyze, an AI-powered platform for automated root-cause and corrective-action evaluation with offline inference support.",
  },
  {
    year: "2023",
    role: "MERN Developer Intern",
    company: "Dpointgroup",
    period: "Feb 2023 — Jun 2023",
    stack: "React · Redux · Node.js · Express · MongoDB",
    detail: "Built an e-commerce progressive web app, reusable React components and Stripe-backed payment workflows.",
  },
  {
    year: "2022",
    role: "Web Developer Intern",
    company: "LEONI Wiring Systems",
    period: "Apr 2022 — May 2022",
    stack: "Angular · Spring Boot · REST",
    detail: "Contributed to frontend-backend integration and application data workflows for an internal web application.",
  },
];

const projects = [
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

const education = [
  ["2023 — 2026", "Software Engineering Degree", "EPI Digital School"],
  ["2021 — 2023", "Licence in Computer Science", "Higher Institute of Computer Science"],
  ["", "Baccalaureate in Information Technology", "Othmane Chatti High School"],
];

const reveal = {
  initial: { opacity: 0, y: 38 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <motion.div {...reveal} className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {copy && <p className="muted mt-5 text-base leading-7 sm:text-lg">{copy}</p>}
    </motion.div>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-10 w-10" />;

  const dark = theme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] transition hover:scale-105"
    >
      <motion.span key={theme} initial={{ rotate: -45, scale: 0.6, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }}>
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </motion.span>
    </button>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: 0 }}
      initial={{ y: -80 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-24px))] -translate-x-1/2 rounded-2xl transition-all duration-300 ${scrolled ? "glass px-4 py-2" : "px-2 py-3"}`}
    >
      <div className="flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight">Mouayaid<span className="text-indigo-500">.</span></a>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="muted text-sm font-medium transition hover:text-[var(--text)]">{item}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a aria-label="GitHub" href="https://github.com/mouayaid" target="_blank" className="hidden h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] transition hover:-translate-y-0.5 sm:grid"><Github size={18} /></a>
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] md:hidden" aria-label="Open menu">{open ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>
      {open && (
        <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 grid gap-1 border-t border-[var(--border)] pt-3 md:hidden">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-[var(--surface)]">{item}</a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}

function Hero() {
  const chips = ["React Native", ".NET 8", "Python", "TypeScript", "SQL Server", "AI / NLP"];
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[6%] top-[28%] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="section-shell relative grid items-center gap-16 py-24 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.65 }} className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-500">Hi, I&apos;m Mouayaid 👋</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.7 }} className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">Software Engineer<span className="gradient-text block">Full-Stack · Mobile · AI</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.7 }} className="muted mt-7 max-w-2xl text-lg leading-8">I build modern applications combining scalable backend systems, responsive interfaces, real-time features and intelligent technologies.</motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-6 py-3 text-sm font-semibold text-[var(--bg)] transition hover:-translate-y-1">View my work <ArrowDown size={16} /></a>
            <a href="mailto:mouayaidchatti@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold transition hover:-translate-y-1">Contact me <ArrowUpRight size={16} /></a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="muted mt-8 flex gap-5 text-sm">
            <a className="transition hover:text-[var(--text)]" href="https://github.com/mouayaid" target="_blank">GitHub ↗</a>
            <a className="transition hover:text-[var(--text)]" href="mailto:mouayaidchatti@gmail.com">Email ↗</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.94, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }} className="relative mx-auto w-full max-w-lg">
          <div className="glass relative min-h-[430px] overflow-hidden rounded-[32px] p-7">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
              <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div>
              <span className="muted font-mono text-xs">portfolio.tsx</span>
            </div>
            <div className="mt-10 font-mono text-sm leading-7">
              <p className="muted">const engineer = &#123;</p>
              <p className="pl-5"><span className="text-indigo-500">name:</span> &quot;Mouayaid&quot;,</p>
              <p className="pl-5"><span className="text-indigo-500">focus:</span> [&quot;Full-Stack&quot;, &quot;Mobile&quot;, &quot;AI&quot;],</p>
              <p className="pl-5"><span className="text-indigo-500">mindset:</span> &quot;build, test, improve&quot;</p>
              <p className="muted">&#125;;</p>
            </div>
            <div className="relative mt-12 h-44">
              {chips.map((chip, i) => (
                <motion.span
                  key={chip}
                  animate={{ y: [0, i % 2 ? -7 : 7, 0] }}
                  transition={{ duration: 4.2 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-xs font-semibold shadow-sm"
                  style={{ left: `${[4, 48, 15, 57, 6, 53][i]}%`, top: `${[8, 4, 48, 45, 80, 78][i]}%` }}
                >{chip}</motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <motion.div {...reveal}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-500">About</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Engineering products from interface to intelligence.</h2>
          <p className="muted mt-6 max-w-2xl text-lg leading-8">I&apos;m a Software Engineer focused on building practical full-stack, mobile and AI-powered applications. My experience spans modern frontend development, backend systems, databases, real-time communication and applied AI/NLP.</p>
        </motion.div>
        <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="grid grid-cols-2 gap-4">
          {[['Full-Stack', 'Web & APIs'], ['Mobile', 'Cross-platform + native'], ['AI / NLP', 'Applied intelligence'], ['4', 'Professional experiences']].map(([big, small], i) => (
            <motion.div whileHover={{ y: -5 }} key={small} className={`card p-6 ${i === 2 ? 'col-span-2' : ''}`}>
              <div>
                <div className="text-2xl font-semibold sm:text-3xl">{big}</div>
                <div className="muted mt-2 text-sm">{small}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-36">
      <div className="section-shell">
        <SectionTitle eyebrow="Skills" title="A versatile engineering toolkit." copy="Technologies grouped by how I use them to build products — not by arbitrary percentage bars." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={`skill-group-${group.title}`}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className={`card p-6 sm:p-7 ${group.featured ? 'lg:col-span-2' : ''} ${group.wide ? 'md:col-span-2 lg:col-span-3' : ''}`}
              >
                <div>
                  <div className="mb-7 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500/10 text-indigo-500"><Icon size={19} /></span>
                    <h3 className="font-semibold">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <span key={`${group.title}-${skill}-${skillIndex}`} className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5 text-sm">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-28 sm:py-36">
      <div className="section-shell">
        <SectionTitle eyebrow="Experience" title="Building across different environments." />
        <div className="relative ml-2 border-l border-[var(--border)] sm:ml-4">
          {experience.map((item, i) => (
            <motion.article
              key={`experience-${item.company}-${item.year}`}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.05 }}
              className="relative pb-14 pl-8 sm:pl-12"
            >
              <div className="relative">
                <span className="absolute -left-[39px] top-2 h-[13px] w-[13px] rounded-full border-2 border-indigo-500 bg-[var(--bg)] sm:-left-[55px]" />
                <div className="grid gap-4 lg:grid-cols-[120px_1fr]">
                  <div className="text-sm font-semibold text-indigo-500">{item.year}</div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-xl font-semibold sm:text-2xl">{item.role}</h3>
                      <span className="muted">@ {item.company}</span>
                    </div>
                    <p className="muted mt-2 text-sm">{item.period}</p>
                    <p className="mt-4 text-sm font-medium">{item.stack}</p>
                    <p className="muted mt-3 max-w-3xl leading-7">{item.detail}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-36">
      <div className="section-shell">
        <SectionTitle eyebrow="Selected work" title="Projects that show how I engineer." copy="A mix of full-stack, mobile, AI and testing work — each chosen to show a different dimension of my experience." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={`project-${project.title}`}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className={`card group overflow-hidden p-6 sm:p-8 ${project.featured ? 'md:col-span-2 lg:p-10' : ''}`}
            >
              <div className={project.featured ? "md:grid md:grid-cols-[1fr_.9fr] md:gap-10" : ""}>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">{project.label}</p>
                  <h3 className={`${project.featured ? 'text-3xl sm:text-5xl' : 'text-2xl'} font-semibold tracking-tight`}>{project.title}</h3>
                  <p className="muted mt-4 leading-7">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={`${project.title}-${tech}`} className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium">{tech}</span>
                    ))}
                  </div>
                  {project.github && <a href={project.github} target="_blank" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold transition group-hover:text-indigo-500">View source <ArrowUpRight size={16} /></a>}
                </div>
                {project.featured && (
                  <div className="mt-8 rounded-[24px] border border-[var(--border)] bg-[var(--surface-strong)] p-6 md:mt-0">
                    <div className="mb-5 flex items-center gap-2 text-sm font-semibold"><BriefcaseBusiness size={17} className="text-indigo-500" /> Core engineering</div>
                    <div className="grid gap-3">
                      {project.features?.map((feature, idx) => (
                        <motion.div whileHover={{ x: 4 }} key={`${project.title}-${feature}`} className="flex items-center gap-3 rounded-2xl border border-[var(--border)] px-4 py-3 text-sm">
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-indigo-500/10 text-[11px] font-bold text-indigo-500">{idx + 1}</span>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-28 sm:py-36">
      <div className="section-shell">
        <SectionTitle eyebrow="Education" title="The foundation behind the work." />
        <div className="grid gap-4 lg:grid-cols-3">
          {education.map(([period, degree, school], i) => (
            <motion.article
              key={`education-${degree}`}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.06 }}
              whileHover={{ y: -5 }}
              className="card p-6 sm:p-7"
            >
              <div>
                <p className="text-sm font-semibold text-indigo-500">{period || 'Baccalaureate'}</p>
                <h3 className="mt-5 text-xl font-semibold">{degree}</h3>
                <p className="muted mt-3 text-sm leading-6">{school}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div {...reveal} className="card mt-5 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">Additional training</p><p className="muted mt-2">AWS Academy Cloud Foundations · React — The Complete Guide</p></div><span className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold">Continuous learning</span>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-36">
      <motion.div {...reveal} className="section-shell glass overflow-hidden rounded-[32px] p-8 sm:p-12 lg:p-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-500">Contact</p>
        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Have an opportunity or project in mind? <span className="gradient-text">Let&apos;s talk.</span></h2>
        <p className="muted mt-6 max-w-2xl text-lg leading-8">I&apos;m open to software engineering opportunities, collaborations and conversations about interesting products.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="mailto:mouayaidchatti@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-6 py-3 text-sm font-semibold text-[var(--bg)] transition hover:-translate-y-1"><Mail size={17} /> Email me</a>
          <a href="https://github.com/mouayaid" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition hover:-translate-y-1"><Github size={17} /> GitHub</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition hover:-translate-y-1"><Linkedin size={17} /> LinkedIn</a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return <footer className="section-shell flex flex-col gap-3 border-t border-[var(--border)] py-8 text-sm sm:flex-row sm:items-center sm:justify-between"><div><span className="font-semibold">Mouayaid Zammit Chatti</span><span className="muted"> · Software Engineer</span></div><div className="muted">Built with Next.js · © 2026</div></footer>;
}

function PortfolioPage() {
  return <><Navbar /><main><Hero /><About /><Skills /><Experience /><Projects /><Education /><Contact /></main><Footer /></>;
}

export default function Portfolio() {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}><PortfolioPage /></ThemeProvider>;
}
