import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Shield,
  Heart,
  ArrowRight,
  Instagram,
  Twitter,
  Facebook,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { categories } from '@/data/categories';
import { locations, locationPath } from '@/data/locations';
import { services } from '@/data/services';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/categories', label: 'Companion Categories' },
  { href: '/locations', label: 'Service Areas' },
  { href: '/blog', label: 'Guides & Blog' },
  { href: '/booking', label: 'How to Book' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact Us' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/disclaimer', label: 'Disclaimer' },
];

const socialIconMap = {
  Instagram,
  Twitter,
  Facebook,
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#3f4348] text-white" role="contentinfo">
      <div className="border-b border-white/10">
        <div className="container-luxury py-10 md:py-12">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D8DCE2]">
                <Shield className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-white">100% Discreet &amp; Confidential</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-300">
                  Private communication and respectful coordination at every step.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D8DCE2]">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-white">24/7 Booking Support</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-300">
                  Fast assistance for Gurgaon hotel, residence, and same-day bookings.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D8DCE2]">
                <Heart className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-white">Premium Companion Experience</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-300">
                  Verified profiles with a comfort-first, quality-focused approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-luxury py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-12 xl:gap-8">
          <div className="xl:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Gurgaon Escort Service home">
              <Image
                src="/gurgaon-escort-service-logo.png"
                alt="Gurgaon Escort Service logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-1 ring-white/20"
              />
              <div className="leading-tight">
                <span className="block font-serif text-2xl font-bold text-white">
                  Gurgaon<span className="text-[#B8BDC4]">.</span>
                </span>
                <span className="block text-[11px] uppercase tracking-[0.22em] text-gray-300/80">
                  Escort Service
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-300">
              {siteConfig.name} offers premium, discreet, and verified companion experiences across Gurugram.
              From DLF Cyber City and Golf Course Road to MG Road and Sohna Road, we provide respectful
              coordination for hotel outcalls, social companionship, and personalized bookings.
            </p>

            <address className="mt-6 space-y-3 text-sm not-italic text-gray-300">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B8BDC4]" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#B8BDC4]" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-white"
                  aria-label={`Call ${siteConfig.phoneDisplay}`}
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#B8BDC4]" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all transition-colors hover:text-white"
                  aria-label={`Email ${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#B8BDC4]" aria-hidden="true" />
                <span>Open 24/7 for calls &amp; WhatsApp inquiries</span>
              </div>
            </address>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                aria-label="Call now"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {siteConfig.socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
                if (!Icon) return null;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} - ${siteConfig.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-200 transition hover:bg-white hover:text-[#2f3338]"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav className="xl:col-span-2" aria-label="Quick links">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D8DCE2]">Quick Links</h2>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-[#B8BDC4] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="xl:col-span-2" aria-label="Companion categories">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D8DCE2]">Categories</h2>
            <ul className="mt-4 space-y-2.5">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/categories"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#D8DCE2] transition-colors hover:text-white"
            >
              View all categories
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </nav>

          <nav className="xl:col-span-2" aria-label="Service areas in Gurgaon">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D8DCE2]">Service Areas</h2>
            <ul className="mt-4 space-y-2.5">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={locationPath(location)}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/locations"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#D8DCE2] transition-colors hover:text-white"
            >
              Explore all areas
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </nav>

          <nav className="xl:col-span-2" aria-label="Our services">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D8DCE2]">Our Services</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#D8DCE2] transition-colors hover:text-white"
            >
              View all services
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </nav>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
          <h2 className="text-base font-semibold text-white">Premium Gurgaon Escort Service Across Gurugram</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            Looking for a trusted Gurgaon escort service near you? {siteConfig.name} connects you with verified
            companions across popular Gurugram locations including DLF Phase 1-5, Cyber City, Udyog Vihar, Golf
            Course Road, Golf Course Extension Road, MG Road, Sector 29, and Sohna Road. Explore our companion
            categories, browse local service areas, and book discreetly for hotel outcalls, dinner dates, business
            events, travel companionship, or personalized VIP experiences.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-xs text-gray-400">
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
            <nav aria-label="Legal links">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-400 transition-colors hover:text-[#D8DCE2]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 flex items-start gap-3">
            <span className="shrink-0 mt-0.5 inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-500/15 text-[10px] font-black text-red-400 leading-none">18+</span>
            <p className="max-w-5xl text-[11px] leading-relaxed text-gray-400">
              <span className="font-semibold text-gray-300">Adults only.</span> This website is strictly for individuals aged 18 years and above. All content is for informational and companionship service purposes only. We promote respectful, lawful, and consensual interactions. By accessing or using this site, you confirm that you are of legal age in your jurisdiction and agree to our{' '}
              <Link href="/terms-and-conditions" className="underline underline-offset-2 hover:text-white transition-colors">Terms</Link>,{' '}
              <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-white transition-colors">Privacy Policy</Link> and{' '}
              <Link href="/disclaimer" className="underline underline-offset-2 hover:text-white transition-colors">Disclaimer</Link>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
