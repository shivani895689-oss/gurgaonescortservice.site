import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle, Phone, Shield } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/home/CtaSection';
import {
  AreaCoverageBlock,
  BookingJourneyBlock,
  DiscretionBlock,
  ExpectationBlock,
  LocalZoneBlock,
  NearMeBlock,
  RateGuideBlock,
} from '@/components/content/SeoContentBlocks';
import { EtiquetteBlock, ExtraFaqBlock, TimingBlock } from '@/components/content/SeoContentExtra';
import { categories } from '@/data/categories';
import { landingPages } from '@/data/landingPages';
import { locationGuides } from '@/data/locationGuides';
import { locations, locationPath, type ServiceLocation } from '@/data/locations';
import { services } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';
import { gurgaonAreas } from '@/lib/gurgaonAreas';
import { extraFaqs } from '@/lib/contentFaqs';
import { profilePath, profiles } from '@/lib/profiles';
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  jsonLdScript,
  pageMetadata,
  placeSchema,
  serviceSchema,
  webPageSchema,
} from '@/lib/seo';
import type { Metadata } from 'next';

type Zone = 'old' | 'dlf' | 'golf' | 'south' | 'new' | 'west';

const zoneBySlug: Record<string, Zone> = {
  'dlf-phase-1-5': 'dlf',
  'cyber-city-udyog-vihar': 'dlf',
  'golf-course-road': 'golf',
  'mg-road-sector-29': 'south',
  'sohna-road': 'south',
  'golf-course-extension': 'golf',
};

/**
 * Long area names (Cyber City & Udyog Vihar, Golf Course Extension Road) would
 * push the title past the ~60 character point where Google truncates it, so the
 * template falls back to shorter forms that keep the area name and city intact.
 */
function areaTitle(name: string): string {
  const candidates = [
    `Call Girls in ${name}, Gurgaon | Escort Service 24/7`,
    `Call Girls in ${name}, Gurgaon | 24/7 Escorts`,
    `Call Girls in ${name} Gurgaon | 24/7 Escorts`,
    `Call Girls in ${name}, Gurgaon | 24/7`,
    `Call Girls in ${name} Gurgaon | 24/7`,
    `Call Girls in ${name}, Gurgaon`,
  ];
  // fitTitle() appends the brand only when it still fits inside 62 characters,
  // so the longest candidate that stays under 60 is the one that keeps the most
  // keyword coverage without ever being truncated in a SERP.
  const fitting = candidates.filter((candidate) => candidate.length <= 60);
  return fitting.length > 0 ? fitting.reduce((a, b) => (b.length > a.length ? b : a)) : candidates[candidates.length - 1];
}
/** Root metadata for an area page — the URL itself is the search phrase. */
export function locationMetadata(location: ServiceLocation): Metadata {
  return pageMetadata({
    title: areaTitle(location.name),
    description: `${location.name} call girls and premium escort service in Gurgaon. Verified companions for hotel outcall, VIP escort services and private residence visits around ${location.name}, available 24/7.`,
    path: locationPath(location),
    keywords: [
      location.keyword.toLowerCase() + ' gurgaon',
      'call girl in ' + location.name.toLowerCase() + ' gurgaon',
      'escort service in ' + location.name.toLowerCase() + ' gurgaon',
      'escort service ' + location.name.toLowerCase(),
      location.name.toLowerCase() + ' escorts',
      'vip escort service ' + location.name.toLowerCase(),
      'call girl near me ' + location.name.toLowerCase(),
      'hotel outcall ' + location.name.toLowerCase() + ' gurgaon',
      'independent escorts ' + location.name.toLowerCase() + ' gurgaon',
      'call girls in gurgaon',
      'escort service in gurgaon',
      'vip escort services gurgaon',
    ],
    image: location.image,
    imageAlt: location.imageAlt,
  });
}

function relatedLandingPages(location: ServiceLocation) {
  const needles: Record<string, string[]> = {
    'dlf-phase-1-5': ['dlf phase', 'sikanderpur', 'sushant lok'],
    'cyber-city-udyog-vihar': ['cyber city', 'udyog vihar', 'ambience island'],
    'golf-course-road': ['golf course road', 'sector 42', 'sector 43', 'sector 54', 'sector 55'],
    'mg-road-sector-29': ['mg road', 'sector 29', 'sector 28', 'iffco chowk'],
    'sohna-road': ['sohna road', 'sector 47', 'sector 48', 'sector 49', 'sector 50', 'sector 56', 'sector 57'],
    'golf-course-extension': ['golf course extension', 'sector 58', 'sector 59', 'sector 60', 'sector 65', 'sector 66', 'sector 67'],
  };
  const list = needles[location.slug] || [location.name.toLowerCase()];
  return landingPages
    .filter((page) => page.type === 'location')
    .filter((page) => {
      const hay = (page.slug + ' ' + (page.locationName || '')).toLowerCase();
      return list.some((needle) => hay.includes(needle));
    })
    .slice(0, 8);
}

