import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import BlogCard from '@/components/BlogCard';
import CtaSection from '@/components/home/CtaSection';
import {
  BookingJourneyBlock,
  ExpectationBlock,
  LocalZoneBlock,
  NearMeBlock,
  RateGuideBlock,
} from '@/components/content/SeoContentBlocks';
import { EtiquetteBlock, ExtraFaqBlock, TimingBlock } from '@/components/content/SeoContentExtra';
import { blogPosts } from '@/data/blog';
import { categories } from '@/data/categories';
import { locations, locationPath } from '@/data/locations';
import { siteConfig } from '@/data/siteConfig';
import { gurgaonAreas } from '@/lib/gurgaonAreas';
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  jsonLdScript,
  pageMetadata,
  webPageSchema,
} from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Gurgaon Escort Guide & Blog | Call Girls, Dining, Nightlife',
  description:
    'Gurgaon guides written from the ground up: booking call girls, area-by-area arrival times, fine dining, nightlife, luxury hotels and weekend escapes around Gurugram.',
  path: '/blog',
  keywords: [
    'gurgaon escort guide',
    'call girl in gurgaon guide',
    'gurgaon nightlife guide',
    'fine dining restaurants in gurgaon',
    'luxury hotel in gurgaon',
    'escort service in gurgaon blog',
  ],
  image: '/img/call-girls-in-gurgaon-guide.webp',
  imageAlt: 'Gurgaon escort guide and blog by Alina Editorial',
});

const hubFaqs = [
  {
    question: 'What is the Gurgaon escort guide?',
    answer:
      'A set of long-form guides written for people actually booking in Gurugram: how the city is laid out, how long an arrival takes in each belt, what hotels and societies expect, and what a fair rate looks like in 2026.',
  },
  {
    question: 'How often are the guides updated?',
    answer:
      'Every guide carries a last-updated date. Rates, hotel policies and venue details are reviewed through the year, and anything that changes in the city, from new societies to new restaurants, is folded into the relevant guide rather than left out of date.',
  },
  {
    question: 'Do the guides cover areas outside Gurgaon?',
    answer:
      'They focus on Gurugram and the immediate airport belt around Aerocity and Mahipalpur. Weekend guides also cover drives to Neemrana, Jaipur, Alwar and Rishikesh because those are the trips Gurgaon residents actually take.',
  },
  {
    question: 'Can I book a companion directly from a guide?',
    answer:
      'Yes. Every guide links to the area and profile pages, and the booking team can be reached by phone or WhatsApp. Send the area, the time and the duration and the team will confirm who is available.',
  },
  {
    question: 'Are the guides written for first-time clients?',
    answer:
      'The booking and near-me guides are written specifically for first-time clients, covering how verification works, why deposits should be refused, and how to check availability without a long back-and-forth.',
  },
  {
    question: 'Which guide should I read first?',
    answer:
      'Start with the call girls in Gurgaon booking guide. It explains the city, the rate bands and the etiquette in one place, and every other guide assumes you have read it.',
  },
];

const hubSections = [
  {
    heading: 'How these Gurgaon guides are written',
    paragraphs: [
      'Most city guides are written from a desk in another city. These are not. Every guide here starts from the same operating knowledge that runs this site: which hotels actually allow evening guests, how long it takes to cross from DLF to Golf Course Extension at seven in the evening, which society gates need a visitor pass and which restaurants will seat a table for two at nine on a Saturday.',
      'That means the advice is occasionally unglamorous. A guide will tell you that the nearest companion is not always the fastest, that a demand for an advance payment is a red flag, and that Friday night in Sector 29 is the worst possible time to try a last-minute booking. It is more useful than flattering, and it is reviewed through the year rather than published once.',
      'Each guide carries a last-updated date and a named author, follows the same structure, and links to the area and profile pages it refers to. If something in a guide has changed on the ground, the area page is where the current version lives.',
    ],
  },
  {
    heading: 'The four belts every guide refers to',
    paragraphs: [
      'Gurgaon is easier to understand as four belts than as a list of sectors. The first is Cyber City and Udyog Vihar, the corporate belt, where bookings happen after meetings rather than before dinner. The second is Golf Course Road and its extension, the hotel and condominium corridor, where presentation and discretion matter most.',
      'The third is MG Road and Sector 29, the original nightlife district, still the densest cluster of bars and restaurants in the city. The fourth is the residential south and west: Sohna Road, South City, Sushant Lok and the newer sectors beyond, where bookings are quieter, earlier and almost always at home.',
      'Once you know which belt your hotel or flat sits in, most other questions answer themselves. Arrival times, dress codes, the kind of companion who fits the evening and the realistic rate all follow from the belt, which is why every guide starts there.',
    ],
  },
  {
    heading: 'Booking, rates and timing in 2026',
    paragraphs: [
      'Rates in Gurgaon have stayed remarkably stable. A two-hour booking sits between ₹5,000 and ₹8,000, an evening of three to four hours between ₹8,000 and ₹12,000, and a full night between ₹15,000 and ₹25,000. VIP, model and air hostess bookings are quoted higher and usually carry a longer minimum.',
      'Timing is the variable that decides whether an evening works. Between six and eight in the evening every road in the city is a queue, and a companion crossing from DLF to Sohna Road can lose twenty-five minutes. Book either side of that window and the arrival time you were quoted is the one you get.',
      'Payment is made at the meeting, directly to the companion, in cash or by UPI. No genuine Gurgaon service asks for a deposit, a booking fee or a transport advance, and any listing that does should be treated as fraudulent regardless of how convincing the photographs are.',
    ],
  },
  {
    heading: 'Dining, nightlife and the shape of a Gurgaon evening',
    paragraphs: [
      'A Gurgaon evening usually has three parts: dinner, a drink, and a decision about how long to continue. Cyber Hub covers the first two in one walkable campus. Golf Course Road does it with hotel restaurants and quieter lounges. Sector 29 does it louder and later, and MG Road does it cheaper.',
      'The guides in this section cover each of those properly, including the practical details that reviews leave out: which restaurants hold a table past nine, which clubs turn away stag groups, how much a hotel bar actually costs, and where to go when everything has closed and you are not ready for the night to end.',
      'If the evening includes a companion, the dining guide explains how to book a table for two from the start and how to share a dress code, and the nightlife guide covers the venues where a companion will not feel out of place. Both are written to be read before you book, not after.',
    ],
  },
  {
    heading: 'Weekends, hotels and getting out of the city',
    paragraphs: [
      'Gurgaon is unusually well placed for a weekend away. Neemrana is ninety minutes, Jaipur four hours, and the Aravallis start at the edge of the city. The weekend guide ranks twelve drives by how long you want to spend in the car, with honest notes on roads and timing.',
      'The hotel guide covers the five-stars by what they are actually good at rather than by star rating: The Oberoi for quiet formality, The Leela for Cyber City access, Taj City Centre for MG Road, Grand Hyatt for the Golf Course Extension towers and Aerocity for layovers.',
      'Together they answer the question visitors ask most often, which is where to stay and what to do with the evening once you have checked in. The answer depends almost entirely on which belt your business is in.',
    ],
  },
];

