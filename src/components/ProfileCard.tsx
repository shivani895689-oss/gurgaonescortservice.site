'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, MessageCircle, Phone, Star, BadgeCheck } from 'lucide-react';
import { profilePath, type Profile } from '@/lib/profiles';
import { siteConfig } from '@/data/siteConfig';

interface ProfileCardProps {
  profile: Profile;
  priority?: boolean;
}

export default function ProfileCard({ profile, priority = false }: ProfileCardProps) {
  const whatsappUrl =
    'https://wa.me/' + siteConfig.whatsapp + '?text=' +
    encodeURIComponent('Hi, I am interested in the ' + profile.name + ' (' + profile.categoryLabel + ') profile on ' + siteConfig.name + '.');

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/5">
      <Link href={profilePath(profile)} className="block">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={profile.image}
            alt={profile.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2f3338]/70 via-[#2f3338]/5 to-transparent" />
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
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-end justify-between gap-3">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-white">
                  {profile.name}, {profile.age}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-white/85">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-sm text-white backdrop-blur-sm">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {profile.rating}
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <p className="line-clamp-2 text-sm leading-6 text-gray-600">{profile.tagline}</p>

        <div className="flex flex-wrap gap-2">
          {profile.languages.slice(0, 3).map((lang) => (
            <span
              key={lang}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600"
            >
              {lang}
            </span>
          ))}
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            {profile.availability}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">Starting from</p>
            <p className="font-serif text-xl font-semibold text-[#2f3338]">{profile.priceLabel}</p>
          </div>
          <Link
            href={profilePath(profile)}
            className="text-sm font-semibold text-[#2f3338] transition hover:text-[#4a4d52]"
          >
            View Profile →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={'tel:' + siteConfig.phone}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f3338] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4a4d52]"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </article>
  );
}
