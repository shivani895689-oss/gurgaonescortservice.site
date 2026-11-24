import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import LocationCard from '@/components/LocationCard';
import TrustBar from '@/components/home/TrustBar';
import CtaSection from '@/components/home/CtaSection';
import { ArrowRight } from 'lucide-react';
import { locations } from '@/data/locations';
import { landingPages } from '@/data/landingPages';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Service Areas in Gurgaon | Gurgaon Escort Service',
  description:
    'Explore our premium escort service coverage across Gurgaon including DLF phases, Cyber City, Golf Course Road, MG Road, Udyog Vihar, Sohna Road, and Dwarka Expressway.',
  alternates: { canonical: '/locations' },
  openGraph: {
    title: 'Service Areas in Gurgaon | Gurgaon Escort Service',
    description:
      'Explore premium escort service coverage across Gurgaon including DLF phases, Cyber City, Golf Course Road, MG Road, Udyog Vihar, Sohna Road, and Dwarka Expressway.',
    url: `${siteConfig.url}/locations`,
    type: 'website',
    images: [{ url: '/images/hero/hero-main.webp', width: 1200, height: 630, alt: 'Gurgaon Escort Service Areas' }],
  },
};

export default function LocationsPage() {
  const locationPages = landingPages
    .filter((p) => p.type === 'location')
    .slice(0, 12);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${siteConfig.url}/locations` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Service Areas"
        title="Premium Coverage Across Gurgaon"
        description="We provide discreet, premium companion services across all major areas of Gurgaon and Gurugram. Find your location below for fast, reliable coordination."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Locations' }]}
      />

      <section className="section-padding bg-[#fffaf9]">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#671725] mb-3">Where We Serve</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a0a0d]">
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
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#671725] mb-3">All Gurgaon Areas</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a0a0d]">
              Explore Every <span className="gradient-text-gold">Location Page</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Browse our detailed area pages for specific sectors, neighborhoods, and local coverage across Gurugram. Select your area for fast, discreet, and premium companion service.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {locationPages.map((p) => (
              <li key={p.slug}>
                <a href={`/${p.slug}`} className="flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-rose-100/60 hover:border-[#671725]/20 hover:shadow-sm transition-all">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#671725] transition-colors">{p.locationName || p.title}</span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#671725] transition-colors shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TrustBar />
      <CtaSection />
    </>
  );
}
