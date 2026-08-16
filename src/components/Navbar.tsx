import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import Container from "./Container";

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "tech", label: t.nav.tech },
    { id: "contact", label: t.nav.contact },
  ];

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-[var(--color-line)] py-3" : "py-6"
      }`}
    >
      <Container className="flex items-center justify-between">
        <button
          onClick={() => handleNav("home")}
          className="font-display text-lg font-bold tracking-tight text-[var(--color-text)]"
          aria-label="Ir al inicio"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-sm">
            BD
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-secondary)] transition-colors"
            aria-label="Cambiar idioma"
          >
            {lang === "es" ? "ES / EN" : "EN / ES"}
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-full border border-[var(--color-line)] p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-secondary)] transition-colors"
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="/CV-Brahian-Hurtado.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:brightness-110 transition"
          >
            <Download size={14} />
            {t.nav.cv}
          </a>
        </div>

        <button
          className="md:hidden text-[var(--color-text)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-[var(--color-line)] overflow-hidden"
          >
            <Container className="flex flex-col gap-4 py-6">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="text-left text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={toggleLang}
                  className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text-muted)]"
                >
                  {lang === "es" ? "ES / EN" : "EN / ES"}
                </button>
                <button
                  onClick={toggleTheme}
                  className="rounded-full border border-[var(--color-line)] p-2 text-[var(--color-text-muted)]"
                  aria-label="Cambiar tema"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
              <a
                href="/CV-Brahian-Hurtado.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white"
              >
                <Download size={14} />
                {t.nav.cv}
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
