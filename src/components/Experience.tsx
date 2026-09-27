import { Briefcase } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

/**
 * Experience / training timeline entries. Add real roles, internships, or
 * training programs here. Left empty until real entries are added.
 */
export type ExperienceEntry = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

const EXPERIENCE: ExperienceEntry[] = [];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-content flex flex-col gap-12">
        <SectionHeading
          eyebrow="Experience & Training"
          title="Where I've been learning and building"
          description="Internships, training, and hands-on experience that shaped how I build software."
        />

        {EXPERIENCE.length > 0 ? (
          <ol className="relative flex flex-col gap-8 border-l border-white/[0.08] pl-6">
            {EXPERIENCE.map((entry, i) => (
              <Reveal key={`${entry.role}-${entry.organization}`} delay={i * 0.06}>
                <li className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-surface-950" />
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-foreground/50">
                      {entry.period}
                    </span>
                    <h3 className="text-lg font-medium text-white">
                      {entry.role}
                    </h3>
                    <span className="text-sm text-accent-soft">
                      {entry.organization}
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/60">
                      {entry.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        ) : (
          <Reveal>
            <div className="surface-card flex flex-col items-center gap-4 px-6 py-16 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-accent-soft">
                <Briefcase size={22} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-white">
                  Experience details coming soon
                </p>
                <p className="max-w-md text-sm text-foreground/60">
                  This section will highlight training programs and hands-on
                  experience as they&apos;re added.
                </p>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
