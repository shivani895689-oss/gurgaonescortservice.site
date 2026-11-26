export interface Profile {
  id: string;
  name: string;
  age: string;
  slug: string;
  /** Keyword-rich public URL slug, e.g. "alina-call-girl-gurgaon". */
  seoSlug: string;
  image: string;
  category: string;
  categoryLabel: string;
  location: string;
  verified: boolean;
  rating: number;
  tagline: string;
  languages: string[];
  availability: string;
  priceLabel: string;
}

export const profiles: Profile[] = [
  {
    id: '1',
    name: 'Alina',
    age: '24',
    slug: 'alina',
    seoSlug: 'alina-call-girl-gurgaon',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    category: 'russian',
    categoryLabel: 'Russian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.9,
    tagline: 'Elegant companion for distinguished gentlemen',
    languages: ['English', 'Russian', 'French'],
    availability: 'Available Now',
    priceLabel: '₹ 8,000/hr',
  },
  {
    id: '2',
    name: 'Priya',
    age: '26',
    slug: 'priya',
    seoSlug: 'priya-escort-service-gurgaon',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    category: 'indian',
    categoryLabel: 'Indian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.7,
    tagline: 'Sensual sophistication and warmth',
    languages: ['Hindi', 'English', 'Punjabi'],
    availability: 'Available in Evening',
    priceLabel: '₹ 6,500/hr',
  },
  {
    id: '3',
    name: 'Yana',
    age: '22',
    slug: 'yana',
    seoSlug: 'yana-ukrainian-escort-gurgaon',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80',
    category: 'ukrainian',
    categoryLabel: 'Ukrainian',
    location: 'Gurgaon',
    verified: false,
    rating: 4.5,
    tagline: 'Exotic charm and sophisticated grace',
    languages: ['English', 'Ukrainian', 'Spanish'],
    availability: 'Available Now',
    priceLabel: '₹ 7,200/hr',
  },
  {
    id: '4',
    name: 'Sofia',
    age: '30',
    slug: 'sofia',
    seoSlug: 'sofia-call-girl-gurgaon',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    category: 'indian',
    categoryLabel: 'Indian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.8,
    tagline: 'Graceful companion for elite gatherings',
    languages: ['Hindi', 'English', 'Bengali'],
    availability: 'Available Now',
    priceLabel: '₹ 7,500/hr',
  },
  {
    id: '5',
    name: 'Olga',
    age: '28',
    slug: 'olga',
    seoSlug: 'olga-russian-escort-gurgaon',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    category: 'russian',
    categoryLabel: 'Russian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.9,
    tagline: 'The epitome of Russian beauty and charm',
    languages: ['English', 'Russian', 'German'],
    availability: 'Available Now',
    priceLabel: '₹ 9,000/hr',
  },
  {
    id: '6',
    name: 'Kavya',
    age: '25',
    slug: 'kavya',
    seoSlug: 'kavya-escort-gurgaon',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80',
    category: 'indian',
    categoryLabel: 'Indian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.6,
    tagline: 'Traditional beauty meets modern grace',
    languages: ['Hindi', 'English', 'Tamil'],
    availability: 'Available Now',
    priceLabel: '₹ 5,800/hr',
  },
];

export function getProfileBySlug(slug: string): Profile | undefined {
  return profiles.find((p) => p.slug === slug);
}

export function getProfileBySeoSlug(slug: string): Profile | undefined {
  return profiles.find((p) => p.seoSlug === slug);
}

/** Canonical, keyword-rich path for a profile page. */
export function profilePath(profile: Profile): string {
  return '/' + profile.seoSlug;
}
