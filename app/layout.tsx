import type { Metadata, Viewport } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteConfig, getAlternateLanguages } from '@/data/siteConfig';
import {
  BASE_URL,
  BUSINESS_ID,
  OG_IMAGE,
  ORGANIZATION_ID,
  WEBSITE_ID,
  absoluteUrl,
  jsonLdScript,
} from '@/lib/seo';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

const defaultTitle = 'Gurgaon Escort Service | Premium & Discreet Escorts in Gurugram';
const defaultDescription = siteConfig.shortDescription;

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? 'KqLeD8o1LR_ZibCg4RIXaaxp_WnZzurebaMinxgNDHI';
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
const yandexVerification = process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: defaultTitle,
    template: '%s | Gurgaon Escort Service',
  },
  description: defaultDescription,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.brand, url: BASE_URL }],
  creator: siteConfig.brand,
  publisher: siteConfig.name,
  category: 'Lifestyle',
  referrer: 'origin-when-cross-origin',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: '/',
    languages: getAlternateLanguages('/'),
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: absoluteUrl('/'),
    siteName: siteConfig.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [OG_IMAGE.url],
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
    google: googleVerification,
    ...(yandexVerification ? { yandex: yandexVerification } : {}),
    ...(bingVerification ? { other: { 'msvalidate.01': bingVerification } } : {}),
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '977x977' }],
    shortcut: '/favicon.png',
    apple: [{ url: '/apple-touch-icon.png', sizes: '977x977' }],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: siteConfig.brand,
    statusBarStyle: 'black-translucent',
  },
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Gurugram',
    'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    'msapplication-TileColor': '#2f3338',
  },
};

export const viewport: Viewport = {
  themeColor: '#2f3338',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
};

const areaServed = [
  ...siteConfig.localAreas.map((name) => ({ '@type': 'Place', name: `${name}, Gurugram` })),
  { '@type': 'City', name: 'Gurugram' },
  { '@type': 'City', name: 'Gurgaon' },
  { '@type': 'AdministrativeArea', name: 'Haryana' },
  { '@type': 'Country', name: 'India' },
];

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: siteConfig.name,
      alternateName: [
        'Gurgaon Escort Service by Alina',
        'Gurugram Escort Service',
        'Alina Companion Service Gurgaon',
      ],
      url: absoluteUrl('/'),
      logo: {
        '@type': 'ImageObject',
        '@id': `${BASE_URL}/#logo`,
        url: `${BASE_URL}/gurgaon-escort-service-logo.png`,
        contentUrl: `${BASE_URL}/gurgaon-escort-service-logo.png`,
        caption: siteConfig.name,
      },
      image: { '@id': `${BASE_URL}/#logo` },
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      foundingDate: siteConfig.founded,
      sameAs: siteConfig.socialLinks.map((s) => s.url),
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: siteConfig.phone,
          contactType: 'reservations',
          contactOption: 'TollFree',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      ],
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': BUSINESS_ID,
      name: siteConfig.name,
      alternateName: 'Gurugram Escort Service',
      description: siteConfig.description,
      url: absoluteUrl('/'),
      telephone: siteConfig.phone,
      email: siteConfig.email,
      image: [OG_IMAGE.url, `${BASE_URL}/gurgaon-escort-service-logo.png`],
      logo: { '@id': `${BASE_URL}/#logo` },
      priceRange: siteConfig.priceRange,
      currenciesAccepted: siteConfig.currenciesAccepted,
      paymentAccepted: siteConfig.paymentAccepted,
      parentOrganization: { '@id': ORGANIZATION_ID },
      address: {
        '@type': 'PostalAddress',
        ...siteConfig.structuredAddress,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      hasMap: `https://www.google.com/maps/search/?api=1&query=${siteConfig.geo.latitude},${siteConfig.geo.longitude}`,
      areaServed,
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        geoRadius: 45000,
      },
      openingHoursSpecification: siteConfig.openingHours.map((hours) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hours.dayOfWeek,
        opens: hours.opens,
        closes: hours.closes,
      })),
      knowsLanguage: ['en', 'hi'],
      sameAs: siteConfig.socialLinks.map((s) => s.url),
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: siteConfig.phone,
          contactType: 'reservations',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      ],
      makesOffer: siteConfig.serviceTypes.map((serviceType) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: serviceType, serviceType },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: absoluteUrl('/'),
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: 'en-IN',
      publisher: { '@id': ORGANIZATION_ID },
      copyrightYear: new Date().getFullYear(),
      copyrightHolder: { '@id': ORGANIZATION_ID },
    },
    {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/#webpage`,
      url: absoluteUrl('/'),
      name: defaultTitle,
      description: defaultDescription,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': BUSINESS_ID },
      inLanguage: 'en-IN',
      primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE.url },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.page-summary'],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://ik.imagekit.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
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
          dangerouslySetInnerHTML={jsonLdScript(schemaGraph)}
        />
      </body>
    </html>
  );
}
