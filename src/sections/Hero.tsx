import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { SiPython, SiReact, SiDocker, SiPostgresql, SiNodedotjs, SiGithub } from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";

const badges = [
  { icon: SiPython, label: "Python", top: "6%", left: "4%", delay: 0 },
  { icon: SiReact, label: "React", top: "62%", left: "0%", delay: 0.5 },
  { icon: SiDocker, label: "Docker", top: "82%", left: "38%", delay: 1 },
  { icon: SiPostgresql, label: "PostgreSQL", top: "2%", left: "56%", delay: 1.5 },
  { icon: SiNodedotjs, label: "Node.js", top: "40%", left: "78%", delay: 2 },
  { icon: SiGithub, label: "GitHub", top: "72%", left: "72%", delay: 2.5 },
];

function DeveloperIllustration() {
  return (
    <svg viewBox="0 0 480 420" className="w-full h-auto max-w-md mx-auto" role="img" aria-label="Ilustración de desarrollador trabajando">
      <defs>
        <linearGradient id="screenGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
      <rect x="40" y="60" width="400" height="240" rx="16" fill="var(--color-card)" stroke="var(--color-line)" />
      <rect x="60" y="80" width="360" height="180" rx="8" fill="var(--color-bg)" />
      <rect x="76" y="98" width="140" height="10" rx="5" fill="url(#screenGlow)" opacity="0.9" />
      <rect x="76" y="118" width="220" height="8" rx="4" fill="var(--color-line)" />
      <rect x="76" y="136" width="180" height="8" rx="4" fill="var(--color-line)" />
      <rect x="76" y="154" width="240" height="8" rx="4" fill="var(--color-secondary)" opacity="0.6" />
      <rect x="76" y="172" width="120" height="8" rx="4" fill="var(--color-line)" />
      <rect x="76" y="190" width="200" height="8" rx="4" fill="var(--color-primary)" opacity="0.7" />
      <rect x="76" y="208" width="160" height="8" rx="4" fill="var(--color-line)" />
      <rect x="180" y="300" width="120" height="14" rx="7" fill="var(--color-line)" />
      <circle cx="140" cy="330" r="6" fill="var(--color-secondary)" />
      <rect x="0" y="316" width="480" height="10" rx="5" fill="var(--color-card)" />
      <g>
        <circle cx="240" cy="380" r="10" fill="var(--color-primary)" />
        <rect x="200" y="392" width="80" height="10" rx="5" fill="var(--color-card)" stroke="var(--color-line)" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % t.hero.roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, [t.hero.roles.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-40 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-secondary), transparent 70%)" }}
      />

      <Container className="grid md:grid-cols-2 gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[var(--color-secondary)] font-medium">{t.hero.greeting}</p>
          <h1 className="font-display mt-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-[var(--color-text)]">
            {t.hero.name}
          </h1>

          <div className="mt-5 h-9 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xl md:text-2xl font-display font-semibold text-gradient"
              >
                {t.hero.roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="mt-6 text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed max-w-xl">
            {t.hero.text}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
            >
              {t.hero.ctaProjects}
              <ArrowRight size={16} />
            </button>
            <a
              href="/CV-Brahian-Hurtado.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-secondary)] transition"
            >
              <Download size={16} />
              {t.hero.ctaCv}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <DeveloperIllustration />
          {badges.map(({ icon: Icon, label, top, left, delay }) => (
            <motion.div
              key={label}
              className="absolute glass rounded-xl border border-[var(--color-line)] px-3 py-2 flex items-center gap-2 shadow-lg"
              style={{ top, left }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ opacity: { duration: 0.6, delay }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay } }}
            >
              <Icon size={16} className="text-[var(--color-secondary)]" />
              <span className="text-xs font-medium text-[var(--color-text)] whitespace-nowrap">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--color-text-muted)]"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs">{t.hero.scrollHint}</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
