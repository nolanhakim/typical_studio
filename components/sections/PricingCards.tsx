'use client';

import { useState } from 'react';

/* ─────────────────────────────────────────────
   PricingPackages — kartu paket bergaya showcase:
   panel visual di atas, judul + deskripsi, harga & tombol detail.
   Visual berupa ilustrasi CSS; ganti dengan <img> kalau sudah ada mockup asli.
───────────────────────────────────────────── */

type Kind = 'starter' | 'growth' | 'website' | 'launch';

const packages: {
  number: string;
  kind: Kind;
  title: string;
  description: string;
  price: string;
  unit: string;
  features: string[];
}[] = [
    {
      number: '01',
      kind: 'starter',
      title: 'Social media starter',
      description: 'A steady monthly feed of posts and short videos, planned and reported.',
      price: 'Rp 6.500.000',
      unit: '/ month',
      features: [
        '12 posts per month',
        '4 short-form videos',
        'Community moderation',
        'Monthly performance report',
      ],
    },
    {
      // TODO: ganti harga & fitur dengan data asli
      number: '02',
      kind: 'growth',
      title: 'Social media growth',
      description: 'More content, more formats, and closer tracking for brands ready to scale.',
      price: 'Rp 9.500.000',
      unit: '/ month',
      features: ['20 posts per month', '8 short-form videos', 'Community moderation', 'Monthly performance report'],
    },
    {
      // Cakupan diambil dari FAQ: UI/UX, build, CMS, handover. TODO: cek harga.
      number: '03',
      kind: 'website',
      title: 'Website build',
      description: 'A landing page or company profile, designed, built, and handed over ready to edit.',
      price: 'Rp 12.000.000',
      unit: 'one-time',
      features: ['UI/UX design', 'Build and development', 'CMS setup', 'Launch handover'],
    },
    {
      // TODO: ganti harga dengan data asli
      number: '04',
      kind: 'launch',
      title: 'Launch package',
      description: 'Social media and website on one schedule with one team.',
      price: 'Rp 17.500.000',
      unit: 'starting price',
      features: ['Website build', 'Social media content', 'One schedule, one team', 'Launch handover'],
    },
  ];

/* ── Ilustrasi ── */

function Phone({ tiles, className = '' }: { tiles: string[]; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`aspect-[9/18.5] rounded-[1.6rem] border-[5px] border-[#2a2f2c] bg-[#14170f] p-2 shadow-[0_18px_30px_rgba(20,23,15,0.25)] ${className}`}
    >
      <div className="mx-auto mb-2 h-1.5 w-1/3 rounded-full bg-white/15" />
      <div className="mb-2 flex items-center gap-2">
        <span className="h-6 w-6 rounded-full bg-[#02e4a4]" />
        <span className="h-1.5 w-1/3 rounded-full bg-white/40" />
      </div>
      <div className="grid grid-cols-3 gap-1">
        {tiles.map((bg, i) => (
          <div key={i} className="aspect-[3/4] rounded-[3px]" style={{ background: bg }} />
        ))}
      </div>
    </div>
  );
}

