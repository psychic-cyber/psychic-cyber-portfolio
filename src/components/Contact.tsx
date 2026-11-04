import { Check, Copy, Mail, Send } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { useState, type FormEvent } from 'react';
import { profile } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = { kind: 'idle' } | { kind: 'success' } | { kind: 'error'; message: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).';
  if (!EMAIL_PATTERN.test(fields.email.trim())) errors.email = 'Please enter a valid email address.';
  if (fields.subject.trim().length > 120) errors.subject = 'Subject must be 120 characters or fewer.';
  if (fields.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';
  if (fields.message.length > 4000) errors.message = 'Message must be 4000 characters or fewer.';
  return errors;
}

/**
 * There is no backend. A valid submission opens the visitor's own mail client
 * with a pre-filled draft addressed to Zaeem; nothing is sent from this site.
 */
export function buildMailto(fields: Fields): string {
  const subject = fields.subject.trim() || `Portfolio inquiry from ${fields.name.trim()}`;
  const body = [
    `Name: ${fields.name.trim()}`,
    `Reply-to: ${fields.email.trim()}`,
    '',
    fields.message.trim(),
  ].join('\n');
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const emptyFields: Fields = { name: '', email: '', subject: '', message: '' };

export function Contact() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const [copied, setCopied] = useState(false);

  const update = (key: keyof Fields) => (event: { target: { value: string } }) => {
    setFields((prev) => ({ ...prev, [key]: event.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(fields);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setStatus({ kind: 'error', message: 'Please fix the highlighted fields and try again.' });
      const firstInvalid = event.currentTarget.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    try {
      window.location.href = buildMailto(fields);
      setStatus({ kind: 'success' });
      setFields(emptyFields);
    } catch {
      setStatus({
        kind: 'error',
        message: `We couldn't open your mail app. Please email ${profile.email} directly.`,
      });
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatus({ kind: 'error', message: `Copy failed. You can email ${profile.email} directly.` });
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative border-t border-line/60 py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blood/60 to-transparent"
      />
      <div className="section-shell grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="07 — Contact" title="Have a Security Challenge or Research Opportunity?" id="contact-title">
            I&apos;m always interested in connecting with cybersecurity professionals, researchers, and organizations
            working on innovative security solutions.
          </SectionHeading>

          <Reveal className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="card group flex items-center gap-4 p-5 transition-colors"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blood/40 bg-blood/10 text-crimson">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs uppercase tracking-[0.2em] text-muted">Email</span>
                <span className="block truncate text-ink group-hover:text-crimson">{profile.email}</span>
              </span>
            </a>

            <div className="flex flex-wrap items-center gap-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <button type="button" onClick={copyEmail} className="btn-ghost" aria-live="polite">
                {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                {copied ? 'Copied' : 'Copy email'}
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8" aria-describedby="form-note">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="Name"
                value={fields.name}
                onChange={update('name')}
                error={errors.name}
                autoComplete="name"
                required
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={fields.email}
                onChange={update('email')}
                error={errors.email}
                autoComplete="email"
                required
              />
            </div>
            <Field id="subject" label="Subject (optional)" value={fields.subject} onChange={update('subject')} error={errors.subject} />
            <Field
              id="message"
              label="Message"
              multiline
              value={fields.message}
              onChange={update('message')}
              error={errors.message}
              required
            />

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="btn-primary">
                <Send size={16} aria-hidden="true" />
                Prepare Message
              </button>
              <p id="form-note" className="text-xs leading-relaxed text-muted sm:max-w-[16rem] sm:text-right">
                Submitting opens your email app with a draft to {profile.email}. This site does not store or send
                messages itself.
              </p>
            </div>

            <div role="status" aria-live="polite" className="min-h-[1.5rem] text-sm">
              {status.kind === 'success' && (
                <p className="flex items-start gap-2 text-ink">
                  <Check size={16} className="mt-0.5 shrink-0 text-crimson" aria-hidden="true" />
                  Your mail app should open with the draft. If it didn&apos;t, email {profile.email} directly.
                </p>
              )}
              {status.kind === 'error' && <p className="text-crimson">{status.message}</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  multiline = false,
  autoComplete,
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (event: { target: { value: string } }) => void;
  error?: string;
  type?: string;
  multiline?: boolean;
  autoComplete?: string;
  required?: boolean;
}) {
  const errorId = `${id}-error`;
  const common = {
    id,
    name: id,
    value,
    onChange,
    autoComplete,
    required,
    'aria-invalid': error ? (true as const) : undefined,
    'aria-describedby': error ? errorId : undefined,
    className: 'field',
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink/90">
        {label}
        {required && <span className="text-crimson"> *</span>}
      </label>
      {multiline ? (
        <textarea {...common} rows={6} className="field min-h-[9rem] resize-y" />
      ) : (
        <input {...common} type={type} />
      )}
      {error && (
        <p id={errorId} className="text-sm text-crimson">
          {error}
        </p>
      )}
    </div>
  );
}
