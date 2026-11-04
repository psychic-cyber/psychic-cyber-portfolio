import { Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { navItems, profile } from '../data/content';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-surface/60">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.2em] text-ink">{profile.brand.toUpperCase()}</p>
          <p className="mt-2 font-display text-base text-muted">{profile.name}</p>
          <p className="mt-5 max-w-sm font-display text-lg leading-snug text-ink/90">
            &ldquo;{profile.brandStatement}&rdquo;
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow mb-5 text-[10px]">Sections</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-5 text-[10px]">Connect</p>
          <ul className="flex flex-col gap-3 text-sm text-muted">
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-ink">
                <Mail size={15} aria-hidden="true" /> {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-ink">
                <Github size={15} aria-hidden="true" /> GitHub
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-ink">
                <Linkedin size={15} aria-hidden="true" /> LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="section-shell flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="font-mono">Think Like an Attacker. Engineer Like a Defender.</p>
        </div>
      </div>
    </footer>
  );
}
