import { Github, ExternalLink, Check } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { PROJECTS, type Project } from "@/lib/data";

function ProjectLinkButton({
  href,
  icon: Icon,
  label,
}: {
  href: string | null;
  icon: typeof Github;
  label: string;
}) {
  if (!href) {
    return (
      <span
        aria-disabled
        title="Link coming soon"
        className="btn-secondary pointer-events-none flex-1 cursor-not-allowed opacity-40"
      >
        <Icon size={15} />
        {label}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-secondary flex-1"
    >
      <Icon size={15} />
      {label}
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-850/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(99,102,241,0.25),0_24px_48px_-20px_rgba(99,102,241,0.35)]">
      {/* Subtle accent glow that fades in on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/[0.08] via-transparent to-accent-cyan/[0.06] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent-soft">
          {project.tagline}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-foreground/60">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-col gap-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-foreground/70">
            <Check
              size={15}
              className="mt-0.5 shrink-0 text-accent-soft"
              aria-hidden
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1 font-mono text-xs text-foreground/60"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3 pt-2">
        <ProjectLinkButton href={project.repoUrl} icon={Github} label="GitHub" />
        <ProjectLinkButton
          href={project.liveUrl}
          icon={ExternalLink}
          label="Live Demo"
        />
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-content flex flex-col gap-12">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of full-stack applications spanning real-time systems, e-commerce, and AI-powered experiences."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
