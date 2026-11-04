import type { ReactNode } from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { education, experience } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

function TimelineItem({
  icon: Icon,
  period,
  title,
  subtitle,
  location,
  badge,
  children,
  delay = 0,
}: {
  icon: typeof Briefcase;
  period: string;
  title: string;
  subtitle: string;
  location: string;
  badge?: string;
  children?: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="relative pl-10 sm:pl-14">
      <span
        aria-hidden="true"
        className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-blood/60 bg-bg text-crimson shadow-[0_0_20px_-4px_rgb(227_38_54/0.6)] sm:left-2"
      >
        <Icon size={15} />
      </span>
      <div className="card p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs tracking-wide text-crimson">{period}</p>
          {badge && (
            <span className="rounded-full border border-blood/50 bg-blood/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink">
              {badge}
            </span>
          )}
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{title}</h3>
        <p className="mt-1 text-base text-ink/80">{subtitle}</p>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={13} aria-hidden="true" />
          {location}
        </p>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative border-y border-line/60 bg-surface/40 py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading eyebrow="04 — Experience" title="Professional experience" id="experience-title" />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-crimson via-line to-transparent sm:left-[23px]"
          />
          <ol className="space-y-10">
            <li>
              <TimelineItem
                icon={Briefcase}
                period={experience.duration}
                title={experience.role}
                subtitle={experience.organization}
                location={experience.location}
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">Responsibilities</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {experience.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
                      <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-crimson" />
                      {item}
                    </li>
                  ))}
                </ul>
              </TimelineItem>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading eyebrow="05 — Education" title="Academic foundation" id="education-title" />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-crimson via-line to-transparent sm:left-[23px]"
          />
          <ol className="space-y-10">
            {education.map((item, index) => (
              <li key={item.degree}>
                <TimelineItem
                  icon={GraduationCap}
                  period={item.period}
                  title={item.degree}
                  subtitle={item.institution}
                  location={item.location}
                  badge={item.current ? 'In progress' : undefined}
                  delay={index * 120}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
