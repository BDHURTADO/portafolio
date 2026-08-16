import { useLanguage } from "../context/LanguageContext";
import Container, { SectionHeading } from "../components/Container";
import Reveal from "../components/Reveal";
import { techIconMap } from "../data/techIcons";

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="tech" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.tech.eyebrow} title={t.tech.title} align="center" />
        </Reveal>

        <div className="mt-16 space-y-12">
          {t.tech.groups.map((group, gi) => (
            <Reveal key={group.name} delay={gi * 0.08}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-5">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => {
                  const Icon = techIconMap[item];
                  return (
                    <div
                      key={item}
                      className="group flex items-center gap-2.5 rounded-xl border border-[var(--color-line)] bg-[var(--color-card)] px-4 py-3 hover:border-[var(--color-secondary)] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {Icon && <Icon size={18} className="text-[var(--color-secondary)]" />}
                      <span className="text-sm font-medium text-[var(--color-text)]">{item}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
