import type { Metadata, Viewport } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteConfig, getAlternateLanguages } from '@/data/siteConfig';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const canonicalUrl = `${siteConfig.url}/`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Gurgaon Escort Service | Premium & Discreet Escorts in Gurugram',
    template: '%s | Gurgaon Escort Service',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.brand, url: siteConfig.url }],
  creator: siteConfig.brand,
  publisher: siteConfig.name,
  category: 'Lifestyle',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: getAlternateLanguages('/'),
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: canonicalUrl,
    siteName: siteConfig.name,
    title: 'Gurgaon Escort Service | Premium & Discreet Escorts in Gurugram',
    description: siteConfig.description,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Premium Gurgaon Escort Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gurgaon Escort Service | Premium & Discreet Escorts in Gurugram',
    description: siteConfig.description,
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'],
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
  verification: {
    google: 'KqLeD8o1LR_ZibCg4RIXaaxp_WnZzurebaMinxgNDHI',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Gurgaon',
    'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: '#2f3338',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: `+${siteConfig.whatsapp}`,
  email: siteConfig.email,
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/gurgaon-escort-service-logo.png`,
  },
  priceRange: siteConfig.priceRange,
  address: {
    '@type': 'PostalAddress',
    ...siteConfig.structuredAddress,
    addressRegion: siteConfig.state,
    addressCountry: siteConfig.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed: [
    { '@type': 'City', name: siteConfig.city },
    { '@type': 'State', name: siteConfig.state },
  ],
  openingHoursSpecification: siteConfig.openingHours.map((hours) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: hours.dayOfWeek,
    opens: hours.opens,
    closes: hours.closes,
  })),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: `+${siteConfig.whatsapp}`,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  sameAs: (siteConfig.socialLinks || []).map((s) => s.url).filter(Boolean),
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: 'en-IN',
  publisher: {
    '@id': `${siteConfig.url}/#business`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white text-[#2B2B2B] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-[#2f3338] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Skip to content
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
