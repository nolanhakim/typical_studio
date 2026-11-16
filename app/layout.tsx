import type { Metadata } from 'next';
import { Archivo, Instrument_Serif } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const instrument = Instrument_Serif({
  variable: '--font-instrument',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://typical.studio'),
  title: 'Typical Studio: Digital branding, social media & web studio',
  description:
    'Social media and web studio based in Surabaya. One team delivering visual identity, social media content, and high-performance websites from brief to launch.',
  keywords: [
    'Typical Studio',
    'TYPCL',
    'digital agency',
    'social media agency',
    'Reels production',
    'website development',
    'UI UX design',
  ],
  authors: [{ name: 'Typical Studio' }],
  openGraph: {
    title: 'Typical Studio: Digital branding, social media & web studio',
    description:
      'One team for visual identity, social media content, and websites. Based in Surabaya.',
    url: 'https://typical.studio',
    siteName: 'Typical Studio',
    images: [
      {
        url: '/images/photo-c823.webp',
        width: 1200,
        height: 1500,
        alt: 'Stacked pale paper sheets with soft shadows',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${instrument.variable}`}>
      <head>
        <meta name="theme-color" content="#f3f0e8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
