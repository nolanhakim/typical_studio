'use client';

import React, { useState } from 'react';

/* ─────────────────────────────────────────────
   Wrapmax-faithful Hero
   Layout: dark full-bleed, 42/58 split,
   blueprint grid right half, pouches cascade,
   bottom-left rounded slab.
───────────────────────────────────────────── */

export function Hero() {
  const [hovered, setHovered] = useState<number | null>(null);

  const hover = (n: number) => () => setHovered(n);
  const leave = () => setHovered(null);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden text-white"
      style={{ minHeight: '100svh', background: '#111315' }}
    >
      {/* ── Blueprint grid: covers right 58%, fades at bottom ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-0"
        style={{
          width: '58%',
          backgroundImage: [
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          ].join(','),
          backgroundSize: '76px 76px',
          WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
        }}
      />

      {/* ── Wrapper: fills viewport, stacks vertically ── */}
      <div className="relative z-10 flex flex-col" style={{ minHeight: '100svh' }}>

        {/* ── SPLIT CONTENT AREA ── */}
        <div className="flex-1 flex flex-col lg:flex-row">

          {/* LEFT COLUMN — 42% */}
          <div
            className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 pt-32 pb-10 lg:pt-36 lg:pb-16"
            style={{ flex: '0 0 42%' }}
          >
            {/* Eyebrow */}
            <p
              className="mb-7 font-mono text-[10.5px] uppercase tracking-[0.2em] text-gray-400"
            >
              The future of digital branding
            </p>

            {/* Headline */}
            <h1
              className="font-black leading-[0.9] tracking-[-0.02em] text-white"
              style={{ fontSize: 'clamp(3.8rem, 6.8vw, 6.8rem)' }}
            >
              Brand
              <br />
              Digital
              <br />
              Experts
              <span style={{ color: '#02e4a4' }}>.</span>
            </h1>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/6281234567890"
                className="inline-flex items-center gap-2.5 rounded-full font-bold text-[#111315] bg-[#02e4a4] hover:bg-[#3df6b8] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  boxShadow: '0 6px 26px rgba(2,228,164,0.38)',
                  fontSize: '0.875rem',
                  padding: '0.85rem 1.75rem',
                }}
              >
                Get Started
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — 58%, pouches */}
          <div
            className="relative flex items-center justify-center select-none"
            style={{ flex: '0 0 58%', minHeight: '480px' }}
          >
            {/* Glow blobs */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute rounded-full"
              style={{
                width: 420, height: 420,
                background: 'radial-gradient(circle, rgba(243,156,18,0.14) 0%, transparent 70%)',
                filter: 'blur(60px)',
                transform: 'translate(-20px, -30px)',
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute rounded-full"
              style={{
                width: 300, height: 300,
                background: 'radial-gradient(circle, rgba(2,228,164,0.1) 0%, transparent 70%)',
                filter: 'blur(50px)',
                transform: 'translate(60px, 20px)',
              }}
            />

            {/* POUCH 1 — Back-left · Noir */}
            <Pouch
              n={1} hovered={hovered} onEnter={hover(1)} onLeave={leave}
              w={210} aspect={1 / 1.62}
              bg="linear-gradient(168deg,#202125 0%,#0d0e11 50%,#040507 100%)"
              shadow="-16px 22px 44px rgba(0,0,0,0.9)"
              border="rgba(255,255,255,0.09)"
              idle="translate3d(-80px,-14px,0) rotate(-13deg)"
              active="translate3d(-96px,-28px,0) rotate(-15deg) scale(1.06)"
              zIdle={10} zActive={30}
              textColor="white"
            >
              <PouchInner
                label="TYPCL NOIR" labelColor="#02e4a4"
                title={<>WEB DEV<br />ENGINE</>}
                titleClass="text-gray-200"
                detail="NEXT.JS 16 · TURBO"
                detailColor="rgba(156,163,175,1)"
                sealColor="rgba(255,255,255,0.14)"
                footerL="NET 100%" footerR="ORIGIN ID"
                footerColor="rgba(156,163,175,0.6)"
              >
                <div className="w-9 h-9 rounded-full border border-white/25 mx-auto my-2 grid place-items-center text-[9px]">
                  ● ●
                </div>
              </PouchInner>
            </Pouch>

            {/* POUCH 2 — Back-right · Lime */}
            <Pouch
              n={2} hovered={hovered} onEnter={hover(2)} onLeave={leave}
              w={210} aspect={1 / 1.62}
              bg="linear-gradient(168deg,#b0f03e 0%,#8ad41e 50%,#64a012 100%)"
              shadow="20px 22px 44px rgba(0,0,0,0.78)"
              border="rgba(255,255,255,0.28)"
              idle="translate3d(78px,-8px,0) rotate(14deg)"
              active="translate3d(94px,-22px,0) rotate(16deg) scale(1.06)"
              zIdle={12} zActive={30}
              textColor="black"
            >
              <PouchInner
                label="REELS 9:16" labelColor="rgba(0,0,0,0.65)"
                title={<>VIRAL<br />HOOKS</>}
                titleClass="text-black"
                detail="3-SEC RETENTION"
                detailColor="rgba(0,0,0,0.65)"
                sealColor="rgba(0,0,0,0.12)"
                footerL="4K 60FPS" footerR="HIGH ENGAGE"
                footerColor="rgba(0,0,0,0.5)"
              >
                <div className="w-9 h-9 rounded-full border-2 border-black mx-auto my-2 grid place-items-center font-black text-sm">
                  ∼
                </div>
              </PouchInner>
            </Pouch>

            {/* POUCH 3 — Mid-front · Crimson */}
            <Pouch
              n={3} hovered={hovered} onEnter={hover(3)} onLeave={leave}
              w={220} aspect={1 / 1.62}
              bg="linear-gradient(168deg,#c03423 0%,#961f13 50%,#6e1009 100%)"
              shadow="0 26px 52px rgba(0,0,0,0.9)"
              border="rgba(255,255,255,0.14)"
              idle="translate3d(4px,88px,0) rotate(-4deg)"
              active="translate3d(4px,72px,0) rotate(-2deg) scale(1.06)"
              zIdle={15} zActive={30}
              textColor="white"
            >
              <PouchInner
                label="IDENTITY" labelColor="rgba(255,255,255,0.6)"
                title={<>TYPCL<br />STUDIO</>}
                titleClass="text-white"
                detail={undefined}
                detailColor=""
                sealColor="rgba(255,255,255,0.14)"
                footerL="EST 2026" footerR="ALL-IN-ONE"
                footerColor="rgba(255,255,255,0.45)"
              >
                <span className="text-[9px] font-mono bg-black/35 px-2 py-0.5 rounded inline-block my-2">
                  JAKARTA
                </span>
              </PouchInner>
            </Pouch>

            {/* POUCH 4 — Hero center · Cream/Gold */}
            <Pouch
              n={4} hovered={hovered} onEnter={hover(4)} onLeave={leave}
              w={236} aspect={1 / 1.62}
              bg="linear-gradient(168deg,#f8f6ef 0%,#f2ede5 50%,#eac345 100%)"
              shadow="0 30px 60px rgba(0,0,0,0.94)"
              border="rgba(255,255,255,0.6)"
              idle="translate3d(6px,2px,0) rotate(3deg)"
              active="translate3d(6px,-12px,0) rotate(1deg) scale(1.09)"
              zIdle={25} zActive={35}
              textColor="#111"
            >
              {/* Barcode top bar */}
              <div className="flex items-center justify-between mb-3" style={{ paddingBottom: '0.5rem', borderBottom: '1px dashed rgba(0,0,0,0.14)' }}>
                <div className="flex gap-[2px]">
                  {[4, 2, 6, 2].map((w, i) => (
                    <span key={i} className="h-2 bg-black/60 rounded-sm" style={{ width: w }} />
                  ))}
                </div>
                <div className="w-3 h-1.5 bg-black/22 rounded-full" />
                <span className="text-[7px] font-mono text-black/50">BATCH 01</span>
              </div>

              {/* DOUBLE CLICK typography */}
              <div className="text-center">
                <h2
                  className="font-black uppercase leading-[0.84] tracking-tight text-[#15161a]"
                  style={{
                    fontFamily: 'var(--font-instrument), Georgia, serif',
                    fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)',
                    transform: 'scaleY(1.2)',
                    transformOrigin: 'top center',
                    display: 'block',
                  }}
                >
                  DOUBLE<br />CLICK
                </h2>

                {/* Smiley face */}
                <div
                  className="mx-auto my-3 rounded-full border-2 border-black grid place-items-center"
                  style={{ width: '4.25rem', height: '4.25rem' }}
                >
                  <div className="flex flex-col items-center gap-[5px]">
                    <div className="flex gap-[10px]">
                      <div className="w-[9px] h-[13px] bg-black rounded-full" />
                      <div className="w-[9px] h-[13px] bg-black rounded-full" />
                    </div>
                    <div className="w-[22px] h-[10px] border-b-2 border-black rounded-b-full" />
                  </div>
                </div>

                <p className="text-[7px] font-mono tracking-[0.14em] text-black/55 uppercase">
                  TYPICAL STUDIO ORIGINAL
                </p>
              </div>

              {/* Bottom spec strip */}
              <div
                className="absolute bottom-3 left-4 right-4 flex justify-between text-[6.5px] font-mono text-black/65"
                style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '0.4rem' }}
              >
                <div>
                  <span className="font-bold block">NET WT 150G</span>
                  <span className="text-black/40">CREATIVE FORMULA</span>
                </div>
                <div className="text-right">
                  <span className="font-bold block">HIGH CRAFT</span>
                  <span className="text-black/40">NO AI SLOP</span>
                </div>
              </div>
            </Pouch>

          </div>
        </div>

        {/* ── BOTTOM SLAB ── */}
        <div>
          <div
            className="relative"
            style={{
              width: 'min(52%, 680px)',
              background: '#181d22',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              borderRight: '1px solid rgba(255,255,255,0.07)',
              borderTopRightRadius: '3rem',
              padding: 'clamp(1.75rem, 3vw, 2.75rem) clamp(1.75rem, 3.5vw, 3.5rem)',
            }}
          >
            <p className="text-[0.9rem] leading-relaxed text-gray-300 max-w-xs mb-5">
              Comprehensive creative solutions to strengthen brand identity, command social media attention, and convert website visitors.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {/* Avatar stack */}
              <div className="flex items-center">
                <div className="flex" style={{ gap: 0 }}>
                  {[
                    { i: 'RS', c: '#f39c12' },
                    { i: 'AM', c: '#02e4a4' },
                    { i: 'KT', c: '#3df6b8' },
                  ].map(({ i, c }, idx) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full grid place-items-center font-bold text-[9px] text-black"
                      style={{
                        background: c,
                        border: '2px solid #181d22',
                        marginLeft: idx === 0 ? 0 : '-10px',
                      }}
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div
                  className="ml-3 rounded-full text-[11px] font-mono font-bold text-white"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '3px 12px',
                  }}
                >
                  20k+
                </div>
              </div>

              {/* Pulse dot + label */}
              <div className="flex items-center gap-2 text-[11px] text-gray-400">
                <span
                  className="animate-pulse rounded-full flex-shrink-0"
                  style={{ width: 7, height: 7, background: '#f39c12' }}
                />
                Recommended by people.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Sub-components ─────────────────────────── */

