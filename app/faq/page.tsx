import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';
import HubContent from '@/components/HubContent';
import { generalFaqs } from '@/data/siteConfig';
import { breadcrumbSchema, jsonLdScript, pageMetadata, webPageSchema } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Gurgaon Escort Service FAQ | Booking, Privacy & Coverage',
  description:
    'Answers to common questions about booking a Gurgaon escort service: verification, privacy, hotel outcalls, response times, payment and the areas we cover across Gurugram.',
  path: '/faq',
  keywords: [
    'Gurgaon escort FAQ',
    'escort service questions Gurgaon',
    'Gurugram escort booking questions',
    'hotel outcall FAQ Gurgaon',
    'escort privacy policy FAQ',
    'Gurgaon companion service help',
    'how to book escorts in Gurgaon',
    'escort service payment Gurgaon',
    'escort service near me Gurgaon',
    'Gurgaon escort service coverage',
    'is Gurgaon escort service safe',
    '24/7 escort booking help Gurugram',
  ],
  imageAlt: 'Gurgaon escort service frequently asked questions',
});

export default function FaqPage() {
  const schema = [
    webPageSchema({
      name: 'Frequently Asked Questions | Gurgaon Escort Service',
      description:
        'Answers about booking, verification, privacy, hotel outcalls, response times, and service coverage across Gurgaon.',
      path: '/faq',
      pageType: 'FAQPage',
      faqs: generalFaqs,
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'FAQ', path: '/faq' },
    ]),
  ];

  return (
    <>
      {schema.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(item)} />
      ))}
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions About Our Gurgaon Escort Service"
        description="Booking, verification, privacy, hotel outcalls, response times and coverage - the questions clients ask most before they book in Gurugram."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />
      <FaqSection
        faqs={generalFaqs}
        eyebrow="Good to Know"
        title="Answers Before You Book"
        description="Everything clients usually ask about booking, privacy, arrival times and coverage across Gurgaon and Gurugram."
        id="faq"
        includeSchema={false}
      />
      <HubContent page="faq" />
      <CtaSection />
    </>
  );
}

