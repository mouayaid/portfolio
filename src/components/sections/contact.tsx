import { Github, Linkedin, Mail } from "lucide-react";
import { emailComposeUrl, githubUrl, linkedinUrl } from "@/data/links";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-36">
      <Reveal className="section-shell glass overflow-hidden rounded-[32px] p-8 sm:p-12 lg:p-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-500">Contact</p>
        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Have an opportunity or project in mind? <span className="gradient-text">Let&apos;s talk.</span>
        </h2>
        <p className="muted mt-6 max-w-2xl text-lg leading-8">
          I&apos;m open to software engineering opportunities, collaborations and conversations about interesting products.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href={emailComposeUrl} variant="primary">
            <Mail size={17} /> Email me
          </ButtonLink>
          <ButtonLink href={githubUrl} target="_blank">
            <Github size={17} /> GitHub
          </ButtonLink>
          <ButtonLink href={linkedinUrl} target="_blank">
            <Linkedin size={17} /> LinkedIn
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
