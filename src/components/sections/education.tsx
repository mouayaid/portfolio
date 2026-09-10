import { education } from "@/data/education";
import { Reveal, RevealArticle } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function Education() {
  return (
    <section id="education" className="py-28 sm:py-36">
      <div className="section-shell">
        <SectionTitle eyebrow="Education" title="The foundation behind the work." />
        <div className="grid gap-4 lg:grid-cols-3">
          {education.map((item, index) => (
            <RevealArticle
              key={item.degree}
              delay={index * 0.06}
              whileHover={{ y: -5 }}
              className="card p-6 sm:p-7"
            >
              <div>
                <p className="text-sm font-semibold text-indigo-500">{item.period ?? "Baccalaureate"}</p>
                <h3 className="mt-5 text-xl font-semibold">{item.degree}</h3>
                <p className="muted mt-3 text-sm leading-6">{item.school}</p>
              </div>
            </RevealArticle>
          ))}
        </div>
        <Reveal className="card mt-5 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="contents">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">Additional training</p>
              <p className="muted mt-2">AWS Academy Cloud Foundations · React — The Complete Guide</p>
            </div>
            <span className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold">Continuous learning</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
