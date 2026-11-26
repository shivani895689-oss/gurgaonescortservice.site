export const siteConfig = {
  name: 'Gurgaon Escort Service',
  brand: 'Alina',
  city: 'Gurgaon',
  state: 'Haryana',
  country: 'India',
  structuredAddress: {
    streetAddress: 'DLF Phase 3, Golf Course Road',
    addressLocality: 'Gurgaon',
    addressRegion: 'Haryana',
    postalCode: '122002',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 28.4908,
    longitude: 77.0947,
  },
  phone: '+919996265679',
  phoneDisplay: '+91 99962 65679',
  whatsapp: '919996265679',
  email: 'contact@gurgaonescortservice.site',
  address: 'DLF Phase 3, Golf Course Road, Gurgaon, Haryana 122002, India',
  url: 'https://gurgaonescortservice.site',
  domain: 'gurgaonescortservice.site',
  locale: 'en_IN',
  areaServed: 'Gurgaon, Gurugram, and Delhi NCR',
  openingHours: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
  ],
  openingHoursDisplay: 'Open 24 hours, 7 days a week',
  priceRange: '₹₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI',
  founded: '2019',
  tagline: 'Premium, Discreet & Verified Companions in Gurugram',
  description:
    'Gurgaon Escort Service offers premium, verified, and discreet companion experiences across Gurugram. Book trusted Gurgaon escorts for 5-star hotels, private residences, DLF, Cyber City, and Golf Course Road with fast, confidential service.',
  shortDescription:
    'Premium, verified and discreet escorts in Gurgaon. Book confidential companions for 5-star hotels and private residences across Gurugram, 24/7.',
  serviceTypes: [
    'Escort service in Gurgaon',
    'VIP companion service',
    'Independent escort booking',
    'Russian escort companions',
    'Hotel outcall companionship',
    'Dinner and event companionship',
    'Full night and hourly companionship',
  ],
  localAreas: [
    'DLF Phase 1',
    'DLF Phase 2',
    'DLF Phase 3',
    'DLF Phase 4',
    'DLF Phase 5',
    'Cyber City',
    'Udyog Vihar',
    'Golf Course Road',
    'Golf Course Extension Road',
    'MG Road',
    'Sector 29',
    'Sohna Road',
    'Sushant Lok',
    'Dwarka Expressway',
    'New Gurgaon',
    'Manesar',
  ],
  keywords: [
    'gurgaon escort service',
    'escort service in gurgaon',
    'gurugram escort service',
    'escort service in gurugram',
    'vip escort service gurgaon',
    'premium escorts in gurgaon',
    'call girls in gurgaon',
    'gurgaon call girls',
    'independent escorts in gurgaon',
    'russian escorts in gurgaon',
    'escort service near me gurgaon',
    'dlf escort service',
    'cyber city escort service',
    'golf course road escorts',
    'mg road gurgaon escorts',
    'sohna road escort service',
    '5 star hotel escorts gurgaon',
  ],
  socialLinks: [
    { name: 'Instagram', url: 'https://instagram.com/gurgaonescortservice', icon: 'Instagram' },
    { name: 'Twitter', url: 'https://twitter.com/gurgaonescort', icon: 'Twitter' },
    { name: 'Facebook', url: 'https://facebook.com/gurgaonescortservice', icon: 'Facebook' },
  ],
};

export function getAlternateLanguages(path: string = '') {
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  const base = `${siteConfig.url}${cleanPath}`;
  return {
    en: base,
    'x-default': base,
  };
}

export const generalFaqs = [
  {
    question: 'How do I book a Gurgaon escort service appointment?',
    answer:
      'Booking is simple and private. Call or WhatsApp our team with your preferred time, location, and companion preference. We confirm availability, share suitable options, and coordinate the booking discreetly.',
  },
  {
    question: 'Are the companion profiles genuine and verified?',
    answer:
      'Yes. We focus on genuine presentation, clear communication, and a premium standard of service. Profiles are shared with care so expectations are clear before confirmation.',
  },
  {
    question: 'How fast is arrival in Gurgaon and nearby areas?',
    answer:
      'Arrival time depends on your location and current availability, but we prioritize fast coordination across major Gurgaon zones. For DLF, Cyber City, Golf Course Road, MG Road, and nearby sectors, we usually arrange prompt same-day support.',
  },
  {
    question: 'Is my privacy protected during booking and coordination?',
    answer:
      'Absolutely. Privacy is a core part of our service. We handle inquiries confidentially, avoid unnecessary data sharing, and keep communication discreet from first contact to coordination.',
  },
  {
    question: 'Do you provide outcall service to 5-star hotels in Gurugram?',
    answer:
      'Yes. We arrange discreet outcall companionship for premium hotels, business stays, serviced apartments, and private residences across Gurugram. Share your location details and we will guide you through available options.',
  },
  {
    question: 'Which areas in Gurgaon do you cover for near-me bookings?',
    answer:
      'We cover major Gurgaon locations including DLF Phase 1-5, Cyber City, Golf Course Road, Golf Course Extension Road, Sohna Road, MG Road, Sector 29, Udyog Vihar, Dwarka Expressway, and nearby premium neighborhoods across Gurugram.',
  },
  {
    question: 'What details should I share for a smooth booking?',
    answer:
      'Share your preferred area or hotel, expected time, duration, and any companion preference. Clear details help us confirm availability faster and coordinate a smooth, respectful experience.',
  },
  {
    question: 'Is Gurgaon Escort Service available 24/7?',
    answer:
      'Yes. Our coordination team is available 24/7 for calls and WhatsApp inquiries across Gurgaon. Availability of specific companions may vary, so contacting us in advance helps secure the best match.',
  },
];
