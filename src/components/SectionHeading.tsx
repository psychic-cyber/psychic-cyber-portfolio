import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = {
  eyebrow: string;
  title: string;
  id: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, id, children }: Props) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title mt-4">
        {title}
      </h2>
      {children && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{children}</p>}
    </Reveal>
  );
}
