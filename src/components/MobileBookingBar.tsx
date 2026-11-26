'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { track } from '@vercel/analytics';
import { siteConfig } from '@/data/siteConfig';

const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  'Hi, I would like to check availability for a booking in Gurgaon.',
)}`;

/**
 * Mobile-only sticky booking bar. Most search traffic for this category arrives
 * on a phone, where the two actions that matter are a tap-to-call and a
 * pre-filled WhatsApp thread. It is rendered on every page and reserved space is
 * added in globals.css so it never covers footer content.
 */
export default function MobileBookingBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e6e1dc] bg-white/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      role="region"
      aria-label="Quick booking actions"
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={`tel:${siteConfig.phone}`}
          onClick={() => track('booking_cta', { position: 'mobile_bar', action: 'call' })}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f3338] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f3338]"
          aria-label={`Call ${siteConfig.name} on ${siteConfig.phoneDisplay}`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call now
        </a>
        <a
          href={whatsappHref}
          onClick={() => track('booking_cta', { position: 'mobile_bar', action: 'whatsapp' })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          aria-label="Chat with the booking team on WhatsApp"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
      <p className="pb-2 text-center text-[11px] font-medium text-gray-500">
        {siteConfig.openingHoursDisplay} &middot; verified companions only
      </p>
    </div>
  );
}
