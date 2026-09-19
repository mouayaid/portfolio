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
        <span className="eyebrow-chip mb-4">{eyebrow}</span>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">{title}</h2>
        {copy ? <p className="muted mt-5 text-base leading-7 sm:text-lg">{copy}</p> : null}
      </div>
    </Reveal>
  );
}
