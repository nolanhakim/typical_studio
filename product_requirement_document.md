# Product Requirement Document (PRD)
**Project Name:** Agency Company Profile Website  
**Version:** 1.0.0  
**Target Delivery:** Q1  
**Status:** Ready for Review  

---

## 1. Executive Summary & Objective

### 1.1 Overview
Pembuatan website *company profile* resmi untuk agensi media/kreatif yang berfokus pada dua pilar layanan utama:
1. **Social Media Management & Production** (Feed Visual, Carousels, Short-form Videos/Reels/TikTok, Community Handling).
2. **Web Design & Development** (Landing Pages, Corporate Websites, Custom UI/UX, Web Apps).

### 1.2 Business Objectives
* **Lead Generation:** Mengonversi pengunjung website menjadi prospek bisnis (*qualified inbound leads*) via WhatsApp dan formulir penawaran.
* **Credibility & Trust:** Menampilkan standar estetika visual tinggi, kecakapan teknis, dan bukti performa (*data-driven social proof*).
* **Single Source of Truth:** Mengonsolidasikan portofolio lintas media (grafis feed, video reels interaktif, dan *live demo* web).

### 1.3 Target Audience / Persona
* **Primary:** Pemilik UMKM, *brand owners*, serta Manajer Pemasaran (Marketing Managers / CMO) yang membutuhkan tim eksternal untuk mengelola branding digital.
* **Secondary:** Startup founders yang mencari paket kombinasi peluncuran produk (website landing page + kampanye media sosial).

---

## 2. Success Metrics (KPIs)

* **Conversion Rate (CR):** $\ge 3.5\%$ dari total pengunjung unik melakukan klik pada CTA WhatsApp atau mengirim formulir kontak.
* **Engagement / Time-on-Site:** Rata-rata durasi kunjungan $\ge 2$ menit dengan bounce rate $< 45\%$.
* **Performance Benchmark:**
  * Google Core Web Vitals: LCP $\le 2.0\text{s}$, FID/INP $\le 200\text{ms}$, CLS $\le 0.1$.
  * Skor Google Lighthouse $\ge 90$ di aspek Performance, Accessibility, dan SEO pada perangkat mobile.

---

## 3. Information Architecture (IA) & Site Map

```
[ Homepage / One-Page Core ]
├── Header (Navigation Bar, CTA "Konsultasi")
├── Hero Section (Value Proposition, Showreel Video)
├── Client Social Proof (Logo Marquee)
├── Services Breakdown
│   ├── Social Media Management (Feeds, Reels, Copywriting)
│   └── Web Development (Landing Pages, Corporate Sites)
├── Interactive Portfolio Showcase
│   ├── Tab: Social Media Feeds (Grid Simulation)
│   ├── Tab: Short-Form Videos (Reels / TikTok Embed Player)
│   └── Tab: Web Development (Device Mockup + Live Links)
├── Methodology / Work Process
├── Client Case Studies & Testimonials
├── Inquiry / Contact Section
└── Footer
```

---

## 4. Functional Specifications (Section by Section)

### 4.1 Header & Navigation
* **Sticky/Floating Header:** Navigasi tetap terlihat saat pengguna menggulir ke bawah (*smooth scroll* ke anchor ID).
* **Menu Items:** Layanan, Portofolio, Cara Kerja, Studi Kasus, Kontak.
* **Primary CTA Button:** Tombol *"Mulai Proyek"* yang langsung mengarahkan ke form atau WhatsApp.

### 4.2 Hero Section
* **H1 Headline:** Value proposition yang jelas (maks. 10–12 kata).
* **Sub-headline:** Penjelasan ringkas target capaian klien.
* **Visual Asset:** Video loop showreel (auto-play muted, format WebM/MP4 teroptimasi) dengan opsi *unmute* atau poster mockup dinamis.

### 4.3 Services Section
* **Kategori 1: Social Media Growth & Creative**
  * Desain Grid & Carousel Edukatif.
  * Produksi Video Pendek (Reels, TikTok, Shorts).
  * Strategi Konten, Copywriting, dan Moderasi Akun.
* **Kategori 2: Web Design & Development**
  * Desain UI/UX Responsif (Figma to Code).
  * Pembuatan Landing Page & Website Profil Perusahaan.
  * Optimasi Kecepatan, Teknis SEO, dan Integrasi CMS.

