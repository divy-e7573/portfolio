import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <Reveal
      className={`flex flex-col gap-3 ${
        isCentered ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-soft">
        <span className="h-px w-6 bg-accent-soft/60" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-base leading-relaxed text-foreground/60 ${
            isCentered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
