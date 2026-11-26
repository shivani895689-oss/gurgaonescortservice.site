import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, CheckCircle2, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/home/CtaSection';
import { locations, getLocationBySlug } from '@/data/locations';
import { landingPages } from '@/data/landingPages';
import { locationPageContent } from '@/data/locationPageContent';
import { siteConfig } from '@/data/siteConfig';
import { pageMetadata } from '@/lib/seo';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return pageMetadata({
    title: `Escorts in ${location.name}, Gurgaon | Local Guide`,
    description: `${location.shortDescription} Hotel and residence outcalls across ${location.name} and nearby areas, 24/7.`,
    path: '/locations/' + location.slug,
    keywords: [
      `escort service in ${location.name}`,
      `escorts ${location.name} Gurgaon`,
      `call girls ${location.name}`,
      `${location.name} escort service near me`,
    ],
    image: location.image,
    imageAlt: `Escort service in ${location.name}, Gurgaon`,
  });
}

function getRelatedLocationPages(locationName: string, locationSlug: string) {
  const name = locationName.toLowerCase();
  const slug = locationSlug.toLowerCase();
  return landingPages
    .filter((p) => p.type === 'location')
    .filter((p) => {
      const hay = `${p.slug} ${p.locationName || ''} ${p.title}`.toLowerCase();
      if (slug === 'dlf-phase-1-5') return hay.includes('dlf phase');
      if (slug === 'sushant-lok') return hay.includes('sushant lok');
      if (slug === 'mg-road') return hay.includes('mg road');
      if (slug === 'cyber-city') return hay.includes('cyber city') || hay.includes('dlf cyber');
      if (slug === 'golf-course-road') return hay.includes('golf course road') && !hay.includes('extension');
      if (slug === 'golf-course-extension-road') return hay.includes('golf course extension');
      if (slug === 'sohna-road') return hay.includes('sohna road') || hay.includes('south city') || hay.includes('sector 48') || hay.includes('sector 49');
      if (slug === 'sector-29') return hay.includes('sector 29') || hay.includes('sector 28');
      if (slug === 'udyog-vihar') return hay.includes('udyog vihar');
      if (slug === 'iffco-chowk') return hay.includes('iffco chowk');
      if (slug === 'palam-vihar') return hay.includes('palam vihar');
      if (slug === 'dwarka-expressway') return hay.includes('dwarka expressway') || hay.includes('new gurgaon') || hay.includes('sector 82') || hay.includes('sector 83') || hay.includes('sector 84');
      return hay.includes(name);
    })
    .slice(0, 12);
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const content = locationPageContent[location.slug];
  const relatedPages = getRelatedLocationPages(location.name, location.slug);
  const others = locations.filter((l) => l.slug !== location.slug).slice(0, 4);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${siteConfig.url}/locations` },
      { '@type': 'ListItem', position: 3, name: location.name, item: `${siteConfig.url}/locations/${location.slug}` },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Escort Service in ${location.name}, Gurgaon`,
    description: location.description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
    },
    areaServed: { '@type': 'Place', name: `${location.name}, Gurgaon` },
    url: `${siteConfig.url}/locations/${location.slug}`,
    image: location.image,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHero
        eyebrow="Service Area"
        title={`Escort Service in ${location.name}`}
        description={location.shortDescription}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: location.name }]}
      />

      <section className="section-padding bg-[#fdf8f5]">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury">
              <Image src={location.image} alt={`Escort Service in ${location.name}, Gurgaon`} width={800} height={600} className="w-full h-auto object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a4d52]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <MapPin className="w-4 h-4 text-[#2f3338]" />
                <span className="text-sm font-semibold text-gray-800">{location.name}, Gurugram</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Area Details</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a4d52] mb-5">Premium Companions in {location.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{location.description}</p>

              {location.landmarks && location.landmarks.length > 0 && (
                <div className="mb-8">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Nearby Landmarks &amp; Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {location.landmarks.map((lm) => (
                      <span key={lm} className="px-3 py-1.5 bg-white border border-gray-200/60 rounded-full text-xs text-gray-600">{lm}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3 mb-8">
                {['Verified premium companions', 'Fast, discreet coordination', '24/7 availability in this area', 'Hotel & private residence outcall'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2f3338] shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={`tel:${siteConfig.phone}`} className="btn-luxury"><Phone className="w-4 h-4" /> Call Now</a>
                <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm looking for escort service in ${location.name}, Gurgaon.`)}`} target="_blank" rel="noopener noreferrer" className="btn-luxury-whatsapp"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {content && (
        <section className="section-padding bg-[#fdf8f5]">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Local Guide</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a4d52] mb-6">About {location.name} Companion Service</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {content.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>


            </div>
          </div>
        </section>
      )}

      {relatedPages.length > 0 && (
        <section className="section-padding bg-[#fdf8f5]">
          <div className="container-luxury">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Detailed Area Pages</p>
              <h2 className="font-serif text-3xl font-bold text-[#4a4d52]">{location.name} Service Pages</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {relatedPages.map((p) => (
                <Link key={p.slug} href={`/${p.slug}`} className="group flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-gray-200/60 hover:border-[#2f3338]/20 hover:shadow-sm transition-all">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#2f3338] transition-colors">{p.locationName || p.title}</span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#2f3338] transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-[#fdf8f5]">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">More Areas</p>
            <h2 className="font-serif text-3xl font-bold text-[#4a4d52]">Explore Other Locations</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {others.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={l.image} alt={l.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 25vw" />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base font-bold text-gray-900 group-hover:text-[#2f3338] transition-colors mb-1">{l.name}</h3>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2f3338]">View Area <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
