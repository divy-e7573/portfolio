import { SOCIALS, NAV_ITEMS } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-content flex flex-col gap-8 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
            className="font-mono text-sm font-semibold tracking-tight"
          >
            <span className="gradient-text">divye</span>
            <span className="text-foreground/50">.dev</span>
          </a>

          <nav>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-foreground/50 transition-colors hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-sm text-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Divye Maingi. All rights reserved.</p>
          <p className="font-mono text-xs">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
