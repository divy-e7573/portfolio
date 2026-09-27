import { Trophy } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

/**
 * Achievements / recognitions. Add real achievements here. Left empty until
 * real entries are added.
 */
export type Achievement = {
  title: string;
  detail: string;
  date?: string;
};

const ACHIEVEMENTS: Achievement[] = [];

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-content flex flex-col gap-12">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & recognition"
          description="Highlights from competitions, contributions, and standout moments along the way."
        />

        {ACHIEVEMENTS.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {ACHIEVEMENTS.map((achievement, i) => (
              <Reveal key={achievement.title} delay={i * 0.06}>
                <div className="surface-card flex gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft">
                    <Trophy size={18} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-medium text-white">
                      {achievement.title}
                    </h3>
                    {achievement.date ? (
                      <span className="font-mono text-xs text-foreground/40">
                        {achievement.date}
                      </span>
                    ) : null}
                    <p className="text-sm leading-relaxed text-foreground/60">
                      {achievement.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="surface-card flex flex-col items-center gap-4 px-6 py-16 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-accent-soft">
                <Trophy size={22} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-white">
                  Achievements coming soon
                </p>
                <p className="max-w-md text-sm text-foreground/60">
                  Notable milestones and recognitions will be featured here.
                </p>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
