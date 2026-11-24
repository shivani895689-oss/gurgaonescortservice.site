export interface ServiceLocation {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  landmarks: string[];
}

export const locations: ServiceLocation[] = [
  {
    slug: 'dlf-phase-1-5',
    name: 'DLF Phase 1–5',
    shortDescription: 'Premium residential and corporate coverage across all DLF phases.',
    description:
      'We provide fast, discreet companion service across DLF Phase 1 through 5. Known for premium residences, corporate offices, and upscale lifestyle, DLF areas are among our most served locations in Gurugram.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    landmarks: ['DLF Cyber Hub', 'DLF Galleria', 'DLF Mega Mall', 'Horizon Center'],
  },
  {
    slug: 'cyber-city-udyog-vihar',
    name: 'Cyber City & Udyog Vihar',
    shortDescription: 'Reliable companion service near Gurugram\'s corporate hub.',
    description:
      'Cyber City and Udyog Vihar are the business heart of Gurugram. Our service caters to business travelers and professionals seeking discreet, reliable companion arrangements near offices, hotels, and premium accommodations.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    landmarks: ['DLF Cyber City', 'Ambience Mall', 'The Leela Ambience', 'Trident Hotel'],
  },
  {
    slug: 'golf-course-road',
    name: 'Golf Course Road',
    shortDescription: 'Upscale outcall service for luxury apartments and high-end hotels.',
    description:
      'Golf Course Road is one of Gurgaon\'s most prestigious addresses. We offer premium companion outcall service to luxury apartments, penthouses, and high-end hotels along this iconic corridor.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    landmarks: ['One Horizon Center', 'DLF The Crest', 'Central Plaza', 'Golf Course Extension'],
  },
  {
    slug: 'mg-road-sector-29',
    name: 'MG Road & Sector 29',
    shortDescription: 'Fast bookings near popular hotels and central Gurgaon hotspots.',
    description:
      'MG Road and Sector 29 are vibrant hubs of Gurgaon nightlife, dining, and hospitality. Our team provides quick, discreet companion service to hotels, residences, and entertainment venues in this central area.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    landmarks: ['MGF Metropolitan', 'Sector 29 Market', 'Kingdom of Dreams', 'Leisure Valley Park'],
  },
  {
    slug: 'sohna-road',
    name: 'Sohna Road',
    shortDescription: 'Smooth and private companion service across South Gurgaon.',
    description:
      'Sohna Road has grown into a major residential and commercial corridor in South Gurgaon. We cover premium societies, hotels, and private residences with the same discretion and speed as our central locations.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    landmarks: ['South Point Mall', 'Omaxe Celebration Mall', 'Vatika City', 'Nirvana Country'],
  },
  {
    slug: 'golf-course-extension',
    name: 'Golf Course Extension Road',
    shortDescription: 'Discreet coverage for modern residences and luxury societies.',
    description:
      'Golf Course Extension Road features some of Gurugram\'s newest luxury developments. We provide discreet, professional companion service to modern high-rises, gated societies, and boutique hotels in this rapidly growing area.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    landmarks: ['M3M Golf Estate', 'Emaar Palm Drive', 'Pioneer Araya', 'Grand Hyatt Gurgaon'],
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}
