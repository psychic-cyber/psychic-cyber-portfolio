import { profile } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

/** Abstract emblem: concentric rings and a targeting reticle. Stands in for a photograph. */
function Emblem() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="emblem-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B51226" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#B51226" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="96" fill="url(#emblem-glow)" />
      {[88, 70, 52, 34].map((r, i) => (
        <circle
          key={r}
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke={i === 0 ? '#292929' : '#E32636'}
          strokeOpacity={i === 0 ? 1 : 0.15 + i * 0.15}
          strokeDasharray={i % 2 ? '2 6' : undefined}
          strokeWidth="1"
        />
      ))}
      <path d="M100 4v32M100 164v32M4 100h32M164 100h32" stroke="#E32636" strokeWidth="1" />
      <circle cx="100" cy="100" r="4" fill="#E32636" />
      <circle cx="100" cy="100" r="1.5" fill="#F5F5F5" />
    </svg>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28 sm:py-36">
      <div className="section-shell grid items-stretch gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="01 — About" title="Understanding attackers to build better defenses." id="about-title" />
          <div className="space-y-6">
            {profile.aboutParagraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 120}>
                <p className="text-lg leading-relaxed text-ink/85">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="h-full">
          <div className="card flex h-full flex-col overflow-hidden">
            <div className="flex flex-1 items-center justify-center border-b border-line p-10">
              <div className="aspect-square w-full max-w-[16rem]">
                <Emblem />
              </div>
            </div>
            <div className="p-6 sm:p-7">
              <p className="eyebrow mb-4">Identity</p>
              <ul className="flex flex-wrap gap-2">
                {profile.identities.map((identity) => (
                  <li
                    key={identity}
                    className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink/85"
                  >
                    {identity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
