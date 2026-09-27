import { GraduationCap, Check } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-content flex flex-col gap-12">
        <SectionHeading
          eyebrow="Experience & Training"
          title="Where I've been learning and building"
          description="Training and hands-on experience that shaped how I build software."
        />

        <ol className="relative flex flex-col gap-8 border-l border-white/[0.08] pl-6 sm:pl-8">
          {EXPERIENCE.map((entry, i) => (
            <Reveal key={`${entry.role}-${entry.organization}`} delay={i * 0.08}>
              <li className="relative">
                {/* Timeline node */}
                <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-surface-950 sm:-left-[39px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
                </span>

                <div className="surface-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft">
                        <GraduationCap size={18} />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <h3 className="text-lg font-semibold text-white">
                          {entry.role}
                        </h3>
                        <span className="text-sm text-accent-soft">
                          {entry.organization}
                        </span>
                      </div>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-foreground/50">
                      {entry.period}
                    </span>
                  </div>

                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {entry.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-foreground/70"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-accent-soft"
                          aria-hidden
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
