export interface ServiceLocation {
  slug: string;
  /** Indexable URL at the site root — the search phrase itself, no "/locations/" segment. */
  path: string;
  name: string;
  /** Primary query phrase used in copy, e.g. "call girls in MG Road". */
  keyword: string;
  shortDescription: string;
  description: string;
  image: string;
  /** Descriptive, keyword-aware alt text for the area image. */
  imageAlt: string;
  landmarks: string[];
  pincodes: string[];
  metro: string[];
  localities: string[];
  hotels: string[];
  dining: string[];
  nightlife: string[];
  /** One-line description of how companions reach this area. */
  travelNote: string;
  nearbySlugs: string[];
}

export const locations: ServiceLocation[] = [
  {
    slug: 'dlf-phase-1-5',
    path: 'call-girls-in-dlf-phase-1-5-gurgaon',
    name: 'DLF Phase 1–5',
    keyword: 'call girls in DLF Phase 1–5',
    shortDescription: 'Premium residential and corporate coverage across all DLF phases.',
    description:
      'We provide fast, discreet companion service across DLF Phase 1 through 5. Known for premium residences, corporate offices, and upscale lifestyle, DLF areas are among our most served locations in Gurugram.',
    image: '/img/dlf-phase-1-5-gurgaon-escort-service.webp',
    imageAlt: 'DLF Phase 1 to 5 Gurgaon escort service — verified companion near Cyber Hub and golf course hotels',
    landmarks: ['DLF Cyber Hub', 'DLF Galleria', 'DLF Mega Mall', 'Horizon Center'],
    pincodes: ['122002', '122009', '122010'],
    metro: ['Sikanderpur', 'MG Road', 'IFFCO Chowk'],
    localities: ['DLF Phase 1', 'DLF Phase 2', 'DLF Phase 3', 'DLF Phase 4', 'DLF Phase 5', 'Sushant Lok 1', 'Nathupur'],
    hotels: ['The Leela Ambience Gurugram', 'Trident Gurugram', 'The Westin Gurgaon', 'Crowne Plaza Gurugram', 'Lemon Tree Premier City Center'],
    dining: ['Cyber Hub restaurant row', 'Galleria Market cafés', 'Mega Mall food court', 'Horizon Center dining'],
    nightlife: ['Cyber Hub bars and lounges', 'Kitty Su at The Lalit', 'The Living Room', 'Soi 7'],
    travelNote: 'Sikanderpur and MG Road metro stations sit inside the DLF belt, and Cyber Hub is a five-minute drive from most DLF phases.',
    nearbySlugs: ['cyber-city-udyog-vihar', 'golf-course-road'],
  },
  {
    slug: 'cyber-city-udyog-vihar',
    path: 'call-girls-in-cyber-city-gurgaon',
    name: 'Cyber City & Udyog Vihar',
    keyword: 'call girls in Cyber City',
    shortDescription: "Reliable companion service near Gurugram's corporate hub.",
    description:
      "Cyber City and Udyog Vihar are the business heart of Gurugram. Our service caters to business travelers and professionals seeking discreet, reliable companion arrangements near offices, hotels, and premium accommodations.",
    image: '/img/cyber-city-udyog-vihar-escort-service-gurgaon.webp',
    imageAlt: 'Cyber City and Udyog Vihar Gurgaon — escort companion for business hotels and corporate stays',
    landmarks: ['DLF Cyber City', 'Ambience Mall', 'The Leela Ambience', 'Trident Hotel'],
    pincodes: ['122002', '122016'],
    metro: ['Cyber City', 'Belvedere Towers', 'Moulsari Avenue', 'Phase 3'],
    localities: ['DLF Cyber City', 'Udyog Vihar Phase 1–5', 'Ambience Island', 'DLF Phase 3', 'Shankar Chowk'],
    hotels: ['The Leela Ambience Gurugram', 'Trident Gurugram', 'Radisson Gurugram Udyog Vihar', 'Park Plaza Gurgaon', 'Country Inn & Suites'],
    dining: ['Ambience Mall restaurants', 'Cyber Hub dining', 'Udyog Vihar business cafés'],
    nightlife: ['Cyber Hub terrace bars', 'The Living Room', 'Ambience Mall lounges'],
    travelNote: 'The Rapid Metro loop connects Cyber City, Belvedere Towers and Moulsari Avenue, so most arrivals avoid the NH-48 service road entirely.',
    nearbySlugs: ['dlf-phase-1-5', 'mg-road-sector-29'],
  },
  {
    slug: 'golf-course-road',
    path: 'call-girls-in-golf-course-road-gurgaon',
    name: 'Golf Course Road',
    keyword: 'call girls in Golf Course Road',
    shortDescription: 'Upscale outcall service for luxury apartments and high-end hotels.',
    description:
      "Golf Course Road is one of Gurgaon's most prestigious addresses. We offer premium companion outcall service to luxury apartments, penthouses, and high-end hotels along this iconic corridor.",
    image: '/img/golf-course-road-gurgaon-escort-companion.webp',
    imageAlt: 'Golf Course Road Gurgaon — escort companion for five-star hotel outcall near Sector 42 and 54',
    landmarks: ['One Horizon Center', 'DLF The Crest', 'Central Plaza', 'Golf Course Extension'],
    pincodes: ['122002', '122003', '122009'],
    metro: ['Sector 42-43', 'Sector 53-54', 'Sikanderpur'],
    localities: ['DLF Magnolias', 'DLF Aralias', 'DLF Camellias', 'The Crest', 'Sector 42', 'Sector 43', 'Sector 54', 'Sector 55'],
    hotels: ['The Oberoi Gurgaon', 'The Westin Gurgaon', 'Grand Hyatt Gurgaon', 'Taj City Centre Gurugram'],
    dining: ['ThreeSixtyOne at The Oberoi', 'Prego at The Westin', 'One Horizon Center restaurants', 'Central Plaza dining'],
    nightlife: ['The Oberoi bar', 'Westin lounge', 'Golf Course Road wine bars'],
    travelNote: 'Rapid Metro stops at Sector 42-43 and Sector 53-54 land you within walking distance of most condominiums on the corridor.',
    nearbySlugs: ['dlf-phase-1-5', 'golf-course-extension'],
  },
  {
    slug: 'mg-road-sector-29',
    path: 'call-girls-in-mg-road-gurgaon',
    name: 'MG Road & Sector 29',
    keyword: 'call girls in MG Road',
    shortDescription: 'Fast bookings near popular hotels and central Gurgaon hotspots.',
    description:
      'MG Road and Sector 29 are vibrant hubs of Gurgaon nightlife, dining, and hospitality. Our team provides quick, discreet companion service to hotels, residences, and entertainment venues in this central area.',
    image: '/img/mg-road-sector-29-gurgaon-escort-service.webp',
    imageAlt: 'MG Road and Sector 29 Gurgaon — escort companion for lounges, dining and hotel bookings',
    landmarks: ['MGF Metropolitan', 'Sector 29 Market', 'Leisure Valley Park', 'Kingdom of Dreams'],
    pincodes: ['122001', '122002'],
    metro: ['MG Road', 'IFFCO Chowk', 'Sikanderpur'],
    localities: ['MG Road', 'Sector 28', 'Sector 29', 'Sector 30', 'Sector 31', 'Sector 32', 'Leisure Valley'],
    hotels: ['The Bristol Hotel', 'Bloom Boutique MG Road', 'Ramada Gurgaon Central', 'Hotel Atrium', 'The Anya Hotel'],
    dining: ['Sector 29 restaurant strip', 'MGF Metropolitan food court', 'MG Road fine dining', 'Leisure Valley cafés'],
    nightlife: ['Sector 29 pubs and lounges', 'Walking Street bars', 'IFFCO Chowk nightlife'],
    travelNote: 'MG Road and IFFCO Chowk metro stations make Sector 29 the easiest late-night meet-up point in central Gurgaon.',
    nearbySlugs: ['dlf-phase-1-5', 'cyber-city-udyog-vihar'],
  },
  {
    slug: 'sohna-road',
    path: 'call-girls-in-sohna-road-gurgaon',
    name: 'Sohna Road',
    keyword: 'call girls in Sohna Road',
    shortDescription: 'Smooth and private companion service across South Gurgaon.',
    description:
      'Sohna Road has grown into a major residential and commercial corridor in South Gurgaon. We cover premium societies, hotels, and private residences with the same discretion and speed as our central locations.',
    image: '/img/sohna-road-gurgaon-escort-service.webp',
    imageAlt: 'Sohna Road Gurgaon escort service — discreet companion for hotels and serviced apartments',
    landmarks: ['South Point Mall', 'Omaxe Celebration Mall', 'Vatika City', 'Nirvana Country'],
    pincodes: ['122018', '122003', '122101'],
    metro: ['Huda City Centre', 'Sector 55-56'],
    localities: ['Sector 47', 'Sector 48', 'Sector 49', 'Sector 50', 'Sector 56', 'Sector 57', 'Vatika City', 'Nirvana Country'],
    hotels: ['Holiday Inn Gurugram Sector 90', 'Ramada Gurgaon Central', 'Lemon Tree Hotel Sohna Road', 'Country Inn Sohna Road'],
    dining: ['South Point Mall restaurants', 'Omaxe Celebration Mall dining', 'Sohna Road cafés'],
    nightlife: ['South Point Mall lounges', 'Sohna Road sports bars'],
    travelNote: 'Sohna Road connects to Golf Course Extension at Subhash Chowk and to Huda City Centre metro in about fifteen minutes.',
    nearbySlugs: ['golf-course-extension', 'mg-road-sector-29'],
  },
  {
    slug: 'golf-course-extension',
    path: 'call-girls-in-golf-course-extension-gurgaon',
    name: 'Golf Course Extension Road',
    keyword: 'call girls in Golf Course Extension',
    shortDescription: 'Discreet coverage for modern residences and luxury societies.',
    description:
      "Golf Course Extension Road features some of Gurugram's newest luxury developments. We provide discreet, professional companion service to modern high-rises, gated societies, and boutique hotels in this rapidly growing area.",
    image: '/img/golf-course-extension-road-gurgaon-escort.webp',
    imageAlt: 'Golf Course Extension Road Gurgaon — verified escort companion for premium hotel outcall',
    landmarks: ['M3M Golf Estate', 'Emaar Palm Drive', 'Pioneer Araya', 'Grand Hyatt Gurgaon'],
    pincodes: ['122003', '122018', '122101'],
    metro: ['Sector 55-56', 'Sector 54 Chowk'],
    localities: ['Sector 58', 'Sector 59', 'Sector 60', 'Sector 61', 'Sector 62', 'Sector 65', 'Sector 66', 'Sector 67'],
    hotels: ['Grand Hyatt Gurgaon', 'DoubleTree by Hilton Gurugram', 'Hyatt Regency Gurgaon', 'The Westin Sohna Resort'],
    dining: ['Emaar Palm Downtown dining', 'M3M Cosmopolitan restaurants', 'Sector 65 cafés'],
    nightlife: ['Emaar Palm Downtown lounges', 'Golf Course Extension wine bars'],
    travelNote: 'Golf Course Extension Road is a straight run from Golf Course Road and connects to Sohna Road at Subhash Chowk.',
    nearbySlugs: ['golf-course-road', 'sohna-road'],
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export function getLocationByPath(path: string) {
  return locations.find((l) => l.path === path);
}

export function locationPath(location: ServiceLocation) {
  return '/' + location.path;
}
