import { Github, Linkedin, Mail } from "lucide-react";
import { emailComposeUrl, githubUrl, linkedinUrl } from "@/data/links";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-36">
      <Reveal className="section-shell material-surface-high overflow-hidden rounded-[36px] p-8 sm:p-12 lg:p-16">
        <div>
          <span className="eyebrow-chip mb-5">Contact</span>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
            Have an opportunity or project in mind? <span className="gradient-text">Let&apos;s talk.</span>
          </h2>
          <p className="muted mt-6 max-w-2xl text-lg leading-8">
            I&apos;m open to software engineering opportunities, collaborations and conversations about interesting products.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={emailComposeUrl} target="_blank" variant="primary">
              <Mail size={17} /> Email me
            </ButtonLink>
            <ButtonLink href={linkedinUrl} target="_blank" variant="tonal">
              <Linkedin size={17} /> LinkedIn
            </ButtonLink>
            <ButtonLink href={githubUrl} target="_blank">
              <Github size={17} /> GitHub
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
