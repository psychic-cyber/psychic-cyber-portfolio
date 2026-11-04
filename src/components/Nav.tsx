import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, profile } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navItems.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open, and close it on Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        open
          ? 'border-b border-transparent bg-[#090909]'
          : scrolled
            ? 'border-b border-line/70 bg-bg/60 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="section-shell flex h-20 items-center justify-between">
        <a href="#top" onClick={close} className="group flex items-center gap-3" aria-label="Psychic Cyber, back to top">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-blood/60 bg-blood/10 font-mono text-sm font-bold text-crimson transition-shadow duration-500 group-hover:shadow-[0_0_20px_-4px_rgb(227_38_54/0.7)]"
          >
            PC
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.2em] text-ink">{profile.brand.toUpperCase()}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative block rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-center bg-crimson transition-transform duration-500 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="icon-btn lg:hidden"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </nav>

    </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-20 z-50 h-[calc(100svh-5rem)] overflow-y-auto bg-[#090909] transition-all duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!open}
      >
        <ul className="section-shell flex flex-col gap-1 pt-6">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className="border-b border-line/60 transition-all duration-500"
              style={{
                transitionDelay: open ? `${index * 40}ms` : '0ms',
                transform: open ? 'none' : 'translateY(12px)',
                opacity: open ? 1 : 0,
              }}
            >
              <a
                href={`#${item.id}`}
                onClick={close}
                tabIndex={open ? 0 : -1}
                className={`flex items-center justify-between py-4 font-display text-2xl font-medium ${
                  active === item.id ? 'text-crimson' : 'text-ink'
                }`}
              >
                {item.label}
                <span aria-hidden="true" className="font-mono text-xs text-muted">
                  0{index + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
