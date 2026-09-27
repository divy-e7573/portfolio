import { GraduationCap, Code2, Sparkles, MapPin } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { EDUCATION } from "@/lib/data";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    body: "I build complete web applications end to end — responsive frontends, structured backend services, and the data layer behind them.",
  },
  {
    icon: Sparkles,
    title: "Modern & AI-Powered",
    body: "I work with modern technologies across frontend, backend, databases and DevOps, and enjoy building AI-powered applications.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-content flex flex-col gap-12">
        <SectionHeading
          eyebrow="About"
          title="A developer who cares about the whole picture"
          description="Full Stack Web Developer and Computer Science student focused on building reliable, well-crafted web applications."
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <Reveal className="flex flex-col gap-5 text-base leading-relaxed text-foreground/70">
            <p>
              I&apos;m Divye Maingi, a Full Stack Web Developer and Computer
              Science student at Lovely Professional University. I enjoy building
              full-stack web applications and working with modern technologies
              across frontend, backend, databases, DevOps and AI-powered
              applications.
            </p>
            <p>
              I like owning a feature from the interface all the way down to the
              data layer, writing clean, maintainable code and shipping things
              that work reliably. I&apos;m always looking for opportunities to
              learn, collaborate, and build meaningful software.
            </p>

            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, body }, i) => (
                <Reveal key={title} delay={i * 0.08}>
                  <div className="surface-card flex h-full flex-col gap-3 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-medium text-white">{title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/60">
                      {body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={0.1}>
            <div className="surface-card flex flex-col gap-5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft">
                  <GraduationCap size={18} />
                </div>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/50">
                  Education
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-lg font-semibold text-white">
                    {EDUCATION.institution}
                  </h4>
                  <span className="font-mono text-xs text-foreground/40">
                    {EDUCATION.period}
                  </span>
                </div>
                <p className="text-sm text-foreground/70">{EDUCATION.degree}</p>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-lg border border-accent/30 bg-accent/[0.08] px-3 py-1 text-sm font-medium text-accent-soft">
                    {EDUCATION.detail}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-foreground/50">
                    <MapPin size={14} />
                    {EDUCATION.location}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
