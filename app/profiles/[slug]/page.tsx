import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BadgeCheck, Clock, Languages, MapPin, MessageCircle, Phone, Star } from 'lucide-react';
import ProfileCard from '@/components/ProfileCard';
import { getProfileBySlug, profiles } from '@/lib/profiles';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return profiles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);
  if (!profile) return { title: 'Profile Not Found' };
  const title = `${profile.name}, ${profile.age} - ${profile.categoryLabel} Companion in ${profile.location}`;
  const description = `${profile.name} is a ${profile.categoryLabel.toLowerCase()} companion in ${profile.location}. ${profile.tagline}. Verified profile, discreet booking, and premium experience.`;
  return {
    title,
    description,
    alternates: { canonical: `/profiles/${profile.slug}` },
    openGraph: { title, description, type: 'profile', images: [{ url: profile.image }] },
  };
}

export default async function ProfileDetailPage({ params }: Props) {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);
  if (!profile) notFound();

  const whatsappUrl = `https://wa.me/917065884666?text=${encodeURIComponent(
    `Hi, I am interested in ${profile.name} (${profile.categoryLabel}) profile on Gurgaon Escort Service.`
  )}`;

  const related = profiles
    .filter((p) => p.slug !== profile.slug && (p.category === profile.category || p.location === profile.location))
    .slice(0, 3);

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
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              {profile.tagline}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={profile.image}
                  alt={`${profile.name} - ${profile.categoryLabel} companion in ${profile.location}`}
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
                    href="tel:+917065884666"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f3338] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4a4d52]"
                  >
                    <Phone className="h-5 w-5" /> Call Now
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
    </main>
  );
}
