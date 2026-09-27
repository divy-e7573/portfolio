import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { CERTIFICATES, type Certificate } from "@/lib/data";

function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <div className="group relative flex w-[300px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-850/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(99,102,241,0.25),0_24px_48px_-20px_rgba(99,102,241,0.35)] sm:w-[340px]">
      {/* Image or designed fallback header */}
      {certificate.image ? (
        <div className="relative h-40 w-full overflow-hidden border-b border-white/[0.06]">
          <Image
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            fill
            className="object-cover"
            sizes="340px"
          />
        </div>
      ) : (
        <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-accent/[0.12] via-surface-800 to-accent-cyan/[0.08]">
          <BadgeCheck
            size={44}
            className="text-accent-soft/80"
            aria-hidden
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-accent-soft">
          {certificate.issuer}
        </span>
        <h3 className="text-sm font-medium leading-snug text-white">
          {certificate.title}
        </h3>
        <span className="mt-auto font-mono text-xs text-foreground/40">
          {certificate.date}
        </span>
      </div>
    </div>
  );
}

export function Certificates() {
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...CERTIFICATES, ...CERTIFICATES];

  return (
    <section id="certificates" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-content flex flex-col gap-12">
        <SectionHeading
          eyebrow="Certificates"
          title="Courses & credentials"
          description="Certifications and courses that have strengthened my skills."
        />
      </div>

      <Reveal>
        {/* Full-bleed marquee. Manual scroll fallback keeps it accessible. */}
        <div className="marquee group relative overflow-hidden">
          {/* Edge fade masks */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-surface-950 to-transparent sm:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-surface-950 to-transparent sm:block"
          />

          <ul className="marquee-track flex gap-6 px-6 py-4">
            {loop.map((certificate, i) => (
              <li key={`${certificate.title}-${i}`} aria-hidden={i >= CERTIFICATES.length}>
                <CertificateCard certificate={certificate} />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
