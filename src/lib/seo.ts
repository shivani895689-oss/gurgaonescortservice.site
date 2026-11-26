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
  return (lastSpace > 100 ? cut.slice(0, lastSpace) : cut).replace(/[,;:\-–]$/, '').trim() + '…';
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
}: PageMetadataInput): Metadata {
  const canonical = normalizePath(path);
  const url = absoluteUrl(canonical);
  // Titles already carry the brand, so they bypass the layout template instead
  // of stacking a second "| Gurgaon Escort Service" onto every page.
  const finalTitle = fitTitle(title);
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
}: {
  name: string;
  description: string;
  path: string;
  pageType?: string;
  speakable?: boolean;
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
    primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE.url },
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
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  areaName?: string;
  serviceType?: string;
}) {
  const url = absoluteUrl(normalizePath(path));
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    serviceType: serviceType ?? 'Companion Service',
    url,
    provider: BUSINESS_REF,
    areaServed: areaName
      ? { '@type': 'Place', name: areaName }
      : [
          { '@type': 'City', name: 'Gurugram' },
          { '@type': 'AdministrativeArea', name: 'Haryana' },
        ],
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

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, '\\u003c'),
  } as { __html: string };
}
