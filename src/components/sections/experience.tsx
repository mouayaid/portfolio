import { experience } from "@/data/experience";
import { RevealArticle } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function Experience() {
  return (
    <section id="experience" className="py-28 sm:py-36">
      <div className="section-shell">
        <SectionTitle eyebrow="Experience" title="Building across different environments." />
        <div className="relative ml-2 border-l border-[var(--border)] sm:ml-4">
          {experience.map((item, index) => (
            <RevealArticle
              key={`${item.company}-${item.role}-${item.year}`}
              delay={index * 0.05}
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
            </RevealArticle>
          ))}
        </div>
      </div>
    </section>
  );
}
