"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { githubUrl, linkedinUrl, navItems } from "@/data/links";
import { ButtonLink } from "@/components/ui/button-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["#home", ...navItems.map((item) => item.href)]
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      animate={{ y: 0 }}
      initial={{ y: -80 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`material-nav fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-24px))] -translate-x-1/2 transition-all duration-300 ${
        scrolled ? "glass px-4 py-2" : "bg-[var(--surface)]/80 px-3 py-2.5 backdrop-blur-xl"
      }`}
    >
      <div className="flex items-center justify-between">
        <a
          href="#home"
          className="rounded-full px-2 py-1 text-lg font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500"
          aria-current={activeHref === "#home" ? "page" : undefined}
        >
          Mouayaid<span className="text-[var(--primary)]">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "page" : undefined}
              className={`rounded-full px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${
                activeHref === item.href
                  ? "bg-[var(--primary-container)] text-[var(--on-primary-container)]"
                  : "muted hover:bg-[var(--surface-container)] hover:text-[var(--text)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink aria-label="GitHub" href={githubUrl} target="_blank" variant="ghost-icon" className="hidden sm:grid">
            <Github size={18} />
          </ButtonLink>
          <ButtonLink aria-label="LinkedIn" href={linkedinUrl} target="_blank" variant="ghost-icon" className="hidden sm:grid">
            <Linkedin size={18} />
          </ButtonLink>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls={menuId}
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open ? (
        <motion.nav
          id={menuId}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 grid gap-1 border-t border-[var(--border)] pt-3 md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={activeHref === item.href ? "page" : undefined}
              className="rounded-2xl px-3 py-3 text-sm font-medium hover:bg-[var(--surface-container)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              {item.label}
            </a>
          ))}
        </motion.nav>
      ) : null}
    </motion.header>
  );
}
