import { Brain, Code2, Crosshair, Network, Server, type LucideIcon } from 'lucide-react';
import { skillGroups, type SkillGroup } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const icons: Record<SkillGroup['icon'], LucideIcon> = {
  crosshair: Crosshair,
  network: Network,
  code: Code2,
  brain: Brain,
  server: Server,
};

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="relative border-y border-line/60 bg-surface/40 py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading eyebrow="02 — Expertise" title="Technical toolkit" id="expertise-title">
          The tools I use to attack, analyze, build, and defend, grouped by discipline.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon];
            // The first card is a full-width showcase; the rest form a symmetrical 2x2 grid.
            const span = index === 0 ? 'md:col-span-2' : '';
            return (
              <Reveal key={group.id} delay={index * 90} className={span}>
                <article className="card group h-full p-7">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blood/40 bg-blood/10 text-crimson transition-all duration-500 group-hover:border-crimson group-hover:shadow-[0_0_24px_-6px_rgb(227_38_54/0.8)]">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-line bg-bg/60 px-3 py-1.5 font-mono text-[13px] text-ink/85 transition-colors duration-300 hover:border-blood/60 hover:text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
