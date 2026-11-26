import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar, Footer } from '@/components';
import { pricingPackages, getPackageBySlug, PackageVisual } from '@/lib/pricing';

export function generateStaticParams() {
  return pricingPackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return {
      title: 'Package Not Found — Typical Studio',
    };
  }

  return {
    title: `${pkg.title} — Pricing — Typical Studio`,
    description: pkg.description,
  };
}

function PricingDetailFallback() {
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

async function PricingDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const currentIndex = pricingPackages.findIndex((item) => item.slug === pkg.slug);
  const prevPkg = pricingPackages[(currentIndex - 1 + pricingPackages.length) % pricingPackages.length];
  const nextPkg = pricingPackages[(currentIndex + 1) % pricingPackages.length];

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
            href="/pricing"
            className="hero-in inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#8a8d84] transition-colors hover:text-[#02e4a4]"
          >
            <span aria-hidden="true">&larr;</span>
            <span>Back to Pricing</span>
          </Link>

          <div className="hero-in mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#02e4a4]">
              {pkg.number}
            </span>
            <span aria-hidden="true" className="text-white/25">
              /
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#8a8d84]">
              Package
            </span>
          </div>

          <h1
            className="hero-in mt-4 max-w-[18ch] font-black leading-[0.94] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.75rem,5.4vw,5rem)' }}
          >
            {pkg.title}
            <span style={{ color: '#02e4a4' }}>.</span>
          </h1>

          <p className="hero-in-late mt-6 max-w-[52ch] text-base leading-7 text-[#8a8d84]">
            {pkg.description}
          </p>

          {/* Quick metadata strip */}
          <dl
            className="hero-in-late mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}
          >
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8d84]">
                Example starting rate
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">
                {pkg.price} <span className="text-[#8a8d84]">{pkg.unit}</span>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8d84]">
                Typical timeline
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">{pkg.timeline}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8d84]">
                Best for
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">{pkg.bestFor}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── WHITE SHEET — Visual, Breakdown & Specs ── */}
      <section
        aria-label="Package details"
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
          <PackageVisual
            kind={pkg.kind}
            className="aspect-[7/5] lg:aspect-[16/9] rounded-2xl border border-black/10"
          />

          {/* Editorial two-column breakdown */}
          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="space-y-8">
              <div>
                <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#0b5b42]">
                  Overview
                </p>
                <p className="max-w-[58ch] text-base leading-7 text-[#14170f] sm:text-lg sm:leading-8">
                  {pkg.overview}
                </p>
              </div>

              <div>
                <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5f6258]">
                  How it runs
                </p>
                <p className="max-w-[58ch] text-base leading-7 text-[#5f6258]">
                  {pkg.workflowSummary}
                </p>
              </div>
            </div>

            {/* Specifications & Included items */}
            <div className="space-y-10">
              <div>
                <p className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5f6258]">
                  Specifications
                </p>
                <dl>
                  {pkg.specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className="flex items-baseline justify-between gap-4 py-3.5"
                      style={{
                        borderTop: '1px solid rgba(20,23,15,0.12)',
                        borderBottom:
                          i === pkg.specs.length - 1
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
                  Included in this package
                </p>
                <ul className="space-y-2.5">
                  {pkg.features.map((item) => (
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

          {/* Workflow breakdown */}
          <div className="mt-16">
            <div className="mb-8">
              <p className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5f6258]">
                Workflow
              </p>
              <h2 className="font-black tracking-[-0.02em] text-[#14170f] text-2xl sm:text-3xl">
                How we deliver this scope.
              </h2>
            </div>

            <div>
              {pkg.steps.map((step, i) => (
                <div
                  key={step.number}
                  className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[5rem_16rem_1fr] sm:items-baseline sm:gap-6"
                  style={{
                    borderTop: '1px solid rgba(20,23,15,0.12)',
                    borderBottom:
                      i === pkg.steps.length - 1
                        ? '1px solid rgba(20,23,15,0.12)'
                        : 'none',
                  }}
                >
                  <span className="font-mono text-xs tabular-nums text-[#0b5b42]">
                    {step.number}
                  </span>
                  <h3 className="text-base font-semibold text-[#14170f]">
                    {step.title}
                  </h3>
                  <p className="max-w-[58ch] text-sm leading-6 text-[#5f6258]">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation: Prev / Next + Send brief */}
          <div
            className="mt-16 flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderTop: '1px solid rgba(20,23,15,0.12)' }}
          >
            <Link
              href={`/pricing/${prevPkg.slug}`}
              className="group inline-flex flex-col gap-1 transition-colors hover:text-[#0b5b42]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5f6258]">
                &larr; Previous ({prevPkg.number})
              </span>
              <span className="text-base font-semibold text-[#14170f] group-hover:text-[#0b5b42]">
                {prevPkg.title}
              </span>
            </Link>

            <a
              href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Hi Typical Studio, I would like to ask about the ${pkg.title} package.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#14170f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0b5b42]"
            >
              Send brief for this package
            </a>

            <Link
              href={`/pricing/${nextPkg.slug}`}
              className="group inline-flex flex-col gap-1 sm:text-right transition-colors hover:text-[#0b5b42]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5f6258]">
                Next ({nextPkg.number}) &rarr;
              </span>
              <span className="text-base font-semibold text-[#14170f] group-hover:text-[#0b5b42]">
                {nextPkg.title}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function PricingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-[#111315]">
        <Suspense fallback={<PricingDetailFallback />}>
          <PricingDetailContent params={params} />
        </Suspense>
      </main>
      <Footer dark />
    </>
  );
}
