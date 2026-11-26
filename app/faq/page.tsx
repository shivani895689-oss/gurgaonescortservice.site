import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';
import { siteConfig } from '@/data/siteConfig';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Escort Service FAQs | Booking, Privacy & Coverage',
  description:
    'Answers about booking a Gurgaon escort: how to book, privacy, hotel outcall, pricing, coverage areas and 24/7 availability across Gurugram.',
  path: '/faq',
  keywords: ['Gurgaon escort FAQ', 'escort booking questions Gurgaon', 'escort service privacy Gurugram'],
  imageAlt: 'Gurgaon escort service frequently asked questions',
});

export default function FaqPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${siteConfig.url}/faq` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Clear, discreet answers about our Gurgaon escort service, booking process, privacy standards, and coverage across Gurugram."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />
      <FaqSection
        eyebrow="Questions & Answers"
        title="Everything You Need to Know About Our Gurgaon Escort Service"
        description="Find quick answers about booking, verification, privacy, hotel outcalls, response times, and the areas we serve across Gurgaon."
      />
      <CtaSection />
    </>
  );
}
