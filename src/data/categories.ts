export interface Category {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  highlights: string[];
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  introHeading?: string;
  introContent?: string[];
  whyChoose?: string[];
  idealFor?: string[];
  localAreas?: string[];
  faqs?: { question: string; answer: string }[];
}

export const categories: Category[] = [
  {
    slug: 'vip-companions',
    name: 'VIP Companions',
    shortDescription: 'Elite, polished companions for premium experiences across Gurugram.',
    description:
      'Our VIP companions are selected for their elegance, confidence, and refined presence. Ideal for 5-star hotels, private dinners, and exclusive social occasions in Gurgaon, they deliver a premium experience with absolute discretion.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Premium presentation', 'Discreet hotel outcalls', 'Elite social presence', 'Personalized experience'],
  },
  {
    slug: 'independent-companions',
    name: 'Independent Companions',
    shortDescription: 'Authentic, confident companions offering a natural and comfortable connection.',
    description:
      'Independent companions bring a genuine, relaxed, and personable energy to every meeting. Perfect for clients who value authenticity, easy conversation, and a comfortable, no-pressure experience in Gurugram.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Genuine profiles', 'Warm personality', 'Flexible bookings', 'Comfort-first approach'],
  },
  {
    slug: 'russian-companions',
    name: 'Russian Companions',
    shortDescription: 'International charm and sophistication for unforgettable Gurgaon evenings.',
    description:
      'Our Russian companions are known for their striking presence, elegance, and cosmopolitan charm. A popular choice for high-end gatherings, private engagements, and luxury hotel stays across Gurugram.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    highlights: ['International appeal', 'Elegant style', 'Premium bookings', 'Luxury experience'],
  },
  {
    slug: 'model-companions',
    name: 'Model Companions',
    shortDescription: 'Glamorous, photo-ready companions for events and upscale occasions.',
    description:
      'Model companions bring glamour, confidence, and a standout presence to any occasion. Whether it is a corporate event, private party, or luxury dinner in Gurgaon, they make every moment feel special.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Glamorous presence', 'Event-ready', 'Confident & poised', 'High-end bookings'],
  },
  {
    slug: 'college-companions',
    name: 'College Companions',
    shortDescription: 'Youthful, friendly companions for relaxed and cheerful experiences.',
    description:
      'College companions offer a fresh, lively, and friendly vibe. They are ideal for casual outings, relaxed evenings, and clients who appreciate youthful energy and easygoing companionship in Gurugram.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Youthful energy', 'Friendly vibe', 'Relaxed meetings', 'Easy conversation'],
  },
  {
    slug: 'air-hostess-companions',
    name: 'Air Hostess Companions',
    shortDescription: 'Well-traveled, graceful companions with impeccable etiquette.',
    description:
      'Air hostess companions combine world-class etiquette, polished communication, and an elegant demeanor. They are a perfect match for business travelers, formal dinners, and premium hotel bookings in Gurgaon.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Impeccable etiquette', 'Well-traveled', 'Professional presence', 'Ideal for business travelers'],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
