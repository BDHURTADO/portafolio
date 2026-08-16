import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import Container, { SectionHeading } from "../components/Container";
import Reveal from "../components/Reveal";

const CONTACT_EMAIL = "brahianhurtado800@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/bdhurtado13";
const GITHUB_URL = "https://github.com/BDHURTADO";

// EmailJS: create a free account at emailjs.com and set these three values
// (via .env as VITE_EMAILJS_SERVICE_ID / VITE_EMAILJS_TEMPLATE_ID / VITE_EMAILJS_PUBLIC_KEY)
// to enable real email delivery from this form.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export default function Contact() {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          { from_name: form.name, from_email: form.email, message: form.message },
          { publicKey: PUBLIC_KEY }
        );
      } else {
        // No EmailJS config yet — simulate success so the UI can be reviewed end to end.
        await new Promise((res) => setTimeout(res, 900));
      }
      toast.success(t.contact.success);
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error(t.contact.error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--color-bg-soft)]">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} align="center" />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          <Reveal className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">
                  {t.contact.name}
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-card)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-secondary)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">
                  {t.contact.email}
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-card)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-secondary)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-card)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-secondary)] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition disabled:opacity-60"
              >
                {sending ? t.contact.sending : t.contact.send}
                <Send size={15} />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="h-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] p-7">
              <h3 className="font-display text-base font-semibold text-[var(--color-text)]">{t.contact.infoTitle}</h3>
              <div className="mt-6 space-y-4">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                  <Mail size={16} className="text-[var(--color-secondary)]" />
                  {CONTACT_EMAIL}
                </a>
                <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                  <MapPin size={16} className="text-[var(--color-secondary)]" />
                  {t.contact.location}
                </div>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                  <FaLinkedin size={16} className="text-[var(--color-secondary)]" />
                  linkedin.com/in/bdhurtado13
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                  <FaGithub size={16} className="text-[var(--color-secondary)]" />
                  github.com/BDHURTADO
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
