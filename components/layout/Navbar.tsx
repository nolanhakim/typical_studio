'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';

/* ─────────────────────────────────────────────
   Navbar — Wrapmax aesthetic
   Transparent on hero, solid dark on scroll.
───────────────────────────────────────────── */

const navLinks = [
    { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className="absolute inset-x-0 top-0 z-40"
      style={{
        height: 68,
        background: 'transparent',
      }}
    >
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-full w-full max-w-[1360px] items-center justify-between gap-6 px-6 sm:px-10 lg:px-16">
        {/* Logo */}
        <a href="/" className="shrink-0 text-white transition-opacity hover:opacity-75" aria-label="Typical Studio, back to top">
          <Logo size="md" />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={
                  'relative text-sm font-medium transition-colors duration-200 hover:text-[#02e4a4] focus-visible:text-[#02e4a4] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-[#02e4a4] after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 '
                  + (active ? 'text-[#02e4a4] after:scale-x-100' : 'text-white/70 after:scale-x-0')
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-white/15 transition-colors hover:border-white/30 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="h-[1.5px] w-5 bg-white transition-all duration-300"
              style={{ transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
            <span className="h-[1.5px] w-5 bg-white transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }} />
            <span className="h-[1.5px] w-5 bg-white transition-all duration-300"
              style={{ transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 overflow-y-auto px-6 pb-10 pt-6 md:hidden"
          style={{ top: 68, background: '#111315' }}
        >
          <nav aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={
                  'flex min-h-14 items-center border-b text-lg font-medium transition-colors hover:text-[#02e4a4]'
                  + (pathname === item.href ? ' text-[#02e4a4]' : ' text-white')
                }
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            <p><a href="mailto:halo@typical.studio" className="underline underline-offset-4 transition-colors hover:text-white">halo@typical.studio</a></p>
            <p>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 transition-colors hover:text-white">
                +62 812-3456-7890
              </a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
