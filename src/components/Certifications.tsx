import { BadgeCheck } from 'lucide-react';
import { certifications } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="relative pb-28 sm:pb-36">
      <div className="section-shell">
        <SectionHeading eyebrow="06 — Certifications" title="Credentials" id="certifications-title" />

        <ul className="grid gap-5 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} as="li" delay={index * 110} className="h-full">
              <div className="card group relative flex h-full flex-col overflow-hidden p-7">
                <span
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blood/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-blood/40 bg-bg text-crimson">
                  <BadgeCheck size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-8 font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                  {cert.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-auto pt-8 block h-px w-12 bg-gradient-to-r from-crimson to-transparent"
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
