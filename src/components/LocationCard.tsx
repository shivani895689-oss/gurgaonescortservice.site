import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';
import type { ServiceLocation } from '@/data/locations';

export default function LocationCard({ location }: { location: ServiceLocation }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group block bg-white rounded-2xl border border-rose-100/80 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose-950/5 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={location.image}
          alt={location.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0a0d]/45 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <MapPin className="w-4 h-4 text-[#F3E5AB]" />
          <span className="font-serif text-lg font-semibold">{location.name}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{location.shortDescription}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#671725] group-hover:gap-2.5 transition-all">
          View Area <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