export default function LocationView({ location }: { location: ServiceLocation }) {
  const guide = locationGuides[location.slug];
  const path = locationPath(location);
  const zone = zoneBySlug[location.slug] || 'dlf';
  const subject = { name: location.keyword, kind: 'escort', slug: location.slug };
  const relatedPages = relatedLandingPages(location);
  const nearby = locations.filter((candidate) => candidate.slug !== location.slug);
  const areaPool = Array.from({ length: 30 }, (_, index) => gurgaonAreas[(location.slug.length + index) % gurgaonAreas.length]);
  const nearMePool = Array.from({ length: 12 }, (_, index) => gurgaonAreas[(location.slug.length + index * 3) % gurgaonAreas.length]);
  const locationProfiles = profiles.slice(0, 9);
  const faqs = [...(guide?.faqs ?? []), ...(location.slug === 'dlf-phase-1-5' ? [] : [])];
  const schemaFaqs = [...faqs, ...extraFaqs(subject.name, subject.kind)];
  const whatsappHref = 'https://wa.me/' + siteConfig.whatsapp + '?text=' + encodeURIComponent('Hi, I need a call girl in ' + location.name + ', Gurgaon.');
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Areas', path: '/locations' },
    { name: location.name, path },
  ];

  const schema = [
    breadcrumbSchema(breadcrumbs),
    serviceSchema({
      name: 'Call Girls in ' + location.name + ', Gurgaon',
      description: location.description,
      path,
      areaName: location.name + ', Gurugram, Haryana',
      serviceType: 'Escort and companion service',
    }),
    webPageSchema({
      name: 'Call Girls in ' + location.name + ', Gurgaon',
      description: location.shortDescription,
      path,
      pageType: 'WebPage',
    }),
    placeSchema({ name: location.name + ', Gurugram', path }),
    itemListSchema({
      name: 'Companion categories available in ' + location.name,
      path,
      items: categories.slice(0, 8).map((category) => ({ name: category.name, path: '/categories/' + category.slug })),
    }),
    faqSchema(schemaFaqs, absoluteUrl(path) + '#faq'),
  ];

  return (
    <>
      <PageHero
        eyebrow={location.name + ' · Gurugram'}
        title={'Call Girls in ' + location.name + ' — Premium Escort Service'}
        description={location.shortDescription + ' Verified companions, hotel outcall and private residence visits across ' + location.name + ', 24/7.'}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Areas', href: '/locations' },
          { label: location.name },
        ]}
      />

      <section className="border-b border-gray-100 bg-[#fdf8f5]">
        <div className="container-luxury py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="page-summary max-w-3xl text-sm leading-relaxed text-gray-700">
              <span className="font-semibold text-[#2f3338]">Quick answer: </span>
              Yes — call girls in {location.name} are available 24/7 through a verified escort service in Gurgaon. Arrivals to hotels, serviced
              apartments and gated societies across {location.name} usually take 30 to 60 minutes, and the rate is confirmed before the companion
              leaves.
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
                {(guide?.intro ?? [location.description]).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <div className="relative aspect-16/10 w-full">
                  <Image
                    src={location.image}
                    alt={location.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="bg-white px-4 py-3 text-xs text-gray-500">
                  {location.name} escort service — verified companion for hotel outcall and private residence visits in Gurgaon.
                </p>
              </div>

              <div className="mt-10 rounded-2xl border border-gray-200 bg-[#fdf8f5] p-6">
                <h2 className="font-serif text-xl font-bold text-[#2f3338]">{location.name} at a glance</h2>
                <div className="mt-4 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
                  <p><span className="font-semibold text-[#2f3338]">Pincodes:</span> {location.pincodes.join(', ')}</p>
                  <p><span className="font-semibold text-[#2f3338]">Metro:</span> {location.metro.join(', ')}</p>
                  <p><span className="font-semibold text-[#2f3338]">Popular societies:</span> {location.localities.slice(0, 5).join(', ')}</p>
                  <p><span className="font-semibold text-[#2f3338]">Hotels:</span> {location.hotels.slice(0, 3).join(', ')}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{location.travelNote}</p>
              </div>

              {(guide?.sections ?? []).map((section) => (
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

              <div className="mt-10">
                <h2 className="font-serif text-2xl font-bold text-[#2f3338]">Escort service rates in {location.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Rates depend on the profile, the duration and the time of day. These are the ranges clients in {location.name} are quoted most
                  often; the exact figure for your booking is confirmed before the companion leaves, with no deposit and no booking fee.
                </p>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#2f3338] text-left text-white">
                        <th className="px-4 py-3 font-semibold">Booking format</th>
                        <th className="px-4 py-3 font-semibold">Duration</th>
                        <th className="px-4 py-3 font-semibold">Typical range</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-200 bg-white"><td className="px-4 py-3">Short booking</td><td className="px-4 py-3">1–2 hours</td><td className="px-4 py-3">₹5,000 – ₹8,000</td></tr>
                      <tr className="border-b border-gray-200 bg-[#faf8f5]"><td className="px-4 py-3">Evening booking</td><td className="px-4 py-3">3–4 hours</td><td className="px-4 py-3">₹8,000 – ₹12,000</td></tr>
                      <tr className="border-b border-gray-200 bg-white"><td className="px-4 py-3">Full night</td><td className="px-4 py-3">Overnight</td><td className="px-4 py-3">₹15,000 – ₹25,000</td></tr>
                      <tr className="bg-[#faf8f5]"><td className="px-4 py-3">VIP / model profile</td><td className="px-4 py-3">3 hours +</td><td className="px-4 py-3">₹12,000 – ₹30,000</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="faq" className="mt-10">
                <h2 className="font-serif text-2xl font-bold text-[#2f3338]">Call girls in {location.name}: frequently asked questions</h2>
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
            </article>

            <aside className="space-y-6 lg:col-span-1">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="font-serif text-lg font-bold text-[#2f3338]">Local details</h2>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2f3338]" /><span>{location.localities.slice(0, 6).join(', ')}</span></li>
                  <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#2f3338]" /><span>24/7 outcall, arrivals usually 30–60 minutes</span></li>
                  <li className="flex gap-2"><Shield className="mt-0.5 h-4 w-4 shrink-0 text-[#2f3338]" /><span>Verified profiles, no deposits, no booking fee</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2f3338]" /><span>Hotels, serviced apartments and gated societies</span></li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="font-serif text-lg font-bold text-[#2f3338]">Companion categories</h2>
                <ul className="mt-4 space-y-2">
                  {categories.slice(0, 7).map((category) => (
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
                <h2 className="font-serif text-lg font-bold">Check availability in {location.name}</h2>
                <p className="mt-2 text-sm text-gray-300">Send your hotel or society name and preferred time. Most requests are confirmed within minutes.</p>
                <a href={'tel:' + siteConfig.phone} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4">
                  <Phone className="h-4 w-4" /> Call {siteConfig.phoneDisplay}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <AreaCoverageBlock subject={subject} areas={areaPool} heading={'Call girls near ' + location.name + ': surrounding neighbourhoods'} />
      <LocalZoneBlock areaName={location.name} zone={zone} />
      <NearMeBlock subject={subject} areas={nearMePool} />
      <ExpectationBlock subject={subject} />
      <BookingJourneyBlock subject={subject} phoneDisplay={siteConfig.phoneDisplay} />
      <RateGuideBlock subject={subject} baseRate={7000} />
      <DiscretionBlock subject={subject} />
      <TimingBlock subject={subject} />
      <EtiquetteBlock subject={subject} />
      <ExtraFaqBlock subject={subject} phoneDisplay={siteConfig.phoneDisplay} />

      {relatedPages.length > 0 && (
        <section className="section-padding bg-[#fdf8f5] border-t border-gray-200/70">
          <div className="container-luxury">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Detailed Area Pages</p>
            <h2 className="font-serif text-3xl font-bold text-[#4a4d52]">Escort service near {location.name}, sector by sector</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
              Every sector and colony around {location.name} has its own page with arrival times, hotel coverage and local notes. Pick the street
              closest to you for the most accurate answer on availability.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedPages.map((page) => (
                <Link key={page.slug} href={'/' + page.slug} className="group flex items-center justify-between rounded-xl border border-gray-200/60 bg-white px-5 py-4 transition-all hover:border-[#2f3338]/20 hover:shadow-sm">
                  <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-[#2f3338]">{page.locationName || page.title}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-gray-300 transition-colors group-hover:text-[#2f3338]" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-white border-t border-gray-200/70">
        <div className="container-luxury">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Companions</p>
          <h2 className="font-serif text-3xl font-bold text-[#4a4d52]">Call girls available in {location.name}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            Verified profiles who take bookings around {location.name}. Each one works the whole of Gurgaon, so availability on a given evening
            depends on the time you need rather than the postcode.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locationProfiles.map((profile) => (
              <li key={profile.id}>
                <Link href={profilePath(profile)} className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 transition hover:border-[#2f3338]/30 hover:shadow-sm">
                  <span className="text-sm text-gray-700">
                    <span className="font-semibold text-[#2f3338]">{profile.name}</span>, {profile.age} · {profile.categoryLabel}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-gray-300" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/profiles" className="btn-luxury text-sm">All profiles <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/categories" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-[#2f3338]">All categories</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fdf8f5] border-t border-gray-200/70">
        <div className="container-luxury">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Nearby Areas</p>
          <h2 className="font-serif text-3xl font-bold text-[#4a4d52]">Call girls in other Gurgaon areas</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((candidate) => (
              <Link key={candidate.slug} href={locationPath(candidate)} className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 transition hover:border-[#2f3338]/30 hover:shadow-sm">
                <span className="text-sm text-gray-700">
                  <span className="font-semibold text-[#2f3338]">Call girls in {candidate.name}</span>
                  <span className="mt-1 block text-xs text-gray-500">{candidate.shortDescription}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-gray-300" />
              </Link>
            ))}
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
