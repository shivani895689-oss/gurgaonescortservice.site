import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import AboutSection from '@/components/home/AboutSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import BookingProcess from '@/components/home/BookingProcess';
import CtaSection from '@/components/home/CtaSection';
import FaqSection from '@/components/home/FaqSection';
import AreasSection from '@/components/home/AreasSection';
import HubContent from '@/components/HubContent';
import { generalFaqs } from '@/data/siteConfig';
import { services } from '@/data/services';
import {
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  jsonLdScript,
  pageMetadata,
  serviceSchema,
  webPageSchema,
} from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Premium Escort Service in Gurgaon | 24/7 Verified Companions',
  description:
    'Gurgaon Escort Service by Alina is a premium companion agency in Gurugram, open 24 hours a day. We arrange verified companions for 5-star hotels, serviced apartments and private residences across DLF Phases 1–5, Cyber City, Golf Course Road, MG Road and Sohna Road — with advance booking, clear pricing and complete discretion.',
  path: '/',
  keywords: [
    'Gurgaon escort service',
    'escorts in Gurgaon',
    'Gurugram escorts',
    'call girls in Gurgaon',
    'premium escorts Gurugram',
    'escort service near me Gurgaon',
    'hotel outcall escorts Gurgaon',
    'independent escorts Gurugram',
    'vip escorts gurgaon',
    'russian escorts gurgaon',
    'nepali escorts gurugram',
    'south indian escorts gurgaon',
    'nri escorts gurugram',
    '24/7 escort service gurgaon',
    'Gurgaon escort agency',
    'best escort service in Gurgaon',
    'female escorts Gurgaon',
    'high profile escorts Gurgaon',
    'Gurgaon hotel escorts',
    'DLF Cyber City escorts',
    'Golf Course Road escorts',
    'discreet escort service Gurugram',
    'call girl service Gurgaon',
    'escort agency near me Gurugram',
    'book escort online Gurgaon',
    'verified escort profiles Gurugram',
    'Gurgaon companion service 24 hours',
    'outcall escort service Gurgaon',
    'female companion Gurgaon hotel',
  ],
});

export default function Home() {
  const schema = [
    webPageSchema({
      name: 'Premium Escort Service in Gurgaon | 24/7 Verified Companions',
      description:
        'Premium, discreet and verified escort service in Gurgaon with 24/7 booking across DLF, Cyber City, Golf Course Road, MG Road and major Gurugram locations.',
      path: '/',
    }),
    breadcrumbSchema([{ name: 'Home', path: '/' }]),
    serviceSchema({
      name: 'Gurgaon Escort Service',
      description:
        'Premium companion agency in Gurugram offering verified companions for hotels, serviced apartments and private residences with 24/7 availability and discreet booking.',
      path: '/',
      areaServed: ['Gurgaon', 'Gurugram', 'Delhi NCR'],
    }),
    itemListSchema({
      name: 'Popular Escort Services in Gurgaon',
      path: '/',
      items: services.slice(0, 8).map((service) => ({
        name: service.name,
        path: `/services/${service.slug}`,
        description: service.shortDescription,
      })),
    }),
    faqSchema(generalFaqs.slice(0, 6)),
  ];

  return (
    <>
      <Hero />
      <section className="border-b border-gray-100 bg-white">
        <div className="container-luxury py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <span className="section-label">About the service</span>
              <h2 className="mt-4 text-3xl font-display font-semibold tracking-tight text-gray-950 md:text-4xl">
                A calm, premium companion service for Gurgaon
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
                Gurgaon Escort Service by Alina is a premium companion agency in Gurugram, open 24 hours a day. We arrange
                verified companions for 5-star hotels, serviced apartments and private residences across DLF
                Phases 1–5, Cyber City, Golf Course Road, MG Road and Sohna Road — with advance booking, clear
                pricing and complete discretion.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">At a glance</p>
              <div className="mt-4 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
                <div className="rounded-2xl bg-white px-4 py-3">24/7 availability</div>
                <div className="rounded-2xl bg-white px-4 py-3">Verified profiles</div>
                <div className="rounded-2xl bg-white px-4 py-3">Hotel &amp; residence visits</div>
                <div className="rounded-2xl bg-white px-4 py-3">Discreet communication</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrustBar />
      <AboutSection />
      <WhyChooseUs />
      <AreasSection />
      <BookingProcess />
      <HubContent page="home" />
      <CtaSection />
      <FaqSection includeSchema={false} />
      {schema.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(item)}
        />
      ))}
    </>
  );
}


