'use client';

import { useState } from 'react';

/* ─────────────────────────────────────────────
   PricingPackages — package selector.
   Numbered rows on the left pick the package;
   its price and contents show on the right.
   42/58 split, same language as the Services
   panels. Example figures: replace with real
   prices before publishing.
───────────────────────────────────────────── */

const packages = [
  {
    number: '01',
    title: 'Social media starter',
    price: 'Rp 6.500.000',
    unit: '/ month',
    items: [
      '12 posts per month',
      '4 short-form videos',
      'Community moderation',
      'Monthly performance report',
    ],
  },
  {
    number: '02',
    title: 'Social media growth',
    price: 'Rp 11.500.000',
    unit: '/ month',
    items: [
      '20 posts per month',
      '8 short-form videos',
      'Content pillars and editorial calendar',
      'Weekly community management',
    ],
  },
  {
    number: '03',
    title: 'Website build',
    price: 'Rp 15.000.000',
    unit: '/ project, from',
    items: [
      'Landing page or company profile',
      'UI/UX design in Figma',
      'CMS integration',
      'Launch support and handover',
    ],
  },
  {
    number: '04',
    title: 'Launch package',
    price: 'Quoted',
    unit: 'per brief',
    items: [
      'Social media and website on one schedule',
      'One team, one visual voice',
      'Priority timeline for launch dates',
    ],
  },
];

export function PricingPackages() {
  const [active, setActive] = useState(0);
  const p = packages[active];

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">

      {/* Selector — left 42% */}
      <div style={{ flex: '0 0 42%' }} role="group" aria-label="Choose a package">
        {packages.map((pkg, i) => {
          const selected = i === active;
          return (
            <button
              key={pkg.number}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={selected}
              className="flex w-full cursor-pointer items-center gap-6 text-left transition-colors duration-200"
              style={{
                borderTop: '1px solid rgba(20,23,15,0.12)',
                borderBottom:
                  i === packages.length - 1 ? '1px solid rgba(20,23,15,0.12)' : 'none',
                padding: 'clamp(1.25rem,2.5vw,1.75rem) 0',
              }}
            >
              <span
                className="font-mono text-[11px] tracking-[0.18em] tabular-nums transition-colors duration-200"
                style={{ color: selected ? '#0b5b42' : '#5f6258', minWidth: '2rem' }}
              >
                {pkg.number}
              </span>
              <span
                className="font-black tracking-[-0.02em] leading-none transition-colors duration-200"
                style={{
                  fontSize: 'clamp(1.25rem,2vw,1.8rem)',
                  color: selected ? '#14170f' : 'rgba(20,23,15,0.6)',
                }}
              >
                {pkg.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Panel — right 58% */}
      <div
        key={active}
        className="pkg-panel lg:pl-[clamp(2rem,4vw,5rem)]"
        style={{ flex: '0 0 58%' }}
        aria-live="polite"
      >
        <p className="flex items-baseline gap-3">
          <span
            className="font-black tracking-[-0.02em]"
            style={{ fontSize: 'clamp(1.5rem,2.6vw,2.4rem)' }}
          >
            {p.price}
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-[#5f6258]">
            {p.unit}
          </span>
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {p.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#5f6258]">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#02e4a4]"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes pkg-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        .pkg-panel{animation:pkg-in .3s cubic-bezier(.2,.8,.2,1) both}
        @media (prefers-reduced-motion: reduce){.pkg-panel{animation:none}}
      `}</style>
    </div>
  );
}
