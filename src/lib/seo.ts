import type { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const BASE_URL = siteConfig.url.replace(/\/+$/, '');
export const SITE_NAME = siteConfig.name;
export const ORGANIZATION_ID = `${BASE_URL}/#organization`;
export const BUSINESS_ID = `${BASE_URL}/#business`;
export const WEBSITE_ID = `${BASE_URL}/#website`;

export const OG_IMAGE_PATH = '/og-image.png';
export const OG_IMAGE = {
  url: `${BASE_URL}${OG_IMAGE_PATH}`,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} - premium and discreet companions in Gurugram`,
};

export const LOGO_URL = `${BASE_URL}/gurgaon-escort-service-logo.png`;

export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return BASE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function normalizePath(path = '/'): string {
  if (/^https?:\/\//i.test(path)) return path.replace(BASE_URL, '') || '/';
  const clean = path.startsWith('/') ? path : `/${path}`;
  return clean.length > 1 ? clean.replace(/\/+$/, '') : clean;
}

const BRAND = ' | Alina';
const MAX_TITLE = 62;
const MAX_DESCRIPTION = 160;

/** Keeps a single brand suffix and stops titles from being truncated in SERPs. */
export function fitTitle(input: string): string {
  const title = input.replace(/\s+/g, ' ').trim();
  if (title.length <= MAX_TITLE) return title.endsWith(BRAND) ? title : title + (title.length + BRAND.length <= MAX_TITLE ? BRAND : '');
  if (title.endsWith(BRAND)) return title.slice(0, -BRAND.length).trim();
  return title;
}

/** Trims a description on a word boundary so it stays in the SERP snippet. */
export function fitDescription(input: string): string {
  const text = input.replace(/\s+/g, ' ').trim();
  if (text.length <= MAX_DESCRIPTION) return text;
  const cut = text.slice(0, MAX_DESCRIPTION - 1);
  const lastSpace = cut.lastIndexOf(' ');
  const clipped = (lastSpace > 100 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.\-\u2013\u2014]+$/, '').trim();
  return clipped + '\u2026';
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: 'website' | 'article' | 'profile';
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  /** Set false on pages whose title already ends with a brand-like name. */
  brand?: boolean;
};

/**
 * Single source of truth for per-page metadata: canonical, Open Graph,
 * Twitter card and robots directives stay consistent on every route.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  type = 'website',
  image,
  imageAlt,
  noindex = false,
  publishedTime,
  modifiedTime,
  brand = true,
}: PageMetadataInput): Metadata {
  const canonical = normalizePath(path);
  const url = absoluteUrl(canonical);
  // Titles already carry the brand, so they bypass the layout template instead
  // of stacking a second "| Gurgaon Escort Service" onto every page.
  const finalTitle = brand ? fitTitle(title) : title.replace(/\s+/g, ' ').trim();
  const finalDescription = fitDescription(description);
  const socialImage = { ...OG_IMAGE, ...(image ? { url: absoluteUrl(image) } : {}), alt: imageAlt ?? OG_IMAGE.alt };

  return {
    title: { absolute: finalTitle },
    description: finalDescription,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: {
      canonical,
      languages: { en: url, 'x-default': url },
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: finalTitle,
      description: finalDescription,
      images: [socialImage],
      ...(type === 'article'
        ? { publishedTime, modifiedTime, authors: [siteConfig.brand] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [socialImage.url],
    },
    robots: noindex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : {
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
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(items[items.length - 1]?.path ?? '/')}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export type FaqItem = { question: string; answer: string };

export function faqSchema(faqs: FaqItem[], id?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(id ? { '@id': id } : {}),
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
  pageType = 'WebPage',
  speakable = true,
  faqs,
  mainEntityId,
}: {
  name: string;
  description: string;
  path: string;
  pageType?: string;
  speakable?: boolean;
  /** Questions rendered on the page; keeps a FAQPage node self-contained. */
  faqs?: FaqItem[];
  /** Absolute @id of the primary entity this page is about (Person, Service...). */
  mainEntityId?: string;
}) {
  const url = absoluteUrl(normalizePath(path));
  return {
    '@context': 'https://schema.org',
    '@type': pageType,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
    inLanguage: 'en-IN',
    dateModified: new Date().toISOString().slice(0, 10),
    primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE.url },
    ...(faqs && faqs.length
      ? {
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : mainEntityId
        ? { mainEntity: { '@id': mainEntityId } }
        : {}),
    ...(speakable
      ? { speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.page-summary'] } }
      : {}),
  };
}

/** Reusable reference so Service/Offer schemas never duplicate business data. */
export const BUSINESS_REF = { '@id': BUSINESS_ID };

export function serviceSchema({
  name,
  description,
  path,
  areaName,
  areaServed,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  areaName?: string;
  areaServed?: string[];
  serviceType?: string;
}) {
  const url = absoluteUrl(normalizePath(path));
  const servedAreas =
    areaServed && areaServed.length > 0
      ? areaServed.map((area) => ({ '@type': 'City', name: area }))
      : areaName
        ? [{ '@type': 'Place', name: areaName }]
        : [
            { '@type': 'City', name: 'Gurugram' },
            { '@type': 'AdministrativeArea', name: 'Haryana' },
          ];

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    serviceType: serviceType ?? 'Companion Service',
    url,
    provider: BUSINESS_REF,
    areaServed: servedAreas,
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: { '@type': 'ContactPoint', telephone: siteConfig.phone, contactType: 'booking' },
      serviceUrl: absoluteUrl('/booking'),
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: absoluteUrl('/booking'),
    },
  };
}

export function itemListSchema({
  name,
  path,
  items,
}: {
  name: string;
  path: string;
  items: { name: string; path: string; description?: string }[];
}) {
  const url = absoluteUrl(normalizePath(path));
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${url}#itemlist`,
    name,
    url,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(item.path),
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function contactPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(normalizePath(path));
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${url}#contactpage`,
    name: title,
    description,
    url,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
    mainEntity: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: SITE_NAME,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
    inLanguage: 'en-IN',
  };
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, '\\u003c'),
  } as { __html: string };
}
/** Long-tail keyword set for an area landing page (local + near-me intent). */
export function areaKeywords(area: string): string[] {
  return [
    'escort service in ' + area + ' gurgaon',
    'escort service in ' + area,
    area + ' escorts',
    area + ' call girls',
    'escorts near ' + area + ' gurgaon',
    area + ' escort service near me',
    'book escort in ' + area + ' gurgaon',
    'book ' + area + ' call girl',
    'independent escorts in ' + area,
    area + ' gurgaon escort service 24x7',
    'hotel escort service ' + area + ' gurgaon',
    area + ' hotel escorts',
    'vip escorts ' + area + ' gurugram',
    area + ' call girl number',
    area + ' call girl contact',
    'russian escorts ' + area + ' gurgaon',
    area + ' female escorts gurgaon',
    area + ' escort service price',
    area + ' escorts gurugram 24 hours',
    'cheap escorts in ' + area + ' gurgaon',
  ];
}

