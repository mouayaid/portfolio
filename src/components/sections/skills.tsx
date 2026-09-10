import { skillGroups } from "@/data/skills";
import { RevealArticle } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-36">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Skills"
          title="A versatile engineering toolkit."
          copy="Technologies grouped by how I use them to build products - not by arbitrary percentage bars."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <RevealArticle
                key={group.title}
                delay={index * 0.06}
                whileHover={{ y: -6 }}
                className={`card p-6 sm:p-7 ${group.featured ? "lg:col-span-2" : ""} ${group.wide ? "md:col-span-2 lg:col-span-3" : ""}`}
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500/10 text-indigo-500">
                    <Icon size={19} />
                  </span>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={`${group.title}-${skill}`} className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </RevealArticle>
            );
          })}
        </div>
      </div>
    </section>
  );
}