### 4.4 Interactive Portfolio Section
* **Filter Tabs:** Tab navigasi instan tanpa reload halaman: `Semua`, `Social Media`, `Video/Reels`, `Website`.
* **Komponen Display Feed:** Mockup layar smartphone interaktif dengan grid 3x3 yang memperlihatkan konsistensi palet warna dan tipografi.
* **Komponen Display Reels:** Pemutar video kustom berorientasi vertikal (9:16) dengan tombol putar/jeda dan status audio otomatis mati saat digulir.
* **Komponen Display Website:** Kartu preview dengan bingkai laptop/desktop, tag teknologi yang digunakan, serta tombol *"Kunjungi Situs"*.

### 4.5 Case Studies & Social Proof
* **Data-driven Card:** Menampilkan metrik nyata:
  * Pertumbuhan metrik (misal: *+240% Organic Reach* atau *1.2s Load Speed*).
  * Kutipan testimoni klien beserta nama, foto, dan nama brand.
* **Client Logo Marquee:** Tampilan carousel logo brand rekanan dengan animasi *infinite scroll*.

### 4.6 Contact & Lead Capture
* **Formulir Kontak Terstruktur:**
  * Kolom Wajib: Nama Lengkap, Nama Brand/Perusahaan, Alamat Email, Nomor WhatsApp.
  * Kolom Pilihan Layanan (Multi-select checkbox): Social Media Management, Reels/Video Production, Website Development, atau Solusi Lengkap.
  * Kolom Estimasi Budget (Dropdown).
  * Kolom Pesan/Kebutuhan Proyek.
* **WhatsApp Floating Button:** Widget mengambang di pojok kanan bawah dengan teks pemicu otomatis yang sudah terformat:  
  *"Halo Tim [Nama Agensi], saya ingin konsultasi mengenai layanan media sosial/website untuk brand saya."*

---

## 5. Non-Functional & Technical Requirements

| Kategori | Spesifikasi & Standar |
| :--- | :--- |
| **Responsiveness** | Mobile-First Design. Layout teroptimasi sempurna untuk resolusi Smartphone (360px–430px), Tablet (768px–1024px), dan Desktop (>1280px). |
| **Performance** | Asset kompresi tingkat lanjut (format WebP/AVIF untuk gambar, WebM untuk video). Lazy loading diterapkan untuk seluruh media di bawah layar pertama (*below-the-fold*). |
| **Security** | Enkripsi SSL/TLS (HTTPS wajib), perlindungan formulir dengan proteksi anti-spam (Google Turnstile/reCAPTCHA v3 atau Honeypot field). |
| **SEO Foundations** | Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`), OpenGraph meta tags untuk pratinjau tautan media sosial yang menarik, integrasi sitemap.xml dan robots.txt. |
| **Analytics & Tracking**| Google Analytics 4 (GA4), Meta Pixel (untuk tracking calon klien yang mengunjungi portofolio), dan Google Tag Manager (GTM) event untuk klik tombol WhatsApp/Submit Form. |

---

## 6. User Flow

```
[Pengunjung Masuk via Ads / Organic]
                 │
                 ▼
         [Hero Section]
                 │
         ┌───────┴────────┐
         ▼                ▼
   [Eksplorasi]     [Direct CTA]
 [Layanan/Portofolio]     │
         │                │
         ▼                │
   [Studi Kasus]          │
         │                │
         └───────┬────────┘
                 ▼
      [Halaman Konversi]
    (Formulir / WhatsApp)
                 │
                 ▼
[Lead Masuk ke Tim Penjualan Agensi]
```

---

## 7. Delivery Roadmap & Milestones

* **Sprint 1 — Discovery & Copywriting:** Perumusan struktur wireframe, penyusunan *copywriting* persuasif, serta kurasi aset media/video portofolio.
* **Sprint 2 — UI/UX Design:** Desain visual fidelitas tinggi (*high-fidelity*) di Figma untuk versi mobile dan desktop.
* **Sprint 3 — Development & Integration:** Pengodean antarmuka, pembuatan komponen filter portofolio, dan penyusunan integrasi WhatsApp/Form API.
* **Sprint 4 — Quality Assurance & Optimization:** Uji responsivitas lintas perangkat, optimasi Core Web Vitals, pengujian event analitik, dan peluncuran (*go-live*).