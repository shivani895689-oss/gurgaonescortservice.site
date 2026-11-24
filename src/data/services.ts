export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: 'hotel-outcall',
    name: 'Luxury Hotel Outcall',
    shortDescription: 'Discreet and timely companion arrivals at premium hotels across Gurugram.',
    description:
      'Our luxury hotel outcall service is designed for clients staying at 5-star hotels and premium properties in Gurgaon. We ensure punctual, discreet arrivals with professional coordination so your experience is seamless from booking to meeting.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    features: ['5-star hotel coverage', 'Discreet arrival', 'Fast coordination', '24/7 availability'],
  },
  {
    slug: 'dinner-social-companion',
    name: 'Dinner & Social Companion',
    shortDescription: 'A graceful companion for dinners, lounges, and social evenings.',
    description:
      'Make your evenings memorable with a sophisticated dinner and social companion. Whether it is a fine-dining restaurant, lounge, or private party in Gurugram, our companions bring charm, conversation, and confidence.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    features: ['Fine dining etiquette', 'Social confidence', 'Elegant presentation', 'Engaging conversation'],
  },
  {
    slug: 'business-event-companion',
    name: 'Business & Event Companion',
    shortDescription: 'Polished companions for corporate gatherings and networking events.',
    description:
      'Impress at corporate gatherings, business dinners, or networking events with a polished companion by your side. Our companions are well-spoken, presentable, and comfortable in professional social settings across Gurgaon.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    features: ['Professional demeanor', 'Event-ready', 'Corporate friendly', 'Confident presence'],
  },
  {
    slug: 'travel-companion',
    name: 'Travel Companion',
    shortDescription: 'Comfortable and engaging companionship for getaways and city visits.',
    description:
      'Enjoy your travels with a companion who makes every journey more enjoyable. From weekend getaways to business trips originating in Gurugram, our travel companions provide warm, reliable, and discreet company.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    features: ['Weekend getaways', 'City visits', 'Comfortable company', 'Planned arrangements'],
  },
  {
    slug: 'private-companionship',
    name: 'Private Companionship',
    shortDescription: 'A relaxed, respectful, and personal experience tailored to you.',
    description:
      'Our private companionship service is built around your comfort, preferences, and privacy. We create a relaxed, respectful environment where you can unwind and enjoy quality time with a verified companion in Gurgaon.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    features: ['Privacy-first', 'Personalized experience', 'Verified companions', 'Comfortable setting'],
  },
  {
    slug: 'vip-experience',
    name: 'VIP Personalized Experience',
    shortDescription: 'Bespoke companion arrangements designed around your expectations.',
    description:
      'For clients who expect the very best, our VIP personalized experience offers bespoke companion arrangements. Every detail — timing, location, preferences — is handled with care to deliver a truly premium Gurgaon escort service.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80',
    features: ['Bespoke arrangements', 'Priority coordination', 'Premium companions', 'White-glove discretion'],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
