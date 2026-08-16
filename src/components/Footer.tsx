import { Mail, Download, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import Container from "./Container";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line)] py-12">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-xs font-bold">
            BD
          </span>
          <span className="text-sm text-[var(--color-text-muted)]">
            © {year} Brahian Danilo Hurtado Muñoz. {t.footer.rights}
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/BDHURTADO" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/bdhurtado13" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:brahianhurtado800@gmail.com" aria-label="Email" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
            <Mail size={18} />
          </a>
          <a href="/CV-Brahian-Hurtado.pdf" download aria-label="Download CV" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
            <Download size={18} />
          </a>
          <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
            <MapPin size={14} />
            Medellín, Colombia
          </span>
        </div>
      </Container>
      <p className="mt-6 text-center text-xs text-[var(--color-text-muted)]">{t.footer.builtWith}</p>
    </footer>
  );
}
