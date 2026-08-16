import { Briefcase, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Container, { SectionHeading } from "../components/Container";
import Reveal from "../components/Reveal";

export default function Experience() {
  const { t } = useLanguage();
  const { item } = t.experience;

  return (
    <section id="experience" className="py-24 md:py-32 bg-[var(--color-bg-soft)]">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="relative rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
                  <Briefcase size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">{item.role}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{item.company}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold px-3 py-1">
                  {item.type}
                </span>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">{item.duration}</p>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {item.duties.map((duty) => (
                <div key={duty} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-success)]" />
                  <span className="text-sm text-[var(--color-text-muted)]">{duty}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[var(--color-success)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-success)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-success)]" />
              </span>
              {item.status}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
