import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import TrustBar from '@/components/home/TrustBar';
import BookingProcess from '@/components/home/BookingProcess';
import CtaSection from '@/components/home/CtaSection';
import { services } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Our Services | Premium Gurgaon Escort Service',
  description:
    'Explore premium escort services in Gurgaon including hotel outcall, private residence visits, dinner dates, travel companionship, and VIP arrangements across Gurugram.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services | Premium Gurgaon Escort Service',
    description:
      'Explore premium escort services in Gurgaon including hotel outcall, private residence visits, dinner dates, travel companionship, and VIP arrangements.',
    url: `${siteConfig.url}/services`,
    type: 'website',
    images: [{ url: '/images/hero/hero-main.webp', width: 1200, height: 630, alt: 'Gurgaon Escort Services' }],
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Our Services"
        title="Premium Companion Services in Gurgaon"
        description="From luxury hotel outcalls to elegant dinner companionship, discover refined services designed around privacy, comfort, and exceptional experiences across Gurugram."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="section-padding bg-[#fffaf9]">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#671725] mb-3">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a0a0d]">
              Services Crafted for <span className="gradient-text-gold">Your Comfort</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <TrustBar />
      <BookingProcess />
      <CtaSection />
    </>
  );
}
