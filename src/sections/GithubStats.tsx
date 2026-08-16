import { useEffect, useState } from "react";
import { Star, GitFork, Users, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Container, { SectionHeading } from "../components/Container";
import Reveal from "../components/Reveal";

const GITHUB_USER = "BDHURTADO";

interface GithubUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
}

interface GithubRepo {
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export default function GithubStats() {
  const { t } = useLanguage();
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");
        const userData = (await userRes.json()) as GithubUser;
        const reposData = (await reposRes.json()) as GithubRepo[];
        if (!cancelled) {
          setUser(userData);
          setRepos(reposData);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-soft)]">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.github.eyebrow} title={t.github.title} subtitle={t.github.subtitle} align="center" />
        </Reveal>

        <div className="mt-14">
          {status === "loading" && (
            <p className="text-center text-sm text-[var(--color-text-muted)]">{t.github.loading}</p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-[var(--color-text-muted)]">{t.github.error}</p>
          )}

          {status === "ready" && user && (
            <>
              <Reveal>
                <div className="grid grid-cols-3 max-w-xl mx-auto gap-4 text-center">
                  <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-card)] py-6">
                    <p className="font-display text-3xl font-bold text-gradient">{user.public_repos}</p>
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">{t.github.repos}</p>
                  </div>
                  <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-card)] py-6">
                    <p className="font-display text-3xl font-bold text-gradient">{user.followers}</p>
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">{t.github.followers}</p>
                  </div>
                  <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-card)] py-6">
                    <p className="font-display text-3xl font-bold text-gradient">{user.following}</p>
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">{t.github.following}</p>
                  </div>
                </div>
              </Reveal>

              {repos.length > 0 && (
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {repos.map((repo, i) => (
                    <Reveal key={repo.name} delay={i * 0.05}>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="block h-full rounded-xl border border-[var(--color-line)] bg-[var(--color-card)] p-5 hover:border-[var(--color-secondary)] transition-colors"
                      >
                        <p className="font-medium text-sm text-[var(--color-text)] truncate">{repo.name}</p>
                        <div className="mt-3 flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
                          {repo.language && <span>{repo.language}</span>}
                          <span className="inline-flex items-center gap-1">
                            <Star size={12} /> {repo.stargazers_count}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <GitFork size={12} /> {repo.forks_count}
                          </span>
                        </div>
                      </a>
                    </Reveal>
                  ))}
                </div>
              )}

              <div className="mt-10 text-center">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] hover:underline"
                >
                  <Users size={14} />
                  {t.github.viewProfile}
                  <ExternalLink size={13} />
                </a>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
