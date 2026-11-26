import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar, Footer } from '@/components';
import { projects, getProjectBySlug } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found — Typical Studio',
    };
  }

  return {
    title: `${project.title} — Typical Studio`,
    description: project.description,
  };
}

function ProjectDetailFallback() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#111315] text-white">
        <div
          className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16"
          style={{
            paddingTop: 'clamp(7.5rem,14vw,10.5rem)',
            paddingBottom: 'clamp(4.5rem,7vw,6.5rem)',
          }}
        >
          <div className="h-3 w-36 rounded bg-white/10" />
          <div className="mt-8 h-3 w-28 rounded bg-white/10" />
          <div className="mt-4 h-12 w-3/4 max-w-xl rounded bg-white/15" />
          <div className="mt-6 h-5 w-1/2 max-w-md rounded bg-white/10" />
        </div>
      </section>
      <section className="relative z-20 -mt-6 sm:-mt-10 min-h-[50vh] rounded-[2.5rem] sm:rounded-[3.5rem] bg-white" />
    </>
  );
}

async function ProjectDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
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
            paddingTop: 'clamp(7.5rem,14vw,10.5rem)',
            paddingBottom: 'clamp(4.5rem,7vw,6.5rem)',
          }}
        >
          <Link
            href="/portfolio"
            className="hero-in inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#8a8d84] transition-colors hover:text-[#02e4a4]"
          >
            <span aria-hidden="true">&larr;</span>
            <span>Back to Our Works</span>
          </Link>

          <div className="hero-in mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#02e4a4]">
              {project.number}
            </span>
            <span aria-hidden="true" className="text-white/25">
              /
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#8a8d84]">
              {project.category}
            </span>
          </div>

          <h1
            className="hero-in mt-4 max-w-[18ch] font-black leading-[0.94] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.75rem,5.4vw,5rem)' }}
          >
            {project.title}
            <span style={{ color: '#02e4a4' }}>.</span>
          </h1>

          <p className="hero-in-late mt-6 max-w-[52ch] text-base leading-7 text-[#8a8d84]">
            {project.description}
          </p>

          {/* Quick metadata strip */}
          <dl
            className="hero-in-late mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}
          >
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8d84]">
                Status
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">{project.status}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8d84]">
                Typical timeline
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">{project.timeline}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8d84]">
                Scope
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">{project.scope}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── WHITE SHEET — Showcase, Breakdown & Specs ── */}
      <section
        aria-label="Project details"
        className="relative z-20 -mt-6 sm:-mt-10 overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-white text-[#14170f] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        style={{
          paddingTop: 'clamp(3.5rem,7vw,6rem)',
          paddingBottom: 'clamp(4rem,8vw,7rem)',
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b5b42]/50 to-transparent"
        />

        <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
          {/* Large visual showcase */}
          <div className="relative aspect-[7/5] lg:aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 bg-[#eae6dc]">
            {project.preview}
            <span className="absolute left-4 top-4 rounded-full border border-black/15 bg-white/85 px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#14170f]/80 backdrop-blur-sm">
              {project.status}
            </span>
          </div>

          {/* Editorial two-column breakdown */}
          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="space-y-8">
              <div>
                <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#0b5b42]">
                  Overview
                </p>
                <p className="max-w-[58ch] text-base leading-7 text-[#14170f] sm:text-lg sm:leading-8">
                  {project.overview}
                </p>
              </div>

              <div>
                <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5f6258]">
                  Approach
                </p>
                <p className="max-w-[58ch] text-base leading-7 text-[#5f6258]">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Specifications & Deliverables */}
            <div className="space-y-10">
              <div>
                <p className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5f6258]">
                  Specifications
                </p>
                <dl>
                  {project.specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className="flex items-baseline justify-between gap-4 py-3.5"
                      style={{
                        borderTop: '1px solid rgba(20,23,15,0.12)',
                        borderBottom:
                          i === project.specs.length - 1
                            ? '1px solid rgba(20,23,15,0.12)'
                            : 'none',
                      }}
                    >
                      <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#5f6258]">
                        {spec.label}
                      </dt>
                      <dd className="text-right text-sm font-medium text-[#14170f]">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <p className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5f6258]">
                  Deliverables
                </p>
                <ul className="space-y-2.5">
                  {project.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-[#14170f]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#0b5b42]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Key structural & visual decisions */}
          <div className="mt-16">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5f6258]">
                  Craft breakdown
                </p>
                <h2 className="font-black tracking-[-0.02em] text-[#14170f] text-2xl sm:text-3xl">
                  Key decisions behind this format.
                </h2>
              </div>
            </div>

            <div>
              {project.decisions.map((decision, i) => (
                <div
                  key={decision.number}
                  className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[5rem_16rem_1fr] sm:items-baseline sm:gap-6"
                  style={{
                    borderTop: '1px solid rgba(20,23,15,0.12)',
                    borderBottom:
                      i === project.decisions.length - 1
                        ? '1px solid rgba(20,23,15,0.12)'
                        : 'none',
                  }}
                >
                  <span className="font-mono text-xs tabular-nums text-[#0b5b42]">
                    {decision.number}
                  </span>
                  <h3 className="text-base font-semibold text-[#14170f]">
                    {decision.title}
                  </h3>
                  <p className="max-w-[58ch] text-sm leading-6 text-[#5f6258]">
                    {decision.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation: Prev / Next + Inquiry */}
          <div
            className="mt-16 flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderTop: '1px solid rgba(20,23,15,0.12)' }}
          >
            <Link
              href={`/portfolio/${prevProject.slug}`}
              className="group inline-flex flex-col gap-1 transition-colors hover:text-[#0b5b42]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5f6258]">
                &larr; Previous ({prevProject.number})
              </span>
              <span className="text-base font-semibold text-[#14170f] group-hover:text-[#0b5b42]">
                {prevProject.title}
              </span>
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full bg-[#14170f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0b5b42]"
            >
              Start a similar project
            </Link>

            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group inline-flex flex-col gap-1 sm:text-right transition-colors hover:text-[#0b5b42]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5f6258]">
                Next ({nextProject.number}) &rarr;
              </span>
              <span className="text-base font-semibold text-[#14170f] group-hover:text-[#0b5b42]">
                {nextProject.title}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-[#111315]">
        <Suspense fallback={<ProjectDetailFallback />}>
          <ProjectDetailContent params={params} />
        </Suspense>
      </main>
      <Footer dark />
    </>
  );
}
