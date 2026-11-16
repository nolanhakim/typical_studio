import { Logo } from '@/components/ui/Logo';

/* ─────────────────────────────────────────────
   Footer — white bg, Wrapmax aesthetic
   42/58 split, blueprint grid accent,
   mint dot on logo. `dark` flips it to the
   site's dark tone for the zebra rhythm
   (used on pages that end on a light card).
───────────────────────────────────────────── */

const pageLinks = [
    { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },

];

export function Footer({ dark = false }: { dark?: boolean }) {
  const sub = dark ? 'text-[#8a8d84]' : 'text-[#5f6258]';
  const hoverC = dark ? 'hover:text-[#02e4a4]' : 'hover:text-[#0b5b42]';
  const solid = dark ? 'text-white' : 'text-[#14170f]';
  const line = dark ? 'rgba(255,255,255,0.1)' : 'rgba(20,23,15,0.08)';
  const grid = dark ? 'rgba(255,255,255,0.055)' : 'rgba(20,23,15,0.055)';

  return (
    <footer
      className={
        'relative z-20 -mt-6 sm:-mt-10 overflow-hidden rounded-t-[2.5rem] sm:rounded-t-[3.5rem] shadow-[0_-15px_40px_rgba(0,0,0,0.3)] '
        + (dark ? 'bg-[#111315] text-white' : 'bg-white text-[#14170f]')
      }
      style={{
        paddingTop: 'clamp(4rem,7vw,6rem)',
        paddingBottom: 'clamp(5rem,8vw,6rem)',
      }}
    >
      {/* Subtle rim light accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#02e4a4]/40 to-transparent"
      />
      {/* Blueprint grid — right 58% */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0"
        style={{
          width: '58%',
          backgroundImage: [
            `linear-gradient(${grid} 1px, transparent 1px)`,
            `linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
          ].join(','),
          backgroundSize: '76px 76px',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">

        {/* ── MAIN ROW ── */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-0">

          {/* Left 42% — logo + tagline + CTA */}
          <div style={{ flex: '0 0 42%' }}>
            <a href="/" className={'inline-block transition-opacity hover:opacity-75 ' + solid} aria-label="Typical Studio, back to top">
              <Logo size="lg" />
            </a>
            <p className={'mt-5 max-w-[36ch] text-sm leading-7 ' + sub}>
              Social media and web studio based in Surabaya. One team from brief to launch.
            </p>

            {/* CTA pill */}
            <a
              href="https://wa.me/6281234567890"
              className="mt-7 inline-flex items-center gap-2 font-bold text-sm text-[#111315] bg-[#02e4a4] hover:bg-[#3df6b8] rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                boxShadow: '0 4px 16px rgba(2,228,164,0.3)',
                padding: '0.75rem 1.5rem',
              }}
            >
              Send brief
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M1.5 6.5h10M8 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right 58% — nav + contact */}
          <div
            className="flex flex-col sm:flex-row gap-12"
            style={{ flex: '0 0 58%', paddingLeft: 'clamp(2rem,4vw,5rem)' }}
          >
            {/* Nav links */}
            <div className="flex-1">
              <h3 className={'font-mono text-[10px] uppercase tracking-[0.2em] mb-5 font-semibold ' + sub}>
                Pages
              </h3>
              <ul className="space-y-3">
                {pageLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={'text-sm transition-colors ' + sub + ' ' + hoverC}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex-1">
              <h3 className={'font-mono text-[10px] uppercase tracking-[0.2em] mb-5 font-semibold ' + sub}>
                Contact
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={'font-medium transition-colors ' + solid + ' ' + hoverC}
                  >
                    +62 812-3456-7890
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:halo@typical.studio"
                    className={'font-medium transition-colors ' + solid + ' ' + hoverC}
                  >
                    halo@typical.studio
                  </a>
                </li>
                <li className={'pt-1 leading-6 ' + sub}>
                  Surabaya, Indonesia
                </li>
                <li className={sub}>
                  Mon–Fri, 09:00–18:00 WIB
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div
          className={'mt-14 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between text-[12px] ' + sub}
          style={{ borderTop: '1px solid ' + line, paddingTop: '1.5rem' }}
        >
          <p>© 2026 Typical Studio. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
