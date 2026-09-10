import { Reveal, RevealArticle } from "@/components/ui/reveal";

const stats = [
  ["Full-Stack", "Web & APIs"],
  ["Mobile", "Cross-platform + native"],
  ["AI / NLP", "Applied intelligence"],
  ["4", "Professional experiences"],
] as const;

export function About() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-500">About</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Engineering products from interface to intelligence.</h2>
          <p className="muted mt-6 max-w-2xl text-lg leading-8">
            I&apos;m a Software Engineer focused on building practical full-stack, mobile and AI-powered applications. My experience spans modern frontend development, backend systems, databases, real-time communication and applied AI/NLP.
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-2 gap-4" delay={0.08}>
          {stats.map(([big, small], index) => (
            <RevealArticle
              whileHover={{ y: -5 }}
              key={small}
              className={`card p-6 ${index === 2 ? "col-span-2" : ""}`}
            >
              <div className="text-2xl font-semibold sm:text-3xl">{big}</div>
              <div className="muted mt-2 text-sm">{small}</div>
            </RevealArticle>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
