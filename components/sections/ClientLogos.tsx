'use client';

import React from 'react';

/* ─────────────────────────────────────────────
   ClientLogos — Social proof logo marquee
   Dark #111315 aesthetic, fade edge masks,
   monochrome SVG marks for partner brands.
───────────────────────────────────────────── */

interface Client {
  name: string;
  category: string;
  logo: React.ReactNode;
}

const clients: Client[] = [
  {
    name: 'Permitly',
    category: 'Venture Backed',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 120 28" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2.5" />
        <path d="M7 14L11 18L17 10" stroke="#02e4a4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="30" y="20" fill="currentColor" fontFamily="var(--font-sans), sans-serif" fontWeight="800" fontSize="14" letterSpacing="-0.02em">
          PERMITLY
        </text>
      </svg>
    ),
  },
  {
    name: 'Meshline AI',
    category: 'AI Platform',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 130 28" fill="none" aria-hidden="true">
        <circle cx="6" cy="14" r="3.5" fill="#02e4a4" />
        <circle cx="18" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="21" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M8.5 12.5L15.5 8.5M8.5 15.5L15.5 19.5" stroke="currentColor" strokeWidth="1.5" />
        <text x="28" y="19" fill="currentColor" fontFamily="var(--font-sans), sans-serif" fontWeight="700" fontSize="13" letterSpacing="0.08em">
          MESHLINE
        </text>
      </svg>
    ),
  },
  {
    name: 'Lathe & Co',
    category: 'Manufacturing',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 135 28" fill="none" aria-hidden="true">
        <path d="M4 14L10 8L16 14L10 20Z" stroke="#02e4a4" strokeWidth="1.75" />
        <circle cx="10" cy="14" r="2" fill="currentColor" />
        <text x="24" y="20" fill="currentColor" fontFamily="var(--font-serif), serif" fontStyle="italic" fontSize="16" letterSpacing="0.02em">
          Lathe &amp; Co.
        </text>
      </svg>
    ),
  },
  {
    name: 'Grasp',
    category: 'Robotics',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 105 28" fill="none" aria-hidden="true">
        <path d="M4 6H14V10H8V18H14V22H4V6Z" fill="currentColor" />
        <rect x="17" y="10" width="4" height="8" rx="1" fill="#02e4a4" />
        <text x="28" y="20" fill="currentColor" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="14" letterSpacing="0.05em">
          GRASP
        </text>
      </svg>
    ),
  },
  {
    name: 'Halo Audio',
    category: 'Hardware',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 130 28" fill="none" aria-hidden="true">
        <circle cx="12" cy="14" r="9" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="14" r="4.5" stroke="#02e4a4" strokeWidth="2" />
        <text x="28" y="19" fill="currentColor" fontFamily="var(--font-sans), sans-serif" fontWeight="700" fontSize="13" letterSpacing="0.04em">
          HALO AUDIO
        </text>
      </svg>
    ),
  },
  {
    name: 'Fieldhouse',
    category: 'Agritech',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 135 28" fill="none" aria-hidden="true">
        <path d="M4 20V12L12 6L20 12V20H4Z" stroke="currentColor" strokeWidth="2" />
        <path d="M12 12V20" stroke="#02e4a4" strokeWidth="2" />
        <text x="28" y="19" fill="currentColor" fontFamily="var(--font-sans), sans-serif" fontWeight="700" fontSize="13" letterSpacing="-0.01em">
          FIELDHOUSE
        </text>
      </svg>
    ),
  },
  {
    name: 'Vela Clinic',
    category: 'Healthcare',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 115 28" fill="none" aria-hidden="true">
        <circle cx="10" cy="14" r="8" stroke="currentColor" strokeWidth="1.75" />
        <path d="M10 9V19M5 14H15" stroke="#02e4a4" strokeWidth="2" strokeLinecap="round" />
        <text x="26" y="20" fill="currentColor" fontFamily="var(--font-sans), sans-serif" fontWeight="700" fontSize="14" letterSpacing="0.02em">
          VELA
        </text>
      </svg>
    ),
  },
  {
    name: 'Patronage',
    category: 'Fintech',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 135 28" fill="none" aria-hidden="true">
        <path d="M4 22V6L12 14L20 6V22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="2" fill="#02e4a4" />
        <text x="28" y="19" fill="currentColor" fontFamily="var(--font-sans), sans-serif" fontWeight="800" fontSize="13" letterSpacing="0.04em">
          PATRONAGE
        </text>
      </svg>
    ),
  },
];

export function ClientLogos() {
  const repeated = [...clients, ...clients];

  return (
    <section
      aria-label="Trusted client partners"
      className="relative z-10 overflow-hidden text-white"
      style={{
        background: '#111315',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: 'clamp(2rem, 3.5vw, 3rem)',
        paddingBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
      }}
    >
      <style>{`
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-logos {
          display: flex;
          width: max-content;
          animation: scrollLogos 34s linear infinite;
        }
        .animate-scroll-logos:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Fade masks left & right for seamless infinite flow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-44 bg-gradient-to-r from-[#111315] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-44 bg-gradient-to-l from-[#111315] to-transparent"
      />

      {/* Ticker track */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-scroll-logos items-center gap-12 sm:gap-16 pr-12 sm:pr-16">
          {repeated.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center gap-3 text-white/40 transition-all duration-200 hover:text-white hover:scale-105 cursor-pointer"
              title={`${client.name} — ${client.category}`}
            >
              <div className="shrink-0">{client.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
