import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'About — Typical Studio',
  description:
    'Typical Studio is a social media and web studio based in Surabaya. One team delivering content and websites in a single visual language, from brief to launch.',
};

const facts = [
  { k: 'Based in', v: 'Surabaya, Indonesia' },
  { k: 'Disciplines', v: 'Social media & websites' },
  { k: 'Hours', v: 'Mon–Fri, 09:00–18:00 WIB' },
];

const values = [
  {
    number: '01',
    title: 'One team, brief to launch',
    desc: 'No handoffs between departments. The people who plan your content also design and build the site it lives on.',
  },
  {
    number: '02',
    title: 'Content and code in one voice',
    desc: 'Feeds and websites share a visual language, so a brand reads the same whether it is scrolled, clicked, or watched.',
  },
  {
    number: '03',
    title: 'Made to be maintained',
    desc: 'Content systems and sites built for updates, not just launch day. Structured, documented, easy to hand over.',
  },
  {
    number: '04',
    title: 'Clarity over noise',
    desc: 'Readable layouts, sharp typography, and copy written to be read through — not decoration for its own sake.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-[#111315]">

        {/* ── INTRO — dark, sits under the transparent navbar ── */}
        <section className="relative overflow-hidden bg-[#111315] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0"
            style={{
              width: '58%',
              backgroundImage: [
                'linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)',
                'linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)',
              ].join(','),
              backgroundSize: '76px 76px',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0%, black 30%, black 85%, transparent 100%)',
              maskImage:
                'linear-gradient(to bottom, transparent 0%, black 30%, black 85%, transparent 100%)',
            }}
          />
          <div
            className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16"
            style={{
              paddingTop: 'clamp(8rem,15vw,11rem)',
              paddingBottom: 'clamp(4rem,7vw,6rem)',
            }}
          >
            <p className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#8a8d84]">
              About
            </p>
            <h2
              className="font-black leading-[0.9] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(3rem,5.6vw,5.2rem)' }}
            >
              A small studio<br />
              with a clear<br />
              way of working<span style={{ color: '#02e4a4' }}>.</span>
            </h2>
            <p className="mt-6 max-w-[46ch] text-base leading-7 text-[#8a8d84]">
              Typical Studio is a social media and web studio based in Surabaya.
              Content captures attention; websites build conviction — we craft
              both in one visual language.
            </p>
          </div>
        </section>

        {/* ── WHITE CARD — facts + values ── */}
        <section
          className="relative z-20 -mt-6 sm:-mt-10 rounded-[2.5rem] sm:rounded-[3.5rem] bg-white text-[#14170f] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          style={{ paddingTop: 'clamp(4rem,7vw,6rem)', paddingBottom: 'clamp(4rem,7vw,6rem)' }}
        >
          <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">

            {/* Facts row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-16">
              {facts.map((f) => (
                <div
                  key={f.k}
                  className="flex flex-col gap-1"
                  style={{ borderTop: '1px solid rgba(20,23,15,0.12)', paddingTop: '1.25rem' }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5f6258]">
                    {f.k}
                  </span>
                  <span className="text-sm font-semibold leading-6">{f.v}</span>
                </div>
              ))}
            </div>

            {/* Values — numbered rows, Services style */}
            <div>
              {values.map((v, i) => (
                <div
                  key={v.number}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0"
                  style={{
                    borderTop: '1px solid rgba(20,23,15,0.12)',
                    borderBottom: i === values.length - 1 ? '1px solid rgba(20,23,15,0.12)' : 'none',
                    padding: 'clamp(1.5rem,3vw,2.25rem) 0',
                  }}
                >
                  <div className="flex items-center gap-6" style={{ flex: '0 0 42%' }}>
                    <span
                      className="font-mono text-[11px] tracking-[0.18em] tabular-nums text-[#02e4a4]"
                      style={{ minWidth: '2rem' }}
                    >
                      {v.number}
                    </span>
                    <h3
                      className="font-black tracking-[-0.02em] leading-none"
                      style={{ fontSize: 'clamp(1.4rem,2.4vw,2.2rem)' }}
                    >
                      {v.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-6 text-[#5f6258] max-w-[46ch]"
                    style={{ flex: '0 0 58%', paddingLeft: 'clamp(2rem,4vw,5rem)' }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA banner — mint, Launch package style */}
            <div className="mt-16 flex flex-col lg:flex-row lg:items-stretch gap-0">
              <div
                className="flex items-start lg:items-end pb-6 lg:pb-0 lg:pr-10"
                style={{ flex: '0 0 42%' }}
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5f6258]">
                  Work with us
                </p>
              </div>
              <div
                className="relative overflow-hidden"
                style={{
                  flex: '0 0 58%',
                  background: '#02e4a4',
                  borderRadius: '1.25rem',
                  padding: 'clamp(1.75rem,3.5vw,2.75rem) clamp(1.75rem,3.5vw,3rem)',
                }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[1.25rem]"
                  style={{
                    backgroundImage: [
                      'linear-gradient(rgba(20,23,15,0.08) 1px, transparent 1px)',
                      'linear-gradient(90deg, rgba(20,23,15,0.08) 1px, transparent 1px)',
                    ].join(','),
                    backgroundSize: '52px 52px',
                  }}
                />
                <div className="relative">
                  <p
                    className="font-black leading-[0.95] tracking-[-0.02em] text-[#14170f]"
                    style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}
                  >
                    Have a brand<br />worth building?
                  </p>
                  <a
                    href="https://wa.me/6281234567890"
                    className="mt-6 inline-flex items-center gap-2.5 font-bold text-sm text-white rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                    style={{
                      background: '#14170f',
                      padding: '0.8rem 1.6rem',
                      boxShadow: '0 4px 16px rgba(20,23,15,0.25)',
                    }}
                  >
                    Send brief
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer dark />
    </>
  );
}