interface PouchProps {
  n: number;
  hovered: number | null;
  onEnter: () => void;
  onLeave: () => void;
  w: number;
  aspect: number;
  bg: string;
  shadow: string;
  border: string;
  idle: string;
  active: string;
  zIdle: number;
  zActive: number;
  textColor: string;
  children: React.ReactNode;
}

function Pouch({
  n, hovered, onEnter, onLeave,
  w, aspect, bg, shadow, border,
  idle, active, zIdle, zActive,
  textColor, children,
}: PouchProps) {
  const isActive = hovered === n;
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="absolute cursor-pointer"
      style={{
        width: w,
        height: Math.round(w / aspect),
        background: bg,
        boxShadow: shadow,
        border: `1px solid ${border}`,
        borderRadius: '1rem',
        padding: '0.75rem',
        color: textColor,
        transform: isActive ? active : idle,
        zIndex: isActive ? zActive : zIdle,
        transition: 'transform 480ms cubic-bezier(0.22,0.9,0.36,1), box-shadow 480ms ease',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}

interface PouchInnerProps {
  label: string;
  labelColor: string;
  title: React.ReactNode;
  titleClass: string;
  detail?: string;
  detailColor: string;
  sealColor: string;
  footerL: string;
  footerR: string;
  footerColor: string;
  children?: React.ReactNode;
}

function PouchInner({
  label, labelColor, title, titleClass,
  detail, detailColor, sealColor,
  footerL, footerR, footerColor, children,
}: PouchInnerProps) {
  return (
    <>
      {/* Heat-seal top */}
      <div
        className="mb-3 flex items-center justify-between"
        style={{ borderBottom: `1px dashed ${sealColor}`, paddingBottom: '0.4rem' }}
      >
        <span className="text-[6.5px] font-mono tracking-widest" style={{ color: sealColor }}>SEALED</span>
        <div className="w-2 h-1 rounded-full" style={{ background: sealColor }} />
      </div>

      {/* Content */}
      <div className="text-center space-y-1">
        <span className="text-[7px] font-mono tracking-[0.22em] block" style={{ color: labelColor }}>
          {label}
        </span>
        <p className={`text-[1.25rem] font-black tracking-tighter uppercase leading-none font-serif ${titleClass}`}>
          {title}
        </p>
        {children}
        {detail && (
          <p className="text-[7px] font-mono tracking-wider" style={{ color: detailColor }}>
            {detail}
          </p>
        )}
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-3 left-3 right-3 flex justify-between text-[6.5px] font-mono"
        style={{ borderTop: `1px solid ${sealColor}`, paddingTop: '0.35rem', color: footerColor }}
      >
        <span>{footerL}</span>
        <span>{footerR}</span>
      </div>
    </>
  );
}
