import { Reveal } from "@/components/ui/reveal";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  copy?: string;
}

export function SectionTitle({ eyebrow, title, copy }: SectionTitleProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-500">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
        {copy ? <p className="muted mt-5 text-base leading-7 sm:text-lg">{copy}</p> : null}
      </div>
    </Reveal>
  );
}
