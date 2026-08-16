import { useLanguage } from "../context/LanguageContext";
import Container, { SectionHeading } from "../components/Container";
import Reveal from "../components/Reveal";

export default function HowIThink() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.think.eyebrow} title={t.think.title} align="center" />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-line)] rounded-2xl overflow-hidden border border-[var(--color-line)]">
          {t.think.steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.05} className="bg-[var(--color-bg-soft)] p-7">
              <span className="font-display text-sm font-semibold text-[var(--color-secondary)]">{step.step}</span>
              <h3 className="font-display mt-3 text-base font-semibold text-[var(--color-text)]">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
