import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import { useCountUp } from "../components/useCountUp";

function StatCounter({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { value: count, ref } = useCountUp(value);

  return (
    <Reveal delay={delay} className="text-center">
      <p className="font-display text-4xl md:text-5xl font-bold text-gradient">
        <span ref={ref}>{count}</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">{label}</p>
    </Reveal>
  );
}

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 border-y border-[var(--color-line)]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.stats.map((stat, i) => (
            <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 0.08} />
          ))}
        </div>
      </Container>
    </section>
  );
}
