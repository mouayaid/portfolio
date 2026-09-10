"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

type MotionDivProps = ComponentProps<typeof motion.div>;
type MotionArticleProps = ComponentProps<typeof motion.article>;

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface RevealProps extends Omit<MotionDivProps, "children"> {
  children: ReactNode;
  delay?: number;
}

interface RevealArticleProps extends Omit<MotionArticleProps, "children"> {
  children: ReactNode;
  delay?: number;
}

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 38 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.68, ease: easing, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealArticle({ children, delay = 0, ...props }: RevealArticleProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 38 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.68, ease: easing, delay }}
      {...props}
    >
      {children}
    </motion.article>
  );
}
