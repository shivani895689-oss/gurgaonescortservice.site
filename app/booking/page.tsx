import type { Metadata } from 'next';
import { CheckCircle2, Shield, Clock, Phone, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import BookingProcess from '@/components/home/BookingProcess';
import TrustBar from '@/components/home/TrustBar';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';
import HubContent from '@/components/HubContent';
import { siteConfig } from '@/data/siteConfig';
import { jsonLdScript, offerCatalogSchema, pageMetadata, serviceSchema, webPageSchema } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Book Now | Premium Gurgaon Escort Service',
  description:
    'Book a premium companion in Gurgaon in four simple steps. Call or WhatsApp for availability, confirm the arrangement cost, and get a discreet arrival 24/7.',
  path: '/booking',
  keywords: ["book escorts in Gurgaon","Gurgaon escort booking","escort service booking Gurugram","book call girl gurgaon online","hotel escort booking gurgaon","same day escort booking gurugram","full night booking escorts gurgaon","hourly escort booking gurgaon","escort booking near me gurgaon","advance booking escorts gurugram","gurgaon escort booking process","last minute escort booking gurgaon"],
  imageAlt: 'Book Gurgaon Escort Service',
});

const expectations = [
  'Share your preferred location, hotel, or private residence in Gurgaon.',
  'Tell us your expected time, duration, and any companion preference.',
  'Our team confirms availability and shares suitable options discreetly.',
  'Once details are agreed, we coordinate a smooth and respectful experience.',
];

const guidelines = [
  { icon: Shield, title: 'Discreet Communication', description: 'Your inquiry and booking details are handled with strict confidentiality.' },
  { icon: Clock, title: '24/7 Coordination', description: 'We are available around the clock for advance planning or same-day requests.' },
  { icon: CheckCircle2, title: 'Clear Confirmation', description: 'We focus on transparent communication so expectations are clear before confirmation.' },
];

export default function BookingPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Booking', item: `${siteConfig.url}/booking` },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to book a companion in Gurgaon',
    description:
      'Book a premium companion in Gurgaon in four steps: share your area, confirm timing and duration, review the options, then confirm the arrangement.',
    totalTime: 'PT15M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: siteConfig.priceRange,
    },
    supply: [
      { '@type': 'HowToSupply', name: 'Your hotel, residence or preferred area in Gurgaon' },
      { '@type': 'HowToSupply', name: 'Preferred date, time and duration' },
    ],
    step: expectations.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: 'Step ' + (index + 1),
      text: step,
      url: siteConfig.url + '/booking#step-' + (index + 1),
    })),
  };

  const serviceAndRates = {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema({
        name: 'Companion booking service in Gurgaon',
        description:
          'Verified companion booking for hotels, serviced apartments and private residences across Gurugram, with discreet 24/7 coordination.',
        path: '/booking',
        serviceType: 'Escort and companion booking',
      }),
      webPageSchema({
        name: 'Book a companion in Gurgaon',
        description:
          'Book a verified Gurgaon companion in four steps with discreet coordination, clear rates and 24/7 availability.',
        path: '/booking',
        pageType: 'WebPage',
      }),
      offerCatalogSchema({
        name: 'Gurgaon companion booking rates',
        path: '/booking',
        items: [
          { name: 'One hour companion booking', price: 7500 },
          { name: 'Two hour companion booking', price: 13000 },
          { name: 'Three hour companion booking', price: 18000 },
          { name: 'Four hour companion booking', price: 24000 },
          { name: 'Six hour companion booking', price: 33000 },
          { name: 'Full night companion booking', price: 22000 },
        ],
      }),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceAndRates)} />
      <PageHero
        eyebrow="Book Now"
        title="Simple, Discreet Booking in Gurgaon"
        description="A refined booking experience designed around your comfort, privacy, and schedule. Our team coordinates quickly and discreetly across Gurugram."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Booking' }]}
      />

      <section className="border-b border-gray-100 bg-white">
        <div className="container-luxury py-5">
          <p className="page-summary max-w-4xl text-sm leading-relaxed text-gray-700">
            <span className="font-semibold text-[#2f3338]">Quick answer: </span>
            To book, message or call {siteConfig.phoneDisplay} with your area in Gurgaon, the date and time you want,
            and the duration. Our team confirms which verified companions are available, shares the arrangement cost,
            and coordinates a discreet arrival at your hotel, serviced apartment or residence. Most requests are
            confirmed within minutes, 24 hours a day.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#fdf8f5]">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">What to Expect</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a4d52] mb-5">
                A Smooth Booking <span className="gradient-text-gold">Experience</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We keep the process clear and respectful so you can book with confidence. Whether you are at a premium hotel, serviced apartment, or private residence in Gurgaon, our coordination team guides you step by step.
              </p>
              <ul className="space-y-4">
                {expectations.map((item, index) => (
                  <li id={'step-' + (index + 1)} key={item} className="flex items-start gap-3 text-sm md:text-base text-gray-700 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-[#2f3338] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 mt-8">
                <a href={`tel:${siteConfig.phone}`} className="btn-luxury">
                  <Phone className="w-4 h-4" /> Call to Book
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hi, I would like to book a premium companion in Gurgaon.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-whatsapp"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Booking
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200/60 shadow-sm">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Booking Guidelines</p>
              <h3 className="font-serif text-2xl font-bold text-[#4a4d52] mb-6">Designed for Comfort &amp; Privacy</h3>
              <div className="space-y-6">
                {guidelines.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#2f3338]/8 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#2f3338]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 p-4 rounded-2xl bg-[#fdf8f5] border border-gray-200/60">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#2f3338]">Tip:</span> For the fastest coordination, include your area, preferred time, and duration in your first message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingProcess />
      <TrustBar />
      <FaqSection />
      <HubContent page="booking" />
      <CtaSection />
    </>
  );
}
