'use client';

import { useEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────────────
   Portfolio — carousel dengan kartu aktif di tengah,
   kartu sebelah kiri/kanan mengintip, tombol di bawah.
───────────────────────────────────────────── */

const samples = [
  {
    number: '01',
    category: 'Social media',
    title: 'A feed with a steady rhythm',
    description: 'Illustrative feed layout for daily posts and carousels.',
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
    description: 'Illustrative phone layout for Reels and TikTok.',
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
    description: 'Illustrative browser view for a company profile.',
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
    description: 'Illustrative swipe-through layout for a short campaign.',
    preview: (
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center gap-3 p-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-40 flex-1 rounded-xl border border-white/10 p-4"
            style={{
              background: i === 1 ? 'linear-gradient(150deg,#02e4a4,#0b5b42)' : '#20262a',
              transform: `translateY(${i === 1 ? '-12px' : '8px'})`,
            }}
          >
            <div className={`h-2 w-8 rounded-full ${i === 1 ? 'bg-black/30' : 'bg-white/40'}`} />
            <div className={`mt-3 h-3 w-3/4 rounded ${i === 1 ? 'bg-black/60' : 'bg-white/70'}`} />
            <div className={`mt-2 h-2 w-1/2 rounded-full ${i === 1 ? 'bg-black/30' : 'bg-white/30'}`} />
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '05',
    category: 'Visual identity',
    title: 'A system that stays consistent',
    description: 'Illustrative type, colour, and mark sheet.',
    preview: (
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-[1fr_1.2fr] gap-4 p-6">
        <div className="rounded-xl border border-white/10 bg-[#20262a] p-5">
          <div className="font-serif text-5xl italic text-paper">Aa</div>
          <div className="mt-4 h-2 w-2/3 rounded-full bg-white/30" />
          <div className="mt-2 h-2 w-1/2 rounded-full bg-white/20" />
        </div>
        <div className="grid grid-rows-[1fr_auto] gap-4">
          <div className="rounded-xl border border-white/10 bg-[#f3f0e8] p-5">
            <div className="flex gap-2">
              <span className="h-10 flex-1 rounded-lg" style={{ background: '#02e4a4' }} />
              <span className="h-10 flex-1 rounded-lg" style={{ background: '#0b5b42' }} />
              <span className="h-10 flex-1 rounded-lg" style={{ background: '#14170f' }} />
              <span className="h-10 flex-1 rounded-lg" style={{ background: '#eae6dc' }} />
            </div>
            <div className="mt-4 h-2 w-4/5 rounded-full bg-[#14170f]/25" />
          </div>
          <div className="rounded-xl border border-white/10 bg-[#1b2023] p-4">
            <div className="h-6 w-24 rounded-full bg-white/15" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '06',
    category: 'Landing page',
    title: 'One clear action, nothing competing',
    description: 'Illustrative landing page with a single call to action.',
    preview: (
      <div aria-hidden="true" className="absolute inset-5 flex flex-col overflow-hidden rounded-xl border border-black/10 bg-[#eae6dc]">
        <div className="flex h-7 flex-none items-center justify-between border-b border-black/10 bg-white px-3">
          <span className="h-2 w-16 rounded-full bg-[#14170f]/20" />
          <span className="h-2 w-8 rounded-full bg-[#02e4a4]" />
        </div>
        <div className="grid flex-1 grid-cols-[1.2fr_1fr]">
          <div className="p-6">
            <div className="h-2 w-12 rounded-full bg-[#0b5b42]/40" />
            <div className="mt-3 h-5 w-11/12 rounded bg-[#14170f]" />
            <div className="mt-2 h-5 w-2/3 rounded bg-[#14170f]" />
            <div className="mt-4 h-2 w-3/4 rounded-full bg-[#5f6258]/40" />
            <div className="mt-5 h-7 w-24 rounded-full bg-[#02e4a4]" />
          </div>
          <div className="m-4 rounded-lg" style={{ background: 'linear-gradient(150deg,#0b5b42,#14170f)' }} />
        </div>
      </div>
    ),
  },
];

/* Lebar satu kartu & jarak antar kartu. Pakai vw supaya posisi tengah
   dan geseran track dihitung dengan satuan yang sama. */
const CARD_W = 'min(72vw, 720px)';
const GAP = 'clamp(12px, 2.4vw, 28px)';

const arrowBtn =
  'grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 ' +
  'transition-all duration-200 hover:border-[#02e4a4] hover:bg-[#02e4a4]/10 hover:text-[#02e4a4] ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#02e4a4] ' +
  'active:scale-95 disabled:pointer-events-none disabled:opacity-30';

export function Portfolio() {
  const n = samples.length;
  // Daftar digandakan 3x; posisi awal di set tengah supaya kiri & kanan selalu ada kartu.
  const loopSamples = [...samples, ...samples, ...samples];
  const [index, setIndex] = useState(n);
  const [animate, setAnimate] = useState(true);
  const touchStartX = useRef(0);

  const active = ((index % n) + n) % n;
  const current = samples[active];

  const move = (delta: number) => setIndex((i) => i + delta);

  // Setelah geser selesai di set cadangan, lompat tanpa animasi ke kartu yang sama di set tengah.
  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (index < n || index >= 2 * n) {
      setAnimate(false);
      setIndex(active + n);
    }
  };

  // Nyalakan lagi animasi setelah lompatan senyap selesai dirender.
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  return (
    <section
      id="portfolio"
      className="relative z-0 scroll-mt-24 overflow-hidden bg-black text-paper"
      style={{
        paddingTop: 'clamp(5rem,9vw,8rem)',
        paddingBottom: 'clamp(5rem,9vw,8rem)',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#02e4a4]/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-[58%]"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          ].join(','),
          backgroundSize: '76px 76px',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-6 select-none font-serif italic leading-none text-white/[0.025]"
        style={{ fontSize: 'clamp(12rem,28vw,26rem)' }}
      >
        Work
      </div>

      {/* Header */}
      <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end">
          <div style={{ flex: '0 0 58%' }}>
            <p className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#8a8d84]">
              Portfolio
            </p>
            <h2
              className="font-black leading-[0.9] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(3rem,5.6vw,5.2rem)' }}
            >
              The work<br />
              we make<span className="text-[#02e4a4]">.</span>
            </h2>
          </div>
          <div className="lg:pl-[clamp(2rem,4vw,5rem)]" style={{ flex: '0 0 42%' }}>
            <p className="max-w-[44ch] text-base leading-7 text-[#8a8d84]">
              Illustrative samples standing in for live projects. Client names,
              links, and results will replace these when the real work is ready.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel — full width, kartu aktif di tengah, tetangga mengintip */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Portfolio samples"
        tabIndex={0}
        className="relative overflow-hidden py-6 outline-none focus-visible:ring-1 focus-visible:ring-[#02e4a4]/60"
        style={{ touchAction: 'pan-y' }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') move(1);
          if (event.key === 'ArrowLeft') move(-1);
        }}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          const delta = event.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(delta) > 40) move(delta < 0 ? 1 : -1);
        }}
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${animate
              ? 'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none'
              : ''
            }`}
          style={{
            gap: GAP,
            // margin-left 50% = titik tengah container; dikurangi setengah kartu
            marginLeft: `calc(50% - (${CARD_W}) / 2)`,
            transform: `translateX(calc(-1 * ${index} * (${CARD_W} + ${GAP})))`,
          }}
        >
          {loopSamples.map((sample, i) => {
            const isActive = i === index;
            const isClone = i < n || i >= 2 * n;
            return (
              <article
                key={i}
                aria-roledescription="slide"
                aria-hidden={isClone ? 'true' : undefined}
                aria-label={`${(i % n) + 1} of ${n}: ${sample.title}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => !isActive && setIndex(i)}
                className={`relative flex-none aspect-[7/5] overflow-hidden rounded-[28px] border border-white/10 bg-[#1a1e20] transition-all duration-500 motion-reduce:transition-none ${isActive
                    ? 'scale-100 opacity-100'
                    : 'scale-[0.92] cursor-pointer opacity-40 hover:opacity-60'
                  }`}
                style={{ width: CARD_W }}
              >
                {sample.preview}
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                  Sample
                </span>
              </article>
            );
          })}
        </div>

        {/* Fade tepi kiri/kanan agar kartu yang mengintip terasa menyatu */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[8vw] bg-gradient-to-r from-black to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-[8vw] bg-gradient-to-l from-black to-transparent"
        />
      </div>

      {/* Keterangan + kontrol, di tengah */}
      <div className="relative mx-auto mt-8 flex w-full max-w-[640px] flex-col items-center px-6 text-center">
        <div aria-live="polite" className="min-h-[7.5rem]">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#02e4a4]">
            {current.category}
          </p>
          <h3 className="mt-3 font-serif text-3xl italic leading-tight text-paper sm:text-4xl">
            {current.title}
          </h3>
          <p className="mx-auto mt-3 max-w-[44ch] text-sm leading-6 text-[#8a8d84]">
            {current.description}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous project"
            className={arrowBtn}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 2.5 4.5 7 9 11.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="w-14 font-mono text-[10.5px] tabular-nums text-[#8a8d84]">
            {String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next project"
            className={arrowBtn}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M5 2.5 9.5 7 5 11.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}