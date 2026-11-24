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
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'Companionship Services',
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
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: canonicalUrl,
    languages: getAlternateLanguages(''),
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: canonicalUrl,
    siteName: siteConfig.name,
    title: 'Gurgaon Escort Service | Premium & Discreet Escorts in Gurugram',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gurgaon Escort Service | Premium & Discreet Escorts in Gurugram',
    description: siteConfig.description,
  },
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Gurgaon',
    'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: '#671725',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#business`,
  name: siteConfig.name,
  url: canonicalUrl,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  description: siteConfig.description,
  priceRange: '₹₹₹',
  image: `${siteConfig.url}/apple-touch-icon.png`,
  address: {
    '@type': 'PostalAddress',
    ...siteConfig.structuredAddress,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed: [
    { '@type': 'City', name: 'Gurgaon' },
    { '@type': 'City', name: 'Gurugram' },
    { '@type': 'Place', name: 'DLF Cyber City' },
    { '@type': 'Place', name: 'Golf Course Road' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  sameAs: siteConfig.socialLinks.map((s) => s.url),
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: canonicalUrl,
  description: siteConfig.description,
  publisher: {
    '@id': `${siteConfig.url}/#business`,
  },
  inLanguage: 'en-IN',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white text-[#2B2B2B] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-[#671725] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
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