/** Long-tail keyword set for a companion profile page. */
export function profileKeywords(name: string, category: string): string[] {
  const lower = name.toLowerCase();
  const cat = category.toLowerCase();
  return [
    lower + ' call girl gurgaon',
    lower + ' escort gurgaon',
    lower + ' ' + cat + ' escort gurgaon',
    'book ' + lower + ' gurgaon',
    lower + ' escort service near me',
    lower + ' gurugram companion',
    cat + ' escorts in gurgaon',
    'gurgaon call girls near me',
    'hotel outcall ' + lower + ' gurgaon',
    lower + ' call girl number',
    lower + ' escort price gurgaon',
    lower + ' whatsapp number gurugram',
    'verified ' + lower + ' escort gurgaon',
    lower + ' independent escort gurugram',
    lower + ' escort service 24x7 gurgaon',
    lower + ' ' + cat + ' companion gurugram',
  ];
}

/** Long-tail keyword set for a category page. */
export function categoryKeywords(name: string): string[] {
  const lower = name.replace(/ in Gurgaon/i, '').toLowerCase();
  return [
    lower + ' in gurgaon',
    lower + ' gurugram',
    lower + ' service near me',
    'book ' + lower + ' gurgaon',
    'book ' + lower + ' online gurgaon',
    'verified ' + lower + ' gurgaon',
    lower + ' 24x7 booking gurgaon',
    'hotel ' + lower + ' gurgaon',
    'hotel outcall ' + lower + ' gurugram',
    'best ' + lower + ' in gurgaon',
    lower + ' rates gurgaon',
    lower + ' price gurgaon',
    lower + ' call girl gurgaon',
    lower + ' escorts dlf cyber city',
    lower + ' escorts golf course road',
    'affordable ' + lower + ' gurugram',
  ];
}

/** Long-tail keyword set for a service page. */
export function serviceKeywords(name: string): string[] {
  const lower = name.replace(/ in Gurgaon/i, '').toLowerCase();
  return [
    lower + ' gurgaon',
    lower + ' in gurugram',
    lower + ' service near me gurgaon',
    'book ' + lower + ' gurgaon',
    'book ' + lower + ' online',
    lower + ' escort service gurgaon',
    lower + ' 24x7 gurgaon',
    lower + ' dlf cyber city',
    lower + ' golf course road',
    lower + ' hotel outcall gurugram',
    'premium ' + lower + ' gurgaon',
    lower + ' price gurgaon',
    lower + ' price list gurugram',
    lower + ' booking gurgaon',
    'best ' + lower + ' in gurgaon',
  ];
}

export function placeSchema({
  name,
  path,
  containedIn = 'Gurugram, Haryana, India',
}: {
  name: string;
  path: string;
  containedIn?: string;
}) {
  const url = absoluteUrl(normalizePath(path));
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': url + '#place',
    name,
    url,
    containedInPlace: { '@type': 'City', name: containedIn },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      addressCountry: 'IN',
    },
  };
}

export function offerCatalogSchema({
  name,
  items,
  path = '/',
}: {
  name: string;
  path?: string;
  items: { name: string; price: number; description?: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': absoluteUrl(normalizePath(path)) + '#offercatalog',
    url: absoluteUrl(normalizePath(path)),
    name,
    itemListElement: items.map((item) => ({
      '@type': 'Offer',
      name: item.name,
      price: item.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      ...(item.description ? { description: item.description } : {}),
      itemOffered: { '@type': 'Service', name: item.name, serviceType: 'Companion service' },
    })),
  };
}


