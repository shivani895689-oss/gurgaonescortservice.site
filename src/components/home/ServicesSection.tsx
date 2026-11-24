import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-luxury">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#671725] text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Premium <span className="font-serif italic text-[#671725]">Companion Experiences</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We offer a curated range of companion services designed for comfort, discretion, and
            refined experiences across Gurgaon&apos;s finest hotels, residences, and social venues.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-luxury">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
