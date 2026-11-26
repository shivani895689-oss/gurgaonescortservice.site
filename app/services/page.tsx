import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import TrustBar from '@/components/home/TrustBar';
import BookingProcess from '@/components/home/BookingProcess';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';
import { services } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Our Services | Premium Gurgaon Escort Service',
  description:
    'Explore premium escort services in Gurgaon: hotel outcall, private residence visits, dinner dates, travel companionship and VIP arrangements across Gurugram.',
  path: '/services',
  keywords: [
    'escort services in Gurgaon',
    'hotel outcall Gurgaon',
    'dinner companion Gurgaon',
    'VIP escort service Gurugram',
    'travel companion Gurgaon',
  ],
  imageAlt: 'Premium companion services in Gurgaon',
});

const serviceFaqs = [
  {
    question: 'Which escort services can I book in Gurgaon?',
    answer:
      'Hotel outcall, private residence visits, dinner and social companionship, travel and weekend companionship, and a full VIP experience. Hourly and full-night bookings are available in every category, and our team confirms what is possible before you commit.',
  },
  {
    question: 'Can a companion visit my hotel room in Gurgaon?',
    answer:
      'Yes. We arrange discreet arrivals at 5-star and mid-scale hotels across DLF, Cyber City, Golf Course Road and MG Road. Share the hotel name and the name your stay is booked under, and our team coordinates the arrival so it stays private.',
  },
  {
    question: 'How is the price of a service decided?',
    answer:
      'The cost depends on the duration, the category you choose, the area of Gurgaon, and the time of day. We confirm the full amount on call or WhatsApp before anything is dispatched, so there are no surprises at arrival.',
  },
  {
    question: 'Do you cover areas outside Gurgaon?',
    answer:
      'Yes, on request. We arrange companions for Delhi NCR, IGI Airport, Manesar, Dwarka Expressway and weekend trips. Travel bookings need a little more notice so the companion schedule can be blocked in advance.',
  },
];

export default function ServicesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Gurgaon Escort Services',
    itemListElement: services.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: siteConfig.url + '/services/' + item.slug,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: siteConfig.url + '/services' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Our Services"
        title="Premium Companion Services in Gurgaon"
        description="From luxury hotel outcalls to elegant dinner companionship, discover refined services designed around privacy, comfort, and exceptional experiences across Gurugram."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="border-b border-gray-100 bg-white">
        <div className="container-luxury py-5">
          <p className="page-summary max-w-4xl text-sm leading-relaxed text-gray-700">
            <span className="font-semibold text-[#2f3338]">Quick answer: </span>
            We offer five bookable formats in Gurgaon - hotel outcall, private residence visit, dinner and social
            companionship, travel and weekend companionship, and a VIP experience. Every format can be booked hourly
            or overnight, and the arrangement cost is confirmed on call or WhatsApp before a companion is dispatched.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#fdf8f5]">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a4d52]">
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
      <FaqSection
        faqs={serviceFaqs}
        eyebrow="Service Questions"
        title="What Clients Ask Before Booking a Service"
        description="Practical answers about formats, hotel visits, pricing and coverage outside Gurugram."
        id="faq"
      />
      <CtaSection />
    </>
  );
}
