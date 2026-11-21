import type { Metadata } from 'next';
import { Navbar, Footer, Services, Portfolio } from '@/components';

export const metadata: Metadata = {
  title: 'Services — Typical Studio',
  description:
    'Social media management and website development in one team: content strategy, feed design, Reels production, UI/UX, landing pages, and CMS integration.',
};

export default function ServicesPage() {
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
              Services
            </p>
            <h2
              className="font-black leading-[0.9] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(3rem,5.6vw,5.2rem)' }}
            >
              Content and<br />
              websites, under<br />
              one roof<span style={{ color: '#02e4a4' }}>.</span>
            </h2>
            <p className="mt-6 max-w-[46ch] text-base leading-7 text-[#8a8d84]">
              Strategy, design, production, and code. Planned and shipped by
              one team in Surabaya, from first brief to launch.
            </p>
          </div>
        </section>

        <Services />
      </main>
      <Footer dark />
    </>
  );
}
