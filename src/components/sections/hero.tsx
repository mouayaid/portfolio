"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Code2, Smartphone } from "lucide-react";
import { emailComposeUrl, githubUrl, linkedinUrl } from "@/data/links";
import { ButtonLink } from "@/components/ui/button-link";

const chips = ["React Native", ".NET 8", "Python", "TypeScript", "SQL Server", "AI / NLP"];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-52 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="section-shell relative grid items-center gap-14 py-20 lg:grid-cols-[1.03fr_.97fr] lg:py-24">
        <div>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.6 }}
            className="mb-6 flex flex-wrap items-center gap-2"
          >
            <span className="eyebrow-chip">Available for opportunities</span>
            <span className="material-chip muted"><Smartphone size={14} /> Mobile-first engineer</span>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.7 }}
            className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[5.6rem]"
          >
            Hi, I&apos;m Mouayaid.
            <span className="gradient-text mt-2 block">Software Engineer</span>
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.68 }}
            className="mt-5 text-lg font-semibold sm:text-xl"
          >
            Full-Stack · Mobile · AI
          </motion.p>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.31, duration: 0.68 }}
            className="muted mt-4 max-w-2xl text-lg leading-8"
          >
            I build modern applications combining scalable backend systems, responsive interfaces,
            real-time features and intelligent technologies.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.62 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <ButtonLink href="#projects" variant="primary">
              View my work <ArrowDown size={16} />
            </ButtonLink>
            <ButtonLink href="#contact" variant="tonal">
              Contact me <ArrowDown size={16} />
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.52 }}
            className="muted mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm"
          >
            <a className="transition hover:text-[var(--text)]" href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className="transition hover:text-[var(--text)]" href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a className="transition hover:text-[var(--text)]" href={emailComposeUrl} target="_blank" rel="noopener noreferrer">Email ↗</a>
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="portrait-frame relative overflow-hidden rounded-[38px] p-3 sm:p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-[var(--surface-container)]">
              <Image
                src="/mouayaid-portrait.webp"
                alt="Mouayaid Zammit Chatti"
                fill
                priority
                sizes="(max-width: 1024px) 88vw, 480px"
                className="object-cover object-[50%_42%]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <div className="rounded-[22px] bg-black/45 px-4 py-3 text-white backdrop-blur-md">
                  <p className="text-xs font-medium text-white/75">Currently building</p>
                  <p className="mt-1 font-semibold">Mobile · Full-Stack · AI</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/90 text-indigo-700 shadow-lg">
                  <Code2 size={20} />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 lg:absolute lg:-bottom-5 lg:left-1/2 lg:mt-0 lg:w-[112%] lg:-translate-x-1/2">
            {chips.map((chip, index) => (
              <motion.span
                key={chip}
                animate={prefersReducedMotion ? undefined : { y: [0, index % 2 ? -4 : 4, 0] }}
                transition={{ duration: 4 + index * 0.22, repeat: Infinity, ease: "easeInOut" }}
                className="material-chip"
              >
                {chip}
              </motion.span>
            ))}
          </div>

          <motion.a
            href="#projects"
            className="material-surface-high absolute -left-5 top-14 hidden rounded-[24px] px-4 py-3 text-sm font-semibold lg:flex lg:items-center lg:gap-2"
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
          >
            Selected work <ArrowUpRight size={15} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
