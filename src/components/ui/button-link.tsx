import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost-icon";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "btn btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500",
  secondary:
    "btn inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500",
  "ghost-icon":
    "grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500",
};

export function ButtonLink({
  children,
  className,
  variant = "secondary",
  target,
  rel,
  ...props
}: ButtonLinkProps) {
  const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

  return (
    <a
      className={`${variants[variant]} ${className ?? ""}`.trim()}
      target={target}
      rel={safeRel}
      {...props}
    >
      {children}
    </a>
  );
}