export default function BlogIndexPage() {
  const subject = { name: 'call girls in Gurgaon', kind: 'escort', slug: 'blog' };
  const nearMe = Array.from({ length: 12 }, (_, index) => gurgaonAreas[(index * 5 + 1) % gurgaonAreas.length]);

  const schema = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
    webPageSchema({
      name: 'Gurgaon Escort Guide & Blog',
      description: 'Long-form guides to booking companions, dining, nightlife and hotels in Gurugram.',
      path: '/blog',
      pageType: 'CollectionPage',
      faqs: hubFaqs,
    }),
    itemListSchema({
      name: 'Gurgaon guides',
      path: '/blog',
      items: blogPosts.map((post) => ({ name: post.title, path: '/blog/' + post.slug, description: post.excerpt })),
    }),
    faqSchema(hubFaqs, absoluteUrl('/blog') + '#faq'),
  ];

  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="The Gurgaon Escort Guide"
        description="Long-form, locally written guides to booking companions in Gurugram, plus honest notes on dining, nightlife, hotels and weekend drives."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section className="border-b border-gray-100 bg-[#fdf8f5]">
        <div className="container-luxury py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="page-summary max-w-3xl text-sm leading-relaxed text-gray-700">
              <span className="font-semibold text-[#2f3338]">Quick answer: </span>
              These guides explain how booking works across Gurgaon in practice: arrival times by belt, hotel and society visitor rules, realistic
              2026 rates and how to verify a profile before you confirm. Start with the booking guide, then read the area you are staying in.
            </p>
            <a href={'tel:' + siteConfig.phone} className="btn-luxury shrink-0 text-sm">
              <Phone className="h-4 w-4" /> {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Latest Guides</p>
            <h2 className="font-serif text-3xl font-bold text-[#4a4d52]">Read before you book</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Ten guides covering the questions clients actually ask, from how fast a companion can reach a Cyber City hotel to what a fine
              dining table in Gurgaon really costs.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} priority={index < 3} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fdf8f5] border-t border-gray-200/70">
        <div className="container-luxury max-w-4xl">
          {hubSections.map((section) => (
            <div key={section.heading} className="mb-10 last:mb-0">
              <h2 className="font-serif text-2xl font-bold text-[#2f3338]">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <div id="faq" className="mt-12">
            <h2 className="font-serif text-2xl font-bold text-[#2f3338]">About these guides</h2>
            <div className="mt-4 space-y-3">
              {hubFaqs.map((faq) => (
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

          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="font-serif text-lg font-bold text-[#2f3338]">Browse by area</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {locations.map((location) => (
                <Link key={location.slug} href={locationPath(location)} className="flex items-center justify-between gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 transition hover:border-[#2f3338]/30">
                  <span>Call girls in {location.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-300" />
                </Link>
              ))}
            </div>
            <h2 className="mt-8 font-serif text-lg font-bold text-[#2f3338]">Browse by category</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link key={category.slug} href={'/categories/' + category.slug} className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition hover:border-[#2f3338]/30">
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LocalZoneBlock areaName="Gurgaon" zone="dlf" />
      <NearMeBlock subject={subject} areas={nearMe} />
      <ExpectationBlock subject={subject} />
      <BookingJourneyBlock subject={subject} phoneDisplay={siteConfig.phoneDisplay} />
      <RateGuideBlock subject={subject} baseRate={7000} />
      <TimingBlock subject={subject} />
      <EtiquetteBlock subject={subject} />
      <ExtraFaqBlock subject={subject} phoneDisplay={siteConfig.phoneDisplay} />

      <CtaSection />

      {schema.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(item)} />
      ))}
    </>
  );
}
