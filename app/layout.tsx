import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/ui/BackToTop';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Soul Infinity - Spiritual Guidance, Astrology & Healing Services',
  description: 'Discover your spiritual path with expert astrology readings, healing services, and mantras. Professional Vedic & Western astrology, crystal healing, and spiritual guidance.',
  keywords: 'astrology, spiritual healing, vedic astrology, tarot reading, crystal healing, mantras, spiritual guidance',
  authors: [{ name: 'Saurabh Jain', url: 'https://soul-infinity.com' }],
  creator: 'Soul Infinity',
  publisher: 'Soul Infinity',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://soul-infinity.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Soul Infinity - Spiritual Guidance & Astrology',
    description: 'Expert spiritual guidance through Vedic astrology, healing services, and sacred mantras.',
    url: 'https://soul-infinity.com',
    siteName: 'Soul Infinity',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Soul Infinity - Spiritual Guidance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soul Infinity - Spiritual Guidance & Astrology',
    description: 'Expert spiritual guidance through Vedic astrology, healing services, and sacred mantras.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Soul Infinity',
  description: 'Professional spiritual guidance through astrology, healing, and mantras',
  url: 'https://soul-infinity.com',
  logo: 'https://soul-infinity.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+919079053840',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://www.facebook.com/soulinfinity',
    'https://wa.me/919079053840',
  ],
  founder: {
    '@type': 'Person',
    name: 'Saurabh Jain',
  },
  service: [
    {
      '@type': 'Service',
      name: 'Vedic Astrology',
      description: 'Professional Vedic astrology readings and consultations',
    },
    {
      '@type': 'Service',
      name: 'Spiritual Healing',
      description: 'Pranic, Theta, and Crystal healing services',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased bg-gradient-to-br from-slate-50 to-purple-50 min-h-screen">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}