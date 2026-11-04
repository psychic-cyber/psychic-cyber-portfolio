import { ChevronDown, Shield } from 'lucide-react';
import { useId, useState, type PointerEvent } from 'react';
import { projects, type Project } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  // Tracks the pointer across the card so a soft spotlight follows it (CSS custom properties, no re-render).
  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <Reveal delay={index * 80} className="h-full">
      <article
        onPointerMove={onPointerMove}
        className="card spotlight group relative flex h-full flex-col overflow-hidden p-7 sm:p-8"
      >
        <div className="flex items-start justify-between gap-6">
          <span className="font-mono text-sm text-crimson/80">{project.number}</span>
          <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-wide text-muted">
            {project.date}
          </span>
        </div>

        <h3 className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-3 text-sm font-medium leading-relaxed text-crimson/90">{project.subtitle}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-md bg-bg/70 px-2.5 py-1 text-xs text-ink/75 ring-1 ring-line">
              {tag}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="mt-auto flex items-center gap-2 self-start pt-8 text-sm font-semibold text-ink transition-colors duration-300 hover:text-crimson"
        >
          {expanded ? 'Hide details' : 'View details'}
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`transition-transform duration-500 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        <div
          id={panelId}
          role="region"
          aria-label={`${project.title} details`}
          hidden={!expanded}
          className="mt-6 border-t border-line pt-6"
        >
          <p className="eyebrow mb-4 text-[10px]">Key contributions</p>
          <ul className="space-y-3">
            {project.contributions.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson" />
                {item}
              </li>
            ))}
          </ul>
          {project.mitre && (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Shield size={14} aria-hidden="true" className="text-crimson" />
              <span className="text-xs text-muted">MITRE ATT&amp;CK:</span>
              {project.mitre.map((id) => (
                <span key={id} className="rounded-md border border-blood/40 bg-blood/10 px-2 py-0.5 font-mono text-xs text-ink">
                  {id}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading eyebrow="03 — Featured Projects" title="Selected work in offense, forensics, and AI." id="projects-title">
          Research and engineering projects, from adversary simulation and packet forensics to machine-learning defenses.
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={project.id} className={index === 0 ? 'md:col-span-2' : ''}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
