import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Our Works — Typical Studio',
  description:
    'Nine illustrative work samples from Typical Studio: social media, video, websites, identity, campaigns, and more.',
};

function PreviewTile({ children }: { children: ReactNode }) {
  return (
    <div className="relative aspect-[7/5] overflow-hidden rounded-xl border border-black/10 bg-[#eae6dc] transition-colors duration-300 group-hover:border-[#0b5b42]/60">
      <div className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]">
        {children}
      </div>
      <span className="absolute left-3 top-3 rounded-full border border-black/15 bg-white/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#14170f]/80 backdrop-blur-sm">
        Sample
      </span>
    </div>
  );
}

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
            <p className="hero-in mb-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#8a8d84]">
              Our Works
            </p>
            <h1
              className="hero-in font-black leading-[0.9] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(3rem,5.6vw,5.2rem)' }}
            >
              A closer look<br />
              at what we make<br />
              and how it fits<span style={{ color: '#02e4a4' }}>.</span>
            </h1>
            <p className="hero-in-late mt-6 max-w-[46ch] text-base leading-7 text-[#8a8d84]">
              Nine illustrative samples across social media, video, and web.
              Select any project to inspect its structure, visual decisions,
              and deliverables.
            </p>
          </div>
        </section>

        {/* ── WHITE — 3 × 3 sample grid, linked to detail pages ── */}
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

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.slug}>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group block rounded-xl transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b5b42]"
                  >
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#0b5b42]">
                        {project.category}
                      </p>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] tabular-nums text-[#5f6258] transition-colors group-hover:text-[#0b5b42]">
                        {project.number}
                        <span
                          aria-hidden="true"
                          className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          &rarr;
                        </span>
                      </span>
                    </div>
                    <h3 className="mb-4 font-black tracking-[-0.02em] leading-tight text-[#14170f] text-xl sm:text-2xl transition-colors group-hover:text-[#0b5b42]">
                      {project.title}
                    </h3>
                    <PreviewTile>{project.preview}</PreviewTile>
                  </Link>
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
