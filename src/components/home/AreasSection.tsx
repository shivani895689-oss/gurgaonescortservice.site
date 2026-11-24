import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { locations } from '@/data/locations';

export default function AreasSection() {
  return (
    <section className="section-padding bg-[#fdf8f5]" id="areas">
      <div className="container-luxury">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#671725] text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Serving <span className="font-serif italic text-[#671725]">Prime Gurgaon</span> Locations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our companion services are available across all major areas of Gurugram. Whether you are
            at a luxury hotel on Golf Course Road or a private residence in DLF, we coordinate
            discreet arrivals with care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group bg-white border border-rose-100/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-rose-950/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#671725] flex items-center justify-center shrink-0 group-hover:bg-[#671725] group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{location.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{location.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#671725] mt-3">
                    View Area <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/locations" className="btn-luxury">
            View All Locations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
