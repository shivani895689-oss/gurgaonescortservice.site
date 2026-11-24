import type { Metadata } from 'next';
import { CheckCircle2, Shield, Clock, Phone, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import BookingProcess from '@/components/home/BookingProcess';
import TrustBar from '@/components/home/TrustBar';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Book Now | Premium Gurgaon Escort Service',
  description:
    'Book a premium companion in Gurgaon with a simple, discreet process. Call or WhatsApp for fast availability checks, private coordination, and 24/7 support across Gurugram.',
  alternates: { canonical: '/booking' },
  openGraph: {
    title: 'Book Now | Premium Gurgaon Escort Service',
    description:
      'Book a premium companion in Gurgaon with a simple, discreet process. Call or WhatsApp for fast availability checks and 24/7 private support.',
    url: `${siteConfig.url}/booking`,
    type: 'website',
    images: [{ url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: 'Book Gurgaon Escort Service' }],
  },
    twitter: {
      card: 'summary_large_image',
      title: 'Book Now | Premium Gurgaon Escort Service',
      description: 'Book a premium companion in Gurgaon with a simple, discreet process. Call or WhatsApp for fast availability checks and 24/7 private support.',
      images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'],
    },
};

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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Book Now"
        title="Simple, Discreet Booking in Gurgaon"
        description="A refined booking experience designed around your comfort, privacy, and schedule. Our team coordinates quickly and discreetly across Gurugram."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Booking' }]}
      />

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
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base text-gray-700 leading-relaxed">
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
      <CtaSection />
    </>
  );
}
