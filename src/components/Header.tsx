'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/profiles', label: 'Profiles' },
  { href: '/categories', label: 'Categories' },
  { href: '/locations', label: 'Areas' },
  { href: '/blog', label: 'Guides' },
  { href: '/booking', label: 'Booking' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      id="page-header"
      className="sticky top-0 z-50 bg-white border-b border-[#eaeaea] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#2f3338] focus:outline-none"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Branding */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} home`}>
              <Image
                src="/gurgaon-escort-service-logo.png"
                alt="Gurgaon Escort Service logo"
                width={52}
                height={52}
                className="h-12 w-12 rounded-full object-cover"
                priority
              />
              <span className="font-sans font-black text-xl sm:text-2xl tracking-wide text-[#2f3338] leading-tight">
                GURGAON <span className="text-[#0B2154] font-light">ESCORT</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-[13px] font-semibold text-gray-700" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={`transition-colors ${pathname === link.href ? 'text-[#2f3338]' : 'hover:text-[#2f3338]'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#2f3338] hover:bg-[#25282d] text-white text-xs font-semibold rounded shadow-md glint-effect transition-all duration-300"
              aria-label="Call now"
            >
              <Phone size={13} className="text-white" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2.5 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className={`block py-2 text-sm font-semibold ${pathname === link.href ? 'text-[#2f3338]' : 'text-gray-800 hover:text-[#2f3338]'}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-100 flex gap-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex-1 text-center py-2.5 bg-[#2f3338] text-white text-xs font-bold rounded shadow"
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 bg-[#13bc18] text-white text-xs font-bold rounded shadow"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
