import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";
import { SectionHeading } from "../components/Container";
import Reveal from "../components/Reveal";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--color-bg-soft)]">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-line)]" />
            <ul className="space-y-7">
              {t.about.timeline.map((step, i) => (
                <motion.li
                  key={step.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative pl-8"
                >
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-[var(--color-bg-soft)] border-2 border-[var(--color-secondary)]" />
                  <span className="text-sm md:text-base text-[var(--color-text)] font-medium">{step.label}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-[var(--color-text-muted)] leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
