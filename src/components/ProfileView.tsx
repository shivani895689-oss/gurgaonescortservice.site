import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, BadgeCheck, Clock, Languages, MapPin, MessageCircle, Phone, Star } from 'lucide-react';
import ProfileCard from '@/components/ProfileCard';
import { siteConfig } from '@/data/siteConfig';
import { absoluteUrl, breadcrumbSchema, faqSchema, jsonLdScript, webPageSchema } from '@/lib/seo';
import { profilePath, profiles, type Profile } from '@/lib/profiles';

const areaLinks = [
  { label: 'DLF Phase 3', href: '/escort-service-dlf-phase-3-gurgaon' },
  { label: 'Cyber City', href: '/escort-service-cyber-city-gurgaon' },
  { label: 'Golf Course Road', href: '/escort-service-golf-course-road-gurgaon' },
  { label: 'MG Road', href: '/escort-service-mg-road-gurgaon' },
  { label: 'Sector 29', href: '/escort-service-sector-29-gurgaon' },
  { label: 'Sohna Road', href: '/escort-service-sohna-road-gurgaon' },
  { label: 'Sushant Lok', href: '/escort-service-sushant-lok-gurgaon' },
  { label: 'New Gurgaon', href: '/escort-service-new-gurgaon' },
];

export default function ProfileView({ profile }: { profile: Profile }) {
  const path = profilePath(profile);
  const whatsappUrl =
    'https://wa.me/' + siteConfig.whatsapp + '?text=' +
    encodeURIComponent('Hi, I am interested in the ' + profile.name + ' (' + profile.categoryLabel + ') profile on ' + siteConfig.name + '.');

  const related = profiles
    .filter((p) => p.slug !== profile.slug && (p.category === profile.category || p.location === profile.location))
    .slice(0, 3);

  const faqs = profile.faqs;

  return (
    <main className="bg-white">
      <section className="relative bg-[#4a4d52] pb-12 pt-28 sm:pb-16 sm:pt-32">
        <div className="container-luxury">
          <Link
            href="/profiles"
            className="inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Profiles
          </Link>
          <div className="mt-6 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">
              {profile.categoryLabel} Profile
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
              {profile.name}, <span className="text-gold-300">{profile.age}</span>
              <span className="mt-2 block text-xl font-normal text-white/80 sm:text-2xl">
                {profile.categoryLabel} Call Girl in Gurgaon
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              {profile.tagline}
            </p>
          </div>
          <nav aria-label="Breadcrumb" className="mt-6 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="transition hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/profiles" className="transition hover:text-white">Profiles</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/90">{profile.name}</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-[#fdf8f5]">
        <div className="container-luxury py-5">
          <p className="page-summary max-w-4xl text-sm leading-relaxed text-gray-700">
            <span className="font-semibold text-[#2f3338]">Quick answer: </span>
            {profile.name} is a {profile.verified ? 'verified' : 'listed'} {profile.categoryLabel.toLowerCase()} companion and call girl in Gurgaon,
            currently {profile.availability.toLowerCase()}, starting from {profile.priceLabel}. Book on call or WhatsApp; arrivals are
            discreet and the arrangement is confirmed before the companion is dispatched.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={profile.image}
                  alt={profile.name + ' - ' + profile.categoryLabel + ' call girl in Gurgaon'}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2f3338]">
                    {profile.categoryLabel}
                  </span>
                  {profile.verified && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#2f3338]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                      <BadgeCheck className="h-3.5 w-3.5" /> Verified
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
                  <MapPin className="h-4 w-4 text-[#2f3338]" /> {profile.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {profile.rating} Rating
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
                  <Clock className="h-4 w-4 text-[#2f3338]" /> {profile.availability}
                </span>
              </div>

              <div className="mt-8 rounded-2xl border border-gray-200/80 bg-gray-50 p-6">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">Starting from</p>
                    <p className="mt-1 font-serif text-3xl font-semibold text-[#2f3338]">{profile.priceLabel}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">Availability</p>
                    <p className="mt-1 text-sm font-medium text-emerald-700">{profile.availability}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
                  >
                    <MessageCircle className="h-5 w-5" /> WhatsApp Now
                  </a>
                  <a
                    href={'tel:' + siteConfig.phone}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f3338] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4a4d52]"
                  >
                    <Phone className="h-5 w-5" /> {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-[#2f3338]">
                    <Languages className="h-4 w-4" />
                    <p className="text-xs font-semibold uppercase tracking-[0.18em]">Languages</p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {profile.languages.map((lang) => (
                      <span key={lang} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-[#2f3338]">
                    <BadgeCheck className="h-4 w-4" />
                    <p className="text-xs font-semibold uppercase tracking-[0.18em]">Profile Details</p>
                  </div>
                  <dl className="mt-3 space-y-2 text-sm">
                    <div className="flex justify-between gap-4"><dt className="text-gray-500">Category</dt><dd className="text-gray-800">{profile.categoryLabel}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-gray-500">Age</dt><dd className="text-gray-800">{profile.age} Years</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-gray-500">Location</dt><dd className="text-gray-800">{profile.location}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-gray-500">Verified</dt><dd className={profile.verified ? 'text-emerald-700 font-medium' : 'text-gray-500'}>{profile.verified ? 'Yes' : 'No'}</dd></div>
                  </dl>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-sm leading-6 text-amber-900">
                <p className="font-semibold">Discreet &amp; Professional Booking</p>
                <p className="mt-1 text-amber-800/90">
                  Contact us on WhatsApp or call for availability, booking details, and a private consultation. All inquiries are handled with complete confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fdf8f5] border-t border-gray-200/70">
        <div className="container-luxury max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-[#4a4d52]">About {profile.name}</h2>
          <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p>
              {profile.name} speaks {profile.languages.join(', ')}, is listed as {profile.availability.toLowerCase()}, and starts at{' '}
              {profile.priceLabel} with no add-on charges at arrival.
            </p>
          </div>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#4a4d52]">Best suited for</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {profile.specialties.map((item) => (
              <li key={item} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-serif text-xl font-bold text-[#4a4d52]">Where {profile.name} is available in Gurgaon</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {areaLinks.map((area) => (
              <li key={area.href}>
                <Link
                  href={area.href}
                  className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition hover:border-[#2f3338]/30 hover:text-[#2f3338]"
                >
                  {area.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white border-t border-gray-200/70">
        <div className="container-luxury max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-[#4a4d52]">{profile.name} Booking Questions</h2>
          <div className="mt-6 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-base font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-gray-50 border-t border-gray-200/80">
          <div className="container-luxury">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4a4d52]">Similar Profiles</p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-[#2f3338] sm:text-4xl">You May Also Like</h2>
              </div>
              <Link href="/profiles" className="text-sm font-semibold text-[#2f3338] hover:text-[#4a4d52]">
                View all profiles →
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {related.map((p) => (
                <ProfileCard key={p.id} profile={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Profiles', path: '/profiles' },
            { name: profile.name, path },
          ]),
          webPageSchema({
            name: profile.name + ' - ' + profile.categoryLabel + ' call girl in Gurgaon',
            description: profile.tagline,
            path,
            pageType: 'ProfilePage',
          }),
          faqSchema(faqs, path),
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            '@id': absoluteUrl(path) + '#person',
            name: profile.name,
            description: profile.tagline,
            image: profile.image,
            jobTitle: profile.categoryLabel + ' companion',
            knowsLanguage: profile.languages,
            worksFor: { '@id': 'https://gurgaonescortservice.site/#business' },
            url: absoluteUrl(path),
            ...(profile.verified
              ? { hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Verified profile' } }
              : {}),
          },
        ])}
      />
    </main>
  );
}
