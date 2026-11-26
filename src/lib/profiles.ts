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
  /** Descriptive, keyword-aware alt text for the profile photo. */
  imageAlt: string;
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
    image: '/img/alina-call-girl-gurgaon.webp',
    imageAlt: 'Portrait of Alina, verified Russian escort in Gurgaon for hotel outcall, 24/7',
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
      "Planning an evening with Alina is a short conversation. She works the Cyber City and Golf Course Road hotels most nights, so a booking made before six usually means an arrival by eight, and a booking made at nine usually means ten. Her corporate clients tend to book the same two-hour window on a Tuesday or Wednesday, when the hotels are quiet and the restaurants still have their corner tables.",
      "For a first booking she prefers a lobby meeting and a venue she already knows. If the evening includes a business dinner, tell her how many people will be at the table and whether the conversation is social or commercial; she dresses for the room and stays out of the deal, which is the reason she gets booked again.",
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
    image: '/img/priya-escort-service-gurgaon.webp',
    imageAlt: 'Portrait of Priya, verified Indian escort in Gurgaon for hotel outcall, 24/7',
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
      "Priya books evenings rather than afternoons, and her natural territory is the MG Road, Sector 29 and IFFCO Chowk side of the city. A dinner booking at eight is her most common request, followed by a two-hour hotel visit at ten. She keeps Friday and Saturday for clients who confirm a day ahead, because those are the nights when a table is harder to find than a companion.",
      "She speaks Hindi, English and Punjabi, which matters more than profiles admit: a dinner where the companion can shift language with the table is a dinner that never runs dry. If the plan includes a bar after the restaurant, say so when you book, because the second venue changes what she wears and how long the booking should be.",
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
    image: '/img/yana-ukrainian-escort-gurgaon.webp',
    imageAlt: 'Portrait of Yana, verified Ukrainian escort in Gurgaon for hotel outcall, 24/7',
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
      "Yana works the Cyber City and DLF corridors and is used to clients whose evening starts after the last call. A nine-thirty request usually becomes a ten-fifteen arrival, and she would rather be told the real time than a polite one. Her bookings are typically two hours in a hotel or a residence visit in DLF Phase 1 to 3.",
      "She is direct in conversation and quick to establish what the evening is. If you want a companion who fills silences, she is not the match; if you want someone who can hold a proper conversation in English, Russian or French and then let the evening be quiet, she is. State the language you want the evening to run in when you book.",
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
    image: '/img/sofia-call-girl-gurgaon.webp',
    imageAlt: 'Portrait of Sofia, verified Indian escort in Gurgaon for hotel outcall, 24/7',
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
      "Sofia is the companion to book when the evening is already planned and the only missing piece is company. She works Golf Course Road, Sushant Lok and the MG Road hotels, dresses for the venue and arrives with the reservation details already read. A dinner at a Golf Course Road restaurant is her easiest booking and the one she is most often asked for.",
      "Her rate sits in the middle of the Indian band, and she is honest about what it covers: the agreed duration, the arrival inside the main belt and nothing else. The table, the drinks and the taxi are yours. If the evening runs long she will quote an extension at the time rather than at the door.",
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
    image: '/img/olga-russian-escort-gurgaon.webp',
    imageAlt: 'Portrait of Olga, verified Russian escort in Gurgaon for hotel outcall, 24/7',
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
      "Olga works almost entirely in five-star hotels and the serviced apartments around Cyber City, and her bookings are arranged rather than improvised. A request the same evening is possible but a day ahead is better, because her evenings fill with clients who book the same suite and the same hour every month.",
      "She is discreet to the point of being quiet, which is exactly what a hotel evening needs. She will meet you in the lobby, take the lift with you and be gone by the agreed time without a scene. If the booking is for a corporate event, tell her the dress code and the number of guests; she prepares for both.",
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
    image: '/img/kavya-escort-gurgaon.webp',
    imageAlt: 'Portrait of Kavya, verified Indian escort in Gurgaon for hotel outcall, 24/7',
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
      "Kavya is the value booking in the Indian band, and she is unapologetic about it: a two-hour hotel visit at a fair rate, no upsell at the door, no surprise transport charge. Her area is DLF Phase 1 to 5 and the Sohna Road towers, so a Cyber City booking is a short ride and a Golf Course Extension booking is a longer one.",
      "First-time clients tend to book her, and she is patient with the questions that come with a first booking: what to say at the desk, whether to meet in the lobby, how payment works. If you are new to this and want an evening without pressure, she is a sensible first call rather than a gamble.",
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
    image: '/img/anastasia-russian-escort-gurgaon.webp',
    imageAlt: 'Portrait of Anastasia, verified Russian escort in Gurgaon for hotel outcall, 24/7',
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
      "Anastasia is booked for occasions rather than for quiet evenings. Corporate dinners, hotel celebrations, a client event at a Golf Course Road property: she is comfortable being the most composed person in a room full of strangers, and she does not need to be briefed twice about who knows what.",
      "Her rate reflects that. If the plan is a table for two, a cheaper companion will do the same job; if the plan is a room with twelve people and a host who needs the evening to go smoothly, the difference is visible in the first ten minutes. Book her two days ahead for anything on a weekend.",
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
    image: '/img/ekaterina-call-girl-gurgaon.webp',
    imageAlt: 'Portrait of Ekaterina, verified Russian escort in Gurgaon for hotel outcall, 24/7',
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
      "Ekaterina works evenings and is at her best in a restaurant with a good table and a slow service. She arrives dressed for the room, orders without fuss and can carry a two-hour dinner in English or Russian. Her bookings usually begin at eight and end before midnight, which suits a weeknight better than a weekend.",
      "She books by appointment and prefers a day of notice, because she would rather prepare than rush. If the evening includes a bar after dinner, tell her when you book: the second venue decides the shoes, and the shoes decide whether the evening works.",
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
    image: '/img/viktoria-escort-service-gurgaon.webp',
    imageAlt: 'Portrait of Viktoria, verified Russian escort in Gurgaon for hotel outcall, 24/7',
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
      "Viktoria splits her time between hotel bookings and residence visits in DLF Phase 1 to 4, and she is one of the few Russian companions who is genuinely comfortable in a gated society rather than only in a lobby. She asks for the tower and the gate before she leaves, and she expects the phone to be answered when she calls from the barrier.",
      "Her English is fluent and her small talk is better than most, which matters in a residence where there is no restaurant and no bar to carry the evening. A two-hour visit is her standard booking; longer evenings are possible if the plan includes dinner first.",
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
    image: '/img/natalia-russian-call-girl-gurgaon.webp',
    imageAlt: 'Portrait of Natalia, verified Russian escort in Gurgaon for hotel outcall, 24/7',
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
      "Natalia is booked for long evenings and overnights more often than for two-hour visits. A six-hour booking that begins with dinner and ends late is her natural format, and she plans the evening around the venue rather than around the clock. Hotel suites on Golf Course Road are her most common setting.",
      "An overnight booking includes the morning, which is the part clients underestimate: breakfast, a slow start and a companion who is still good company at eight. If you want that, book it as an overnight rather than as an extended evening, because the rate and the expectations are different.",
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
    image: '/img/svetlana-escort-gurgaon.webp',
    imageAlt: 'Portrait of Svetlana, verified Russian escort in Gurgaon for hotel outcall, 24/7',
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
      "Svetlana takes a limited number of bookings and arranges them in advance. She works with clients who plan a trip to Gurgaon rather than a night out, and her evenings are usually attached to a hotel stay, a dinner reservation and a schedule that has been agreed a week earlier.",
      "That makes her a poor choice for a same-night request and an excellent one for a visit that matters. She will ask about the venue, the dress code and the company before she confirms, and the answers are what make the evening work. Her rate is at the top of the Russian band and she does not negotiate it at the door.",
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
    image: '/img/irina-ukrainian-escort-gurgaon.webp',
    imageAlt: 'Portrait of Irina, verified Ukrainian escort in Gurgaon for hotel outcall, 24/7',
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
      "Irina is the companion most often recommended for a first booking, because she is easy to talk to and unhurried about the mechanics. She works Cyber City, DLF and the Golf Course Road hotels, and a two-hour booking with a lobby meeting is her standard first evening.",
      "She speaks English with a light accent and manages Hindi greetings well enough to put a driver or a guard at ease. If you are nervous about a first booking, say so; she has walked first-timers through the arrival, the payment and the goodbye more times than she can count, and the evening is better for it.",
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
    image: '/img/ksenia-call-girl-gurgaon.webp',
    imageAlt: 'Portrait of Ksenia, verified Russian escort in Gurgaon for hotel outcall, 24/7',
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
      "Ksenia is booked by clients who arrive on late flights, and she is used to the airport side of the city: Aerocity, Mahipalpur and the hotels along the expressway. A landing at eleven usually means a booking at midnight, and she would rather have the flight number than an apology for the delay.",
      "She works by appointment and keeps her evenings short and specific: a two-hour hotel booking, a late dinner, a quiet drink. If the trip continues into Gurgaon, tell her which hotel you are moving to, because the booking is easier to arrange once the venue is settled.",
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
    image: '/img/alisa-escort-service-gurgaon.webp',
    imageAlt: 'Portrait of Alisa, verified Ukrainian escort in Gurgaon for hotel outcall, 24/7',
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
      "Alisa is a Sector 29 and MG Road companion, and her evenings usually begin on the strip rather than in a hotel room. A dinner at nine, a bar at eleven and a short walk back to a hotel is the shape of her most common booking, and she knows which venues are loud and which have a corner table.",
      "She is a good match for a client who wants the evening to feel like a night out rather than an appointment. Tell her where you are staying and she will suggest the order of the evening; tell her nothing and she will still make it work, but the plan is better when it is shared.",
    ],
    specialties: ['Casual dinner dates', 'Budget-friendly bookings', 'Films and drives', 'Short bookings'],
    faqs: [
      { question: 'Can I book Alisa for just one hour?', answer: 'Yes, one-hour bookings are accepted when she is free, though two hours is a better way to enjoy the evening. The team will confirm the exact slot on WhatsApp.' },
      { question: 'Is Alisa comfortable with first-time clients?', answer: 'Very. She is patient, asks what you would like from the evening and adjusts without making it awkward, which is why she is often recommended for first bookings.' },
      { question: 'Where does Alisa usually meet?', answer: 'Hotels and apartments around Sector 29, Sushant Lok, DLF Phase 2 and Golf Course Extension, plus private residences when entry is straightforward.' },
    ],
  },
  {
    id: '15',
    name: 'Anjali',
    age: '24',
    slug: 'anjali',
    seoSlug: 'anjali-nepali-escort-gurgaon',
    image: '/img/anjali-nepali-escort-gurgaon.webp',
    imageAlt: 'Portrait of Anjali, verified Nepali escort in Gurgaon for hotel outcall, 24/7',
    category: 'nepali',
    categoryLabel: 'Nepali',
    location: 'Gurgaon',
    verified: true,
    rating: 4.6,
    tagline: 'Warm, easy company with a genuine smile',
    languages: ['Hindi', 'Nepali', 'English'],
    availability: 'Available Now',
    priceLabel: '₹ 5,800/hr',
    about: [
      'Anjali is 24, Nepali, and the kind of companion people describe as easy rather than impressive, which is meant as a compliment. She talks about food, films and family without needing a prompt, laughs at her own jokes and makes a first meeting feel like a second one.',
      'She has lived in Gurgaon for four years and knows the quiet parts of it: the momo places near Sector 29, the back lanes of Sushant Lok, the metro routes that avoid MG Road at eight in the evening. Bookings are usually dinner, a film or a long evening at a serviced apartment.',
      "Anjali works the DLF and Cyber City side and is one of the few companions whose rate stays under six thousand without the evening feeling cheap. Her standard booking is two hours in a hotel or a serviced apartment, and she is happy to meet in the lobby on a first visit rather than take a room number over the phone.",
      "She speaks Hindi and Nepali comfortably and English well enough for a dinner, which makes her a good match for a client whose evening is more about company than conversation. She does not drink much, and she would rather be told that the plan includes a club than discover it at the door.",
    ],
    specialties: ['Dinner dates', 'Films and long talks', 'Home visits', 'First-time bookings'],
    faqs: [
      { question: 'Does Anjali speak Nepali?', answer: 'Yes, Nepali along with fluent Hindi and working English, which makes the evening easy for Nepali-speaking clients.' },
      { question: 'Can Anjali visit a serviced apartment?', answer: 'Yes. Share the building and gate details at booking so arrival stays quick, and she will call from the gate rather than the lobby.' },
      { question: 'Is Anjali good for a first booking?', answer: 'She is one of the easiest companions for a first meeting - patient, talkative and completely without pressure.' },
    ],
  },
  {
    id: '16',
    name: 'Meera',
    age: '26',
    slug: 'meera',
    seoSlug: 'meera-south-indian-escort-gurgaon',
    image: '/img/meera-south-indian-escort-gurgaon.webp',
    imageAlt: 'Portrait of Meera, verified South Indian escort in Gurgaon for hotel outcall, 24/7',
    category: 'south-indian',
    categoryLabel: 'South Indian',
    location: 'Gurgaon',
    verified: true,
    rating: 4.7,
    tagline: 'Composed company for quiet evenings',
    languages: ['Tamil', 'English', 'Hindi'],
    availability: 'Available in Evening',
    priceLabel: '₹ 6,800/hr',
    about: [
      'Meera is 26, Tamil, and works as a companion because she likes conversation more than small talk. She reads, cooks badly and talks about both, and she has a way of making a long dinner feel short without filling it.',
      'She moved to Gurgaon for a job in research and stayed for the city. Evenings are her window, usually around Sohna Road and Sector 56 where she knows the quieter restaurants, and she is happiest with a booking that includes a proper meal rather than a rushed hour.',
      "Meera is booked for dinners more than for hotel visits, and her natural area is Golf Course Road and Sushant Lok. She works evenings only, from around seven, and a table booked at eight is the request she gets most. South Indian clients often ask for her by name because the language at the table changes the evening.",
      "She is a quiet companion rather than a performing one, which suits a dinner with two people and a conversation that does not need filling. If the plan is a larger gathering, tell her how many guests and what the occasion is; she will dress for it and stay in her lane, which is a compliment in this trade.",
    ],
    specialties: ['Dinner conversations', 'Quiet evenings', 'South Indian food spots', 'Repeat bookings'],
    faqs: [
      { question: 'Does Meera speak Tamil?', answer: 'Fluent Tamil with English and Hindi, which suits clients from Chennai or Coimbatore who would rather not switch languages.' },
      { question: 'What kind of evening suits Meera?', answer: 'A long dinner with real conversation. She is not a nightlife companion and prefers bookings of two hours or more.' },
      { question: 'Where does Meera usually meet?', answer: 'Restaurants and hotels around Sohna Road, Sector 56 and DLF Phase 2, plus apartment visits when entry is simple.' },
    ],
  },
  {
    id: '17',
    name: 'Riya',
    age: '22',
    slug: 'riya',
    seoSlug: 'riya-college-girl-gurgaon',
    image: '/img/riya-college-girl-gurgaon.webp',
    imageAlt: 'Portrait of Riya, verified College Girl escort in Gurgaon for hotel outcall, 24/7',
    category: 'college-girl',
    categoryLabel: 'College Girl',
    location: 'Gurgaon',
    verified: true,
    rating: 4.5,
    tagline: 'Young, chatty and refreshingly uncomplicated',
    languages: ['Hindi', 'English'],
    availability: 'Available Now',
    priceLabel: '₹ 5,500/hr',
    about: [
      'Riya is 22, studying in her final year in Gurgaon, and treats a booking like an evening out rather than a job. She is chatty, curious and quick to laugh, and she asks as many questions as she answers.',
      'She knows the student side of the city better than the five-star one: the coffee shops in Sector 29, the cheap cinemas, the food trucks near Cyber Hub on a Friday. Bookings are usually short, cheerful and planned the same day.',
      "Riya is a daytime and early-evening booking, and her area is Sector 14, Sector 29 and the MG Road hotels. She is at her best in a two-hour visit that starts at six and ends before the city gets loud, and she is honest that a late-night booking is not what she does.",
      "First-time clients book her because the rate is low and the conversation is easy. She is patient with the questions a first booking raises, and she would rather be asked them in a message than at the door. If you want a long evening or an overnight, she will say no rather than overpromise.",
    ],
    specialties: ['Coffee and cinema dates', 'Short bookings', 'Daytime meetups', 'Casual company'],
    faqs: [
      { question: 'Can I book Riya for a short meeting?', answer: 'Yes, one to two hours is normal for her. She is a good choice for a coffee, a film or an afternoon out.' },
      { question: 'Is Riya available during the day?', answer: 'Weekday afternoons are usually open, and she prefers plans made the same day rather than a week ahead.' },
      { question: 'What should I expect with Riya?', answer: 'A cheerful, talkative evening rather than a formal one. She is best matched with clients who want easy company and no performance.' },
    ],
  },
  {
    id: '18',
    name: 'Nisha',
    age: '27',
    slug: 'nisha',
    seoSlug: 'nisha-nri-escort-gurgaon',
    image: '/img/nisha-nri-escort-gurgaon.webp',
    imageAlt: 'Portrait of Nisha, verified NRI escort in Gurgaon for hotel outcall, 24/7',
    category: 'nri',
    categoryLabel: 'NRI',
    location: 'Gurgaon',
    verified: true,
    rating: 4.8,
    tagline: 'English-fluent company for international schedules',
    languages: ['English', 'Hindi', 'French'],
    availability: 'Available Now',
    priceLabel: '₹ 9,000/hr',
    about: [
      'Nisha is 27 and spent six years in London before moving back to Gurgaon, which is why she sounds like an NRI client rather than a local one. She understands late flights, jet lag and the specific exhaustion of a week of meetings.',
      'She works mostly with clients staying on Golf Course Road and in Aerocity, and she is comfortable joining a business dinner without needing to be briefed twice. English, Hindi and French are all fluent, and she keeps her bookings to one client at a time.',
      "Nisha works with NRI clients and returning visitors, and her bookings usually come with a schedule attached: a dinner on the first night, a longer evening on the second, a quiet afternoon before the flight. She is comfortable in five-star hotels and in the corporate apartments around Cyber City.",
      "She speaks English with an American inflection and understands the rhythm of a business trip better than most companions, which is why she is booked for the whole stay rather than for a single night. She will not chase a booking, and she expects the same courtesy in return.",
    ],
    specialties: ['Business dinners', 'Airport-area hotels', 'Late-night bookings', 'International clients'],
    faqs: [
      { question: 'Is Nisha comfortable with international clients?', answer: 'She spent six years in London and works mainly with NRI and international clients, so the cultural shorthand is already there.' },
      { question: 'Can Nisha meet late at night?', answer: 'Yes, late bookings after a delayed flight are common. Confirm the window when you write and she will plan around it.' },
      { question: 'Does Nisha travel to Aerocity?', answer: 'Frequently. Aerocity and the airport hotels are within her normal range, with travel time added to the booking.' },
    ],
  },
  {
    id: '19',
    name: 'Simran',
    age: '25',
    slug: 'simran',
    seoSlug: 'simran-punjabi-escort-gurgaon',
    image: '/img/simran-punjabi-escort-gurgaon.webp',
    imageAlt: 'Portrait of Simran, verified Punjabi escort in Gurgaon for hotel outcall, 24/7',
    category: 'punjabi',
    categoryLabel: 'Punjabi',
    location: 'Gurgaon',
    verified: true,
    rating: 4.7,
    tagline: 'Big laugh, warm company, zero awkwardness',
    languages: ['Punjabi', 'Hindi', 'English'],
    availability: 'Available Now',
    priceLabel: '₹ 6,500/hr',
    about: [
      'Simran is 25, Punjabi, and fills a room within five minutes. She talks about food the way other people talk about films, has opinions about butter chicken in every part of Gurgaon and will happily argue about the best one.',
      'She is built for social bookings: a farmhouse party near Sohna Road, a cousin wedding, a loud dinner in Sector 29, a Sunday lunch with too many relatives. Punjabi and Hindi come naturally, and she switches to English without missing a beat.',
      "Simran is the Punjabi companion clients ask for when the evening is loud, warm and full of food. Sector 29, MG Road and the Punjabi restaurants on the Golf Course Road side are her territory, and a dinner that turns into a bar is the booking she knows best.",
      "She speaks Punjabi, Hindi and English, and she can hold her own at a table where the jokes arrive faster than the menu. If the plan is quiet and romantic, she will say so rather than pretend; if the plan is a celebration, she is the reason it works.",
    ],
    specialties: ['Weddings and functions', 'Farmhouse parties', 'Family dinners', 'Social events'],
    faqs: [
      { question: 'Can Simran attend a family wedding?', answer: 'Yes, it is her most common booking. Share the venue, dress code and timing so she can plan an outfit and arrival that fit the occasion.' },
      { question: 'Does Simran speak Punjabi?', answer: 'Fluent Punjabi and Hindi with comfortable English, which is why she works well at gatherings where the language keeps changing.' },
      { question: 'Is Simran available for farmhouse bookings?', answer: 'Yes, farmhouses around Sohna Road and the Golf Course Extension are routine, with travel time included in the arrangement.' },
    ],
  },
  {
    id: '20',
    name: 'Tanya',
    age: '28',
    slug: 'tanya',
    seoSlug: 'tanya-model-escort-gurgaon',
    image: '/img/tanya-model-escort-gurgaon.webp',
    imageAlt: 'Portrait of Tanya, verified Model escort in Gurgaon for hotel outcall, 24/7',
    category: 'model',
    categoryLabel: 'Model',
    location: 'Gurgaon',
    verified: true,
    rating: 4.9,
    tagline: 'Camera-ready presence for events that matter',
    languages: ['English', 'Hindi'],
    availability: 'By appointment',
    priceLabel: '₹ 10,000/hr',
    about: [
      'Tanya is 28 and has worked as a catalogue and campaign model for eight years, which is why she knows exactly where to stand in a photograph and how to leave one. She is booked for launches, hotel openings and corporate galas rather than quiet evenings.',
      'She plans an outfit around the venue, asks about the guest list beforehand and is entirely comfortable being introduced to people she has never met. For clients who need an event to go smoothly in public, she removes the one variable that usually goes wrong.',
      "Tanya is booked for the evenings that are looked at: hotel launches, restaurant openings, a client dinner where the table matters. She works by appointment, usually with a day or two of notice, and she wants the venue and the dress code before she confirms.",
      "Her modelling background means she is comfortable being photographed and comfortable being ignored, which are the two things a public evening asks of a companion. She is not a nightclub booking; if the plan is a loud bar until two, a different companion will do it better and cost less.",
    ],
    specialties: ['Brand launches', 'Hotel openings', 'Corporate galas', 'Photo-friendly events'],
    faqs: [
      { question: 'Can Tanya attend an event with photographers?', answer: 'Yes, and she handles it professionally. Photography boundaries are agreed in advance, and she will not appear in client social media.' },
      { question: 'How far ahead should I book Tanya?', answer: 'A day is ideal because outfits need planning. Same-day requests are possible when her calendar allows.' },
      { question: 'Does Tanya travel to Delhi for events?', answer: 'Yes, Aerocity, Chanakyapuri and south Delhi venues are within her normal range, with travel time added to the booking.' },
    ],
  },
  {
    id: '21',
    name: 'Rekha',
    age: '33',
    slug: 'rekha',
    seoSlug: 'rekha-bhabhi-escort-gurgaon',
    image: '/img/rekha-bhabhi-escort-gurgaon.webp',
    imageAlt: 'Portrait of Rekha, verified Bhabhi escort in Gurgaon for hotel outcall, 24/7',
    category: 'bhabhi',
    categoryLabel: 'Bhabhi',
    location: 'Gurgaon',
    verified: true,
    rating: 4.6,
    tagline: 'Mature, homely and completely unhurried',
    languages: ['Hindi', 'English'],
    availability: 'Available in Day',
    priceLabel: '₹ 5,500/hr',
    about: [
      'Rekha is 33, has run a household for a decade and treats a booking the way she treats everything else: practically. She is not interested in performing, and the result is an evening that feels startlingly normal.',
      'She works weekday daytime mostly, when her children are at school, and prefers home visits over hotels. Clients describe her as easy to talk to and impossible to impress, which is exactly the appeal of this category.',
      "Rekha works days rather than nights, and her bookings are usually afternoon visits to a residence or a hotel room between twelve and six. That window suits clients who are in Gurgaon for work and free in the afternoon, and it is the reason her rate stays reasonable.",
      "She is a warm, unhurried companion rather than a glamorous one, and her clients tend to book her again because the conversation is easy. She asks for the tower and the gate at a residence, and she would rather wait five minutes at the barrier than walk into the wrong lobby.",
    ],
    specialties: ['Daytime bookings', 'Home visits', 'Long conversations', 'Repeat clients'],
    faqs: [
      { question: 'When is Rekha usually available?', answer: 'Weekday daytime is her main window, roughly eleven in the morning to five in the evening.' },
      { question: 'Does Rekha visit private homes?', answer: 'Yes, home visits are her preference. Share the society and gate details so the arrival is quick and quiet.' },
      { question: 'What is an evening with Rekha like?', answer: 'Calm and conversational. She is direct about what she offers and expects the same clarity in return.' },
    ],
  },
  {
    id: '22',
    name: 'Zara',
    age: '29',
    slug: 'zara',
    seoSlug: 'zara-vip-escort-gurgaon',
    image: '/img/zara-vip-escort-gurgaon.webp',
    imageAlt: 'Portrait of Zara, verified VIP escort in Gurgaon for hotel outcall, 24/7',
    category: 'vip',
    categoryLabel: 'VIP',
    location: 'Gurgaon',
    verified: true,
    rating: 4.9,
    tagline: 'Exclusive company for a very small client list',
    languages: ['English', 'Hindi', 'Arabic'],
    availability: 'By appointment',
    priceLabel: '₹ 15,000/hr',
    about: [
      'Zara is 29, works with a deliberately small client list and takes a handful of bookings a month. She has spent time in Dubai and Mumbai, speaks Arabic as well as English and Hindi, and is used to evenings where the venue is a private suite rather than a restaurant.',
      'She asks for a short call before confirming anything, mostly to establish that expectations match. Clients who book her tend to book her again, and the reason given most often is that nothing about the evening needs managing.',
      "Zara is the top of the VIP band and her bookings are planned like a dinner reservation: venue, time, dress code, guest list, confirmation. She works Golf Course Road, Cyber City and the five-star hotels, and she expects two days of notice for anything on a weekend.",
      "What the rate buys is composure. She arrives early, knows the room, handles the staff and leaves the evening to you. She does not do short notice, she does not do loud bars and she does not negotiate at the door; if those terms suit, the evening is as smooth as the price suggests.",
    ],
    specialties: ['Private suites', 'Exclusive dining', 'International clients', 'Overnight arrangements'],
    faqs: [
      { question: 'Why does Zara ask for a call?', answer: 'It is faster than messages and it confirms that timing, venue and expectations match before anything is reserved.' },
      { question: 'Is Zara available for overnight bookings?', answer: 'Occasionally, and usually planned a week ahead. She limits overnights to keep the arrangement genuinely exclusive.' },
      { question: 'Does Zara work with international clients?', answer: 'Frequently. She speaks English, Hindi and Arabic, and is used to guests visiting Gurgaon for business.' },
    ],
  },
  {
    id: "23",
    name: "Ayesha",
    age: "25",
    slug: "ayesha",
    seoSlug: "ayesha-call-girl-mg-road-gurgaon",
    image: "/img/ayesha-call-girl-mg-road-gurgaon.webp",
    imageAlt: "Portrait of Ayesha, verified call girl in MG Road Gurgaon for hotel and dinner bookings",
    category: "indian",
    categoryLabel: "Indian",
    location: "MG Road, Gurgaon",
    verified: true,
    rating: 4.8,
    tagline: "Dinner companion for the MG Road and Sector 29 strip",
    languages: [
      "Hindi",
      "English",
      "Urdu"
    ],
    availability: "Available Now",
    priceLabel: "₹ 7,000/hr",
    about: [
      "Ayesha lives ten minutes from MG Road metro, which is why her bookings so often start with a late dinner in Sector 29 and end with a short walk back to a hotel on the strip. She is 25, speaks Hindi, English and Urdu, and has the kind of easy conversation that works better in a crowded restaurant than a quiet lounge.",
      "Most of her clients are in Gurgaon for a night or two and want someone who knows where to eat. She will suggest two or three places based on what you actually feel like, walk in with you, and make sure the evening does not feel like an arranged meeting. She keeps bookings to a fixed hourly rate and prefers a call before confirming a weekend slot.",
      "Ayesha lives ten minutes from MG Road metro, so a late dinner in Sector 29 and a short walk back to a hotel on the strip is the shape of her week. She works evenings and is at her best between eight and midnight, when the restaurants are full and the traffic has thinned.",
      "She speaks Hindi, English and Urdu, and she is comfortable in a mixed table where the conversation moves between the three. If you are staying in a hotel on the MG Road side, tell her which one; the walk is short enough that she can arrive without a car and leave the same way.",
    ],
    specialties: [
      "Dinner dates",
      "Sector 29 nightlife",
      "Hotel outcall",
      "Weekend bookings"
    ],
    faqs: [
      {
        question: "How close is Ayesha to MG Road metro?",
        answer: "She lives within a ten-minute drive, so arrivals around MG Road and Sector 29 usually take twenty to thirty minutes even at short notice."
      },
      {
        question: "Can Ayesha suggest a restaurant in Sector 29?",
        answer: "Yes. She knows the strip well and will recommend a table that suits a first meeting rather than a loud bar, which makes the evening easier to enjoy."
      },
      {
        question: "Does Ayesha take late-night bookings?",
        answer: "She does, up to about one in the morning on Fridays and Saturdays. Weekday bookings are best confirmed before nine in the evening."
      }
    ]
  },
  {
    id: "24",
    name: "Naina",
    age: "26",
    slug: "naina",
    seoSlug: "naina-call-girl-cyber-city-gurgaon",
    image: "/img/naina-call-girl-cyber-city-gurgaon.webp",
    imageAlt: "Portrait of Naina, verified call girl in Cyber City Gurgaon for corporate hotel outcall",
    category: "model",
    categoryLabel: "Model",
    location: "Cyber City, Gurgaon",
    verified: true,
    rating: 4.9,
    tagline: "Corporate-evening company in Cyber City and Udyog Vihar",
    languages: [
      "English",
      "Hindi"
    ],
    availability: "Available in Evening",
    priceLabel: "₹ 9,000/hr",
    about: [
      "Naina works the Cyber City belt almost exclusively, and she has built her bookings around the rhythm of the offices rather than the bars. Most evenings she is meeting a consultant or a founder at nine or ten, after the last call has finished, in a hotel lobby that is still busy enough that nobody notices another guest.",
      "She is 26, works as a part-time model, and dresses for a business hotel rather than a nightclub. Clients tend to describe her as low-maintenance in the best sense: she arrives on time, does not need to be entertained, and is comfortable with a dinner that runs long because the meeting did. She asks for the hotel name and the floor when confirming so the arrival is planned properly.",
      "Naina works the Cyber City towers and the hotels around them, and her bookings usually start after the last meeting of the day. A seven-thirty request is her standard, and she can be in a Cyber City lobby by eight if the traffic on the MG Road one-way is kind.",
      "She is a model-category companion, which in practice means she dresses for the room and is used to being looked at in a corporate bar. She is also good at the quiet part of an evening: a two-hour booking with dinner and conversation is her most common request, not a nightclub.",
    ],
    specialties: [
      "Corporate dinners",
      "Business hotel visits",
      "Client events",
      "Late-evening bookings"
    ],
    faqs: [
      {
        question: "Can Naina arrive after a late meeting in Cyber City?",
        answer: "Yes. She keeps late hours deliberately and most of her bookings start between nine and eleven at night, which suits the corporate schedule in Cyber City and Udyog Vihar."
      },
      {
        question: "Does Naina attend company events?",
        answer: "She does, and she asks for the dress code and venue in advance so she arrives appropriately. Client dinners and launch evenings are the two formats she works most often."
      },
      {
        question: "Is Naina discreet at business hotels?",
        answer: "She arrives separately, uses the main entrance and never waits in the lobby. That is the standard she works to in Cyber City, where colleagues are often in the same building."
      }
    ]
  },
  {
    id: "25",
    name: "Ruhi",
    age: "23",
    slug: "ruhi",
    seoSlug: "ruhi-call-girl-sector-29-gurgaon",
    image: "/img/ruhi-call-girl-sector-29-gurgaon.webp",
    imageAlt: "Portrait of Ruhi, verified call girl in Sector 29 Gurgaon for nightlife and dinner dates",
    category: "punjabi",
    categoryLabel: "Punjabi",
    location: "Sector 29, Gurgaon",
    verified: true,
    rating: 4.7,
    tagline: "Fun, unfiltered company for a Sector 29 night out",
    languages: [
      "Hindi",
      "Punjabi",
      "English"
    ],
    availability: "Available Now",
    priceLabel: "₹ 6,500/hr",
    about: [
      "Ruhi is the companion clients book when they want the evening to be fun rather than formal. She is 23, Punjabi, and grew up around Sector 29, so she knows which pubs are worth the queue, which terraces are quieter and where to get a table without waiting forty minutes on a Saturday.",
      "She is direct in conversation, laughs easily and does not treat a booking like a performance. That works well for birthdays, group dinners and first-time clients who are nervous about how the evening will go. She keeps her rates simple and confirms everything on WhatsApp before meeting, mostly because she would rather over-explain than have either person surprised.",
      "Ruhi is a Sector 29 companion and her evenings are built around the strip: dinner at nine, a bar at eleven, a hotel on MG Road by one. She knows which venues have a quiet table and which ones will not seat two people without a reservation, and she will tell you which is which.",
      "She speaks Punjabi and Hindi at home and English at the table, and she is the companion to book if you want the evening to feel like a night out rather than an arrangement. She works most nights and takes a day of notice for a Friday or Saturday.",
    ],
    specialties: [
      "Night outs",
      "Birthday bookings",
      "Group dinners",
      "Casual dates"
    ],
    faqs: [
      {
        question: "Can Ruhi join a group dinner in Sector 29?",
        answer: "Yes, and group bookings are common. Tell her how many people are coming so she can judge the table and the tone; she is comfortable in a loud, social setting."
      },
      {
        question: "What is the best night to book Ruhi?",
        answer: "Friday and Saturday are her busiest nights, so confirm by the afternoon. Weekday bookings are easier to arrange at short notice and the strip is calmer."
      },
      {
        question: "Does Ruhi drink on a booking?",
        answer: "She will share a drink if the client is drinking, but she never overdoes it and does not expect alcohol to be part of the arrangement."
      }
    ]
  },
  {
    id: "26",
    name: "Isha",
    age: "27",
    slug: "isha",
    seoSlug: "isha-call-girl-sushant-lok-gurgaon",
    image: "/img/isha-call-girl-sushant-lok-gurgaon.webp",
    imageAlt: "Portrait of Isha, verified call girl in Sushant Lok Gurgaon for private residence visits",
    category: "gurgaon-escort",
    categoryLabel: "Gurgaon Escort",
    location: "Sushant Lok, Gurgaon",
    verified: true,
    rating: 4.8,
    tagline: "Warm, private company for Sushant Lok residences",
    languages: [
      "Hindi",
      "English"
    ],
    availability: "Available in Evening",
    priceLabel: "₹ 7,500/hr",
    about: [
      "Isha lives in Sushant Lok and works almost entirely on residential bookings, which means she is very good at the part most companions find awkward: arriving at a society gate, giving a name, and getting to the right tower without a phone call every two minutes.",
      "She is 27, speaks Hindi and English, and has a calm, unhurried manner that suits clients who want company at home rather than a night on the town. She is happy to cook something simple, watch a film, or just talk, and she is clear that a booking is a booking rather than the start of anything more complicated.",
      "Isha works Sushant Lok, Golf Course Road and the Sector 29 side, and her bookings are usually dinners or two-hour hotel visits in the evening. She is comfortable in a gated society and asks for the tower and gate before she leaves, which makes a residence visit straightforward.",
      "She is a calm companion rather than a loud one, and she is good at the part of the evening before the restaurant: the lobby, the lift, the small talk while the table is prepared. If you are in Sushant Lok and want a companion who can arrive on foot rather than in a car, she is the closest match.",
    ],
    specialties: [
      "Residence visits",
      "Quiet evenings",
      "Repeat clients",
      "Sushant Lok societies"
    ],
    faqs: [
      {
        question: "Can Isha visit a gated society in Sushant Lok?",
        answer: "Yes, that is most of her work. Give the block and tower number at booking and confirm whether your society needs a visitor pass so she arrives prepared."
      },
      {
        question: "Does Isha stay for a full evening?",
        answer: "She does, and three to four hour bookings are common. Longer overnights are possible when planned a day ahead rather than at short notice."
      },
      {
        question: "Is Isha comfortable with a quiet evening at home?",
        answer: "Very. Many of her clients prefer dinner at home to a restaurant, and she is happy to keep the evening simple rather than structured."
      }
    ]
  },
  {
    id: "27",
    name: "Tanvi",
    age: "28",
    slug: "tanvi",
    seoSlug: "tanvi-call-girl-golf-course-extension-gurgaon",
    image: "/img/tanvi-call-girl-golf-course-extension-gurgaon.webp",
    imageAlt: "Portrait of Tanvi, verified call girl in Golf Course Extension Gurgaon for luxury tower visits",
    category: "vip",
    categoryLabel: "VIP",
    location: "Golf Course Extension, Gurgaon",
    verified: true,
    rating: 4.9,
    tagline: "Polished company for the Golf Course Extension towers",
    languages: [
      "English",
      "Hindi",
      "French"
    ],
    availability: "By appointment",
    priceLabel: "₹ 12,000/hr",
    about: [
      "Tanvi works the newer luxury towers on Golf Course Extension, from Emaar Palm Drive to M3M Golf Estate, and she is used to the specific etiquette of those buildings: the visitor log, the call from reception, the lift that needs a floor number. She dresses for a residential lobby rather than a bar, which is why she rarely draws a second look.",
      "She is 28, speaks English, Hindi and some French, and has a background in hospitality that shows in how she handles an evening. Clients describe her as composed and genuinely good company over dinner, and she prefers bookings of three hours or more so the evening is not rushed.",
      "Tanvi works Golf Course Extension and the newer towers along the Southern Peripheral Road, and her bookings are usually residence visits rather than hotel evenings. She knows the gates, the visitor apps and the security desks of the new developments, which is more useful than it sounds.",
      "She is a VIP-category companion at a mid-band rate, and she works by appointment. If you are staying in a serviced apartment on the extension, tell her the tower and the app approval before she leaves; the drive is twenty-five minutes and the wait at the gate can be longer than the drive.",
    ],
    specialties: [
      "Luxury tower visits",
      "Grand Hyatt dinners",
      "Private evenings",
      "Long bookings"
    ],
    faqs: [
      {
        question: "Can Tanvi visit Emaar Palm Drive or M3M Golf Estate?",
        answer: "Yes. She works those societies regularly and knows the visitor process at each gate, so share your tower number and she will handle the rest."
      },
      {
        question: "Does Tanvi join dinner at Grand Hyatt?",
        answer: "She does, and it is one of her most common formats. Tell her the restaurant when booking so she dresses for the venue rather than a private visit."
      },
      {
        question: "What is the minimum booking for Tanvi?",
        answer: "Three hours is her usual minimum, which covers dinner and a relaxed return. Shorter bookings are possible on weekdays when her calendar allows."
      }
    ]
  },
  {
    id: "28",
    name: "Sanya",
    age: "24",
    slug: "sanya",
    seoSlug: "sanya-call-girl-sohna-road-gurgaon",
    image: "/img/sanya-call-girl-sohna-road-gurgaon.webp",
    imageAlt: "Portrait of Sanya, verified call girl in Sohna Road Gurgaon for apartment outcall",
    category: "call-girl-gurgaon",
    categoryLabel: "Call Girl Gurgaon",
    location: "Sohna Road, Gurgaon",
    verified: true,
    rating: 4.7,
    tagline: "Easy company for Sohna Road apartments and cafés",
    languages: [
      "Hindi",
      "English",
      "Haryanvi"
    ],
    availability: "Available Now",
    priceLabel: "₹ 6,500/hr",
    about: [
      "Sanya covers the Sohna Road corridor from Subhash Chowk down to Sector 57, and she has learned that the small details decide whether a residential booking goes smoothly. Which gate, which tower, whether the lift needs a card: she asks all of it before leaving so the arrival takes five minutes rather than twenty.",
      "She is 24, cheerful and easy to talk to, and she is a good choice for a first booking because she does not expect the evening to be elaborate. A dinner at South Point Mall, a film at home, a few hours of company, and she is content. Clients who book her twice usually say the same thing: she is relaxed and there is no pressure.",
      "Sanya covers Sohna Road, South City and the Golf Course Extension side, and her bookings are usually short and local: a two-hour hotel visit, a dinner at a Sohna Road restaurant, a residence call in a gated society she already knows.",
      "She is available most evenings and takes same-day requests when the venue is on her side of the city. A Cyber City booking is a forty-minute drive for her, and she will quote it honestly rather than pretend the distance is shorter. If you are south of the city, she is the nearest good option.",
    ],
    specialties: [
      "Apartment visits",
      "South Point Mall dinners",
      "First bookings",
      "Short-notice visits"
    ],
    faqs: [
      {
        question: "Does Sanya cover Sector 47 and 48?",
        answer: "Yes, along with Sector 49 to 57 and the societies around Subhash Chowk. She asks for the exact tower at booking so the gate process does not delay her."
      },
      {
        question: "How much notice does Sanya need?",
        answer: "Two hours is usually enough on Sohna Road. At peak traffic between six and eight she prefers a little longer so the arrival time stays honest."
      },
      {
        question: "Can Sanya meet at South Point Mall first?",
        answer: "She can, and a public first meeting is a good format if you are unsure. Most clients move to a private booking once they have met her."
      }
    ]
  },
  {
    id: "29",
    name: "Preeti",
    age: "29",
    slug: "preeti",
    seoSlug: "preeti-call-girl-south-city-gurgaon",
    image: "/img/preeti-call-girl-south-city-gurgaon.webp",
    imageAlt: "Portrait of Preeti, verified call girl in South City Gurgaon for mature companion bookings",
    category: "bhabhi",
    categoryLabel: "Bhabhi",
    location: "South City, Gurgaon",
    verified: true,
    rating: 4.8,
    tagline: "Mature, grounded company in South City",
    languages: [
      "Hindi",
      "English"
    ],
    availability: "Available in Evening",
    priceLabel: "₹ 7,000/hr",
    about: [
      "Preeti is 29 and works the older, quieter parts of Gurgaon: South City 1 and 2, Sector 40 and the streets around Nirvana Country. Her clients tend to be men in their forties and fifties who want conversation with someone who has lived a little, rather than a companion who treats the evening as a performance.",
      "She is warm without being effusive, good at listening, and completely unshockable. That combination makes her a frequent choice for repeat bookings and for clients who have had a disappointing experience elsewhere. She asks for a short call before the first meeting, mostly to make sure the expectations on both sides are realistic.",
      "Preeti works South City, Sohna Road and the older colonies around Sector 40, and her bookings are usually residence visits in the evening. She is one of the companions most comfortable in a house rather than a hotel, and she would rather be told about a gate and a guard than about a lobby.",
      "She is in the bhabhi category and her conversation is warm rather than polished, which is exactly what some clients want after a long day. A two-hour visit is her standard; a dinner booking is possible if the restaurant is on her side of the city and the table is quiet.",
    ],
    specialties: [
      "Mature company",
      "Conversation-led dates",
      "Repeat bookings",
      "South City residences"
    ],
    faqs: [
      {
        question: "What kind of clients book Preeti?",
        answer: "Mostly professional men in their forties and fifties who want relaxed company and conversation rather than a night out. She is also booked by clients who are nervous about a first appointment."
      },
      {
        question: "Does Preeti visit South City 1 and 2?",
        answer: "Yes, both, along with Sector 40 and the Nirvana Country side. She prefers a call before the first booking to confirm the address and timing."
      },
      {
        question: "Can Preeti keep the booking private?",
        answer: "Completely. She arrives alone, uses the visitor entry you specify and does not discuss the booking with anyone at the gate beyond the name you provide."
      }
    ]
  },
  {
    id: "30",
    name: "Mahi",
    age: "25",
    slug: "mahi",
    seoSlug: "mahi-call-girl-dlf-phase-3-gurgaon",
    image: "/img/mahi-call-girl-dlf-phase-3-gurgaon.webp",
    imageAlt: "Portrait of Mahi, verified call girl in DLF Phase 3 Gurgaon for hotel outcall",
    category: "indian",
    categoryLabel: "Indian",
    location: "DLF Phase 3, Gurgaon",
    verified: true,
    rating: 4.8,
    tagline: "Effortless company minutes from Cyber Hub",
    languages: [
      "Hindi",
      "English"
    ],
    availability: "Available Now",
    priceLabel: "₹ 7,500/hr",
    about: [
      "Mahi lives in DLF Phase 3, which puts her within ten minutes of Cyber Hub, Cyber City and the expressway hotels. That proximity is why she takes more short-notice bookings than most companions: a client who lands at nine and wants company by ten is a realistic request for her rather than a hopeful one.",
      "She is 25, speaks Hindi and English, and has a relaxed, playful manner that works well for dinner and drinks. She is also unusually good at the practical side of a booking, arriving with the tower number already confirmed and a clear idea of how long she is staying, which clients appreciate more than they expect to.",
      "Mahi lives in DLF Phase 3, which puts Cyber City, Golf Course Road and the MG Road hotels within twenty minutes. Her bookings are almost always hotel evenings, and she is the companion to call when you want someone who can be in a lobby quickly without the arrival feeling rushed.",
      "She is available most nights and takes same-day requests. She is Indian-category and her rate sits in the middle of the band, which makes her a sensible first booking for a client who wants a hotel evening without the VIP price. She meets in the lobby on a first visit as a matter of habit.",
    ],
    specialties: [
      "Short-notice bookings",
      "Cyber Hub dinners",
      "Hotel visits",
      "DLF societies"
    ],
    faqs: [
      {
        question: "How fast can Mahi reach DLF Phase 3 or Cyber Hub?",
        answer: "Twenty to thirty minutes in most cases, because she lives in Phase 3. That makes her one of the better options for a late, last-minute request in the DLF belt."
      },
      {
        question: "Can Mahi meet at Cyber Hub?",
        answer: "Yes. Cyber Hub, Galleria and the Phase 2 hotel restaurants are all within a short drive, and she knows which tables work for a first meeting."
      },
      {
        question: "Does Mahi work weekends?",
        answer: "She does, and Saturday evenings book out first. A day of notice is usually enough to secure a weekend slot."
      }
    ]
  },
  {
    id: "31",
    name: "Nandini",
    age: "27",
    slug: "nandini",
    seoSlug: "nandini-call-girl-dlf-phase-4-gurgaon",
    image: "/img/nandini-call-girl-dlf-phase-4-gurgaon.webp",
    imageAlt: "Portrait of Nandini, verified call girl in DLF Phase 4 Gurgaon for private villa visits",
    category: "vip",
    categoryLabel: "VIP",
    location: "DLF Phase 4, Gurgaon",
    verified: true,
    rating: 4.9,
    tagline: "Refined company for DLF Phase 4 villas and suites",
    languages: [
      "English",
      "Hindi",
      "Bengali"
    ],
    availability: "By appointment",
    priceLabel: "₹ 11,000/hr",
    about: [
      "Nandini works the quiet, expensive end of DLF: Phase 4 villas, the serviced apartments around Galleria, and the suites at The Leela and Trident. She is 27, Bengali, English-educated and comfortable in rooms where the conversation is as important as the company.",
      "She takes fewer bookings than most companions and plans them properly, which is why she asks for the venue, the guest list and the dress code before confirming. Clients who want a companion for a family-adjacent dinner, an investor evening or a private celebration tend to come back to her because she handles those settings without needing to be briefed twice.",
      "Nandini works DLF Phase 4 and the surrounding towers, and her bookings are a mix of hotel evenings and residence visits. She is a VIP-category companion who does not insist on a five-star room: a well-kept serviced apartment is as good a setting for her as a hotel suite.",
      "She works by appointment and prefers a day of notice, and she will ask about the venue and the occasion before confirming. If the evening includes other people, tell her how many and what they know; she is comfortable in company but she does not like surprises at the table.",
    ],
    specialties: [
      "Villa and suite visits",
      "Business dinners",
      "Private celebrations",
      "Discreet arrangements"
    ],
    faqs: [
      {
        question: "Does Nandini visit DLF Phase 4 villas?",
        answer: "Yes, and villa bookings are her speciality. She asks for the gate number and whether the residence has staff present so she can dress and arrive appropriately."
      },
      {
        question: "Is Nandini available for investor or client dinners?",
        answer: "She is, and she is comfortable in settings where the conversation is business-adjacent. Share the context when booking so she can prepare rather than improvise."
      },
      {
        question: "How far ahead should I book Nandini?",
        answer: "A day is ideal. She keeps a small calendar and does not accept back-to-back bookings, so weekend slots are usually gone by Thursday."
      }
    ]
  },
  {
    id: "32",
    name: "Zoya",
    age: "26",
    slug: "zoya",
    seoSlug: "zoya-vip-escort-golf-course-road-gurgaon",
    image: "/img/zoya-vip-escort-golf-course-road-gurgaon.webp",
    imageAlt: "Portrait of Zoya, VIP escort in Golf Course Road Gurgaon for five-star hotel evenings",
    category: "vip",
    categoryLabel: "VIP",
    location: "Golf Course Road, Gurgaon",
    verified: true,
    rating: 5,
    tagline: "VIP companion for Golf Course Road's five-star evenings",
    languages: [
      "English",
      "Hindi",
      "Russian"
    ],
    availability: "By appointment",
    priceLabel: "₹ 18,000/hr",
    about: [
      "Zoya is the profile clients ask for when the evening has to be right the first time. She works Golf Course Road almost exclusively, from The Oberoi and The Westin to the private dining rooms at One Horizon Center, and she is used to rooms where presentation is noticed and conversation is expected to carry.",
      "At 26 she has spent four years working with a small group of repeat clients, most of them senior executives and visiting investors. She speaks English, Hindi and enough Russian to hold a table, keeps a deliberately short calendar, and asks for a call before confirming anything so the venue, timing and dress code are agreed rather than assumed.",
      "Zoya is the most expensive booking on this site and the one with the clearest terms. She works Golf Course Road almost exclusively, by appointment, with a day of notice and a confirmed venue before she agrees to an evening. A same-night request is almost always declined.",
      "What the rate buys is an evening that needs no management: she arrives early, knows the restaurant, handles the staff and is still good company at midnight. She is not a companion for a quiet residence visit or a short booking; if the plan is a proper evening in a good room, she is the match.",
    ],
    specialties: [
      "Five-star hotel evenings",
      "Executive dinners",
      "Private dining",
      "International clients"
    ],
    faqs: [
      {
        question: "What makes Zoya a VIP booking?",
        answer: "She works a small calendar, dresses for five-star venues and is comfortable in rooms where the company is expected to contribute to the conversation rather than simply attend."
      },
      {
        question: "Does Zoya visit The Oberoi and The Westin?",
        answer: "Yes, both, along with Taj City Centre and Grand Hyatt. She asks which restaurant or lounge you have booked so the arrival and dress code match the venue."
      },
      {
        question: "How far ahead does Zoya book?",
        answer: "Several days for weekends and a week or more for events. She does not take same-day requests, which is part of why her bookings run smoothly."
      }
    ]
  },
  {
    id: "33",
    name: "Alexa",
    age: "24",
    slug: "alexa",
    seoSlug: "alexa-air-hostess-escort-gurgaon",
    image: "/img/alexa-air-hostess-escort-gurgaon.webp",
    imageAlt: "Portrait of Alexa, air hostess escort in Gurgaon for layover and hotel bookings",
    category: "russian",
    categoryLabel: "Russian",
    location: "Aerocity and Gurgaon",
    verified: true,
    rating: 4.9,
    tagline: "Air hostess companion for layovers and long weekends",
    languages: [
      "English",
      "Russian"
    ],
    availability: "Layover schedule",
    priceLabel: "₹ 14,000/hr",
    about: [
      "Alexa works cabin crew schedules, which means her availability follows flights rather than office hours. She is based between Delhi and Gurgaon, takes bookings around layovers, and is one of the few companions who genuinely understands what a jet-lagged client wants at eleven at night: company, quiet and no performance.",
      "She is 24, Russian, English-speaking, and used to hotel rooms in Aerocity and along Golf Course Road. Her bookings are usually shorter and planned around a specific window, and she is candid about which windows she can actually make. Clients who travel frequently tend to keep her number for exactly that reason.",
      "Alexa works around a flight rota, so her availability is unusual: a few free days, then a week away. She is based on the Aerocity side and her bookings are usually dinners near the airport or hotel evenings close to the expressway, which suits a traveller on a layover better than a resident on the other side of the city.",
      "She speaks Russian and English and is used to people who are tired and far from home, which makes her good company at an odd hour. Book her with the flight times, not just the date; a standby call can move her day, and the coordinator will always offer an alternative when it does.",
    ],
    specialties: [
      "Layover bookings",
      "Aerocity hotels",
      "Late-night company",
      "Frequent travellers"
    ],
    faqs: [
      {
        question: "How does Alexa's flight schedule affect bookings?",
        answer: "Her availability changes week to week, so share the date and time you need and she will confirm whether her roster allows it rather than promising and cancelling later."
      },
      {
        question: "Does Alexa cover Aerocity hotels?",
        answer: "Yes. Aerocity and the Mahipalpur hotel belt are her most common bookings, along with Golf Course Road and Cyber City properties."
      },
      {
        question: "Can Alexa meet at the airport?",
        answer: "She can meet at a hotel near the airport rather than inside the terminal. For layovers, the practical format is a room in Aerocity and a booking of two to four hours."
      }
    ]
  },
  {
    id: "34",
    name: "Karina",
    age: "27",
    slug: "karina",
    seoSlug: "karina-ukrainian-vip-escort-gurgaon",
    image: "/img/karina-ukrainian-vip-escort-gurgaon.webp",
    imageAlt: "Portrait of Karina, Ukrainian VIP escort in Gurgaon for luxury hotel outcall",
    category: "ukrainian",
    categoryLabel: "Ukrainian",
    location: "Golf Course Road, Gurgaon",
    verified: true,
    rating: 4.9,
    tagline: "Ukrainian VIP companion with a calm, polished manner",
    languages: [
      "English",
      "Ukrainian",
      "Russian"
    ],
    availability: "By appointment",
    priceLabel: "₹ 16,000/hr",
    about: [
      "Karina is Ukrainian, 27, and has worked the Gurgaon hotel circuit for three years. She is the calm one in the room: unhurried, well-read, and comfortable letting a dinner run at its own pace. Clients who book her usually want a companion who can hold a conversation with their colleagues and then disappear from it gracefully.",
      "She takes bookings across Golf Course Road, Cyber City and DLF, prefers three hours minimum, and asks for the venue in advance so she can match the dress code. She does not do short-notice requests, and she is upfront that her rate reflects the preparation rather than the hours.",
      "Karina works the Golf Course Road five-stars and the private dining rooms around Cyber Hub, and her bookings are planned a day or two ahead. She is a VIP-category companion in the Ukrainian band, which in practice means presentation, languages and an evening that runs without instructions.",
      "She is at her best in a room with other people in it: a client dinner, a celebration, a table where the host needs the evening to go well. For a quiet two-hour visit a cheaper companion does the same job, and she will say so if you ask.",
    ],
    specialties: [
      "Luxury hotel dinners",
      "Corporate evenings",
      "Long bookings",
      "English-fluent company"
    ],
    faqs: [
      {
        question: "What languages does Karina speak?",
        answer: "English, Ukrainian and Russian. Her English is fluent enough for a full evening of conversation, which is why she is often booked for client dinners."
      },
      {
        question: "Does Karina work with corporate groups?",
        answer: "She works one-to-one bookings at corporate events rather than group arrangements, and she is comfortable in settings where colleagues are present if the client is."
      },
      {
        question: "Where does Karina usually meet clients?",
        answer: "Golf Course Road and Cyber City hotels are the majority of her bookings, with occasional visits to DLF Phase 5 residences."
      }
    ]
  },
  {
    id: "35",
    name: "Priyanka",
    age: "30",
    slug: "priyanka",
    seoSlug: "priyanka-housewife-escort-gurgaon",
    image: "/img/priyanka-housewife-escort-gurgaon.webp",
    imageAlt: "Portrait of Priyanka, housewife escort in Gurgaon for discreet daytime and evening bookings",
    category: "bhabhi",
    categoryLabel: "Bhabhi",
    location: "Sector 40, Gurgaon",
    verified: true,
    rating: 4.7,
    tagline: "Discreet daytime company from a Sector 40 housewife",
    languages: [
      "Hindi",
      "English"
    ],
    availability: "Daytime and early evening",
    priceLabel: "₹ 6,000/hr",
    about: [
      "Priyanka is 30, lives in Sector 40, and works the hours that most companions do not: late morning through early evening, when the towers are quiet and nobody is watching the lift lobby. Her clients are often working from home, visiting on business with a free afternoon, or simply prefer daylight to a late night.",
      "She is candid about being a housewife who takes a few bookings a week, and that honesty is a large part of her appeal. The evening, or afternoon, is straightforward: conversation, company, and no pretence about what the arrangement is. She asks for a call first and prefers clients who are equally direct.",
      "Priyanka works days and early evenings in Sector 40, South City and the Sohna Road side, and her bookings are usually residence visits or a quiet hotel afternoon. Her clients tend to be in the city for work and free between meetings rather than at night.",
      "She is in the bhabhi category and her manner is domestic rather than performative, which suits a client who wants company without an occasion. She asks for the tower and gate in advance and would rather arrive ten minutes early than call from the barrier twice.",
    ],
    specialties: [
      "Daytime bookings",
      "Discreet visits",
      "Sector 40 area",
      "Repeat clients"
    ],
    faqs: [
      {
        question: "What hours does Priyanka work?",
        answer: "Late morning to early evening, roughly eleven to seven. She does not take late-night bookings, which is why her calendar suits clients who want company during the day."
      },
      {
        question: "Is Priyanka discreet about her bookings?",
        answer: "Very. She arrives alone, uses the visitor entry you specify, and does not discuss the arrangement with anyone. Discretion is the main reason her clients return."
      },
      {
        question: "Which areas does Priyanka cover?",
        answer: "Sector 40, South City, Nirvana Country and the Sushant Lok side. She prefers bookings within a fifteen-minute drive of her home."
      }
    ]
  },
  {
    id: "36",
    name: "Ananya",
    age: "24",
    slug: "ananya",
    seoSlug: "ananya-model-escort-cyber-city-gurgaon",
    image: "/img/ananya-model-escort-cyber-city-gurgaon.webp",
    imageAlt: "Portrait of Ananya, model escort in Cyber City Gurgaon for events and hotel evenings",
    category: "model",
    categoryLabel: "Model",
    location: "Cyber City, Gurgaon",
    verified: true,
    rating: 4.9,
    tagline: "Event-ready model companion for Cyber City evenings",
    languages: [
      "English",
      "Hindi"
    ],
    availability: "Available in Evening",
    priceLabel: "₹ 12,000/hr",
    about: [
      "Ananya is 24 and works as a model between bookings, which is why she is the profile clients choose when the evening includes a launch, a client dinner or a room where photographs might be taken. She is tall, dresses sharply, and is entirely comfortable being the most noticeable person at a table without making it awkward.",
      "She works Cyber City, Udyog Vihar and the Aerocity hotels, and she is specific about the brief: venue, dress code, arrival time and how long she is staying. Clients who give her those details get an evening that looks effortless, which is the point of booking a model companion in the first place.",
      "Ananya works Cyber City and the Golf Course Road hotels, and her bookings are usually evening events, client dinners and hotel evenings that need a companion who looks the part. She works most evenings and takes a day of notice for a weekend.",
      "She is a model-category companion at the top of the Indian band, and the rate is about presentation as much as company. If the plan is a business dinner, tell her the industry and the number of guests; she is good at a table where the conversation is about work and the companion is expected to be charming and discreet.",
    ],
    specialties: [
      "Corporate events",
      "Launch evenings",
      "Client dinners",
      "Photography-friendly"
    ],
    faqs: [
      {
        question: "Can Ananya attend a company launch or event?",
        answer: "Yes, and events are her speciality. Share the venue, dress code and timing so she can prepare properly; she is used to settings where photographs may be taken."
      },
      {
        question: "Does Ananya visit Cyber City hotels?",
        answer: "She does, and The Leela, Trident and the Udyog Vihar business hotels are her most common bookings."
      },
      {
        question: "What is Ananya's minimum booking?",
        answer: "Three hours for events and two hours for a hotel dinner. Event bookings are usually confirmed a few days ahead."
      }
    ]
  },
  {
    id: "37",
    name: "Kiara",
    age: "26",
    slug: "kiara",
    seoSlug: "kiara-independent-escort-gurgaon",
    image: "/img/kiara-independent-escort-gurgaon.webp",
    imageAlt: "Portrait of Kiara, independent escort in Gurgaon working without an agency",
    category: "gurgaon-escort",
    categoryLabel: "Gurgaon Escort",
    location: "DLF Phase 2, Gurgaon",
    verified: true,
    rating: 4.8,
    tagline: "Independent companion, direct bookings, no agency in between",
    languages: [
      "Hindi",
      "English",
      "Marathi"
    ],
    availability: "Available Now",
    priceLabel: "₹ 8,000/hr",
    about: [
      "Kiara works independently, which in practice means the person you speak to is the person who arrives. She is 26, based in DLF Phase 2, and handles her own calendar, so the confirmation you get on WhatsApp is the booking rather than a promise that someone will call back.",
      "That directness suits clients who dislike the agency routine of being passed between numbers. She is also clear about her boundaries and her rate, both of which are settled before she leaves. Clients describe her as straightforward and good fun, with a conversation style that makes a two-hour booking feel unhurried.",
      "Kiara is an independent companion working DLF Phase 2 and the Cyber City hotels, and she keeps her own diary rather than working through a roster. That means a booking is confirmed by her, not for her, and a same-night request depends on what her evening already looks like.",
      "She is the companion to book if you want to deal with the person you are actually meeting: one thread, one rate, one arrival. She is comfortable in a hotel and in a gated society, and she will ask for the details she needs rather than assume them.",
    ],
    specialties: [
      "Direct bookings",
      "DLF Phase 2 area",
      "Short-notice visits",
      "Straightforward arrangements"
    ],
    faqs: [
      {
        question: "What does independent mean for Kiara's bookings?",
        answer: "It means she manages her own calendar and arrives herself. There is no agency in between, so the rate and timing you agree with her are the ones that apply."
      },
      {
        question: "How quickly can Kiara arrive?",
        answer: "Thirty to forty minutes around DLF and Cyber City, because she lives in Phase 2. She will tell you honestly if the timing is tight rather than accept and arrive late."
      },
      {
        question: "Does Kiara take same-day bookings?",
        answer: "Often, yes, particularly on weekdays. Weekends fill earlier, so a message in the afternoon is safer than one at nine at night."
      }
    ]
  },
  {
    id: "38",
    name: "Shreya",
    age: "21",
    slug: "shreya",
    seoSlug: "shreya-college-girl-gurgaon",
    image: "/img/shreya-college-girl-gurgaon.webp",
    imageAlt: "Portrait of Shreya, 18+ college girl escort in Gurgaon for casual companion bookings",
    category: "college-girl",
    categoryLabel: "18+ College Girl",
    location: "Sector 14, Gurgaon",
    verified: true,
    rating: 4.6,
    tagline: "Young, chatty company for a casual evening",
    languages: [
      "Hindi",
      "English"
    ],
    availability: "Weekday evenings",
    priceLabel: "₹ 5,500/hr",
    about: [
      "Shreya is 21, studies in Gurgaon and takes a handful of bookings a week, mostly on weekday evenings. She is chatty, curious and refreshingly unpolished, which is exactly what clients who book a college companion are usually looking for: someone who feels like a real person rather than a service.",
      "She works the Sector 14, Sector 29 and MG Road side, prefers a first meeting in a café or a public restaurant, and is honest that she is new to longer overnight bookings. Her rates are the lowest on this site for a reason, and she would rather set that expectation clearly than have a client assume otherwise.",
      "Shreya works weekday evenings around Sector 14 and the MG Road side, and her bookings are short, early and local. A two-hour visit that starts at six and ends by eight is her standard, and she is honest that she does not work late nights or weekends.",
      "She is in the college-girl category and her rate is the lowest on the site, which makes her a common first booking. She is patient with first-timers, but she expects the same courtesy: a confirmed venue, a phone that is answered and payment at the meeting rather than a promise.",
    ],
    specialties: [
      "Casual dates",
      "Café meetings",
      "Weekday evenings",
      "Young company"
    ],
    faqs: [
      {
        question: "How old is Shreya?",
        answer: "She is 21 and only takes bookings as an adult, 18+. Age is confirmed at booking, and she does not accept requests that suggest otherwise."
      },
      {
        question: "Where does Shreya prefer to meet?",
        answer: "A café or restaurant for a first meeting, usually around Sector 29, MG Road or Sector 14. She is more comfortable in a public setting before a private booking."
      },
      {
        question: "Does Shreya take overnight bookings?",
        answer: "Rarely, and only with clients she has met before. She is upfront that short bookings are her usual format rather than pretending otherwise."
      }
    ]
  },
  {
    id: "39",
    name: "Muskan",
    age: "25",
    slug: "muskan",
    seoSlug: "muskan-punjabi-escort-gurgaon",
    image: "/img/muskan-punjabi-escort-gurgaon.webp",
    imageAlt: "Portrait of Muskan, Punjabi escort in Gurgaon for dinner and nightlife bookings",
    category: "punjabi",
    categoryLabel: "Punjabi",
    location: "Sector 29, Gurgaon",
    verified: true,
    rating: 4.8,
    tagline: "Punjabi warmth and a good night out in Sector 29",
    languages: [
      "Punjabi",
      "Hindi",
      "English"
    ],
    availability: "Available Now",
    priceLabel: "₹ 7,000/hr",
    about: [
      "Muskan is 25, Punjabi, and the kind of companion who turns a quiet dinner into a genuinely good evening. She talks easily, laughs at her own jokes and has a knack for putting nervous clients at ease within the first five minutes, which is why she gets so many first-time bookings around Sector 29 and MG Road.",
      "She is also practical. She knows the Sector 29 strip, keeps her rate simple, and confirms the plan before leaving rather than negotiating at the door. Clients who book her for a night out tend to book her again for the same reason: the evening is easy.",
      "Muskan works Sector 29, MG Road and the Punjabi restaurants on the Golf Course Road side, and her evenings are built around food and conversation. A dinner at nine that turns into a drink at eleven is her most common booking, and she knows which bars will seat two without a reservation.",
      "She speaks Punjabi and Hindi comfortably and English at the table, and she is the companion to book when the evening is a celebration rather than an appointment. She works most nights and takes Friday and Saturday requests a day ahead.",
    ],
    specialties: [
      "Night outs",
      "First-time clients",
      "Dinner dates",
      "Sector 29 venues"
    ],
    faqs: [
      {
        question: "Is Muskan a good choice for a first booking?",
        answer: "Yes. She is relaxed, talks easily and prefers a public first meeting, which makes the evening less pressured for clients who have not booked before."
      },
      {
        question: "Which venues does Muskan know in Sector 29?",
        answer: "Most of the strip, from the casual pubs to the sit-down restaurants. She will suggest somewhere that suits the kind of evening you want."
      },
      {
        question: "Does Muskan speak Punjabi?",
        answer: "Fluent Punjabi, Hindi and English. Clients who prefer Punjabi conversation ask for her specifically for that reason."
      }
    ]
  },
  {
    id: "40",
    name: "Ritika",
    age: "28",
    slug: "ritika",
    seoSlug: "ritika-nri-escort-gurgaon",
    image: "/img/ritika-nri-escort-gurgaon.webp",
    imageAlt: "Portrait of Ritika, NRI escort in Gurgaon for English-speaking clients and hotel stays",
    category: "nri",
    categoryLabel: "NRI",
    location: "Golf Course Road, Gurgaon",
    verified: true,
    rating: 4.9,
    tagline: "English-fluent NRI companion for visiting professionals",
    languages: [
      "English",
      "Hindi"
    ],
    availability: "By appointment",
    priceLabel: "₹ 13,000/hr",
    about: [
      "Ritika grew up in London, moved back to India two years ago and works with NRI and international clients who want a companion without a language barrier or a cultural translation exercise. She is 28, works in marketing, and takes bookings around Golf Course Road, Cyber City and the Aerocity hotels.",
      "Her evenings tend to be dinner-led and conversational. She is well read, opinionated in a way that keeps a table interesting, and comfortable with the kind of client who travels constantly and has eaten in every city. She asks for the venue and the guest list before confirming, and she does not accept bookings she cannot prepare for.",
      "Ritika works with NRI and returning clients on Golf Course Road and in the Cyber City apartments, and her bookings usually come with a schedule: dinner on the first night, a longer evening on the second, an afternoon before the flight. She is comfortable being booked for a stay rather than for a night.",
      "She is in the NRI category and her conversation moves easily between India and abroad, which is the reason clients ask for her by name. She works by appointment and prefers a day of notice; a same-night request is possible only when her diary allows it.",
    ],
    specialties: [
      "NRI clients",
      "International visitors",
      "Dinner-led evenings",
      "English conversation"
    ],
    faqs: [
      {
        question: "Where did Ritika grow up?",
        answer: "London, and she moved back to India two years ago. Her English is native-level, which is why NRI and international clients tend to book her."
      },
      {
        question: "Does Ritika cover Aerocity hotels?",
        answer: "Yes, along with Golf Course Road and Cyber City. Aerocity bookings are usually short and built around a flight or a one-night stay."
      },
      {
        question: "Can Ritika join a business dinner?",
        answer: "She can, and she is comfortable in settings where the conversation is professional. She asks for the context so she can contribute rather than sit through it."
      }
    ]
  },
  {
    id: "41",
    name: "Neha",
    age: "26",
    slug: "neha",
    seoSlug: "neha-high-profile-escort-gurgaon",
    image: "/img/neha-high-profile-escort-gurgaon.webp",
    imageAlt: "Portrait of Neha, high profile escort in Gurgaon for VIP hotel and event bookings",
    category: "vip",
    categoryLabel: "VIP",
    location: "MG Road, Gurgaon",
    verified: true,
    rating: 4.9,
    tagline: "High-profile company for events and five-star evenings",
    languages: [
      "English",
      "Hindi"
    ],
    availability: "By appointment",
    priceLabel: "₹ 15,000/hr",
    about: [
      "Neha is 26, works the high-profile end of the Gurgaon market, and is booked mostly for evenings where the company will be noticed: hotel galas, private parties, client dinners at The Bristol or The Leela, and the occasional wedding reception in DLF.",
      "She is composed, discreet and unusually good at reading a room, which matters more than appearance in the settings she works. She keeps a small client list, does not take same-day bookings, and is explicit that her rate covers company and conversation rather than anything she is not comfortable with.",
      "Neha works MG Road and the Golf Course Road hotels, by appointment, for clients who want a companion who can hold a table in a room full of people. Her bookings are usually dinners and events rather than hotel visits, and she expects the venue and the guest list before she confirms.",
      "She is a VIP-category companion at the top of the band, and the rate is about composure rather than novelty. If the evening is a quiet two hours in a room, she will say that a different companion suits better; if the evening is a room that needs to be handled, she is the one to book.",
    ],
    specialties: [
      "Gala and event evenings",
      "Five-star hotels",
      "Private parties",
      "High-profile discretion"
    ],
    faqs: [
      {
        question: "What kind of events does Neha attend?",
        answer: "Hotel galas, private parties, client dinners and wedding receptions. She asks for the dress code and the guest list before confirming so she arrives appropriately."
      },
      {
        question: "Is Neha discreet at high-profile events?",
        answer: "That is the core of her work. She does not photograph the evening, does not discuss clients, and knows how to be present at an event without becoming its subject."
      },
      {
        question: "How does Neha's booking process work?",
        answer: "A short call, then a confirmed time and venue. She does not accept same-day requests, and she confirms the rate in writing before the evening."
      }
    ]
  },
  {
    id: "42",
    name: "Aditi",
    age: "32",
    slug: "aditi",
    seoSlug: "aditi-bhabhi-escort-gurgaon",
    image: "/img/aditi-bhabhi-escort-gurgaon.webp",
    imageAlt: "Portrait of Aditi, bhabhi escort in Gurgaon for mature and discreet companion bookings",
    category: "bhabhi",
    categoryLabel: "Bhabhi",
    location: "Sector 56, Gurgaon",
    verified: true,
    rating: 4.8,
    tagline: "Grounded, mature company for a quiet evening",
    languages: [
      "Hindi",
      "English"
    ],
    availability: "Daytime and evening",
    priceLabel: "₹ 6,500/hr",
    about: [
      "Aditi is 32, lives in Sector 56 and has been taking bookings for four years. She is the companion clients choose when they want someone settled rather than sparkling: a woman who has a life of her own, listens properly and does not need the evening to be about her.",
      "Her clients are often men in their forties who are tired of the performance that comes with younger profiles. She works daytime and evening, prefers a call before the first booking, and is clear about her boundaries. Repeat bookings make up most of her calendar, which says more about her than any description could.",
      "Aditi works Sector 56, Golf Course Extension and the Sohna Road side, and her bookings are residence visits and quiet hotel afternoons rather than late nights. She works days and evenings, and a two-hour visit is the format she knows best.",
      "She is in the bhabhi category and her manner is unhurried, which suits a client who wants company without an occasion. She asks for the tower and gate before she leaves and would rather be early than explain herself at a barrier. A dinner booking is possible if the restaurant is close to her side of the city.",
    ],
    specialties: [
      "Mature company",
      "Daytime bookings",
      "Sector 56 area",
      "Long-term repeat clients"
    ],
    faqs: [
      {
        question: "What makes Aditi different from younger profiles?",
        answer: "She is 32, settled and conversational rather than performative. Clients who want a companion who listens and does not need entertaining tend to prefer her."
      },
      {
        question: "Which areas does Aditi cover?",
        answer: "Sector 56, Sohna Road, Golf Course Extension and the South City side. She prefers bookings within a short drive of her home."
      },
      {
        question: "Does Aditi accept first-time clients?",
        answer: "Yes, with a short call beforehand. She likes to confirm expectations on both sides before agreeing to a booking."
      }
    ]
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
