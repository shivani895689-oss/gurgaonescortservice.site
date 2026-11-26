import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Phone, MessageCircle, MapPin, Star, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { categories } from '@/data/categories';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Page Not Found | Gurgaon Escort Service',
  description: 'The page you requested could not be found. Browse verified companions, categories and service areas across Gurgaon, or call us 24/7.',
  robots: { index: false, follow: true },
};

const popularAreas = [
  { label: 'DLF Phase 3', href: '/escort-service-dlf-phase-3-gurgaon' },
  { label: 'Cyber City', href: '/escort-service-cyber-city-gurgaon' },
  { label: 'Golf Course Road', href: '/escort-service-golf-course-road-gurgaon' },
  { label: 'Sector 29', href: '/escort-service-sector-29-gurgaon' },
  { label: 'MG Road', href: '/escort-service-mg-road-gurgaon' },
  { label: 'Sohna Road', href: '/escort-service-sohna-road-gurgaon' },
];

export default function NotFound() {
  return (
    <main className="bg-[#fdf8f5]">
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f3338]">404 Error</p>
        <h1 className="mb-4 font-serif text-4xl font-bold text-[#4a4d52] md:text-5xl">This page has moved</h1>
        <p className="mx-auto max-w-xl leading-relaxed text-gray-600">
          The link you followed no longer exists. Our categories, services and area pages are still live - pick a
          starting point below, or call {siteConfig.phoneDisplay} and our team will point you to the right page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-luxury inline-flex items-center gap-2 text-sm">
            <Home className="h-4 w-4" /> Back to home
          </Link>
          <a href={'tel:' + siteConfig.phone} className="inline-flex items-center gap-2 rounded-full border border-[#2f3338]/20 px-5 py-2.5 text-sm font-semibold text-[#2f3338]">
            <Phone className="h-4 w-4" /> Call {siteConfig.phoneDisplay}
          </a>
          <a
            href={'https://wa.me/' + siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#2f3338]/20 px-5 py-2.5 text-sm font-semibold text-[#2f3338]"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#2f3338]">
              <Sparkles className="h-4 w-4" /> Categories
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              {categories.slice(0, 5).map((category) => (
                <li key={category.slug}>
                  <Link className="hover:text-[#2f3338] hover:underline" href={'/categories/' + category.slug}>
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="font-semibold text-[#2f3338] hover:underline" href="/categories">All categories</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#2f3338]">
              <Star className="h-4 w-4" /> Services
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link className="hover:text-[#2f3338] hover:underline" href={'/services/' + service.slug}>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="font-semibold text-[#2f3338] hover:underline" href="/services">All services</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#2f3338]">
              <MapPin className="h-4 w-4" /> Popular areas
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              {popularAreas.map((area) => (
                <li key={area.href}>
                  <Link className="hover:text-[#2f3338] hover:underline" href={area.href}>{area.label}</Link>
                </li>
              ))}
              <li>
                <Link className="font-semibold text-[#2f3338] hover:underline" href="/locations">All service areas</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
