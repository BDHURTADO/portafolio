import type { ReactNode } from "react";

export default function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
        <span className="h-px w-6 bg-[var(--color-secondary)]" />
        {eyebrow}
      </span>
      <h2 className="font-display mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)]">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-[var(--color-text-muted)] text-base md:text-lg">{subtitle}</p>}
    </div>
  );
}
