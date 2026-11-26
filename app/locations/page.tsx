import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import LocationCard from '@/components/LocationCard';
import TrustBar from '@/components/home/TrustBar';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';
import { ArrowRight } from 'lucide-react';
import { locations } from '@/data/locations';
import { landingPages } from '@/data/landingPages';
import { siteConfig } from '@/data/siteConfig';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Service Areas in Gurgaon | All Sectors & Neighbourhoods',
  description:
    'Escort service coverage across Gurgaon: DLF phases, Cyber City, Golf Course Road, MG Road, Udyog Vihar, Sohna Road, New Gurgaon and Dwarka Expressway, 24/7.',
  path: '/locations',
  keywords: [
    'escort service areas Gurgaon',
    'escorts near me Gurugram',
    'sector wise escort service Gurgaon',
    'Gurgaon escort service DLF Cyber City',
  ],
  imageAlt: 'Gurgaon escort service areas',
});

const locationFaqs = [
  {
    question: 'Which areas of Gurgaon do you cover?',
    answer:
      'Every major zone: DLF Phase 1 to 5, Cyber City, Udyog Vihar, Golf Course Road, Golf Course Extension Road, MG Road, Sector 29, Sushant Lok, Sohna Road, South City, New Gurgaon, Dwarka Expressway and Manesar. Individual sector pages are listed on this page.',
  },
  {
    question: 'How quickly can a companion reach my area?',
    answer:
      'Most bookings inside Gurgaon are confirmed within minutes and the companion reaches within 30 to 60 minutes, depending on traffic and availability near your sector. Advance booking gives you a wider choice of companions.',
  },
  {
    question: 'Can I book for a sector that is not listed here?',
    answer:
      'Yes. Send the sector number or a nearby landmark on WhatsApp and our team confirms coverage. We work on a roughly 45 km radius around Gurgaon, which includes most of Delhi NCR.',
  },
  {
    question: 'Do you visit hotels, serviced apartments and private homes?',
    answer:
      'All three. Hotel outcalls, serviced apartment visits and private residence visits are coordinated the same discreet way, with the arrival time and arrangement cost confirmed in advance.',
  },
];

export default function LocationsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Gurgaon Escort Service Locations',
    itemListElement: locations.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: siteConfig.url + '/locations/' + item.slug,
    })),
  };

  const locationPages = landingPages.filter((p) => p.type === 'location');

  const areaListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Gurgaon area pages',
    numberOfItems: locationPages.length,
    itemListElement: locationPages.map((page, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: page.locationName || page.title,
      url: siteConfig.url + '/' + page.slug,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: siteConfig.url + '/locations' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Service Areas"
        title="Premium Coverage Across Gurgaon"
        description="We provide discreet, premium companion services across all major areas of Gurgaon and Gurugram. Find your location below for fast, reliable coordination."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Locations' }]}
      />

      <section className="border-b border-gray-100 bg-white">
        <div className="container-luxury py-5">
          <p className="page-summary max-w-4xl text-sm leading-relaxed text-gray-700">
            <span className="font-semibold text-[#2f3338]">Quick answer: </span>
            We cover {locationPages.length} areas across Gurgaon and Gurugram - DLF Phase 1 to 5, Cyber City, Udyog
            Vihar, Golf Course Road, MG Road, Sohna Road, New Gurgaon, Dwarka Expressway and Manesar - with discreet
            hotel, serviced apartment and residence visits, seven days a week.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#fdf8f5]">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Where We Serve</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a4d52]">
              Serving All Premium <span className="gradient-text-gold">Gurgaon Locations</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fdf8f5]">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">All Gurgaon Areas</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a4d52]">
              Explore <span className="gradient-text-gold">Location Pages</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Browse our detailed area pages for specific sectors, neighborhoods, and local coverage across Gurugram. Select your area for fast, discreet, and premium companion service.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {locationPages.map((p) => (
              <li key={p.slug}>
                <Link href={'/' + p.slug} className="group flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-gray-200/60 hover:border-[#2f3338]/20 hover:shadow-sm transition-all">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#2f3338] transition-colors">{p.locationName || p.title}</span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#2f3338] transition-colors shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TrustBar />
      <FaqSection
        faqs={locationFaqs}
        eyebrow="Coverage Questions"
        title="Service Area Questions, Answered"
        description="How coverage, response time and hotel or residence visits work across Gurgaon."
        id="faq"
      />
      <CtaSection />
    </>
  );
}
