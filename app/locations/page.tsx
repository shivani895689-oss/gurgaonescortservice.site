import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import LocationCard from '@/components/LocationCard';
import TrustBar from '@/components/home/TrustBar';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';
import HubContent from '@/components/HubContent';
import { ArrowRight } from 'lucide-react';
import { locations } from '@/data/locations';
import { landingPages } from '@/data/landingPages';
import { breadcrumbSchema, faqSchema, itemListSchema, jsonLdScript, pageMetadata, webPageSchema } from '@/lib/seo';

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
    'escort service golf course road',
    'mg road gurgaon escorts',
    'sohna road escort service',
    'escorts in new gurgaon',
    'dwarka expressway escorts',
    'manesar escort service',
    'escort service palam vihar',
    'escort service sushant lok',
    'escort service golf course extension road',
    'udyog vihar escorts',
    'sector 29 gurgaon escorts',
    'escort service near me gurgaon',
    'hotel outcall escorts by location gurugram',
    'escort service dlf phase 1 2 3 4 5',
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

const sectorNumber = (slug: string): number | null => {
  const match = slug.match(/sector-(\d+)/);
  return match ? Number(match[1]) : null;
};

const sectorBands = [
  { label: 'Sectors 14 to 33 \u00b7 Old Gurgaon and the MG Road side', min: 1, max: 33 },
  { label: 'Sectors 36 to 42 \u00b7 Central Gurgaon', min: 34, max: 42 },
  { label: 'Sectors 43 to 56 \u00b7 Golf Course Road and Sushant Lok', min: 43, max: 56 },
  { label: 'Sectors 57 to 75 \u00b7 New Gurgaon and Sohna Road', min: 57, max: 75 },
  { label: 'Sectors 76 to 105 \u00b7 Dwarka Expressway and Southern Peripheral Road', min: 76, max: 105 },
];

const locationGroups = [
  {
    label: 'Neighbourhoods and corridors',
    pages: landingPages.filter((page) => sectorNumber(page.slug) === null),
  },
  ...sectorBands.map((band) => ({
    label: band.label,
    pages: landingPages.filter((page) => {
      const sector = sectorNumber(page.slug);
      return sector !== null && sector >= band.min && sector <= band.max;
    }),
  })),
].filter((group) => group.pages.length > 0);

export default function LocationsPage() {
  const schema = [
    webPageSchema({
      name: 'Escorts in Gurgaon | All Service Areas & Neighbourhoods',
      description:
        'Browse verified escort service availability across Gurgaon, from DLF and Cyber City to Golf Course Road, MG Road, and nearby areas in Gurugram.',
      path: '/locations',
      pageType: 'CollectionPage',
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Locations', path: '/locations' },
    ]),
    itemListSchema({
      name: 'Gurgaon Escort Service Locations',
      path: '/locations',
      items: locations.map((loc) => ({
        name: loc.name,
        path: '/' + loc.path,
        description: loc.shortDescription || `Escort service in ${loc.name}, Gurgaon`,
      })),
    }),
    faqSchema(locationFaqs),
  ];

  return (
    <>
      {schema.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(item)} />
      ))}
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
            We cover {landingPages.length} areas across Gurgaon and Gurugram - DLF Phase 1 to 5, Cyber City, Udyog
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
          <div className="space-y-10">
            {locationGroups.map((group) => (
              <div key={group.label}>
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl font-bold text-[#2f3338]">{group.label}</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                    {group.pages.length} {group.pages.length === 1 ? 'area' : 'areas'}
                  </p>
                </div>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {group.pages.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={'/' + p.slug}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-[#eee9e4] bg-white px-5 py-4 transition-colors hover:border-[#2f3338]/30 hover:bg-[#faf7f4]"
                      >
                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#2f3338] transition-colors">
                          {p.locationName}
                        </span>
                        <ArrowRight className="w-4 h-4 shrink-0 text-gray-300 group-hover:text-[#2f3338] transition-colors" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />
      <FaqSection
        faqs={locationFaqs}
        eyebrow="Coverage Questions"
        title="Service Area Questions, Answered"
        description="How coverage, response time and hotel or residence visits work across Gurgaon."
        id="faq"
        includeSchema={false}
      />
      <HubContent page="locations" />
      <CtaSection />
    </>
  );
}


