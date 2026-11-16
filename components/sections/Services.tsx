'use client';

import React, { useState } from 'react';

/* ─────────────────────────────────────────────
   Services — white-bg section, Wrapmax aesthetic
   Split layout: left heading/intro 42%, right
   service cards 58%. Blueprint grid accent,
   big typography, numbered panels.
───────────────────────────────────────────── */

const disciplines = [
  {
    number: '01',
    title: 'Social media',
    accent: '#02e4a4',
    intro:
      'From content pillars to daily production. We keep feeds readable, engaging, and purposeful.',
    items: [
      {
        title: 'Content strategy & editorial calendar',
        desc: 'Monthly pillars, clear brand voice, and structured posting schedules.',
      },
      {
        title: 'Feed & carousel design',
        desc: 'Editorial layouts, sharp typography, and copy written to be read through.',
      },
      {
        title: 'Reels & TikTok production',
        desc: 'Hook writing, shooting, post-production, and kinetic typography.',
      },
      {
        title: 'Community moderation & monthly reporting',
        desc: 'Comment and DM management, plus actionable performance analytics.',
      },
    ],
  },
  {
    number: '02',
    title: 'Website',
    accent: '#f39c12',
    intro:
      'From information architecture to production code. We build sites made to be maintained, not just displayed.',
    items: [
      {
        title: 'Architecture & UI/UX',
        desc: 'Page flow, wireframing, and custom design systems in Figma.',
      },
      {
        title: 'Landing pages & company profiles',
        desc: 'High-converting responsive pages that load fast and update easily.',
      },
      {
        title: 'CMS integration',
        desc: 'Modular components, structured metadata, and seamless content workflows.',
      },
      {
        title: 'Launch & ongoing support',
        desc: 'Cross-browser QA, foundational analytics, and complete handover.',
      },
    ],
  },
];

