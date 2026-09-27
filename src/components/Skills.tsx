import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { SKILL_CATEGORIES } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-content flex flex-col gap-12">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A focused toolkit I use to design, build, and ship full-stack web applications."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-850/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/50">
                    {category.title}
                  </h3>
                  <span className="font-mono text-xs text-foreground/30">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {category.skills.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="group/pill inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-sm text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/[0.06] hover:text-white"
                    >
                      <Icon
                        size={15}
                        className="text-foreground/50 transition-colors group-hover/pill:text-accent-soft"
                      />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
