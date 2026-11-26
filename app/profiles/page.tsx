import type { Metadata } from 'next';
import Link from 'next/link';
import HubContent from '@/components/HubContent';
import PageHero from '@/components/PageHero';
import ProfilesListing from '@/components/ProfilesListing';
import CtaSection from '@/components/home/CtaSection';
import { profiles } from '@/lib/profiles';
import { siteConfig } from '@/data/siteConfig';
import { breadcrumbSchema, itemListSchema, jsonLdScript, pageMetadata, webPageSchema } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Verified Companion Profiles in Gurgaon | Premium Escorts | Alina',
  description:
    'Browse verified premium companion profiles in Gurgaon and nearby locations. Filter by category, area and availability, then book discreetly on call or WhatsApp, 24/7.',
  path: '/profiles',
  keywords: ["Gurgaon escort profiles","verified escorts Gurgaon","premium companions Gurugram","independent escort profiles Gurgaon","Russian escort profiles Gurgaon","call girls profiles Gurugram","nepali escorts gurgaon profiles","south indian escorts gurugram","nri companions gurgaon","college girl escorts gurugram","model escorts gurgaon profiles","vip escort profiles gurgaon"],
  imageAlt: 'Verified companion profiles in Gurgaon',
});

export default function ProfilesPage() {
  const schema = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Profiles', path: '/profiles' },
    ]),
    webPageSchema({
      name: 'Verified Companion Profiles in Gurgaon',
      description: 'Browse verified premium companion profiles in Gurgaon and nearby locations.',
      path: '/profiles',
    }),
    itemListSchema({
      name: 'Verified companion profiles in Gurgaon',
      path: '/profiles',
      items: profiles.map((profile) => ({
        name: profile.name + ', ' + profile.age + ' - ' + profile.categoryLabel,
        path: '/' + profile.seoSlug,
        description: profile.categoryLabel + ' companion in ' + profile.location,
      })),
    }),
  ];

  return (
    <div className="bg-white">
      <PageHero
        title="Verified Companion Profiles in Gurgaon"
        subtitle="Browse verified premium companions across Gurgaon and nearby locations. Choose by category, location, and preference for a discreet and premium experience."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Profiles' }]}
      />

      <section className="border-b border-gray-100 bg-[#fdf8f5]">
        <div className="container-luxury py-5">
          <p className="page-summary max-w-4xl text-sm leading-relaxed text-gray-700">
            <span className="font-semibold text-[#2f3338]">Quick answer: </span>
            Every profile listed here is verified before publication and shows the companion&apos;s category, home area,
            languages and typical availability. Booking is by call or WhatsApp on {siteConfig.phoneDisplay}, with
            discreet arrivals across Gurugram and the arrangement cost confirmed before dispatch.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <ProfilesListing />
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white pb-16">
        <div className="container-luxury">
          <h2 className="font-serif text-2xl font-bold text-[#2f3338]">Prefer to browse by category or area?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
            Profiles are a starting point. If you already know the kind of evening you want, the category pages explain
            the difference between VIP, independent, Russian, air hostess, high profile, hourly and full-night
            companionship. If you know the area instead, the location hub lists every neighbourhood and sector we cover
            in Gurgaon and Gurugram.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/categories" className="btn-luxury text-sm">Browse categories</Link>
            <Link href="/locations" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-[#2f3338] transition-colors hover:border-[#2f3338]/40">
              Browse service areas
            </Link>
            <Link href="/booking" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-[#2f3338] transition-colors hover:border-[#2f3338]/40">
              How booking works
            </Link>
          </div>
        </div>
      </section>

      <HubContent page="profiles" />
      <CtaSection />

      {schema.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(item)} />
      ))}
    </div>
  );
}