export function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative z-20 -mt-6 sm:-mt-10 scroll-mt-24 overflow-hidden rounded-t-[2.5rem] sm:rounded-t-[3.5rem] rounded-b-[2.5rem] sm:rounded-b-[3.5rem] bg-white text-[#14170f] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
      style={{ paddingTop: 'clamp(5rem,9vw,8rem)', paddingBottom: 'clamp(5rem,9vw,8rem)' }}
    >
      {/* Subtle rim light accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#02e4a4]/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-[#02e4a4]/30 to-transparent"
      />
      {/* Blueprint grid — right 58%, fades at top & bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0"
        style={{
          width: '58%',
          backgroundImage: [
            'linear-gradient(rgba(20,23,15,0.055) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(20,23,15,0.055) 1px, transparent 1px)',
          ].join(','),
          backgroundSize: '76px 76px',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">

        {/* ── HEADER ROW: 42 / 58 split ── */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-0 mb-20">
          {/* Left — headline */}
          <div style={{ flex: '0 0 42%' }}>
            <p className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5f6258]">
              Services
            </p>
            <h2
              className="font-black leading-[0.9] tracking-[-0.025em] text-[#14170f]"
              style={{ fontSize: 'clamp(3rem,5.6vw,5.2rem)' }}
            >
              Two crafts<br />
              supporting<br />
              each other<span style={{ color: '#02e4a4' }}>.</span>
            </h2>
          </div>

          {/* Right — sub-copy */}
          <div style={{ flex: '0 0 58%', paddingLeft: 'clamp(2rem,4vw,5rem)' }}>
            <p className="text-base leading-7 text-[#5f6258] max-w-[46ch]">
              Content captures attention. Websites build conviction. We
              craft both within one cohesive visual language.
            </p>
          </div>
        </div>

        {/* ── SERVICE PANELS ── */}
        <div className="space-y-0">
          {disciplines.map((disc, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={disc.number}
                className="border-t"
                style={{ borderColor: 'rgba(20,23,15,0.12)' }}
              >
                {/* Panel header / toggle */}
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0 text-left group"
                  style={{
                    padding: 'clamp(1.5rem,3vw,2.25rem) 0',
                  }}
                  aria-expanded={isOpen}
                >
                  {/* Number + title — left 42% */}
                  <div
                    className="flex items-center gap-6"
                    style={{ flex: '0 0 42%' }}
                  >
                    <span
                      className="font-mono text-[11px] tracking-[0.18em] tabular-nums"
                      style={{ color: disc.accent, minWidth: '2rem' }}
                    >
                      {disc.number}
                    </span>
                    <h3
                      className="font-black tracking-[-0.02em] leading-none"
                      style={{ fontSize: 'clamp(1.8rem,3.2vw,3rem)' }}
                    >
                      {disc.title}
                    </h3>
                  </div>

                  {/* Intro — right 58% */}
                  <div
                    className="flex items-center justify-between"
                    style={{ flex: '0 0 58%', paddingLeft: 'clamp(2rem,4vw,5rem)' }}
                  >
                    <p className="text-sm leading-6 text-[#5f6258] max-w-[42ch] hidden lg:block">
                      {disc.intro}
                    </p>
                    {/* Expand icon */}
                    <span
                      className="ml-auto flex-shrink-0 w-9 h-9 rounded-full border grid place-items-center transition-all duration-300"
                      style={{
                        borderColor: isOpen ? disc.accent : 'rgba(20,23,15,0.2)',
                        background: isOpen ? disc.accent : 'transparent',
                        color: isOpen ? '#fff' : '#14170f',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </button>

                {/* Panel body — collapsible */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '800px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  {/* Mobile intro */}
                  <p className="text-sm leading-6 text-[#5f6258] mb-6 max-w-[46ch] lg:hidden">
                    {disc.intro}
                  </p>

                  <div className="flex flex-col lg:flex-row gap-0 pb-10">
                    {/* Left spacer on desktop */}
                    <div style={{ flex: '0 0 42%' }} className="hidden lg:block" />

                    {/* Item list — right 58% */}
                    <ul style={{ flex: '0 0 58%', paddingLeft: 'clamp(2rem,4vw,5rem)' }}>
                      {disc.items.map((item, i) => (
                        <li
                          key={item.title}
                          className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 py-4"
                          style={{
                            borderBottom: i < disc.items.length - 1
                              ? '1px solid rgba(20,23,15,0.1)'
                              : 'none',
                          }}
                        >
                          {/* Dot accent */}
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 hidden sm:block"
                            style={{ background: disc.accent }}
                          />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-semibold leading-6 text-[#14170f] block">
                              {item.title}
                            </span>
                            <span className="text-sm leading-6 text-[#5f6258] block">
                              {item.desc}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Final border */}
          <div
            className="border-t"
            style={{ borderColor: 'rgba(20,23,15,0.12)' }}
          />
        </div>

        {/* ── LAUNCH PACKAGE BANNER ── */}
        <div className="mt-20 flex flex-col lg:flex-row lg:items-stretch gap-0">
          {/* Left label */}
          <div
            className="flex items-start lg:items-end pb-6 lg:pb-0 lg:pr-10"
            style={{ flex: '0 0 42%' }}
          >
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5f6258]">
              Launch package
            </p>
          </div>

          {/* Right card */}
          <div
            className="relative overflow-hidden"
            style={{
              flex: '0 0 58%',
              background: '#02e4a4',
              borderRadius: '1.25rem',
              padding: 'clamp(1.75rem,3.5vw,2.75rem) clamp(1.75rem,3.5vw,3rem)',
            }}
          >
            {/* Faint grid on card */}
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
                Need content and<br />a website together?
              </p>
              <p className="mt-4 max-w-[46ch] text-[0.9rem] leading-7 text-[#14170f]/75">
                We routinely assemble complete launch packages: content, landing pages, and campaign creative on a unified schedule. One team, one visual voice.
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
                Discuss package
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
