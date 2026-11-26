import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, MessageCircle, Shield, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/home/CtaSection';
import { siteConfig } from '@/data/siteConfig';
import { getLandingPageBySlug, landingPages } from '@/data/landingPages';
import { locationPageContent } from '@/data/locationPageContent';
import { categories } from '@/data/categories';
import { services } from '@/data/services';
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  jsonLdScript,
  pageMetadata,
  serviceSchema,
  webPageSchema,
} from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);
  if (!page) return {};
  const area = page.locationName || 'Gurgaon';

  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: '/' + page.slug,
    keywords: [
      'escort service in ' + area,
      'escort service ' + area + ' Gurgaon',
      area + ' escorts near me',
      'premium companions ' + area + ' Gurugram',
      'call girls in ' + area,
    ],
    imageAlt: 'Escort service in ' + area + ', Gurgaon',
  });
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);
  if (!page) notFound();

  const rich = locationPageContent[page.slug];
  const locationName = page.locationName || 'Gurgaon';
  const path = '/' + page.slug;

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/locations' },
    { name: locationName, path },
  ];

  const quickAnswer =
    'Yes. Verified companion service is available in ' + locationName + ', Gurugram, seven days a week. ' +
    'Bookings are confirmed on call or WhatsApp within minutes, with discreet arrivals at hotels, serviced apartments and private residences. ' +
    page.metaDescription.split('. ')[0] + '.';

  const faqs = rich?.faqs?.length ? rich.faqs : [];

  // Only link to areas that actually have a landing page, otherwise we ship
  // internal links that 404 and the ItemList schema points at dead URLs.
  const landingSlugSet = new Set(landingPages.map((candidate) => candidate.slug));
  const sectorOf = (value: string) => {
    const match = value.match(/sector\s*(\d+)/i);
    return match ? Number(match[1]) : null;
  };
  const ownSector = sectorOf(locationName);
  // Closest sectors (or closest name share) make far better "nearby" picks than
  // whatever happens to sit next in the data array.
  const relatedScore = (candidate: (typeof landingPages)[number]) => {
    const name = candidate.locationName || candidate.title;
    const sector = sectorOf(name);
    if (ownSector !== null && sector !== null) return Math.abs(ownSector - sector);
    const shared = name.split(/\s+/).filter((word) => word.length > 3 && locationName.includes(word));
    return 100 - shared.length * 10;
  };
  const fallbackAreas = [...landingPages]
    .filter((candidate) => candidate.slug !== page.slug)
    .sort((a, b) => relatedScore(a) - relatedScore(b))
    .map((candidate) => ({ name: candidate.locationName || candidate.title, slug: candidate.slug }));
  const nearbyAreas = (rich?.nearbyAreas?.length ? rich.nearbyAreas : fallbackAreas)
    .filter((area) => area.slug !== page.slug && landingSlugSet.has(area.slug));
  for (const area of fallbackAreas) {
    if (nearbyAreas.length >= 6) break;
    if (!nearbyAreas.some((existing) => existing.slug === area.slug)) nearbyAreas.push(area);
  }
  const finalNearbyAreas = nearbyAreas.slice(0, 6);

  const schema = [
    breadcrumbSchema(breadcrumbs),
    serviceSchema({
      name: 'Escort Service in ' + locationName + ', Gurgaon',
      description: page.metaDescription,
      path,
      areaName: locationName + ', Gurugram, Haryana',
      serviceType: 'Escort and companion service',
    }),
    webPageSchema({
      name: page.metaTitle,
      description: page.metaDescription,
      path,
    }),
    itemListSchema({
      name: 'Companion service areas near ' + locationName + ', Gurugram',
      path,
      items: finalNearbyAreas.map((area) => ({ name: area.name + ' escorts', path: '/' + area.slug })),
    }),
    ...(faqs.length ? [faqSchema(faqs, absoluteUrl(path) + '#faq')] : []),
  ];

  const whatsappHref =
    'https://wa.me/' + siteConfig.whatsapp + '?text=' +
    encodeURIComponent('Hi, I need an escort service in ' + locationName + ', Gurgaon.');

  const introParagraphs = rich?.intro ?? [
    page.description,
    'Our escort service in ' + locationName + ' is coordinated with the same discretion, verified profiles and respectful communication we apply across ' + siteConfig.city + '. Share your hotel, residence or preferred area, and our team will confirm availability quickly.',
  ];

  return (
    <>
      <PageHero
        eyebrow={locationName + ' · Gurugram'}
        title={page.title}
        description={page.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
          { label: locationName },
        ]}
      />

      <section className="border-b border-gray-100 bg-[#fdf8f5]">
        <div className="container-luxury py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="page-summary max-w-3xl text-sm leading-relaxed text-gray-700">
              <span className="font-semibold text-[#2f3338]">Quick answer: </span>
              {quickAnswer}
            </p>
            <div className="flex shrink-0 flex-wrap gap-2">
              <a href={'tel:' + siteConfig.phone} className="btn-luxury text-sm">
                <Phone className="w-4 h-4" /> {siteConfig.phoneDisplay}
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-luxury-whatsapp text-sm">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <article className="lg:col-span-2">
              <div className="space-y-5 text-gray-600 leading-relaxed">
                {introParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {rich?.sections?.map((section) => (
                <div key={section.heading} className="mt-10">
                  <h2 className="font-serif text-2xl font-bold text-[#2f3338]">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2f3338]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}

              <div className="mt-10 rounded-2xl border border-gray-200 bg-[#fdf8f5] p-6">
                <h2 className="font-serif text-xl font-bold text-[#2f3338]">
                  Booking an escort in {locationName}: what to expect
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><Shield className="mt-0.5 h-4 w-4 shrink-0 text-[#2f3338]" /><span>Confidential coordination — your details are shared with no one outside the booking team.</span></li>
                  <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#2f3338]" /><span>Availability 24/7, including late-night arrivals around {locationName} hotels and residences.</span></li>
                  <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2f3338]" /><span>Outcall to hotels, serviced apartments and private addresses across {locationName} and nearby sectors.</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2f3338]" /><span>Verified profiles only, with the arrangement cost confirmed before the companion is dispatched.</span></li>
                </ul>
              </div>

              {faqs.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-serif text-2xl font-bold text-[#2f3338]">{locationName} escort service FAQs</h2>
                  <div className="mt-4 space-y-3">
                    {faqs.map((faq) => (
                      <details key={faq.question} className="group rounded-xl border border-gray-200 bg-white px-5 py-4">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-[#2f3338]">
                          <span>{faq.question}</span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-open:rotate-90" />
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </article>

            <aside className="space-y-6 lg:col-span-1">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="font-serif text-lg font-bold text-[#2f3338]">Companion categories</h2>
                <ul className="mt-4 space-y-2">
                  {categories.slice(0, 6).map((category) => (
                    <li key={category.slug}>
                      <Link href={'/categories/' + category.slug} className="flex items-center justify-between gap-2 text-sm text-gray-600 transition-colors hover:text-[#2f3338]">
                        <span>{category.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-gray-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="font-serif text-lg font-bold text-[#2f3338]">Booking formats</h2>
                <ul className="mt-4 space-y-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link href={'/services/' + service.slug} className="flex items-center justify-between gap-2 text-sm text-gray-600 transition-colors hover:text-[#2f3338]">
                        <span>{service.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-gray-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#2f3338] p-6 text-white">
                <h2 className="font-serif text-lg font-bold">Check availability in {locationName}</h2>
                <p className="mt-2 text-sm text-gray-300">
                  Message our team with your hotel or area and preferred time. Most requests are confirmed in minutes.
                </p>
                <a href={'tel:' + siteConfig.phone} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4">
                  <Phone className="h-4 w-4" /> Call {siteConfig.phoneDisplay}
                </a>
              </div>
            </aside>
          </div>

          <div className="mt-14 border-t border-gray-200 pt-10">
            <h2 className="font-serif text-2xl font-bold text-[#2f3338]">Areas we cover near {locationName}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {finalNearbyAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={'/' + area.slug} className="inline-flex rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 transition-colors hover:border-[#2f3338]/30 hover:text-[#2f3338]">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="inline-flex rounded-full bg-[#2f3338] px-4 py-2 text-sm font-medium text-white">
                  All areas
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-gray-200 pt-8">
            <a href={'tel:' + siteConfig.phone} className="btn-luxury">
              <Phone className="w-4 h-4" /> Call {siteConfig.phoneDisplay}
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-luxury-whatsapp">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CtaSection />

      {schema.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(item)} />
      ))}
    </>
  );
}
