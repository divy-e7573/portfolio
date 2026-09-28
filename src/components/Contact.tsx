import { Github, Linkedin, Mail, ArrowUpRight, Phone } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/data";

const channels = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/divy-e7573",
    href: "https://github.com/divy-e7573",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/divye-maingi-11d",
    href: "https://www.linkedin.com/in/divye-maingi-11d/",
    icon: Linkedin,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-content">
        <div className="surface-card overflow-hidden">
          <div className="flex flex-col gap-10 p-8 sm:p-12">
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something together"
              description="I'm open to internships, freelance work, and collaboration. Reach out through any of the channels below and I'll get back to you."
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {channels.map(({ label, value, href, icon: Icon, external }, i) => (
                <Reveal key={label} delay={i * 0.08}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex h-full items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent-soft">
                      <Icon size={18} />
                    </div>
                    <div className="flex min-w-0 flex-col">
                      <span className="flex items-center gap-1 text-sm font-medium text-white">
                        {label}
                        <ArrowUpRight
                          size={14}
                          className="text-foreground/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft"
                        />
                      </span>
                      <span className="truncate text-sm text-foreground/60">
                        {value}
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary">
                  <Mail size={16} />
                  Say hello
                </a>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-foreground/45 transition-colors hover:text-foreground/70"
                >
                  <Phone size={14} />
                  {CONTACT_PHONE}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
