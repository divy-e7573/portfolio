import { Trophy, Users } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { ACHIEVEMENTS, ACHIEVEMENT_METRICS } from "@/lib/data";

const achievementIcons = [Trophy, Users];

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-content flex flex-col gap-12">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & recognition"
          description="A snapshot of progress across problem-solving, academics, and community involvement."
        />

        {/* Large metric tiles */}
        <div className="grid gap-4 sm:grid-cols-3">
          {ACHIEVEMENT_METRICS.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.08}>
              <div className="surface-card group relative overflow-hidden p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
                  {metric.value}
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground/50">
                  {metric.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Achievement detail cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {ACHIEVEMENTS.map((achievement, i) => {
            const Icon = achievementIcons[i % achievementIcons.length];
            return (
              <Reveal key={achievement.title} delay={i * 0.08}>
                <div className="surface-card group flex h-full gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft">
                    <Icon size={20} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-medium text-white">
                      {achievement.title}
                    </h3>
                    {achievement.period ? (
                      <span className="font-mono text-xs text-foreground/40">
                        {achievement.period}
                      </span>
                    ) : null}
                    <p className="text-sm leading-relaxed text-foreground/60">
                      {achievement.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
