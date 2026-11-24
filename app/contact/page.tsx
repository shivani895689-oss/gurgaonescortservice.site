import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Contact Us | Book Gurgaon Escort Service',
  description:
    'Contact Gurgaon Escort Service for discreet booking coordination across Gurugram. Call or WhatsApp for quick availability, premium companion options, and 24/7 private support.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Book Gurgaon Escort Service',
    description:
      'Contact Gurgaon Escort Service for discreet booking coordination across Gurugram. Call or WhatsApp for quick availability and 24/7 private support.',
    url: `${siteConfig.url}/contact`,
    type: 'website',
    images: [{ url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: 'Contact Gurgaon Escort Service' }],
  },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Us | Book Gurgaon Escort Service',
      description: 'Contact Gurgaon Escort Service for discreet booking coordination across Gurugram. Call or WhatsApp for quick availability and 24/7 private support.',
      images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'],
    },
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    description: 'Speak directly with our coordination team for immediate assistance.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: `+${siteConfig.whatsapp}`,
    href: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hi, I would like to inquire about your premium companion services in Gurgaon.')}`,
    description: 'Quick, discreet WhatsApp communication for availability and booking details.',
    external: true,
  },
  {
    icon: Mail,
    title: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: 'Send us your inquiry and we\'ll respond with care and discretion.',
  },
  {
    icon: MapPin,
    title: 'Service Area',
    value: `${siteConfig.structuredAddress.streetAddress}, ${siteConfig.structuredAddress.addressLocality}`,
    href: '/locations',
    description: 'Serving DLF, Cyber City, Golf Course Road, and all premium Gurugram areas.',
  },
];

const bookingTips = [
  'Share your preferred location, hotel, or neighborhood in Gurgaon.',
  'Let us know your expected time, duration, and any companion preference.',
  'Use call or WhatsApp for the fastest response and discreet coordination.',
  'Our team handles every inquiry with privacy, respect, and clear communication.',
];

export default function ContactPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteConfig.url}/contact` },
    ],
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Gurgaon Escort Service',
    description: 'Contact Gurgaon Escort Service for discreet booking coordination across Gurugram.',
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      areaServed: 'Gurgaon, Haryana, India',
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch Discreetly"
        description="We're available 24/7 for discreet inquiries, availability checks, and premium companion booking coordination across Gurgaon and Gurugram."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="section-padding bg-[#fdf8f5]">
        <div className="container-luxury">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  className="group bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-[#2f3338]/8 flex items-center justify-center mb-4 group-hover:bg-[#2f3338] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#2f3338] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h2 className="font-serif text-lg font-bold text-gray-900 mb-1">{method.title}</h2>
                  <p className="text-sm font-semibold text-[#2f3338] mb-2 break-all">{method.value}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{method.description}</p>
                </a>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200/60 shadow-sm">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Before You Reach Out</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a4d52] mb-4">For a Faster, Smoother Response</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A clear message helps us confirm availability quickly and coordinate the right companion for your location and timing in Gurgaon.
              </p>
              <ul className="space-y-4">
                {bookingTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-[#2f3338] shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#2f3338] to-[#4e1420] rounded-3xl p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-[#D8DCE2]" />
                <div>
                  <h2 className="font-serif text-2xl font-bold">Available 24/7</h2>
                  <p className="text-gray-200/80 text-sm">Always here when you need us</p>
                </div>
              </div>
              <p className="text-gray-100/90 leading-relaxed mb-6">
                Whether you&apos;re planning ahead or looking for same-day availability, our team is ready to assist with prompt, discreet coordination across all premium areas of Gurgaon.
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-4 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#D8DCE2]" />
                  <div>
                    <p className="text-xs text-gray-300/70 uppercase tracking-wider">Call Now</p>
                    <p className="font-semibold">{siteConfig.phone}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366]/15 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-xl p-4 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <div>
                    <p className="text-xs text-gray-300/70 uppercase tracking-wider">WhatsApp</p>
                    <p className="font-semibold">+{siteConfig.whatsapp}</p>
                  </div>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-sm text-gray-200/80">
                <Shield className="w-4 h-4 text-[#D8DCE2]" /> 100% private and confidential communication
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
