import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import type { CSSProperties } from 'react';
import { profile } from '../data/content';
import { Github, Linkedin } from './BrandIcons';
import { ParticleField } from './ParticleField';
import { TelemetryHud } from './TelemetryHud';

const delay = (ms: number) => ({ '--hero-delay': `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* Atmosphere: particle network, a breathing red glow, and a vignette to keep text legible. */}
      <div aria-hidden="true" className="absolute inset-0">
        <ParticleField />
        <div
          className="glow-breathe absolute left-[72%] top-[38%] h-[46rem] w-[46rem] rounded-full bg-blood/20 blur-[120px] sm:left-[60%]"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgb(9_9_9/0.85)_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="section-shell relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        {/* Left column: introduction and calls to action. */}
        <div className="min-w-0">
          <div className="hero-in max-w-4xl" style={delay(100)}>
            <p className="eyebrow flex items-center gap-3">
              <span aria-hidden="true" className="grow-line inline-block h-px w-10 bg-crimson" />
              Psychic Cyber
            </p>
          </div>

          <h1
            id="hero-title"
            className="hero-in mt-6 font-display text-[clamp(2.75rem,9vw,7.25rem)] font-bold uppercase leading-[0.95] tracking-tight text-ink"
            style={delay(220)}
          >
            Zaeem
            <span className="block text-transparent [-webkit-text-stroke:1px_#e32636] [text-stroke:1px_#e32636]">
              Ahmad
            </span>
          </h1>

          <p
            className="hero-in mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-lg text-muted sm:text-xl"
            style={delay(360)}
          >
            {profile.roles.map((role, index) => (
              <span key={role} className="flex items-center gap-3">
                {index > 0 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-crimson" />}
                <span className="text-ink/90">{role}</span>
              </span>
            ))}
          </p>

          <p
            className="hero-in mt-8 max-w-2xl border-l-2 border-blood pl-5 text-xl leading-relaxed text-ink sm:text-2xl"
            style={delay(480)}
          >
            &ldquo;{profile.tagline}&rdquo;
          </p>

          <p className="hero-in mt-6 max-w-xl text-base leading-relaxed text-muted" style={delay(580)}>
            Graduate Cybersecurity student at KFUPM focused on offensive security, adversary emulation, and the
            machine learning that helps defenders see what attackers are doing.
          </p>

          <div className="hero-in mt-10 flex flex-col gap-4 sm:flex-row sm:items-center" style={delay(700)}>
            <a href="#projects" className="btn-primary">
              View My Projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={16} aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="hero-in mt-10 flex items-center gap-3" style={delay(820)}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right column: telemetry HUD. Stacks below the text on tablets and phones. */}
        <div className="hero-in min-w-0" style={delay(500)}>
          <TelemetryHud />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-muted transition-colors hover:text-ink md:flex"
      >
        SCROLL
        <ArrowDown size={16} aria-hidden="true" className="scroll-cue text-crimson" />
      </a>
    </section>
  );
}
