import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { projects } from "@/data/projects";
import { ButtonLink } from "@/components/ui/button-link";
import { RevealArticle } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-36">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Selected work"
          title="Projects that show how I engineer."
          copy="A mix of full-stack, mobile, AI and testing work - each chosen to show a different dimension of my experience."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <RevealArticle
              key={project.title}
              delay={index * 0.05}
              whileHover={{ y: -6 }}
              className={`card group overflow-hidden p-6 sm:p-8 ${project.featured ? "md:col-span-2 lg:p-10" : ""}`}
            >
              <div className={project.featured ? "md:grid md:grid-cols-[1fr_.9fr] md:gap-10" : ""}>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">{project.label}</p>
                  <h3 className={`${project.featured ? "text-3xl sm:text-5xl" : "text-2xl"} font-semibold tracking-tight`}>{project.title}</h3>
                  <p className="muted mt-4 leading-7">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={`${project.title}-${tech}`} className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.github ? (
                    <ButtonLink href={project.github} target="_blank" variant="secondary" className="mt-7 border-0 bg-transparent px-0 py-0 hover:text-indigo-500">
                      View source <ArrowUpRight size={16} />
                    </ButtonLink>
                  ) : null}
                </div>
                {project.featured ? (
                  <div className="mt-8 rounded-[24px] border border-[var(--border)] bg-[var(--surface-strong)] p-6 md:mt-0">
                    <div className="mb-5 flex items-center gap-2 text-sm font-semibold">
                      <BriefcaseBusiness size={17} className="text-indigo-500" /> Core engineering
                    </div>
                    <div className="grid gap-3">
                      {project.features?.map((feature, featureIndex) => (
                        <div key={`${project.title}-${feature}`} className="flex items-center gap-3 rounded-2xl border border-[var(--border)] px-4 py-3 text-sm transition hover:translate-x-1">
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-indigo-500/10 text-[11px] font-bold text-indigo-500">{featureIndex + 1}</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </RevealArticle>
          ))}
        </div>
      </div>
    </section>
  );
}
