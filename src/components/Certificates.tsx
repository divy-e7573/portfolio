import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

/**
 * Certificates. Add real certificates here. Left empty until real entries are
 * added.
 */
export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
};

const CERTIFICATES: Certificate[] = [];

export function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-content flex flex-col gap-12">
        <SectionHeading
          eyebrow="Certificates"
          title="Courses & credentials"
          description="Certifications and courses that have strengthened my skills."
        />

        {CERTIFICATES.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATES.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.06}>
                <div className="surface-card flex h-full flex-col gap-3 p-5">
                  <BadgeCheck size={20} className="text-accent-soft" />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-medium text-white">{cert.title}</h3>
                    <span className="text-sm text-foreground/60">
                      {cert.issuer}
                    </span>
                    {cert.date ? (
                      <span className="font-mono text-xs text-foreground/40">
                        {cert.date}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="surface-card flex flex-col items-center gap-4 px-6 py-16 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-accent-soft">
                <BadgeCheck size={22} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-white">
                  Certificates coming soon
                </p>
                <p className="max-w-md text-sm text-foreground/60">
                  Certifications and completed courses will be listed here.
                </p>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