function Browser({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-xl border border-black/10 bg-[#f7f6f0] shadow-[0_18px_30px_rgba(20,23,15,0.18)] ${className}`}
    >
      <div className="flex h-6 items-center gap-1.5 border-b border-black/10 bg-white px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-[#d8d5cd]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#d8d5cd]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#d8d5cd]" />
      </div>
      <div className="p-4">
        <div className="h-1.5 w-12 rounded-full bg-[#02e4a4]" />
        <div className="mt-3 h-4 w-4/5 rounded bg-[#14170f]" />
        <div className="mt-1.5 h-4 w-3/5 rounded bg-[#14170f]" />
        <div className="mt-3 h-1.5 w-2/3 rounded-full bg-[#5f6258]/40" />
        <div className="mt-4 h-6 w-20 rounded-full bg-[#02e4a4]" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-md bg-[#0b5b42]/20" />
          <div className="h-10 rounded-md bg-[#14170f]/10" />
          <div className="h-10 rounded-md bg-[#0b5b42]/20" />
        </div>
      </div>
    </div>
  );
}

const g = (a: string, b: string) => `linear-gradient(150deg,${a},${b})`;
const feedTiles = [g('#02e4a4', '#0b5b42'), '#2d3437', g('#eae6dc', '#8a8d84'), '#20262a', '#f3f0e8', g('#0b5b42', '#14170f'), '#2d3437', g('#02e4a4', '#0b5b42'), '#20262a'];

function Visual({ kind }: { kind: Kind }) {
  return (
    <div className="relative aspect-[4/4.4] overflow-hidden rounded-2xl bg-[#eceee0]">
      {kind === 'starter' && (
        <Phone tiles={feedTiles} className="absolute left-1/2 top-[9%] w-[52%] -translate-x-1/2 -rotate-6" />
      )}

      {kind === 'growth' && (
        <>
          <Phone tiles={feedTiles} className="absolute left-[10%] top-[10%] w-[46%] -rotate-6" />
          <div
            aria-hidden="true"
            className="absolute right-[8%] top-[22%] w-[46%] rotate-6 rounded-xl bg-[#14170f] p-3 shadow-[0_18px_30px_rgba(20,23,15,0.25)]"
          >
            <div className="h-1.5 w-1/2 rounded-full bg-white/40" />
            <div className="mt-4 flex h-24 items-end gap-1.5">
              {[28, 40, 36, 58, 72, 92].map((h, i) => (
                <span key={i} className="flex-1 rounded-sm bg-[#02e4a4]" style={{ height: `${h}%`, opacity: 0.45 + i * 0.11 }} />
              ))}
            </div>
          </div>
        </>
      )}

      {kind === 'website' && <Browser className="absolute inset-x-[9%] top-[16%] -rotate-2" />}

      {kind === 'launch' && (
        <>
          <Browser className="absolute left-[7%] top-[12%] w-[72%] -rotate-2" />
          <Phone
            tiles={feedTiles.slice(0, 6)}
            className="absolute bottom-[-6%] right-[9%] w-[36%] rotate-6"
          />
        </>
      )}
    </div>
  );
}

/* ── Kartu ── */

function PackageCard({ pkg }: { pkg: (typeof packages)[number] }) {
  const [open, setOpen] = useState(false);
  const panelId = `package-${pkg.number}-details`;

  return (
    <article className="flex flex-col">
      <Visual kind={pkg.kind} />

      <h3 className="mt-7 text-2xl font-black leading-tight tracking-[-0.02em] text-[#14170f]">
        {pkg.title}
      </h3>
      <p className="mt-3 mb-6 max-w-[34ch] text-[15px] leading-6 text-[#5f6258]">{pkg.description}</p>

      {open && (
        <ul id={panelId} className="mt-5 space-y-2.5">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[#14170f]">
              <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-[#02e4a4]" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#14170f]/15 pt-5">
        <div>
          <p className="text-sm text-[#5f6258]">Starts from</p>
          <p className="mt-0.5 text-lg font-bold leading-6 text-[#14170f]">
            {pkg.price}
            <span className="ml-1 text-xs font-medium text-[#5f6258]">{pkg.unit}</span>
          </p>
        </div>
        <button
          type="button"
          disabled
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={open ? panelId : undefined}
          className="inline-flex flex-none items-center gap-2 rounded-full border border-[#14170f]/30 px-5 py-2.5 text-sm font-medium text-[#14170f] transition-all duration-200 enabled:hover:border-[#14170f] enabled:hover:bg-[#14170f] enabled:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#02e4a4] enabled:active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100"
        >
          {open ? 'Hide details' : 'See details'}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className={`transition-transform duration-200 motion-reduce:transition-none ${open ? 'rotate-90' : ''}`}
          >
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  );
}

export function PricingCards() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {packages.map((pkg) => (
        <PackageCard key={pkg.number} pkg={pkg} />
      ))}
    </div>
  );
}