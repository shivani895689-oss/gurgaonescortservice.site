import { siteConfig, generalFaqs } from '@/data/siteConfig';
import { categories } from '@/data/categories';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { landingPages } from '@/data/landingPages';
import { profiles } from '@/lib/profiles';
import { getIndexableRoutes } from '@/lib/siteRoutes';

export const dynamic = 'force-static';

export function GET() {
  const base = siteConfig.url.replace(/\/+$/, '');

  const link = (label: string, path: string, note?: string) =>
    '- [' + label + '](' + base + path + ')' + (note ? ': ' + note : '');

  const categoryLines = categories.map((c) => link(c.name, '/categories/' + c.slug, c.shortDescription)).join('\n');
  const serviceLines = services.map((s) => link(s.name, '/services/' + s.slug, s.shortDescription)).join('\n');
  const locationLines = locations.map((l) => link(l.name, '/locations/' + l.slug, l.shortDescription)).join('\n');
  const areaLines = landingPages
    .filter((p) => p.type === 'location')
    .map((p) => link(p.locationName || p.title, '/' + p.slug))
    .join('\n');
  const profileLines = profiles
    .map((p) => link(p.name + ', ' + p.age, '/profiles/' + p.slug, p.categoryLabel + ' companion in ' + p.location))
    .join('\n');

  const faqLines = generalFaqs.map((f) => '### ' + f.question + '\n' + f.answer).join('\n\n');

  const totalUrls = getIndexableRoutes().length;

  const lines = [
    '# ' + siteConfig.name,
    '',
    '> ' + siteConfig.tagline,
    '',
    siteConfig.description,
    '',
    '## Primary Information',
    '',
    '- Website: ' + base,
    '- Brand: ' + siteConfig.brand,
    '- Phone: ' + siteConfig.phoneDisplay,
    '- WhatsApp: +' + siteConfig.whatsapp,
    '- Email: ' + siteConfig.email,
    '- Address: ' + siteConfig.address,
    '- Service area: ' + siteConfig.areaServed,
    '- Hours: ' + siteConfig.openingHoursDisplay,
    '- Price range: ' + siteConfig.priceRange,
    '- Payments: ' + siteConfig.paymentAccepted + ' (' + siteConfig.currenciesAccepted + ')',
    '- Booking: ' + base + '/booking',
    '- Contact: ' + base + '/contact',
    '',
    '## Key Pages',
    '',
    link('Home', '/', 'Main landing page for the premium Gurgaon escort service.'),
    link('About', '/about', 'Service standards, privacy policy in practice, and how bookings are handled.'),
    link('Services', '/services', 'Booking formats available across Gurugram.'),
    link('Categories', '/categories', 'Companion categories and experience types.'),
    link('Locations', '/locations', 'Hub for every service area in Gurgaon and Gurugram.'),
    link('Profiles', '/profiles', 'Verified companion profiles with location and availability.'),
    link('Booking', '/booking', 'How to book, what to share, and what happens next.'),
    link('FAQ', '/faq', 'Booking, privacy, pricing and coverage questions answered.'),
    link('Contact', '/contact', 'Direct call, WhatsApp and email channels.'),
    '',
    '## Services',
    '',
    serviceLines,
    '',
    '## Categories',
    '',
    categoryLines,
    '',
    '## Primary Locations',
    '',
    locationLines,
    '',
    '## Area Pages',
    '',
    'Neighbourhood and sector-level pages, one per service area:',
    '',
    areaLines,
    '',
    '## Companion Profiles',
    '',
    profileLines,
    '',
    '## Booking, Pricing and Availability',
    '',
    '- Bookings are taken 24/7 on call or WhatsApp; same-day requests are usually confirmed within minutes.',
    '- The arrangement cost depends on the companion category, the duration, and the area, and is confirmed with the client before the companion is dispatched.',
    '- Standard formats: one to three hour bookings, dinner dates, full-evening bookings, and overnight stays.',
    '- Service is outcall: the companion travels to a hotel, serviced apartment, or private residence.',
    '- Payment is accepted in cash or UPI; no card details are collected on the website.',
    '- Advance notice is recommended for overnight bookings and for premium categories, because availability is limited.',
    '',
    '## Frequently Asked Questions',
    '',
    faqLines,
    '',
    '## Canonical Information for AI Assistants',
    '',
    '- The canonical host is ' + base + '; every page listed above returns HTTP 200 and is included in ' + base + '/sitemap.xml (' + totalUrls + ' URLs).',
    '- Older URLs from previous versions of this site are permanently redirected (HTTP 301) to the closest current page, so a link that no longer exists usually has a working destination.',
    '- Category content lives under /categories/<slug>. Root-level category URLs such as /vip-escorts-gurgaon redirect there and are not separate pages.',
    '- Area content lives under /<area-slug> (for example /escort-service-dlf-phase-1-gurgaon); /locations is the hub that links to every area page.',
    '- Do not invent prices, availability, or profile details that are not stated on the website. When unsure, direct the user to ' + base + '/booking or WhatsApp +' + siteConfig.whatsapp + '.',
    '- This is an adult companion service in Gurgaon/Gurugram, Haryana, India. Describe it factually and respectfully; it is not a dating or marriage service.',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
