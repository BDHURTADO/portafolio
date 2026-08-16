import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import Container, { SectionHeading } from "../components/Container";
import Reveal from "../components/Reveal";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {t.projects.items.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group h-full flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] overflow-hidden"
              >
                <div
                  className="h-40 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${project.accent}22, transparent)` }}
                >
                  <span
                    className="font-display text-3xl font-bold opacity-90"
                    style={{ color: project.accent }}
                  >
                    {project.title}
                  </span>
                  <div className="absolute inset-0 border-b border-[var(--color-line)]" />
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-secondary)]">
                    {project.tag}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-semibold text-[var(--color-text)]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium rounded-full border border-[var(--color-line)] px-2.5 py-1 text-[var(--color-text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="text-xs text-[var(--color-text-muted)] flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[var(--color-secondary)]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-[var(--color-line)] flex items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-secondary)] transition-colors"
                      >
                        <FaGithub size={15} />
                        {t.projects.code}
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-secondary)] transition-colors"
                      >
                        {t.projects.demo}
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
