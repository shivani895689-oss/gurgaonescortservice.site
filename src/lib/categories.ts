export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  { slug: 'russian', name: 'Russian', description: 'Elegant Russian companions', icon: '🌍' },
  { slug: 'indian', name: 'Indian', description: 'Graceful Indian companions', icon: '✨' },
  { slug: 'ukrainian', name: 'Ukrainian', description: 'Charming Ukrainian companions', icon: '🌹' },
  { slug: 'vip', name: 'VIP', description: 'Exclusive VIP companions', icon: '👑' },
  { slug: 'college-girl', name: '18+ College Girl', description: 'Young college companions', icon: '🎓' },
  { slug: 'bhabhi', name: 'Bhabhi', description: 'Mature and charming companions', icon: '💫' },
  { slug: 'gurgaon-escort', name: 'Gurgaon Escort', description: 'Premium Gurgaon escorts', icon: '📍' },
  { slug: 'call-girl-gurgaon', name: 'Call Girl Gurgaon', description: 'Trusted call girls in Gurgaon', icon: '📞' },
  { slug: 'nepali', name: 'Nepali', description: 'Warm Nepali companions', icon: '🏔️' },
  { slug: 'south-indian', name: 'South Indian', description: 'Composed South Indian companions', icon: '🌺' },
  { slug: 'nri', name: 'NRI', description: 'English-fluent NRI companions', icon: '✈️' },
  { slug: 'punjabi', name: 'Punjabi', description: 'Warm Punjabi companions', icon: '🎉' },
  { slug: 'model', name: 'Model', description: 'Event-ready model companions', icon: '📸' },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
