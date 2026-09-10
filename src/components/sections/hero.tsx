"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { emailComposeUrl, githubUrl, linkedinUrl } from "@/data/links";
import { ButtonLink } from "@/components/ui/button-link";

const chips = ["React Native", ".NET 8", "Python", "TypeScript", "SQL Server", "AI / NLP"];
const chipPositions = [
  { left: "4%", top: "8%" },
  { left: "48%", top: "4%" },
  { left: "15%", top: "48%" },
  { left: "57%", top: "45%" },
  { left: "6%", top: "80%" },
  { left: "53%", top: "78%" },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[6%] top-[28%] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="section-shell relative grid items-center gap-16 py-24 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-500"
          >
            Hi, I’m Mouayaid 👋
          </motion.p>
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7 }}
            className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl"
          >
            Software Engineer<span className="gradient-text block">Full-Stack · Mobile · AI</span>
          </motion.h1>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
            className="muted mt-7 max-w-2xl text-lg leading-8"
          >
            I build modern applications combining scalable backend systems, responsive interfaces, real-time features and intelligent technologies.
          </motion.p>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.65 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <ButtonLink href="#projects" variant="primary">
              View my work <ArrowDown size={16} />
            </ButtonLink>
            <ButtonLink href="#contact">
              Contact me <ArrowDown size={16} />
            </ButtonLink>
          </motion.div>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="muted mt-8 flex gap-5 text-sm"
          >
            <a className="transition hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500" href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className="transition hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500" href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a className="transition hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500" href={emailComposeUrl}>Email ↗</a>
          </motion.div>
        </div>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="glass relative min-h-[430px] overflow-hidden rounded-[32px] p-7">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
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
              {chips.map((chip, index) => (
                <motion.span
                  key={chip}
                  animate={prefersReducedMotion ? undefined : { y: [0, index % 2 ? -7 : 7, 0] }}
                  transition={{ duration: 4.2 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-xs font-semibold shadow-sm"
                  style={chipPositions[index]}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
