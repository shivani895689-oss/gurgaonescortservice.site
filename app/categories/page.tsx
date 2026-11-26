import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { Faq } from '@/components/Faq';
import { SectionHeading } from '@/components/SectionHeading';
import { Phone, MessageCircle, Shield, Clock, MapPin, Star } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { gurgaonAreas } from '@/lib/gurgaonAreas';
import {
  AreaCoverageBlock,
  BookingJourneyBlock,
  DiscretionBlock,
  ExpectationBlock,
  NearMeBlock,
  RateGuideBlock,
} from '@/components/content/SeoContentBlocks';
import { EtiquetteBlock, ExtraFaqBlock, TimingBlock } from '@/components/content/SeoContentExtra';

import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

const baseUrl = siteConfig.url.replace(/\/+$/, '');

export const metadata: Metadata = pageMetadata({
  title: 'Escort Categories in Gurgaon | VIP, Russian, GFE & More',
  description:
    'Explore VIP, independent, Russian, model, air hostess, GFE and party escort categories in Gurgaon. Verified companions with discreet 24/7 booking across Gurugram.',
  path: '/categories',
  keywords: [
    'escort categories in Gurgaon',
    'Gurgaon escort categories near me',
    'VIP escorts Gurgaon',
    'independent escorts Gurugram',
    'Russian escorts Gurgaon',
    'GFE escorts Gurgaon',
    'party companions Gurugram',
    'best escort service categories Gurgaon',
  ],
  imageAlt: 'Escort categories in Gurgaon and Gurugram',
});

const categoryFaqs = [
  {
    q: 'What escort categories are available in Gurgaon?',
    a: 'We offer a wide range of categories in Gurgaon including VIP Companions, Independent Companions, Russian Companions, Model Companions, College Companions, Air Hostess Companions, High Profile Companions, Celebrity Companions, Girlfriend Experience (GFE) Companions, and Party & Event Companions. Each category is designed for a different mood, occasion, and preference across Gurugram.',
  },
  {
    q: 'How do I choose the right escort category near me in Gurgaon?',
    a: 'Start with the kind of experience you want. VIP and High Profile companions suit premium hotel or corporate settings, Independent and GFE companions are great for a natural relaxed connection, while Russian, Model, or Celebrity companions fit upscale social occasions. If you are unsure, our team can recommend the best category based on your location in Gurugram, timing, and preferences.',
  },
  {
    q: 'Are all categories available across Gurugram?',
    a: 'Yes. We coordinate companions across all major Gurugram areas including DLF Cyber City, Golf Course Road, MG Road, Sector 29, Sohna Road, Udyog Vihar, and Golf Course Extension Road. Availability may vary by category, area, and timing, so contacting us directly is the fastest way to confirm.',
  },
  {
    q: 'Can I book a category companion for a hotel in Gurgaon?',
    a: 'Absolutely. Most of our categories are available for 5-star hotel bookings, serviced apartments, and private residences across Gurgaon. Share your hotel or location, preferred time, and category, and we will handle the coordination discreetly.',
  },
  {
    q: 'Is booking through escort categories in Gurgaon discreet?',
    a: 'Yes. Privacy is central to how we work. Every inquiry, profile discussion, and booking coordination is handled confidentially, whether you book by WhatsApp or phone call.',
  },
  {
    q: 'Do you offer same-day category bookings near me in Gurugram?',
    a: 'Same-day bookings are often possible depending on the category, your location in Gurugram, and current availability. For the fastest confirmation, message us on WhatsApp or call with your area, preferred time, and category.',
  },
];

const popularSearches = [
  'VIP escorts in Gurgaon',
  'independent escorts near me',
  'Russian escorts Gurugram',
  'GFE companions in Gurgaon',
  'high profile escorts Gurgaon',
  'model escorts near Cyber City',
  'party companions Sector 29',
  'air hostess escorts near me',
  'celebrity companions Gurgaon',
  'college escorts MG Road',
];

const localAreas = [
  'DLF Cyber City', 'Golf Course Road', 'MG Road', 'Sector 29', 'DLF Phase 1-5',
  'Sohna Road', 'Udyog Vihar', 'Golf Course Extension Road', 'Sushant Lok', 'HUDA City Centre',
];

