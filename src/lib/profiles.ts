export interface ProfileFaq {
  question: string;
  answer: string;
}

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
  /** Unique profile copy. Not shared between profiles. */
  about: string[];
  specialties: string[];
  faqs: ProfileFaq[];
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
    about: [
      'Alina built her reputation on quiet confidence rather than loud promises. At 24 she has spent three years accompanying business travellers to dinners on Golf Course Road, hotel lounges in Cyber City and private gatherings in DLF Phase 5, and she reads a room quickly enough to know when to lead a conversation and when to simply listen.',
      'Clients who book her twice usually mention the same thing: she is easy to be with. She arrives on time, dresses for the venue rather than for attention, and speaks English, Russian and enough French to carry a table through the evening. Her bookings are confirmed with a fixed hourly arrangement, and she prefers an advance call so the dress code and timing suit the plan.',
    ],
    specialties: ['Business dinners', '5-star hotel evenings', 'Corporate events', 'Long overnight bookings'],
    faqs: [
      { question: 'Is Alina available for outstation trips?', answer: 'Yes. Weekend trips to Jaipur, Agra and Chandigarh can be arranged with 48 hours notice, and the travel arrangement is quoted separately from the hourly rate.' },
      { question: 'How much notice does Alina need?', answer: 'Two to three hours is usually enough inside Gurgaon. Same-day requests are accepted when her calendar allows, and the team confirms within minutes on WhatsApp.' },
      { question: 'What should I wear for a dinner booking with Alina?', answer: 'Smart casual works for most restaurants and business casual for hotel lounges. Share the venue while booking and the team will suggest a dress code that matches hers.' },
    ],
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
    about: [
      'Priya is the companion people book when they want the evening to feel less like an appointment and more like a date. She is 26, grew up in a Punjabi household in Delhi, and brings that easy warmth into Gurgaon hotel rooms and apartment dinners, usually with a playlist and a conversation that never feels rehearsed.',
      'She works evenings, from around six until late, and she is happiest with bookings that include dinner, a drink or a long conversation rather than a rushed hour. Hindi, English and Punjabi all come naturally to her, which makes her a good fit for clients who prefer to switch languages mid-sentence.',
    ],
    specialties: ['Dinner dates', 'Girlfriend experience', 'Evening bookings', 'Private apartment visits'],
    faqs: [
      { question: 'Can Priya stay for a full night?', answer: 'Yes, a full-night booking is available at 8,000 rupees and includes dinner if the plan starts early. Confirm the end time while booking so the arrangement stays clear.' },
      { question: 'Does Priya speak Punjabi?', answer: 'Fluent Punjabi, Hindi and English. She can also manage simple Urdu conversation, which many clients from Delhi enjoy during dinner bookings.' },
      { question: 'Where does Priya usually meet clients?', answer: 'Hotels and serviced apartments around MG Road, Sector 29, Sushant Lok and DLF Phase 2 to 4. She travels to private residences too when the building allows guest entry.' },
    ],
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
    about: [
      'Yana is 22, Ukrainian, and the youngest companion on the roster, which shows in the energy she brings to a room rather than in how she handles it. She is the one to book for a concert at Leisure Valley, a late drive to Aerocity or a first evening in a city you do not know well.',
      'She speaks English, Ukrainian and conversational Spanish, and she is genuinely curious about the people she meets, so silences rarely happen. Her profile is still marked unverified on the site while her documents finish review, which is why her listing shows the lower rating.',
    ],
    specialties: ['Nightlife and parties', 'Travel companion', 'Concerts and events', 'First-time bookings'],
    faqs: [
      { question: 'Why is Yana marked unverified?', answer: 'Her verification documents are still in review. She is listed with a transparent status so clients know exactly what they are booking, and the badge updates once review finishes.' },
      { question: 'Can Yana travel outside Gurgaon?', answer: 'Yes. She takes Delhi NCR bookings and outstation trips with a day of notice, and she is a popular travel companion for weekend plans.' },
      { question: 'What kind of evenings suit Yana best?', answer: 'Music, food and movement. Parties in Cyber Hub, live gigs and long drives are her natural territory, and she is comfortable staying out until late.' },
    ],
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
    about: [
      'Sofia is 30 and carries the kind of composure that only comes with practice. Bengali by upbringing, Gurgaon by choice, she is the profile clients pick for a wedding reception, a company anniversary or a family dinner where a stranger would be noticed and a graceful companion would not.',
      'She is comfortable in formal settings and knows how to introduce herself without explanation, which matters when colleagues are in the room. Hindi, English and Bengali come easily to her, and she keeps a small wardrobe of formal and semi-formal outfits so a last-minute invitation does not become a problem.',
    ],
    specialties: ['Weddings and receptions', 'Corporate galas', 'Formal dinners', 'Family events'],
    faqs: [
      { question: 'Can Sofia attend a wedding as my plus one?', answer: 'Yes, wedding and reception bookings are her specialty. Share the venue, dress code and duration, and she will plan an outfit and arrival time that fit the occasion.' },
      { question: 'Does Sofia handle corporate events discreetly?', answer: 'Completely. She introduces herself by first name only, never discusses the booking in public and leaves when the event ends without drawing attention.' },
      { question: 'Is Sofia available during the day?', answer: 'Yes, daytime bookings for brunches, shopping or hospital visits are available with a few hours notice, though evenings fill faster.' },
    ],
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
    about: [
      'Olga is 28, Russian, and the most requested companion for five-star hotel evenings in Gurgaon. She spent four years working in hospitality in Moscow before moving to India, which is why she moves through a lobby, a restaurant and a private suite with the same unforced ease.',
      'She is the profile to choose when the evening needs to look effortless: a suite at a Golf Course Road hotel, a table at a fine-dining restaurant, a client who would rather not explain who she is. English, Russian and German are all fluent, and she keeps bookings to one client at a time so the attention is never diluted.',
    ],
    specialties: ['Luxury hotel suites', 'Fine dining', 'VIP experiences', 'Overnight stays'],
    faqs: [
      { question: 'Can Olga meet at a five-star hotel in Gurgaon?', answer: 'Yes, hotel suites are her usual setting. Share the property name while booking so she can plan arrival, parking and timing around the hotel entrance rather than the lobby.' },
      { question: 'Does Olga offer overnight bookings?', answer: 'She does, at a fixed overnight rate that includes dinner when the booking starts early. Availability is limited to two overnights a week, so advance notice helps.' },
      { question: 'What languages does Olga speak?', answer: 'Fluent English, Russian and German, plus enough Hindi to handle everyday conversation and directions with drivers.' },
    ],
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
    about: [
      'Kavya is 25, Tamil, and quietly the best value on the roster. She is the companion clients book for a quiet evening at home, a long conversation over filter coffee, or a first booking where nerves are part of the story.',
      'Her manner is calm and unhurried, and she has a way of making a room feel familiar within minutes. Hindi, English and Tamil are all comfortable for her, she dresses simply and well, and she asks for nothing beyond the agreed arrangement.',
    ],
    specialties: ['Quiet evenings', 'First-time bookings', 'Home visits', 'Long conversations'],
    faqs: [
      { question: 'Is Kavya suitable for a first booking?', answer: 'She is one of the most patient companions on the roster and is often chosen for first bookings. The team can walk you through the process step by step before you confirm.' },
      { question: 'Does Kavya speak Tamil?', answer: 'Yes, fluent Tamil along with Hindi and English, which makes her a comfortable choice for clients from South India staying in Gurgaon.' },
      { question: 'Can Kavya visit a private residence?', answer: 'Yes, home and serviced apartment visits are normal for her. Share the building name and gate instructions so arrival stays quick and quiet.' },
    ],
  },
  {
    id: '7',
    name: 'Anastasia',
    age: '26',
    slug: 'anastasia',
    seoSlug: 'anastasia-russian-escort-gurgaon',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    category: 'russian',
    categoryLabel: 'Russian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.8,
    tagline: 'Model presence for corporate evenings',
    languages: ['English', 'Russian', 'French'],
    availability: 'Available Now',
    priceLabel: '₹ 9,500/hr',
    about: [
      'Anastasia is 26, Russian, and has the kind of presence that makes a corporate table feel finished. She has modelled part-time in Moscow and Dubai, which shows in how she dresses and how she holds a photograph, but the reason clients rebook her is the conversation.',
      'She reads business settings well: she knows when to be introduced and when to stay in the background, and she never volunteers details about the arrangement. Bookings are usually three to five hours for dinners and product launches, with English, Russian and French all fluent.',
    ],
    specialties: ['Corporate dinners', 'Product launches', 'Model evenings', 'Photo-friendly events'],
    faqs: [
      { question: 'Can Anastasia attend a corporate dinner with colleagues?', answer: 'Yes, and it is her most common booking. She introduces herself by first name only, keeps conversation general and leaves at the agreed time without needing an explanation.' },
      { question: 'Is Anastasia comfortable being photographed?', answer: 'At events where photography is expected, yes. She will not appear in client social media posts, and photos taken during a booking stay private by agreement.' },
      { question: 'How far in advance should I book Anastasia?', answer: 'A day is ideal for corporate events because it lets her plan the outfit. Same-day requests are accepted when her calendar is free.' },
    ],
  },
  {
    id: '8',
    name: 'Ekaterina',
    age: '29',
    slug: 'ekaterina',
    seoSlug: 'ekaterina-call-girl-gurgaon',
    image: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?auto=format&fit=crop&w=900&q=80',
    category: 'russian',
    categoryLabel: 'Russian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.9,
    tagline: 'Wine, conversation and unhurried company',
    languages: ['English', 'Russian', 'Italian'],
    availability: 'Available in Evening',
    priceLabel: '₹ 11,000/hr',
    about: [
      'Ekaterina is 29 and the most cerebral companion on the roster. She trained as a sommelier in St Petersburg, so a dinner booking with her tends to include an opinion on the wine list, a story about the vineyard and a second bottle nobody planned on ordering.',
      'She works evenings only and prefers longer bookings of three hours or more, because the point of an evening with her is the unhurried part. English, Russian and Italian are fluent, and she is comfortable in both a Golf Course Road fine-dining room and a quiet apartment kitchen.',
    ],
    specialties: ['Wine dinners', 'Long evenings', 'Fine dining', 'Intellectual conversation'],
    faqs: [
      { question: 'Does Ekaterina choose the wine?', answer: 'If you would like her to. She trained as a sommelier and enjoys guiding a table through a list, though she will happily follow your preference instead.' },
      { question: 'Why are Ekaterina bookings longer?', answer: 'She works evenings only and prefers three hours or more so the evening has room to breathe. Shorter bookings are possible when her calendar allows.' },
      { question: 'Can Ekaterina meet at a private residence?', answer: 'Yes. Apartment dinners and private residence visits are common, and she can arrive with a bottle if you tell the team what you are cooking.' },
    ],
  },
  {
    id: '9',
    name: 'Viktoria',
    age: '24',
    slug: 'viktoria',
    seoSlug: 'viktoria-escort-service-gurgaon',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    category: 'russian',
    categoryLabel: 'Russian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.7,
    tagline: 'The energy of a night out, done properly',
    languages: ['English', 'Russian'],
    availability: 'Available Now',
    priceLabel: '₹ 8,500/hr',
    about: [
      'Viktoria is 24 and the companion to book when the plan is a night out rather than a quiet one. She knows the Cyber Hub bars, the Sector 29 terraces and the late-night food stops between them, and she treats a booking as a night she would have had anyway.',
      'She is direct, funny and completely unintimidated by a loud room, which makes her a good fit for birthdays, bachelor evenings and first nights in Gurgaon. English and Russian are fluent, and she stays until the evening actually ends.',
    ],
    specialties: ['Nightlife', 'Birthday bookings', 'Bar hopping', 'Bachelor parties'],
    faqs: [
      { question: 'Can Viktoria plan the evening?', answer: 'Yes. Tell her the budget and the vibe, and she will suggest two or three places in Cyber Hub, Sector 29 or Golf Course Road and move the plan along as the night develops.' },
      { question: 'Is Viktoria available late at night?', answer: 'She is, and late bookings after 10pm are common. Confirm the end time when you book so the arrangement and the cab home are clear.' },
      { question: 'Does Viktoria drink?', answer: 'Socially, and only if you are drinking. She never lets a booking turn into a situation where the client is not in control.' },
    ],
  },
  {
    id: '10',
    name: 'Natalia',
    age: '27',
    slug: 'natalia',
    seoSlug: 'natalia-russian-call-girl-gurgaon',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
    category: 'russian',
    categoryLabel: 'Russian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.8,
    tagline: 'The girlfriend experience, without the pretending',
    languages: ['English', 'Russian', 'German'],
    availability: 'Available Now',
    priceLabel: '₹ 10,000/hr',
    about: [
      'Natalia is 27 and the profile most clients choose when they want an evening that feels like a relationship rather than a transaction. She asks questions, remembers the answers and follows up on them later in the evening, which is a small thing that changes everything.',
      'She is the right companion for a repeat booking: a standing Friday dinner, a film, a walk around the sector, a conversation that continues until it is genuinely late. English, Russian and German are fluent, and she prefers clients who want company more than performance.',
    ],
    specialties: ['Girlfriend experience', 'Repeat bookings', 'Cinema and walks', 'Weekend afternoons'],
    faqs: [
      { question: 'What does the girlfriend experience include with Natalia?', answer: 'Conversation, dinner, a film or a walk, and genuine attention for the length of the booking. It is less about a script and more about her being present, which is why clients rebook her.' },
      { question: 'Can I book Natalia regularly?', answer: 'Yes, and regular clients get first refusal on her Friday and Saturday evenings. The team keeps a simple note of preferred timings so repeat bookings take one message.' },
      { question: 'Does Natalia offer daytime bookings?', answer: 'Weekend afternoons and some weekday mornings are open. She is not an early riser, so brunch is a safer plan than breakfast.' },
    ],
  },
  {
    id: '11',
    name: 'Svetlana',
    age: '31',
    slug: 'svetlana',
    seoSlug: 'svetlana-escort-gurgaon',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80',
    category: 'russian',
    categoryLabel: 'Russian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.9,
    tagline: 'Discretion, maturity and a very calm room',
    languages: ['English', 'Russian'],
    availability: 'By appointment',
    priceLabel: '₹ 12,000/hr',
    about: [
      'Svetlana is 31, the most senior companion on the roster, and the one clients with sensitive schedules ask for by name. She worked in diplomatic hospitality before this, which is a polite way of saying she knows how to be in a room without being remembered in it.',
      'She takes a small number of bookings each week, mostly long evenings and travel, and she prefers a short call before confirming so expectations are clear on both sides. English and Russian are fluent, and her rate reflects the kind of evening she is prepared to give.',
    ],
    specialties: ['Discreet bookings', 'Diplomatic and senior clients', 'Travel companion', 'Long overnight stays'],
    faqs: [
      { question: 'Why does Svetlana ask for a call first?', answer: 'A two-minute call avoids mismatched expectations about timing, venue and duration. It is also the fastest way for her to confirm the booking rather than trading messages for an hour.' },
      { question: 'Is Svetlana available for travel?', answer: 'Yes, domestic and international travel with a week of notice. She handles her own documents and prefers bookings of at least two nights.' },
      { question: 'How private are Svetlana bookings?', answer: 'She uses a first name only, arrives and leaves separately from you, never discusses clients and does not keep messages on her phone after the booking ends.' },
    ],
  },
  {
    id: '12',
    name: 'Irina',
    age: '23',
    slug: 'irina',
    seoSlug: 'irina-ukrainian-escort-gurgaon',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80',
    category: 'ukrainian',
    categoryLabel: 'Ukrainian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.6,
    tagline: 'Easy company for shopping days and long lunches',
    languages: ['English', 'Ukrainian', 'Hindi'],
    availability: 'Available Now',
    priceLabel: '₹ 7,500/hr',
    about: [
      'Irina is 23, Ukrainian, and has picked up enough Hindi in two years in Gurgaon to negotiate a price in Sadar Bazaar and order lunch without help. She is the companion for a daytime booking that needs company rather than drama: shopping in Ambience Mall, a long lunch, a salon appointment.',
      'She is chatty in a way that puts nervous clients at ease and practical in a way that makes an afternoon run smoothly, and she is happy to be a second opinion on a purchase. English, Ukrainian and Hindi are all comfortable for her.',
    ],
    specialties: ['Shopping days', 'Daytime bookings', 'Lunch dates', 'Errands and appointments'],
    faqs: [
      { question: 'Can Irina help me shop in Gurgaon?', answer: 'She enjoys it and knows Ambience Mall, DLF Galleria and Sadar Bazaar well. Bookings of three hours or more work best for a shopping afternoon.' },
      { question: 'Does Irina speak Hindi?', answer: 'Conversational Hindi, enough for shops, restaurants and cabs, along with fluent English and Ukrainian.' },
      { question: 'Is Irina available during office hours?', answer: 'Yes, weekday daytime is her most open slot. She asks for two hours notice so travel across Gurgaon stays predictable.' },
    ],
  },
  {
    id: '13',
    name: 'Ksenia',
    age: '25',
    slug: 'ksenia',
    seoSlug: 'ksenia-call-girl-gurgaon',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80',
    category: 'russian',
    categoryLabel: 'Russian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.8,
    tagline: 'Red-carpet polish for high-profile evenings',
    languages: ['English', 'Russian', 'Spanish'],
    availability: 'By appointment',
    priceLabel: '₹ 10,500/hr',
    about: [
      'Ksenia is 25 and works almost exclusively at events where people notice: brand launches, hotel openings, private previews and the kind of Gurgaon party that ends up in a magazine the following week. She is comfortable being looked at and equally comfortable not being introduced.',
      'She takes a limited number of bookings so the preparation fits the occasion, and she will ask about the dress code, the host and the guest list before confirming. English, Russian and Spanish are fluent, and she is a reliable companion for clients who need the evening to go smoothly in public.',
    ],
    specialties: ['High-profile events', 'Brand launches', 'Red carpet evenings', 'VIP parties'],
    faqs: [
      { question: 'Can Ksenia attend an event with photographers?', answer: 'Yes, and she handles it well. She will not pose for client-facing social media, and any photographs taken at the venue stay with the venue.' },
      { question: 'What does Ksenia need before confirming?', answer: 'The venue, dress code, start and end time, and whether you will be introducing her. She plans her outfit from that, which is why her bookings are usually made a day ahead.' },
      { question: 'Does Ksenia travel to Delhi for events?', answer: 'Frequently. Aerocity, Chanakyapuri and south Delhi venues are all within her normal range, with travel time added to the booking.' },
    ],
  },
  {
    id: '14',
    name: 'Alisa',
    age: '22',
    slug: 'alisa',
    seoSlug: 'alisa-escort-service-gurgaon',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    category: 'ukrainian',
    categoryLabel: 'Ukrainian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.7,
    tagline: 'Petite, playful and easy to talk to',
    languages: ['English', 'Ukrainian', 'Russian'],
    availability: 'Available Now',
    priceLabel: '₹ 7,000/hr',
    about: [
      'Alisa is 22, Ukrainian, and the most easygoing booking on the roster. She is small, quick to laugh and completely without pretence, which makes her a good choice for a client who wants company that does not feel like an interview.',
      'She likes simple plans: dinner somewhere familiar, a film, a drive to the lake at sunset, a long conversation that does not need an itinerary. English, Ukrainian and Russian are all comfortable, and at her rate she is the easiest way to try a booking without committing to a full evening.',
    ],
    specialties: ['Casual dinner dates', 'Budget-friendly bookings', 'Films and drives', 'Short bookings'],
    faqs: [
      { question: 'Can I book Alisa for just one hour?', answer: 'Yes, one-hour bookings are accepted when she is free, though two hours is a better way to enjoy the evening. The team will confirm the exact slot on WhatsApp.' },
      { question: 'Is Alisa comfortable with first-time clients?', answer: 'Very. She is patient, asks what you would like from the evening and adjusts without making it awkward, which is why she is often recommended for first bookings.' },
      { question: 'Where does Alisa usually meet?', answer: 'Hotels and apartments around Sector 29, Sushant Lok, DLF Phase 2 and Golf Course Extension, plus private residences when entry is straightforward.' },
    ],
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
