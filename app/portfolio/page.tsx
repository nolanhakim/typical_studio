import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Navbar, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'Portfolio — Typical Studio',
  description:
    'Nine illustrative work samples from Typical Studio: social media, video, websites, identity, campaigns, and more.',
};

function PreviewTile({ children }: { children: ReactNode }) {
  return (
    <div className="relative aspect-[7/5] overflow-hidden rounded-xl border border-black/10 bg-[#eae6dc] transition-colors duration-300 group-hover:border-[#0b5b42]/60">
      {children}
      <span className="absolute left-3 top-3 rounded-full border border-black/15 bg-white/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#14170f]/80 backdrop-blur-sm">
        Sample
      </span>
    </div>
  );
}

const projects = [
  {
    number: '01',
    category: 'Social media',
    title: 'A feed with a steady rhythm',
    preview: (
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-3 gap-2 p-5">
        <div className="rounded-lg" style={{ background: 'linear-gradient(150deg,#02e4a4,#0b5b42)' }} />
        <div className="rounded-lg" style={{ background: '#20262a' }} />
        <div className="rounded-lg" style={{ background: 'linear-gradient(160deg,#eae6dc,#8a8d84)' }} />
        <div className="rounded-lg" style={{ background: '#2d3437' }} />
        <div className="grid place-items-center rounded-lg" style={{ background: '#f3f0e8' }}>
          <span className="h-6 w-6 rounded-full border-[3px] border-[#14170f]" />
        </div>
        <div className="rounded-lg" style={{ background: 'linear-gradient(140deg,#0b5b42,#14170f)' }} />
      </div>
    ),
  },
  {
    number: '02',
    category: 'Short-form video',
    title: 'Frames made for the first two seconds',
    preview: (
      <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
        <div className="relative aspect-[9/16] h-[82%] overflow-hidden rounded-2xl border border-white/15 bg-[#1b2023]">
          <div className="absolute inset-x-0 top-0 h-1/2" style={{ background: 'linear-gradient(155deg,#02e4a4,#0b5b42 65%,#14170f)' }} />
          <div className="absolute bottom-5 left-4 right-5 space-y-2">
            <div className="h-2 w-4/5 rounded-full bg-white/75" />
            <div className="h-2 w-3/5 rounded-full bg-white/40" />
          </div>
          <div className="absolute bottom-16 right-3 grid gap-3">
            <span className="h-6 w-6 rounded-full border border-white/50" />
            <span className="h-6 w-6 rounded-full border border-white/50" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '03',
    category: 'Website',
    title: 'A page built to be read and maintained',
    preview: (
      <div aria-hidden="true" className="absolute inset-5 flex flex-col overflow-hidden rounded-xl border border-black/10 bg-[#f3f0e8]">
        <div className="flex h-7 flex-none items-center gap-1.5 border-b border-black/10 bg-white px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d8d5cd]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#d8d5cd]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#d8d5cd]" />
        </div>
        <div className="p-5">
          <div className="h-2 w-16 rounded-full bg-[#02e4a4]" />
          <div className="mt-3 h-5 w-3/4 rounded bg-[#14170f]" />
          <div className="mt-2 h-2 w-1/2 rounded-full bg-[#5f6258]/40" />
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="h-14 rounded-lg bg-[#0b5b42]/15" />
            <div className="h-14 rounded-lg bg-[#14170f]/10" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '04',
    category: 'Campaign carousel',
    title: 'One story, split into clean frames',
    preview: (
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center gap-3 p-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-32 flex-1 rounded-xl border border-white/10 p-4"
            style={{
              background: i === 1 ? 'linear-gradient(150deg,#02e4a4,#0b5b42)' : '#20262a',
              transform: `translateY(${i === 1 ? '-10px' : '7px'})`,
            }}
          >
            <div className={`h-2 w-8 rounded-full ${i === 1 ? 'bg-black/30' : 'bg-white/40'}`} />
            <div className={`mt-3 h-3 w-3/4 rounded ${i === 1 ? 'bg-black/60' : 'bg-white/70'}`} />
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '05',
    category: 'Visual identity',
    title: 'A system that stays consistent',
    preview: (
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-[1fr_1.2fr] gap-4 p-5">
        <div className="rounded-xl border border-white/10 bg-[#20262a] p-4">
          <div className="font-serif text-4xl italic text-paper">Aa</div>
          <div className="mt-4 h-2 w-2/3 rounded-full bg-white/30" />
        </div>
        <div className="grid grid-rows-[1fr_auto] gap-4">
          <div className="rounded-xl border border-white/10 bg-[#f3f0e8] p-4">
            <div className="flex gap-2">
              <span className="h-9 flex-1 rounded-lg" style={{ background: '#02e4a4' }} />
              <span className="h-9 flex-1 rounded-lg" style={{ background: '#0b5b42' }} />
              <span className="h-9 flex-1 rounded-lg" style={{ background: '#14170f' }} />
              <span className="h-9 flex-1 rounded-lg" style={{ background: '#eae6dc' }} />
            </div>
            <div className="mt-4 h-2 w-4/5 rounded-full bg-[#14170f]/25" />
          </div>
          <div className="rounded-xl border border-white/10 bg-[#1b2023] p-3">
            <div className="h-5 w-20 rounded-full bg-white/15" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '06',
    category: 'Landing page',
    title: 'One clear action, nothing competing',
    preview: (
      <div aria-hidden="true" className="absolute inset-5 flex flex-col overflow-hidden rounded-xl border border-black/10 bg-[#eae6dc]">
        <div className="flex h-7 flex-none items-center justify-between border-b border-black/10 bg-white px-3">
          <span className="h-2 w-16 rounded-full bg-[#14170f]/20" />
          <span className="h-2 w-8 rounded-full bg-[#02e4a4]" />
        </div>
        <div className="grid flex-1 grid-cols-[1.2fr_1fr]">
          <div className="p-5">
            <div className="h-2 w-12 rounded-full bg-[#0b5b42]/40" />
            <div className="mt-3 h-4 w-11/12 rounded bg-[#14170f]" />
            <div className="mt-2 h-4 w-2/3 rounded bg-[#14170f]" />
            <div className="mt-4 h-2 w-3/4 rounded-full bg-[#5f6258]/40" />
            <div className="mt-5 h-6 w-20 rounded-full bg-[#02e4a4]" />
          </div>
          <div className="m-4 rounded-lg" style={{ background: 'linear-gradient(150deg,#0b5b42,#14170f)' }} />
        </div>
      </div>
    ),
  },
  {
    number: '07',
    category: 'Content calendar',
    title: 'A month planned before it ships',
    preview: (
      <div aria-hidden="true" className="absolute inset-0 p-5">
        <div className="grid h-full grid-cols-7 grid-rows-4 gap-1.5">
          {Array.from({ length: 28 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[4px]"
              style={{
                background:
                  i % 7 === 0 || i % 9 === 0
                    ? 'rgba(2,228,164,0.55)'
                    : 'rgba(255,255,255,0.07)',
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    number: '08',
    category: 'Motion graphics',
    title: 'Type that moves with the beat',
    preview: (
      <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
        <div className="flex items-end gap-1.5">
          {[18, 34, 26, 46, 30, 52, 22, 38].map((h, i) => (
            <span
              key={i}
              className="w-2.5 rounded-full"
              style={{
                height: h,
                background: i % 2 ? '#02e4a4' : '#eae6dc',
                transform: `rotate(${i % 2 ? 6 : -6}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    number: '09',
    category: 'Web app UI',
    title: 'Dense information, still readable',
    preview: (
      <div aria-hidden="true" className="absolute inset-4 flex overflow-hidden rounded-xl border border-white/10 bg-[#f3f0e8]">
        <div className="w-1/4 bg-[#14170f] p-3">
          <div className="h-2 w-3/4 rounded-full bg-[#02e4a4]" />
          <div className="mt-4 space-y-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-1.5 rounded-full bg-white/20" style={{ width: `${90 - i * 12}%` }} />
            ))}
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="h-3 w-1/2 rounded bg-[#14170f]" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-12 rounded-lg bg-[#0b5b42]/10" />
            ))}
          </div>
          <div className="mt-3 space-y-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-2 rounded-full bg-[#14170f]/15" style={{ width: `${95 - i * 15}%` }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function PortfolioPage() {
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
              Portfolio
            </p>
            <h2
              className="font-black leading-[0.9] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(3rem,5.6vw,5.2rem)' }}
            >
              A closer look<br />
              at what we make<br />
              and how it fits<span style={{ color: '#02e4a4' }}>.</span>
            </h2>
            <p className="mt-6 max-w-[46ch] text-base leading-7 text-[#8a8d84]">
              Nine illustrative samples across social media, video, and web.
              They show the formats and the visual decisions behind them; real
              client names, links, and results replace them as work ships.
            </p>
          </div>
        </section>

        {/* ── WHITE — 3 × 3 sample grid, built on this page ── */}
        <section
          aria-label="Portfolio samples"
          className="relative z-20 -mt-6 sm:-mt-10 overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-white text-[#14170f] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          style={{
            paddingTop: 'clamp(4rem,8vw,7rem)',
            paddingBottom: 'clamp(4rem,8vw,7rem)',
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b5b42]/50 to-transparent"
          />
          <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5f6258]">
                  Selected samples
                </p>
                <h2
                  className="font-black leading-[0.9] tracking-[-0.025em] text-[#14170f]"
                  style={{ fontSize: 'clamp(3rem,5.6vw,5.2rem)' }}
                >
                  Work made to hold together.
                </h2>
              </div>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5f6258]">
                01 — 09
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#0b5b42]">
                      {project.category}
                    </p>
                    <span className="font-mono text-[10.5px] tabular-nums text-[#5f6258]">
                      {project.number}
                    </span>
                  </div>
                  <h3 className="mb-4 font-black tracking-[-0.02em] leading-tight text-[#14170f] text-xl sm:text-2xl">
                    {project.title}
                  </h3>
                  <PreviewTile>{project.preview}</PreviewTile>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer dark />
    </>
  );
}
