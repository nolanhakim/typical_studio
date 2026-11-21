import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';
import { PricingCards } from '@/components/sections/PricingCards';

export const metadata: Metadata = {
  title: 'Pricing - Typical Studio',
  description:
    'Social media retainers and fixed-scope website builds from Typical Studio, Surabaya. Example package figures and frequently asked questions.',
};

const faqs = [
  {
    q: 'Do you work with clients outside Surabaya?',
    a: "Yes. We are based in Surabaya and work remote-first with clients across Indonesia. Working hours are MonΓÇôFri, 09:00ΓÇô18:00 WIB.",
  },
  {
    q: 'How quickly will I hear back after sending a brief?',
    a: 'Within one business day.',
  },
  {
    q: 'Can I combine social media and a website?',
    a: 'Yes. The launch package puts both on one schedule with one team.',
  },
  {
    q: 'What does the website figure include?',
    a: 'The example covers a landing page or company profile: UI/UX, build, CMS setup, and launch handover. Larger scopes are quoted after the brief.',
  },
  {
    q: 'Is there a minimum commitment for social media?',
    a: 'Content is planned in monthly cycles. The retainer length is confirmed in your quote.',
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-[#111315]">

        {/* ΓöÇΓöÇ INTRO ΓÇö dark, sits under the transparent navbar ΓöÇΓöÇ */}
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
              Pricing
            </p>
            <h2
              className="font-black leading-[0.9] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(3rem,5.6vw,5.2rem)' }}
            >
              Clear scope,<br />
              clear prices<span style={{ color: '#02e4a4' }}>.</span>
            </h2>
            <p className="mt-6 max-w-[46ch] text-base leading-7 text-[#8a8d84]">
              Monthly retainers for social media and fixed-scope website
              builds. The figures below are examples; your final quote follows
              the brief.
            </p>
          </div>
        </section>

        {/* ΓöÇΓöÇ WHITE CARD ΓÇö packages ΓöÇΓöÇ */}
        <section
          className="relative z-20 -mt-6 sm:-mt-10 rounded-[2.5rem] sm:rounded-[3.5rem] bg-white text-[#14170f] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          style={{ paddingTop: 'clamp(4rem,7vw,6rem)', paddingBottom: 'clamp(3rem,5vw,4.5rem)' }}
        >
          <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">

            <PricingCards />

            <p className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.15em] text-[#5f6258]">
              Example figures. Your final quote follows the brief.
            </p>

          </div>
        </section>

        {/* ΓöÇΓöÇ DARK ΓÇö FAQ + CTA ΓöÇΓöÇ */}
        <section
          className="relative text-white"
          style={{ paddingTop: 'clamp(4rem,7vw,6rem)', paddingBottom: 'clamp(5rem,8vw,7rem)' }}
        >
          <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
              <div style={{ flex: '0 0 42%' }}>
                <p className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#8a8d84]">
                  FAQ
                </p>
                <h2
                  className="font-black leading-[0.95] tracking-[-0.02em]"
                  style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)' }}
                >
                  Asked<br />before a brief<span style={{ color: '#02e4a4' }}>.</span>
                </h2>
              </div>
              <div style={{ flex: '0 0 58%' }}>
                {faqs.map((f, i) => (
                  <details
                    key={f.q}
                    className="group"
                    style={{
                      borderTop: '1px solid rgba(255,255,255,0.12)',
                      borderBottom: i === faqs.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                    }}
                  >
                    <summary
                      className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-sm font-semibold leading-6"
                    >
                      {f.q}
                      <span
                        aria-hidden="true"
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/20 transition-transform duration-200 group-open:rotate-45"
                      >
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                          <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                        </svg>
                      </span>
                    </summary>
                    <p className="max-w-[52ch] pb-5 text-sm leading-6 text-[#8a8d84]">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA banner ΓÇö mint */}
            <div className="mt-20 flex flex-col lg:flex-row lg:items-stretch gap-0">
              <div
                className="flex items-start lg:items-end pb-6 lg:pb-0 lg:pr-10"
                style={{ flex: '0 0 42%' }}
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#8a8d84]">
                  Ready when you are
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
                    Send your brief<br />and get a real quote.
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
      <Footer />
    </>
  );
}
