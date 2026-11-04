import { useRef, type PointerEvent } from 'react';
import { MapPin, Target } from 'lucide-react';

const metrics = [
  { value: '05', label: 'Security & AI Projects' },
  { value: 'ATT&CK', label: 'MITRE-Mapped Adversary Emulation' },
  { value: 'DET', label: 'Detection Engineering & Telemetry' },
];

const focus = ['Offensive Tooling', 'Threat Triage (Scapy / Auditd)', 'Adversarial ML'];

/**
 * A decorative "research node" status card. It is informational only: every
 * value is drawn from the portfolio's own content, and nothing is live data.
 * A gentle tilt follows the pointer on fine-pointer devices.
 */
export function TelemetryHud() {
  const cardRef = useRef<HTMLDivElement>(null);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1200px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg)`;
  };

  const onPointerLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className="relative w-full">
      {/* Radial crimson glow behind the card. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(181_18_38/0.28)_0%,rgb(181_18_38/0.08)_40%,transparent_70%)] blur-2xl"
      />

      <div
        ref={cardRef}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="relative overflow-hidden rounded-2xl border border-line bg-[#0c0c0c]/95 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.9)] backdrop-blur-xl transition-transform duration-500 ease-out"
        style={{ transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg)' }}
        role="figure"
        aria-label="Research node status summary"
      >
        {/* Slow scanline sweep across the card. */}
        <div
          aria-hidden="true"
          className="telemetry-scan pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-crimson/[0.07] to-transparent"
        />

        {/* Top bar: terminal dots + live status. */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-blood" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
          </div>
          <span className="flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] tracking-wide text-ink shadow-[0_0_18px_-4px_rgb(16_185_129/0.6)]">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            ACTIVE NODE // KFUPM_SEC_LAB
          </span>
        </div>

        {/* Metrics grid. */}
        <dl className="grid grid-cols-1 divide-y divide-line border-b border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {metrics.map((metric) => (
            <div key={metric.label} className="px-5 py-5">
              <dd className="font-display text-2xl font-semibold tracking-tight text-ink">
                <span className="bg-gradient-to-r from-crimson to-blood bg-clip-text text-transparent">{metric.value}</span>
              </dd>
              <dt className="mt-2 text-xs leading-snug text-muted">{metric.label}</dt>
            </div>
          ))}
        </dl>

        {/* Research focus box. */}
        <div className="space-y-5 px-5 py-6">
          <p className="eyebrow text-[10px]">Research Focus</p>

          <div className="rounded-xl border border-line bg-bg/70 p-4">
            <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
              <Target size={13} className="text-crimson" aria-hidden="true" />
              Target Focus
            </div>
            <ul className="flex flex-wrap gap-2">
              {focus.map((item) => (
                <li key={item} className="rounded-md border border-blood/40 bg-blood/10 px-2.5 py-1 font-mono text-xs text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-xl border border-line bg-bg/70 p-4">
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
              <MapPin size={13} className="text-crimson" aria-hidden="true" />
              Location
            </span>
            <span className="font-mono text-sm text-ink">Dhahran, KSA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
