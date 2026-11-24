import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Shield, Clock, Heart } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/categories', label: 'Categories' },
  { href: '/locations', label: 'Areas' },
  { href: '/booking', label: 'How to Book' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a0a0d] text-white" role="contentinfo">
      <div className="container-luxury section-padding pb-10!">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#671725] to-[#420c16] text-white font-serif text-lg font-bold">
                G
              </span>
              <div className="leading-tight">
                <span className="block font-serif text-lg font-bold text-white">Gurgaon<span className="text-[#D4AF37]">.</span></span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-rose-200/70">Escort Service</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed mb-5">
              A premium Gurgaon Escort Service focused on discretion, verified profiles, and refined companionship experiences across Gurugram&apos;s most prestigious locations.
            </p>
            <div className="flex gap-3">
              <a href={`https://wa.me/${siteConfig.whatsapp}`} aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href={`tel:${siteConfig.phone}`} aria-label="Call" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#671725] flex items-center justify-center transition">
                <Phone className="w-4 h-4" />
              </a>
              <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#671725] flex items-center justify-center transition">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Popular Areas</h3>
            <ul className="space-y-2.5">
              {['DLF Phase 1-5', 'Cyber City', 'Golf Course Road', 'MG Road', 'Sohna Road', 'Udyog Vihar'].map((area) => (
                <li key={area} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[#D4AF37] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition">{siteConfig.phoneDisplay}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition break-all">{siteConfig.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#D4AF37] shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-[#D4AF37] shrink-0" />
                <span>Available 24/7 across Gurugram</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-gray-400">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#D4AF37]" /> 100% Discreet</span>
              <span className="inline-flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-[#D4AF37]" /> Premium Service</span>
            </div>
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-gray-500 max-w-4xl">
            Disclaimer: This website is intended for adults aged 18+ only. All content is for informational and companionship service purposes. We promote respectful, lawful, and consensual interactions. By accessing this site, you confirm that you are of legal age in your jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  );
}
