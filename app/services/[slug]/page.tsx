import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/home/CtaSection';
import { services, getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const title = `${service.name} in Gurgaon | ${siteConfig.name}`;
  const description = service.shortDescription;
  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/services/${service.slug}`,
      type: 'website',
      images: [{ url: service.image, width: 1200, height: 630, alt: service.name }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
      { '@type': 'ListItem', position: 3, name: service.name, item: `${siteConfig.url}/services/${service.slug}` },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in Gurgaon`,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
    },
    areaServed: { '@type': 'City', name: 'Gurgaon' },
    url: `${siteConfig.url}/services/${service.slug}`,
    image: service.image,
  };

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHero
        eyebrow="Our Services"
        title={service.name}
        description={service.shortDescription}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.name }]}
      />

      <section className="section-padding bg-[#fffaf9]">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury">
              <Image src={service.image} alt={service.name} width={800} height={600} className="w-full h-auto object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0d]/20 to-transparent" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#671725] mb-3">Service Details</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a0a0d] mb-5">{service.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#671725] shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={`tel:${siteConfig.phone}`} className="btn-luxury">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${service.name} in Gurgaon.`)}`} target="_blank" rel="noopener noreferrer" className="btn-luxury-whatsapp">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fdf8f5]">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#671725] mb-3">More Services</p>
            <h2 className="font-serif text-3xl font-bold text-[#1a0a0d]">Explore Other Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl p-6 border border-rose-100/60 shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all">
                <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#671725] transition-colors mb-2">{s.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">{s.shortDescription}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#671725]">Learn More <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