export default function CategoriesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Categories', item: `${baseUrl}/categories` },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Escort Categories in Gurgaon',
    description: 'Browse verified escort companion categories available across Gurugram.',
    itemListElement: categories.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      url: `${baseUrl}/categories/${c.slug}`,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: categoryFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-[#2f3338] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium tracking-wide uppercase text-gray-300 mb-6">
            <Star className="w-3.5 h-3.5 text-white/70" />
            {categories.length} Premium Categories
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Best Escort Categories in{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-200 via-white to-gray-300">Gurgaon</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Looking for the right companion category near you in Gurugram? Explore verified options from VIP and Independent to Russian, GFE, Model, and Party companions - each curated for a different mood, occasion, and style of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to explore escort categories in Gurgaon.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#2f3338] font-semibold rounded-full hover:bg-gray-100 transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
            <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              <Phone className="w-4 h-4" /> Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Browse by Category"
            title="Find the Right Companion Experience in Gurugram"
            description="Every category is curated with a different vibe, occasion, and expectation in mind. Whether you want premium elegance, a natural connection, or a lively event companion, browse below and choose what fits you best."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="py-16 lg:py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How to Choose"
            title="Which Escort Category Is Right for You?"
            description="Not sure where to start? Here’s a simple way to pick the best category based on the experience you’re looking for in Gurgaon."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Star, title: 'For Premium & Elite Occasions', desc: 'Choose VIP, High Profile, or Celebrity companions when you want a refined presence for 5-star hotels, corporate events, or exclusive private gatherings in Gurugram.' },
              { icon: Shield, title: 'For a Natural, Relaxed Connection', desc: 'Independent and GFE companions are ideal if you value easy conversation, warmth, and a comfortable, no-pressure experience near you in Gurgaon.' },
              { icon: MapPin, title: 'For Events, Parties & Social Plans', desc: 'Model, Party & Event, or Russian companions are great picks for lively nights, celebrations, upscale dinners, and social occasions across Gurugram.' },
              { icon: Clock, title: 'For Business Travel & Formal Meetings', desc: 'Air Hostess and High Profile companions bring polished etiquette, confident communication, and a professional presence suited to business travelers.' },
              { icon: Phone, title: 'For Quick, Discreet Local Booking', desc: 'Tell us your area in Gurgaon, preferred time, and the vibe you want. Our team will recommend the best available category and coordinate discreetly.' },
              { icon: MessageCircle, title: 'Not Sure? Ask Us on WhatsApp', desc: 'If you are browsing "escort categories near me in Gurgaon" and feel unsure, message us. We will guide you to the right category based on your real preferences.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#f3f4f6] flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#2f3338]" />
                </div>
                <h3 className="font-semibold text-[#2f3338] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO / Near Me */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f3f4f6] border border-gray-200/50 rounded-full text-xs font-medium tracking-wide uppercase text-gray-600 mb-5">
                <MapPin className="w-3.5 h-3.5 text-gray-400" /> Near You in Gurugram
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4a4d52] mb-5">Escort Categories Available Near You Across Gurgaon</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you are searching for "VIP escorts near me in Gurgaon", "independent companions in Gurugram", or a specific category for a hotel or private booking, our team coordinates discreetly across the city's most popular areas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From business hubs like DLF Cyber City and Udyog Vihar to premium neighborhoods like Golf Course Road, MG Road, and DLF Phases, we help you find the right companion category with quick, confidential local support.
              </p>
              <div className="flex flex-wrap gap-2">
                {localAreas.map((area) => (
                  <span key={area} className="inline-flex items-center px-3 py-1.5 bg-[#fafafa] text-sm text-gray-700 rounded-full border border-gray-200">{area}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#fafafa] rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="font-serif text-2xl font-bold text-[#4a4d52] mb-4">Popular Category Searches in Gurgaon</h3>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">People often discover our category pages through these high-intent searches:</p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <span key={term} className="inline-flex items-center px-3 py-1.5 bg-white text-sm text-gray-600 rounded-full border border-gray-200">{term}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions About Escort Categories in Gurgaon"
            description="Quick answers to common questions about choosing, booking, and finding the right companion category near you in Gurugram."
          />
          <div className="space-y-3">
            {categoryFaqs.map((faq, i) => (
              <Faq key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <AreaCoverageBlock
        subject={{ name: 'Gurgaon escorts', kind: 'escort', slug: 'categories' }}
        areas={gurgaonAreas.slice(0, 20)}
        heading="Which Gurgaon neighbourhood suits which category"
      />
      <NearMeBlock subject={{ name: 'Gurgaon escorts', kind: 'escort', slug: 'categories' }} areas={gurgaonAreas.slice(0, 12)} />
      <ExpectationBlock subject={{ name: 'Gurgaon escorts', kind: 'escort', slug: 'categories' }} />
      <BookingJourneyBlock subject={{ name: 'Gurgaon escorts', kind: 'escort', slug: 'categories' }} phoneDisplay={siteConfig.phoneDisplay} />
      <RateGuideBlock subject={{ name: 'Gurgaon escorts', kind: 'escort', slug: 'categories' }} baseRate={7000} />
      <DiscretionBlock subject={{ name: 'Gurgaon escorts', kind: 'escort', slug: 'categories' }} />
      <TimingBlock subject={{ name: 'Gurgaon escorts', kind: 'escort', slug: 'categories' }} />
      <EtiquetteBlock subject={{ name: 'Gurgaon escorts', kind: 'escort', slug: 'categories' }} />
      <ExtraFaqBlock subject={{ name: 'Gurgaon escorts', kind: 'escort', slug: 'categories' }} phoneDisplay={siteConfig.phoneDisplay} />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#2f3338]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">Not Sure Which Category to Pick?</h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Tell us your location in Gurgaon, preferred time, and the kind of experience you have in mind. Our team will recommend the best available category and coordinate everything discreetly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I need help choosing an escort category in Gurgaon.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#2f3338] font-semibold rounded-full hover:bg-gray-100 transition-colors">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              <Phone className="w-4 h-4" /> Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}