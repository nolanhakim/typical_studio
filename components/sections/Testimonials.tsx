'use client';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  service: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Typical Studio transformed our social channels from stagnant corporate posts into high-retention content. Within eight weeks, our organic reach crossed 4.2M views and demo requests doubled.',
    author: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Permitly',
    metric: '+210% pipeline',
    service: 'Social & Reels',
    initials: 'MV',
  },
  {
    quote:
      'The rarest combination: refined editorial taste and rigorous web engineering. Our marketing site shipped on schedule, fully responsive, with immaculate 60fps interaction polish.',
    author: 'Elena Rostova',
    role: 'Head of Product',
    company: 'Meshline AI',
    metric: '99/100 Lighthouse',
    service: 'Web Development',
    initials: 'ER',
  },
  {
    quote:
      'Instead of throwing disconnected templates at us, they built one unified visual identity across our daily content and web flagship. Customer trust surged immediately.',
    author: 'David Chen',
    role: 'Managing Director',
    company: 'Lathe & Co',
    metric: '2.4× conversion',
    service: 'Launch Package',
    initials: 'DC',
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative z-20 -mt-6 sm:-mt-10 scroll-mt-24 overflow-hidden rounded-t-[2.5rem] sm:rounded-t-[3.5rem] rounded-b-[2.5rem] sm:rounded-b-[3.5rem] bg-white text-[#14170f] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
      style={{
        paddingTop: 'clamp(5rem,9vw,8rem)',
        paddingBottom: 'clamp(5rem,9vw,8rem)',
      }}
    >
      {/* Subtle rim light accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#02e4a4]/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-[#02e4a4]/30 to-transparent"
      />
      {/* Blueprint grid — covers right 58% */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0"
        style={{
          width: '58%',
          backgroundImage: [
            'linear-gradient(rgba(20,23,15,0.055) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(20,23,15,0.055) 1px, transparent 1px)',
          ].join(','),
          backgroundSize: '76px 76px',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
        {/* ── HEADER ROW: 42 / 58 split ── */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-0 mb-16">
          {/* Left — 42% */}
          <div style={{ flex: '0 0 42%' }}>
            <p className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5f6258]">
              Testimonials
            </p>
            <h2
              className="font-black leading-[0.9] tracking-[-0.025em] text-[#14170f]"
              style={{ fontSize: 'clamp(3rem,5.6vw,5.2rem)' }}
            >
              What founders<br />
              say about our<br />
              execution<span style={{ color: '#02e4a4' }}>.</span>
            </h2>
          </div>

          {/* Right — 58% */}
          <div className="lg:pl-[clamp(2rem,4vw,5rem)]" style={{ flex: '0 0 58%' }}>
            <p className="text-base leading-7 text-[#5f6258] max-w-[44ch]">
              Direct feedback from brand leaders and tech founders who partnered with our studio for content production, visual identity, and web engineering.
            </p>
          </div>
        </div>

        {/* ── TESTIMONIAL CARDS GRID ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* Left spacer column — 42% on desktop with summary pill */}
          <div style={{ flex: '0 0 42%' }} className="pr-0 lg:pr-12 flex flex-col justify-between">
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: '#f7f6f2',
                border: '1px solid rgba(20,23,15,0.08)',
              }}
            >
              <div className="flex items-center gap-2 mb-4 font-mono text-[11px] text-[#0b5b42] uppercase tracking-[0.16em]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#02e4a4] animate-pulse" />
                Proven Track Record
              </div>
              <p className="text-2xl sm:text-3xl font-black text-[#14170f] leading-tight tracking-tight">
                100% on-time delivery across web & content sprints.
              </p>
              <p className="mt-3 text-sm text-[#5f6258] leading-relaxed">
                We take on a limited number of clients per quarter to ensure senior-level attention to every frame and every line of code.
              </p>
              <div className="mt-6 pt-6 border-t border-[rgba(20,23,15,0.08)] flex items-center justify-between text-xs font-mono text-[#5f6258]">
                <span>AVERAGE RATING</span>
                <span className="text-[#14170f] font-bold text-sm">5.0 / 5.0</span>
              </div>
            </div>
          </div>

          {/* Right cards list — 58% */}
          <div
            className="space-y-6"
            style={{
              flex: '0 0 58%',
              paddingLeft: 'clamp(0rem,4vw,5rem)',
            }}
          >
            {testimonials.map((t) => (
              <article
                key={t.author}
                className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#02e4a4] hover:shadow-[0_8px_30px_rgba(20,23,15,0.06)]"
                style={{
                  background: '#faf9f6',
                  border: '1px solid rgba(20,23,15,0.08)',
                }}
              >
                {/* Header row: Service tag + Metric badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#5f6258]">
                    {t.service}
                  </span>
                  <span
                    className="font-mono text-[11px] font-bold px-3 py-1 rounded-full text-[#0b5b42]"
                    style={{
                      background: 'rgba(2,228,164,0.18)',
                      border: '1px solid rgba(2,228,164,0.45)',
                    }}
                  >
                    {t.metric}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg leading-relaxed text-[#14170f] font-normal mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author profile */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-[rgba(20,23,15,0.08)]">
                  <div
                    className="w-10 h-10 rounded-full grid place-items-center font-bold text-xs text-[#111315] flex-shrink-0"
                    style={{ background: '#02e4a4' }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#14170f] leading-none">
                      {t.author}
                    </p>
                    <p className="text-xs text-[#5f6258] mt-1 leading-none">
                      {t.role} · <span className="text-[#14170f] font-medium">{t.company}</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
