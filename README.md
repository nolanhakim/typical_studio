# Typical Studio

Website company profile untuk **Typical Studio** — studio digital branding, social media, dan web berbasis di Surabaya. Satu tim untuk visual identity, konten social media, dan website high-performance dari brief sampai launch.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4
- [GSAP](https://gsap.com) untuk animasi scroll & interaksi

## Menjalankan Project

```bash
npm install
npm run dev      # development → http://localhost:3000
npm run build    # production build
npm run start    # jalankan hasil build
npm run lint     # eslint
```

## Struktur

```
app/                # Halaman & layout (App Router)
  layout.tsx        # Root layout, font (Archivo + Instrument Serif), metadata & favicon
  page.tsx          # Homepage: Hero, ClientLogos, Services, Portfolio, Testimonials
  about/            # Halaman About
  services/         # Halaman Services
  portfolio/        # Halaman Portfolio (grid 3 × 3 contoh proyek)
  pricing/          # Halaman Pricing
  robots.ts         # robots.txt
  sitemap.ts        # sitemap.xml
components/
  layout/           # Navbar, Footer
  sections/         # Hero, Services, Portfolio, ClientLogos, Testimonials, PricingPackages
  ui/               # Logo & komponen UI kecil
public/             # Aset statis
  logo.png          # Wordmark TYPCL (transparan) — dipakai Navbar & Footer
  logo-icon.png     # Ikon persegi (favicon / apple-touch-icon)
```

## Brand

- Warna utama: mint `#02e4a4`, ink gelap `#111315`, paper `#f3f0e8`
- Logo: wordmark **TYPCL** (varian transparan untuk navbar/footer, varian kotak gelap untuk favicon)
- Favicon & apple-touch-icon diatur lewat `metadata.icons` di `app/layout.tsx`

## Deploy

Deployable ke Vercel atau host Node.js apa pun:

```bash
npm run build && npm run start
```
