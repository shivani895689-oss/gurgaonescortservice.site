export type HubSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type HubBlockName =
  | 'areaCoverage'
  | 'nearMe'
  | 'journey'
  | 'expectation'
  | 'rate'
  | 'timing'
  | 'etiquette'
  | 'extraFaq'
  | 'discretion'
  | 'local';

export type HubContentEntry = {
  sections: HubSection[];
  blocks: HubBlockName[];
};

export const hubContent: Record<string, HubContentEntry> = {
  home: {
    sections: [
      {
        heading: 'A companion agency built around one city',
        paragraphs: [
          'Gurgaon is not one market. It is at least four, stacked on top of each other and running on different clocks. Cyber City empties at nine and fills again at eleven. Golf Course Road works to hotel time, where dinner starts at eight and the lobby is quiet by ten. MG Road and Sector 29 stay loud until two. Sohna Road and the southern sectors go quiet early and expect a companion to arrive at the gate rather than a lobby.',
          'That is why this service is organised by area rather than by volume. Each belt has its own coordinators, its own arrival times and its own list of properties that handle evening guests well. A booking in DLF Phase 3 is not handled the same way as a booking in Sector 65, and pretending otherwise is how agencies end up with a companion stuck at the wrong gate.',
          'The result is a service that behaves like a local one: someone who knows that the DLF Phase 5 visitor gate closes at ten, that a Sushant Lok house number can repeat across lanes, and that the stretch between Cyber Hub and Golf Course Extension takes twenty-five minutes at seven in the evening, not ten.',
        ],
      },
      {
        heading: 'How profiles are verified before they appear',
        paragraphs: [
          'Every profile on this site has been checked in person. A coordinator meets the companion, confirms identity and age, reviews the photographs against the person in front of them, and records the languages she speaks and the areas she can reach comfortably. Nothing is published from a photograph alone, and nothing is published from a message thread.',
          'Verification is repeated rather than assumed. Photographs are refreshed when they stop matching, availability is updated when a companion changes her working hours, and a profile is removed rather than left online when the person behind it stops working with the team. A smaller, current list is more useful than a large stale one.',
          'The standard also covers conduct. Companions are briefed on what a booking includes, what it does not, and how to handle a client who pushes past an agreed boundary. That briefing is why the arrival is calm and why a companion will decline an unplanned extension without turning it into an argument at midnight.',
        ],
      },
      {
        heading: 'What a booking looks like, hour by hour',
        paragraphs: [
          'Most bookings begin with a message that contains three things: the area, the time and the duration. With those, availability is confirmed within minutes, because the coordinator already knows which companions are working that belt that evening. A rate is quoted before anything is agreed, and it does not change at the door.',
          'Once confirmed, the companion is dispatched with the address, the gate or tower number and a contact number. The client receives the companion\'s name and an arrival window. If traffic moves the window, the client is told rather than left waiting, and if the client is running late, a short message keeps the booking alive.',
          'At the meeting, payment is made directly to the companion in cash or by UPI. There is no agency fee at the door, no transport surcharge invented at the last minute and no paperwork. When the booking ends, the companion leaves the way she arrived, and the only record is the message thread the client already has.',
        ],
      },
      {
        heading: 'Why local knowledge beats a longer list',
        paragraphs: [
          'A directory with ten thousand profiles is not a service. What decides whether an evening works is whether the companion can reach your hotel before the restaurant stops seating, whether she knows which entrance the security guard will actually open, and whether she is dressed for the venue you have booked.',
          'All three depend on local knowledge rather than volume. The team keeps notes on which Gurgaon properties ask for ID at the lift, which have a guest policy that needs a name in advance, and which restaurants turn away a table booked for one. That information is worth more than another hundred profiles.',
          'It also means the recommendation you get is honest. If the companion you asked for is in Dwarka and you are in Sector 56, you will be told that the arrival will take fifty minutes and offered someone closer. A fast, well-matched booking is better than a slow, prestigious one, and the service is built to say so.',
        ],
      },
    ],
    blocks: ['areaCoverage', 'nearMe', 'expectation', 'rate', 'etiquette'],
  },
  about: {
    sections: [
      {
        heading: 'Who is behind the service',
        paragraphs: [
          'Gurgaon Escort Service is run by Alina and a small coordination team that has worked in the city since 2019. It began with a handful of verified companions and a simple idea: answer the phone, quote a real rate, and send someone who matches the description. Six years later the city has changed around that idea, but the operating standard has not.',
          'The team is deliberately small. Two coordinators cover the phone and WhatsApp lines, one person handles verification and photographs, and a group of drivers works with the companions who travel between belts. That structure is why a booking can be confirmed in minutes without being passed between three people who each ask the same questions.',
          'Alina still reviews new profiles personally. It is slower than accepting applications online, and it is the reason the list is short enough to keep current.',
        ],
      },
      {
        heading: 'How the team is organised',
        paragraphs: [
          'Coordination is split by geography rather than by shift. One coordinator handles Cyber City, DLF and Udyog Vihar, where bookings are driven by business travel and often arrive with an hour of notice. The second handles Golf Course Road, MG Road, Sohna Road and the southern sectors, where bookings are more often planned the same day and sometimes the same evening.',
          'Verification sits outside both. The verifier meets every companion before a profile is published, checks identity and age, and keeps a record that is never shared with clients. Photographs are reviewed against the person, not against a portfolio, and a profile that no longer matches is taken down.',
          'Drivers are the third part of the structure. Some companions travel independently, but for hotel bookings on Golf Course Road and late-night returns from Sector 29, a known driver removes the most common friction of an outcall: an arrival that is late, lost or announced too loudly at the gate.',
        ],
      },
      {
        heading: 'The verification standard in detail',
        paragraphs: [
          'Verification has four parts. The first is identity, confirmed in person with a government photo ID and matched to the name used in bookings. The second is age, confirmed the same way; no profile under twenty-one is accepted, and no exception is made for a convincing photograph.',
          'The third is the photograph set. Images must be recent, unedited beyond basic colour correction, and clearly the person who will arrive. This is the single biggest difference between a verified service and a directory, and it is why the photographs on this site look like portraits rather than advertisements.',
          'The fourth is a working conversation. Every companion is briefed on rates, boundaries, punctuality and what to do if a client behaves in a way that was not agreed. A profile is not published until that conversation has happened, and companions are re-briefed when the city\'s hotel and venue policies change.',
        ],
      },
      {
        heading: 'Privacy in practice, not in a paragraph',
        paragraphs: [
          'Privacy is usually described in vague promises. Here it means a few specific things. Booking messages are kept only as long as they are needed to coordinate the booking and resolve any dispute, and they are not used for marketing. No client address is stored after the booking ends unless the client asks for a repeat booking at the same place.',
          'The website collects almost nothing. There is no account, no saved payment method and no profile that a client has to create. Analytics are aggregate and cookieless, and nothing on the site identifies a visitor to the team.',
          'For clients who book regularly, the team keeps a short preference note - area, preferred companion, usual duration - and nothing else. That note can be deleted on request, and the request is honoured the same day.',
        ],
      },
      {
        heading: 'What this service will not do',
        paragraphs: [
          'There are limits, and they are stated before a booking rather than discovered during one. The service is for adults, for companionship, and for the formats listed on the services page. It is not a dating service, an introduction agency or an escort service for anyone under twenty-one, and no booking is accepted where age is unclear.',
          'No deposit is ever requested. A request for an advance payment, a booking fee, a transport advance or a security deposit is the clearest sign of a fraudulent listing, including one that copies this site\'s photographs. The team does not ask for money before a meeting, and any message that does is not from this team.',
          'The service also declines bookings that involve a third party who has not consented, a public venue where the companion would be exposed to unwanted attention, or any request that goes beyond the agreed scope. A refused booking costs an evening; a booking accepted outside these limits costs far more.',
        ],
      },
      {
        heading: 'How a complaint is handled',
        paragraphs: [
          'A complaint is read before it is answered. If a booking did not match what was confirmed - a late arrival without notice, a different companion, a rate that changed at the door - the first question is what was agreed in writing, and the second is what actually happened.',
          'Where the service got it wrong, the response says so plainly and offers a fix: a partial adjustment, a replacement booking or a refund of the difference. Where the companion acted correctly under the terms, the response says that too, with the reason, rather than offering a vague apology to close the thread.',
          'Complaints that involve safety are handled immediately and separately. A client who reports that a companion was harassed, or that a third party behaved in a way that was not agreed, is dealing with an incident rather than a service failure, and the response reflects that.',
          'Every complaint that leads to a change is recorded in the working notes, so that the next client does not encounter the same problem. The record is short, factual and deleted with the rest once the change is in place.',
        ],
      },
      {
        heading: 'Why the site is written this way',
        paragraphs: [
          'Most escort websites are written to be scanned rather than read: short claims, stock photographs, a phone number repeated six times. This one is written the way a local guide would be written, because the questions clients actually have - is my hotel easy, how long will she take, what does it cost, will anyone know - are answered by detail rather than by adjectives.',
          'That approach has a cost. Long pages take longer to produce and are harder to keep current, and a page that says a hotel is awkward for evening guests is not the most flattering thing to publish about a five-star property. It is, however, the honest version, and honesty is the only marketing that survives a second booking.',
          'It also means the site can be read by someone who is not ready to book. The guides on dining, nightlife, hotels and weekend trips are useful on their own, and a reader who uses them and books six months later is still a better outcome than a reader who bounces off a page of claims.',
        ],
      },
      {
        heading: 'The people a client actually deals with',
        paragraphs: [
          'A booking involves three people at most: the client, the coordinator and the companion. The coordinator is the constant. The same person usually handles the first message and the arrival, which is why the thread does not have to be explained twice.',
          'Companions change with the booking, and that is normal. What does not change is the briefing they receive: the venue, the timing, the format and anything the client asked for in the way of language or presentation. That briefing is why a companion can arrive prepared without having spoken to the client beforehand.',
          'A driver is the fourth person, and only when one is used. Drivers know the hotels and the gates, they do not know the client name, and they are not part of the conversation. Their job is to make the arrival quiet and on time.',
        ],
      },
      {
        heading: 'How the team decides who to recommend',
        paragraphs: [
          'Recommendations start from the area and the time, because those decide who can actually arrive. Then the format: a residence booking and a client dinner call for different companions even in the same area. Then the preference the client has expressed, if any.',
          'The team will not recommend a companion who is a poor match simply because she is available. A client who asks for a quiet dinner companion and is offered someone whose profile is built around nightlife will have a worse evening, and the team knows it.',
          'Where two companions are equally suitable, the tie-break is arrival time. In Gurgaon traffic, the closer companion is usually the better evening, and that is the recommendation you will get.',
        ],
      },
      {
        heading: 'What the service is not',
        paragraphs: [
          'It is not an agency that represents companions as employees, and it is not a directory that lists anyone who pays for a listing. Every companion on this site has been spoken to, verified and briefed, and the number of profiles is deliberately smaller than the number of people who ask to be listed.',
          'It is not a nightlife concierge either. The team will tell you which restaurant is quiet, but it will not book your table, arrange your car or plan your trip. The guides exist because those questions are common, not because the service has become a travel agency.',
          'And it is not a negotiation platform. The rate is the rate, the terms are the terms, and a client who wants a different arrangement is better served by a different service.',
        ],
      },      {
        heading: "How we choose which companions to list",
        paragraphs: [
          "A profile goes live only after a conversation, a verification step and a test booking. We ask for identification, we confirm the area the companion actually lives in, and we check that she can describe the city well enough to prove she is local rather than a listing managed from another state.",
          "We also check the photographs. Every image on this site is of the companion it is attached to, and the alt text describes the setting rather than making claims the image cannot support. A profile with stock photography is a profile that will disappoint at the door, and a disappointed client is worse for the business than an empty slot.",
          "The last test is the conversation. A companion who cannot hold a message thread, who answers in templates, who avoids the questions a client will obviously ask, is not ready to be listed. The coordinators who handle bookings are the same people who decide whether a profile stays up.",
        ],
      },

    ],
    blocks: ['local', 'journey', 'discretion', 'timing', 'extraFaq'],
  },

  services: {
    sections: [
      {
        heading: 'Five formats, one standard',
        paragraphs: [
          'Every booking on this site falls into one of five formats: hotel outcall, private residence visit, dinner and social companionship, travel and weekend companionship, and the VIP experience. The format decides the timing, the dress code and often the rate band, which is why it is the first question the team asks.',
          'The standard behind all five is the same: a verified companion, a rate quoted before dispatch, an arrival window that is actually met, and payment at the meeting rather than in advance. A short hotel booking and a three-day trip are different products, but they are held to the same rules.',
          'If you are unsure which format fits, describe the evening instead. A client who says "dinner at eight in Cyber Hub, then back to the hotel" has already described a dinner booking with an extension, and the team will quote it that way rather than selling two separate arrangements.',
        ],
      },
      {
        heading: 'Hotel outcall: the most requested format',
        paragraphs: [
          'Hotel outcall is the format most Gurgaon clients book, and it is the one where local knowledge matters most. The companion arrives at the lobby or the room, depending on the property policy, and the booking starts when she arrives rather than when she leaves her base. That distinction is why a two-hour booking in Cyber City can be booked at eight for an eight-thirty start.',
          'Five-star properties on Golf Course Road and in Aerocity generally handle evening guests without drama, provided the guest is registered and the companion is expected. Smaller business hotels in DLF Phase 3 and Udyog Vihar vary; some ask for an ID at the desk, some do not allow guests above the ground floor after ten. The coordinators keep a current note on both.',
          'The practical advice is simple: tell the team the property name when you book, not the street. The name decides everything about how the arrival is handled, and it is the detail clients most often leave out.',
        ],
        bullets: [
          'Book by hotel name, not by street or sector',
          'Register the guest where the property requires it',
          'Allow thirty minutes for lobby formalities in five-stars',
          'Tell the team if you change rooms after booking',
        ],
      },
      {
        heading: 'Private residence visits across the gated belts',
        paragraphs: [
          'Residence bookings are the quietest format and the one that depends most on the address. A tower in DLF Phase 5, a builder floor in Sushant Lok, a villa in South City and a serviced apartment in Sector 65 all handle a visitor differently, and the difference is almost always the gate rather than the door.',
          'Gated societies usually need the visitor name in advance, sometimes a photo, and often a call from the resident to the gate. Builder floors and older colonies need a landmark instead, because house numbers repeat across lanes. Getting this right before the companion leaves is the whole job; a companion who arrives at the wrong gate loses twenty minutes and a booking often loses its mood.',
          'Residence bookings also tend to be earlier and shorter. Clients are usually home after work, the booking runs two to three hours, and the companion leaves before the building quiet hours begin. That rhythm is worth planning around rather than fighting.',
        ],
      },
      {
        heading: 'Dinner, events and social companionship',
        paragraphs: [
          'Social companionship is a different skill from an outcall. It means a companion who can hold a conversation through a three-course dinner, handle a business table without saying the wrong thing, and dress for the venue rather than for the photographs. The team matches by language, temperament and the kind of room the evening will happen in.',
          'Gurgaon has three good settings for this. Cyber Hub works for a casual dinner that might extend into a bar. Golf Course Road hotel restaurants work for formal dinners and client entertaining. Sector 29 works for a loud, late evening where the table is incidental to the night.',
          'Book a table for two from the start and tell the restaurant it is a dinner, not a meeting. A companion who arrives to a table set for three, with a colleague who was not mentioned, will spend the evening managing a situation rather than enjoying it.',
        ],
        bullets: [
          'Match the companion to the room, not just the photographs',
          'Reserve for two and mention the occasion when booking',
          'Share the dress code when you confirm the venue',
          'Decide the extension before the bill arrives',
        ],
      },
      {
        heading: 'Travel, weekend and VIP bookings',
        paragraphs: [
          'Travel companionship is booked with more notice because it involves days rather than hours. A weekend in Neemrana or Jaipur needs a week, an outstation trip needs two, and both are quoted as an inclusive daily arrangement covering travel, accommodation and the companion time rather than an hourly rate with additions.',
          'VIP bookings are less a different format than a different tier. They carry a longer minimum, usually three to four hours, and a higher rate, and they are matched on presentation and discretion as much as on looks. The companions in this tier are the ones who have worked hotel and event bookings repeatedly and know how to be invisible when the situation calls for it.',
          'Both formats are confirmed in writing: dates, cities, what is included and what is not. Nothing about a multi-day booking should be agreed verbally at midnight, and nothing about it should be paid in advance beyond a confirmed arrangement.',
        ],
      },
      {
        heading: 'How the five formats are priced',
        paragraphs: [
          'Pricing follows the format rather than the companion alone. A hotel outcall and a residence visit are quoted by duration, because the work is the same and only the arrival differs. A dinner booking is quoted as a longer window, because a table for two is rarely finished in ninety minutes and the companion is committed for the evening.',
          'Travel is quoted by the day. A weekend in Neemrana is an inclusive arrangement covering the companion time, the journey and the stay, and it is not divisible into hours. That is why a travel booking costs more than four separate evenings even though it may feel like one long evening.',
          'VIP pricing sits on top of the format rather than replacing it. A VIP hotel booking is a hotel booking with a higher rate and a longer minimum, and a VIP dinner is a dinner with a companion chosen for presentation and composure. The format still decides the shape of the evening.',
          'What does not change is the structure of the quote: a single figure, confirmed in writing, with extras named before they apply. A client should never have to reconstruct the price from a conversation after the fact.',
        ],
      },
      {
        heading: 'Matching a format to the evening you have planned',
        paragraphs: [
          'Start with where the evening happens. If it is a hotel room, the format is hotel outcall. If it is a flat in a gated society, it is a residence visit. If it starts at a restaurant and may move, it is a dinner booking with a possible extension. The venue decides more than the preference does.',
          'Then decide the length honestly. A two-hour booking at eight in Cyber Hub usually means dinner and conversation, not dinner, a bar and a walk. If the plan includes all three, book the longer window rather than paying an extension rate at eleven at night, which is both more expensive and harder to arrange.',
          'Finally, decide whether the companion needs to perform in public. A quiet residence booking does not need a companion who is comfortable in a room full of strangers, and a client dinner does. That single question - public or private - is often the difference between a good match and an awkward one.',
          'The coordinator will make a recommendation if you describe the evening rather than asking for a category. It is usually faster than browsing, and it is the reason the booking line exists.',
        ],
        bullets: [
          'Venue first, then duration, then public or private',
          'Book the realistic window rather than the shortest one',
          'Ask for a match by describing the evening',
          'Extensions cost more than planning ahead',
        ],
      },
      {
        heading: 'What "outcall" means in practice',
        paragraphs: [
          'Every format on this page is outcall: the companion travels to the client. There is no premises to visit and no waiting room, and that is a deliberate choice rather than a limitation. It keeps the arrival private and it keeps the companion in control of where she works.',
          'Outcall also means the venue is the client responsibility. The hotel room, the flat, the restaurant table and the car are arranged by the client, and the companion arrives into them. That is why the booking conversation starts with the venue rather than with the companion.',
          'The one exception is a travel booking, where the venue changes daily. There, the arrangement covers the trip and the client arranges the rooms, the car and the itinerary, with the companion travelling as a guest rather than as a coordinator.',
        ],
      },
      {
        heading: 'Choosing between a two-hour booking and a full evening',
        paragraphs: [
          'The two-hour booking is the most common format and the easiest to get right: a hotel, a residence or a dinner, a clear start and a clear end. It suits a weeknight, a short stay and a first booking, and it is priced so that a client can try the service without committing an evening.',
          'A full evening is a different product. Four to six hours allows dinner, a bar and a drive, and it is usually booked by clients who already know the format works. It costs more per hour than a short booking in some bands and less in others, so it is worth asking rather than assuming.',
          'The rule of thumb is simple: if you would not spend four hours with a friend you had just met, book two.',
        ],
      },
      {
        heading: 'When the venue changes at the last minute',
        paragraphs: [
          'A venue change is the most common last-minute problem and the easiest to solve, provided it is a message rather than a surprise. Move from a hotel to a residence in the same belt and nothing changes except the address. Move from Cyber City to Sohna Road at eight in the evening and the arrival time moves by forty minutes.',
          'The rule is to confirm the new venue before the companion leaves her base. After she has left, a change is a second journey, and a second journey is quoted as one. That is not a penalty; it is the cost of the extra distance.',
          'If the new venue is a different format entirely - a dinner that becomes a hotel booking, for example - say so and the coordinator will rebuild the booking around it. A format change can be absorbed within the same evening if there is time, and cannot be absorbed if the companion is already at the table.',
        ],
      },      {
        heading: "Choosing between a booking and an experience",
        paragraphs: [
          "The services on this site fall into two groups: bookings and experiences. A booking is a duration and a venue, confirmed in writing and paid at the meeting. An experience is a planned evening with a shape to it, usually including dinner, a venue or a drive, and it is quoted as a package rather than as an hourly rate.",
          "Most first clients should book rather than buy an experience. A two-hour hotel booking tells you whether the companion and the format suit you, at the lowest cost and with the least planning. An experience is better as a second booking, once you know what you want the evening to feel like.",
          "The exception is a client with a single evening in Gurgaon and a reason to make it count: a celebration, a client dinner, a return visit after years away. For that evening, an experience is worth the planning, because the alternative is spending the first hour deciding what to do.",
        ],
      },

    ],
    blocks: ['nearMe', 'rate', 'journey', 'timing', 'etiquette'],
  },
  locations: {
    sections: [
      {
        heading: 'How to use the area pages',
        paragraphs: [
          'There are two kinds of area page on this site, and they answer different questions. Six core pages cover the belts where most bookings happen - DLF Phase 1-5, Cyber City and Udyog Vihar, Golf Course Road, MG Road and Sector 29, Sohna Road, and Golf Course Extension. Each one describes the hotels, societies, metro access, dining and arrival times for that belt in detail.',
          'The second kind is the sector and neighbourhood page, one for each of the smaller areas from Sushant Lok to Sector 65. These are shorter and more specific: they confirm coverage, give the nearest landmark and explain how a companion reaches that address.',
          'Start with the core page for the belt your hotel or flat sits in, then move to the specific sector page if you need the finer detail. If you are between two belts, read both arrival sections and pick the shorter one; in Gurgaon traffic, the closer companion wins almost every time.',
        ],
      },
      {
        heading: 'The six core belts at a glance',
        paragraphs: [
          'DLF Phase 1-5 and Cyber City form the corporate core. Bookings here are hotel and serviced-apartment outcalls, weekday evenings are busiest, and the rapid metro makes a companion without a car unusually mobile. The DLF phases are residential enough that gate rules matter more than lobby rules.',
          'Golf Course Road is the premium corridor: five-star hotels, high-rise condominiums and private lifts, with clients who expect an arrival to be invisible. Golf Course Extension continues the same corridor east with newer towers and more space between them, which adds ten to fifteen minutes to any arrival.',
          'MG Road and Sector 29 are the original nightlife district, dense with bars and restaurants and best booked after nine. Sohna Road and South City are the residential south: quieter, earlier, almost always a home or a boutique hotel rather than a lobby.',
        ],
        bullets: [
          'DLF and Cyber City: corporate, weekday, hotel and serviced apartment',
          'Golf Course Road: premium hotels and condominiums, high discretion',
          'Golf Course Extension: newer towers, longer arrival times',
          'MG Road and Sector 29: nightlife, late bookings, walkable venues',
          'Sohna Road and South City: quiet residential bookings, earlier evenings',
        ],
      },
      {
        heading: 'Arrival times, honestly stated',
        paragraphs: [
          'A companion based in DLF can reach most of Cyber City, Udyog Vihar and the DLF phases within twenty minutes outside peak traffic. The same companion needs thirty-five to fifty minutes to reach Golf Course Extension or Sector 65 at seven in the evening, which is why the team will often suggest someone already on that side of the city.',
          'MG Road and Sector 29 are ten to fifteen minutes from the DLF base, and twenty-five from Golf Course Road in the evening. Sohna Road is the outlier: it looks close on a map and takes forty minutes from Cyber City between six and eight, because every route funnels through the same two junctions.',
          'These are working estimates, not promises. Rain adds ten minutes to everything, a Friday evening adds fifteen, and an address inside a large township can add five more while the companion finds the right tower. The arrival window you are given accounts for this; the estimate you read here is the reason it is realistic.',
        ],
      },
      {
        heading: 'Hotels, societies and what each belt expects',
        paragraphs: [
          'Hotel-heavy belts are forgiving. Golf Course Road, Aerocity and the Cyber City five-stars have seen every kind of evening guest and handle the arrival as routine, provided the guest is registered and expected. The booking is usually a lobby meeting followed by the lift, and the companion dresses for the property.',
          'Residential belts are stricter. DLF Phase 5, Sushant Lok, South City and the Golf Course Extension towers all use visitor passes, intercom calls or a resident approval at the gate. The companion needs a name, a tower and often a phone number that the guard can call. Builder floors need a landmark rather than a gate number.',
          'Sector 29 and MG Road sit in between. The venues are public, so the meeting is usually at the restaurant or bar rather than at a gate, and the booking starts when the table does. That makes the area easy for a first booking and harder for a quiet one, because the street is busy until late.',
        ],
      },
      {
        heading: 'Choosing between two areas',
        paragraphs: [
          'Clients often ask for a companion in an area they are not staying in, usually because a profile is based there. The right question is not where the companion is based but how long she will take to arrive, and whether the trip is worth it. A forty-minute arrival for a two-hour booking spends a third of the booking in traffic.',
          'The exception is a planned evening. If you are booking dinner at eight and the companion is coming from another belt, the travel time can be absorbed into the plan rather than subtracted from it. Book the companion for the dinner, not for the drive.',
          'When in doubt, send the address and the time and let the team choose. They know which companions are already moving that evening, and a companion finishing a booking in Golf Course Extension at nine can be at a Sector 65 address in ten minutes rather than forty.',
        ],
      },
      {
        heading: 'Sector pages and the core pages, side by side',
        paragraphs: [
          'A sector page is deliberately narrower than a core page. It confirms that a specific address is covered, names the nearest landmark and explains the arrival, and it links back to the core page for the belt. It does not repeat the hotel list or the dining guide, because that would make every page the same page.',
          'That division is why the core pages are long and the sector pages are short. If you are staying at a hotel, the core page tells you how the property handles guests and what time to book. If you are staying in a tower, the sector page tells you which gate to use and how long the walk is.',
          'When a sector changes - a new metro station, a new hotel, a road that becomes one-way - the core page is updated first and the sector page follows. If you notice a gap, tell the team and it will be corrected rather than left.',
        ],
      },
      {
        heading: 'Coverage beyond the six core belts',
        paragraphs: [
          'The six core pages cover where most bookings happen, not the whole of the National Capital Region. Manesar, Dwarka Expressway, Faridabad and the Delhi border are served, but they are quoted separately because the travel takes a companion out of her working area for a substantial part of the evening.',
          'Aerocity and Mahipalpur sit on the airport side and behave like a seventh belt: hotel-heavy, late-arriving, and best booked with a flight number if you have one. They are covered by the airport and hotel pages rather than by a Gurgaon sector page.',
          'If your address is not listed, send it anyway. The team would rather confirm coverage than have a client assume it is unavailable because a page has not been written for that street yet.',
        ],
      },
      {
        heading: 'A first booking in a belt you do not know',
        paragraphs: [
          'If you have never stayed in a particular belt, the safest first booking is a hotel on the main road rather than a residence down a service lane. Hotels are easy to find, they have a desk that can give directions and they handle evening guests as a matter of routine.',
          'The second safest is a residence visit where the companion is met at the gate rather than at the door. That removes the visitor-register conversation and keeps the arrival short, which matters when neither side knows the building.',
          'What to avoid on a first visit to an unfamiliar area is a venue with no landmark and no phone signal in the lobby. A companion who cannot be reached and cannot find the entrance turns a twenty-minute arrival into forty, and the evening starts tired.',
        ],
      },      {
        heading: "Travel times between the belts",
        paragraphs: [
          "Most clients book in the belt they are staying in, but the travel times between belts matter when an evening moves. Cyber City to Golf Course Road is ten to fifteen minutes outside peak and twenty-five inside it. Golf Course Road to Sohna Road is twenty minutes, and to Sector 29 it is twenty-five, because the MG Road one-ways add distance even when the map suggests otherwise.",
          "The southern belt is the one that catches people out. Golf Course Extension to Cyber City is thirty-five minutes in the evening and twenty on an empty road, and Sohna Road to the airport side can be forty-five. A companion who lives on the extension will tell you that honestly; a listing that promises fifteen minutes from there is not describing Gurgaon.",
          "For a booking that starts late, the travel time is the whole risk. A companion leaving Sohna Road at eleven to reach a Cyber City hotel is arriving at eleven-forty, not at eleven-fifteen, and a client who has not been told that will spend half an hour wondering whether the booking is real.",
        ],
      },

    ],
    blocks: ['areaCoverage', 'nearMe', 'discretion', 'extraFaq'],
  },

  profiles: {
    sections: [
      {
        heading: 'How to read a profile',
        paragraphs: [
          'A profile here is a summary, not a menu. It gives the companion name, age, category, languages, the areas she can reach comfortably, a short description and a rate band. What it does not do is promise a personality, and the descriptions are written to be accurate rather than flattering.',
          'The most useful line on any profile is the area. A companion based in Golf Course Extension is the right choice for Sector 65 and the wrong one for Cyber City at eight in the evening, however well the photographs match your preference. The second most useful line is the languages, because a three-hour dinner is a different evening if conversation is difficult.',
          'Read the rate band as a range, not a price. The final figure depends on duration, time of day and whether the booking is at a hotel or a residence, and it is confirmed before the companion is dispatched. A profile that quotes a single suspiciously low number is usually quoting an hourly rate with conditions attached.',
        ],
      },
      {
        heading: 'Verified, current and matched to an area',
        paragraphs: [
          'Every companion listed has met a coordinator in person. Identity and age were checked, the photographs were reviewed against the person, and the working preferences on the profile were set in that conversation rather than guessed. That is a higher bar than most listings clear, and it is the reason the list is deliberately finite.',
          'Profiles are kept current in two ways. Availability is updated when a companion changes her hours, and photographs are replaced when they stop matching. A profile that has not been reviewed recently is removed rather than left to rot, because an out-of-date listing wastes the client evening and the companion time.',
          'The area tag is also verified. A companion is only listed for a belt she can reach within a reasonable window, which is why some profiles show three areas and others show six. A short list of areas is honesty, not a limitation.',
        ],
      },
      {
        heading: 'Categories, tiers and what they change',
        paragraphs: [
          'Categories describe the kind of companion and the kind of evening, not a ranking. Independent, VIP, Russian, air hostess, Punjabi, model, bhabhi, college girl, NRI and the rest are shorthand for presentation, language and the settings the companion is comfortable in. They are useful when you know what you want and misleading when treated as a ladder.',
          'Tiers change the practical terms. VIP and model bookings carry a longer minimum, usually three to four hours, and a higher rate. Independent bookings are often more flexible on short notice. Air hostess bookings depend on flight schedules and are the least predictable of all, which is why they are usually confirmed the day before rather than the day of.',
          'The right way to choose is to start from the evening rather than the category. A quiet two-hour booking at a Sushant Lok residence does not need a VIP companion; a client dinner at a Golf Course Road hotel does. The team will say so if the request and the format do not match.',
        ],
      },
      {
        heading: 'Shortlisting without wasting an evening',
        paragraphs: [
          'Shortlist three profiles, not ten. Send the area, the time and the duration, and ask which of the three can reach you. The answer is often one, sometimes two, and knowing that in two minutes is worth more than browsing forty profiles for an hour.',
          'If two are available, choose on the detail that matters for the evening: language for a dinner, presentation for a hotel bar, or simply the shorter arrival. The photographs will not settle it, because every verified profile looks like the person who arrives.',
          'Finally, do not save the booking for the last minute and then accept whoever is free. A companion chosen in a hurry is the most common reason clients describe a booking as average, and the fix costs nothing but a message an hour earlier.',
        ],
        bullets: [
          'Shortlist three, not ten',
          'Send area, time and duration in one message',
          'Choose on language, presentation or arrival time',
          'Book an hour earlier than you think you need',
        ],
      },
      {
        heading: 'What a profile page cannot tell you',
        paragraphs: [
          'A profile can tell you a companion language, her working hours, the formats she takes and the area she starts from. It cannot tell you whether the conversation will work, and no honest page pretends otherwise. Chemistry is the one variable that a profile cannot list.',
          'What the profile can do is remove the wrong matches before you spend a message. If a companion works evenings only and you need a lunch booking, the page says so. If she works the Cyber City belt and you are in Manesar, the page says that too. Those two filters save more time than any photograph.',
          'The other thing a profile cannot tell you is availability. A page that says a companion is available tonight is a description of her usual hours, not a live calendar. The confirmation always comes from the coordinator, which is why the booking line exists.',
        ],
      },
      {
        heading: 'Reading the price and availability labels correctly',
        paragraphs: [
          'A price on a profile is a starting figure for the shortest standard booking, usually two hours in the companion own area. A longer window, a venue further out or a public event all move the number, and the page says so rather than hiding it in a footnote.',
          'Availability labels work the same way. Daytime, evening and late night describe the windows a companion normally works, not a guarantee that a specific hour is free. A companion who lists late night may still be booked until two, and the only way to know is to ask.',
          'Where a profile says verified, it means the companion has been spoken to, her photographs have been checked against her, and she has agreed to the terms on this site. It does not mean she is the right companion for every evening, and it is not a ranking.',
        ],
        bullets: [
          'Price shown is the start of the band, not a fixed quote',
          'Availability describes usual hours, not a live calendar',
          'Verified means checked, not ranked',
          'Use the filters before you message',
        ],
      },
    ],
    blocks: ['nearMe', 'expectation', 'journey', 'etiquette', 'extraFaq'],
  },
  booking: {
    sections: [
      {
        heading: 'What to send in the first message',
        paragraphs: [
          'The first message decides how quickly a booking is confirmed. Three details do most of the work: the area or hotel name, the time you want the companion to arrive, and the duration. Add the format if it is not obvious - dinner, hotel outcall, residence - and you have given the coordinator everything needed to check availability.',
          'Do not open with a question about rates in general. Rates depend on the three details above, and a general answer is either a range that does not apply or a number that will change. Send the details and you will get a real figure in the same reply.',
          'If you are unsure about the area, send the address instead. The team knows the city well enough to place a hotel, a tower or a landmark, and a wrong area guess costs more time than a copied address.',
        ],
        bullets: [
          'Area or hotel name',
          'Preferred arrival time',
          'Duration and format',
          'Any preference for language or category',
        ],
      },
      {
        heading: 'Confirmation: what you should receive',
        paragraphs: [
          'A confirmed booking has four parts: the companion name, the rate, the arrival window, and a contact number for the arrival itself. If any of those is missing, the booking is not confirmed, however positive the conversation has been. The team sends all four in one message so there is no ambiguity later.',
          'The arrival window is a range, not a single minute. Gurgaon traffic makes a precise promise dishonest, and a companion who says she will arrive at 8:15 will usually arrive between 8:10 and 8:30. If the window moves, you are told before it passes rather than after.',
          'Keep the message thread. It is the only record of what was agreed, and it resolves almost every misunderstanding about duration, rate or venue without an argument at the door.',
        ],
      },
      {
        heading: 'Payment, pricing and what never happens',
        paragraphs: [
          'Payment is made at the meeting, directly to the companion, in cash or by UPI. The rate quoted at confirmation is the rate you pay, with no agency fee, no transport surcharge and no charge for the lobby. If the booking is extended, the extension is quoted and agreed before it starts.',
          'No genuine Gurgaon service asks for an advance payment. A request for a deposit, a booking fee, a security amount or a transport advance is the clearest sign of fraud, particularly when it arrives after a convincing conversation and a set of stolen photographs. This team never asks, and any message that does is not from this team.',
          'Prices are quoted in rupees and include the companion time. Hotel bills, restaurant bills, drinks and travel arranged by the client are separate and paid by the client, as they would be on any other evening.',
        ],
      },
      {
        heading: 'Changing, extending or cancelling',
        paragraphs: [
          'Changes are easy if they are early. Moving a booking by an hour is usually a message, not a new arrangement, provided the companion schedule allows it. Moving it by a day is a new booking and should be treated as one.',
          'Extensions are quoted at the time. If a two-hour booking is going well, ask before the second hour ends rather than after; a companion with a later booking cannot always stay, and the answer is more likely to be yes if the question comes early. The extension rate is confirmed before it begins.',
          'Cancellations should be made as soon as you know. There is no cancellation fee, because nothing is paid in advance, but a companion who has travelled to your area and is turned away at the gate has lost an evening. A message an hour before is a courtesy that costs nothing and keeps the relationship worth having.',
        ],
      },
      {
        heading: 'A first booking, step by step',
        paragraphs: [
          'Most first bookings follow the same arc. You send the area, time and duration. Availability is confirmed within minutes, with one or two companion options and their rates. You choose, the four-part confirmation arrives, and the companion is dispatched at the agreed time.',
          'On arrival, the companion messages or calls from the lobby or gate. You meet, the booking begins, and payment is settled at the start or the end as agreed - most clients settle at the start, which keeps the evening simple. The companion leaves at the end of the booked time unless an extension was agreed.',
          'Afterwards, nothing is stored beyond the message thread unless you book again. There is no follow-up marketing, no mailing list and no review request. The next contact is the one you initiate.',
        ],
      },
      {
        heading: 'Booking from a hotel you have not stayed in before',
        paragraphs: [
          'A first stay at a Gurgaon hotel raises a question the website cannot answer: how the property will treat a visitor. The coordinator knows most of the five-stars and many of the business hotels, and can say in advance whether the arrival will be a lobby meeting, a desk call or a straight lift to the room.',
          'If the property is new or unfamiliar, the safe plan is a lobby meeting. The companion arrives, the client comes down, and they go up together. It looks like any other guest meeting a friend, and it avoids a conversation at the desk that neither side wants.',
          'If the booking is at a serviced apartment or a small hotel, ask about the guest policy when you check in rather than when the companion arrives. A property that does not allow visitors after ten is better discovered at check-in than at the door.',
        ],
        bullets: [
          'Ask the coordinator about the property before booking',
          'Choose a lobby meeting for an unfamiliar hotel',
          'Check the guest policy at check-in, not at arrival',
          'Tell the team if you change rooms or properties',
        ],
      },
      {
        heading: 'What to do if the companion is delayed',
        paragraphs: [
          'A delay is handled with a message, not a cancellation. The coordinator tells the client as soon as the delay is known, gives a revised window, and stays on the thread until the companion arrives. Most delays in Gurgaon are traffic, and most are ten to twenty minutes.',
          'If the delay is long enough to affect the booking - a companion stuck on Golf Course Extension at eight in the evening, for example - the coordinator may offer a closer companion instead. That is not a downgrade; it is the difference between an evening that starts at nine and one that starts at nine-forty.',
          'A client who is delayed should say so too. A companion waiting in a lobby is conspicuous in a way that a companion arriving on time is not, and a short message protects both sides.',
        ],
      },
      {
        heading: 'How the team handles a no-show',
        paragraphs: [
          'A no-show is rare and is treated as a serious failure. If a companion does not arrive and cannot be reached, the coordinator tells the client immediately, offers an alternative companion if one is available, and does not charge for the failed booking.',
          'The companion is not dispatched again until the reason is understood. A no-show is usually a communication failure rather than a refusal, and the fix is procedural rather than punitive.',
          'A client no-show is handled the same way: the booking ends, nothing is charged because nothing was paid, and a repeat booking requires a fresh confirmation. Neither side is added to a blacklist for a single missed evening.',
        ],
      },
      {
        heading: 'A short checklist before you send the first message',
        paragraphs: [
          'Know the venue, the date and the approximate time. Know whether the booking is at a hotel or a residence, and know whether you want company in public or in private. Those four answers turn a vague enquiry into a confirmed booking in a few messages.',
          'Have the payment ready in the form you intend to use. Cash is simplest, a payment application works, and a card is not accepted at the door. A client who has to find an ATM after the companion arrives has already shortened the evening.',
          'And decide what you want the evening to be. A booking that is clear about its shape is easier to match, easier to price and easier to enjoy than one that is left open in the hope that something will happen.',
        ],
      },
      {
        heading: 'Booking on a public holiday',
        paragraphs: [
          'Republic Day, Diwali, New Year and the long weekends around them are the busiest nights of the year in Gurgaon. Hotels fill, restaurants stop taking reservations and every companion is booked days in advance. A request made on the afternoon of the holiday is usually met with a shorter list, not a longer one.',
          'Booking early on those dates is the difference between the companion you wanted and the one who was still free. The rate does not change for a holiday, but the availability does, and the coordinator will say so rather than promise something that cannot be delivered.',
          'Traffic on holiday evenings is worse than on a normal evening, particularly on Golf Course Road and the MG Road one-ways. A booking that starts at nine should be made for eight-thirty, and a companion who arrives early is not a problem.',
        ],
      },      {
        heading: "Cancelling and moving a booking without burning the relationship",
        paragraphs: [
          "Cancellations happen and they are not a problem in themselves. The problem is a cancellation ten minutes before the arrival, when the companion is already in a car, or a request to move a booking to a time that was never on the table. Both are handled by the same rule: tell the coordinator as early as you know, and say what you want instead of only what you do not.",
          "A cancellation two hours ahead costs nothing. A cancellation at the door costs the companion her evening and, in most services, her willingness to accept the next request from the same number. If the reason is genuine, say it plainly; the coordinators have heard every reason and they are not judging, they are rescheduling.",
          "Moving a booking is easier than cancelling one. The same companion, the same evening, a later hour is usually possible if the request arrives before she leaves. A different day is a new booking and should be treated as one, with the venue and the duration confirmed again.",
        ],
      },

    ],
    blocks: ['journey', 'rate', 'timing', 'discretion', 'extraFaq'],
  },
  faq: {
    sections: [
      {
        heading: 'How to read these answers',
        paragraphs: [
          'The questions below are the ones clients actually ask, grouped by what they are trying to decide: whether to book, how booking works, what it costs, and whether their area is covered. Each answer is written to be useful on its own rather than to lead into a sales pitch.',
          'Where an answer depends on your situation - a hotel versus a residence, a weekday versus a Saturday - it says so. A single blanket answer is usually wrong for half the people reading it, and the point of this page is to reduce the number of follow-up messages, not increase them.',
          'If your question is not here, the booking page walks through the first message, confirmation, payment and changes in order. The area pages answer coverage and arrival-time questions for each belt, and the guides cover the longer, more situational questions.',
        ],
      },
      {
        heading: 'Booking and availability',
        paragraphs: [
          'Bookings are taken 24 hours a day, but availability is not uniform. Weekday evenings between seven and ten are the busiest window in every belt, and Saturday fills first. A request at six in the evening for an eight o clock booking is usually fine; the same request at nine for nine-thirty is a coin toss.',
          'Same-day bookings depend on who is already working that area. That is why the team asks for the area first: a companion finishing a booking in DLF can be at a Cyber City hotel in fifteen minutes, while one in Sohna Road cannot. The arrival window you are quoted reflects that, not a generic estimate.',
          'Advance notice helps most for VIP, model, air hostess and overnight bookings, where the pool is smaller and schedules are less flexible. For a standard two-hour hotel booking, an hour of notice is usually enough.',
        ],
      },
      {
        heading: 'Privacy and discretion',
        paragraphs: [
          'Discretion is the service default rather than an add-on. Companions arrive dressed for the property, not for a photograph, and they do not announce themselves at a reception desk unless the property requires it. No client name is shared with anyone outside the coordination team, and no address is kept after the booking ends.',
          'The website collects almost nothing: no account, no saved payment method, no profile. Booking messages are retained only as long as needed to coordinate and resolve a dispute, and they are never used for marketing. Analytics are aggregate and cookieless.',
          'If you book at a hotel, the property will usually know a guest is expected, because that is what makes the arrival smooth. If you book at a residence, the gate will know a visitor is coming, for the same reason. Discretion means controlling who knows what, not pretending nobody knows anything.',
        ],
      },
      {
        heading: 'Rates and payment',
        paragraphs: [
          'Rates are quoted per booking, not per hour, and depend on duration, category and area. A two-hour booking typically sits between ₹5,000 and ₹8,000, an evening of three to four hours between ₹8,000 and ₹12,000, and a full night between ₹15,000 and ₹25,000. VIP, model and air hostess bookings are quoted higher with a longer minimum.',
          'Payment is made at the meeting, in cash or by UPI, directly to the companion. No deposit is requested and no card details are collected on the site. Any request for an advance payment should be treated as fraud, whatever the conversation before it looked like.',
          'Extensions, travel beyond the main Gurgaon belt and outstation trips are quoted separately and confirmed before they begin. Nothing is added at the door.',
        ],
      },
      {
        heading: 'Coverage, travel and areas',
        paragraphs: [
          'Coverage runs across Gurugram, from DLF Phase 1 to Sector 65 and beyond, plus the airport belt around Aerocity and Mahipalpur. The six core area pages cover the belts where most bookings happen, and the sector pages confirm the smaller neighbourhoods individually.',
          'Travel within the main belt is included in the quoted rate. Travel to Manesar, Dwarka Expressway, Faridabad or Delhi is quoted separately, because it takes a companion out of her working area for two hours rather than twenty minutes.',
          'Outstation and weekend bookings are arranged with a week of notice and quoted as an inclusive daily arrangement. They are confirmed in writing, with dates, cities and what is included, before anything is paid.',
        ],
      },
      {
        heading: 'Response times and same-day requests',
        paragraphs: [
          'A message sent at eight in the evening is usually answered within minutes, because that is when the coordinators are busiest and most available. A message sent at four in the morning may take longer, not because nobody is working but because the night coordinator is handling arrivals rather than the phone.',
          'Same-day requests are the norm rather than the exception. A client who decides at seven that he wants company at nine will usually be accommodated in the main belts, provided he is flexible about which companion. A request for a specific companion at a specific time with an hour of notice is a coin toss.',
          'If a request cannot be met, the answer is a clear no with an alternative, not a maybe that turns into silence. That is worth knowing before you plan an evening around a booking that has not been confirmed.',
        ],
      },
      {
        heading: 'Choosing between categories',
        paragraphs: [
          'Categories are shorthand for presentation and setting, not a ranking of quality. Independent, VIP, Russian, air hostess, Punjabi, model, bhabhi, college girl and NRI describe different companions and different evenings, and none of them is inherently better than another.',
          'The useful question is which category fits the room. A quiet residence booking rarely needs a VIP companion; a client dinner usually does. A first booking is often better with an independent companion who is used to explaining how the evening works than with someone whose profile assumes you already know.',
          'If two categories seem to fit, describe the evening and let the team choose. They match on language, temperament and arrival time, which are the three things that decide whether the evening works.',
        ],
        bullets: [
          'Category describes presentation, not quality',
          'Match the category to the room, not the photographs',
          'First bookings often suit independent companions',
          'Ask for a match by describing the evening',
        ],
      },
      {
        heading: 'Hotels versus residences',
        paragraphs: [
          'A hotel booking is public at the edges and private in the middle: the lobby is shared, the room is not. A residence booking is private throughout, but it depends on a gate, a guard and a visitor rule that the client usually knows better than the companion.',
          'Hotels are easier for a first booking because the property handles the arrival. Residences are better for clients who value privacy over occasion, and they are usually earlier and shorter. Neither is superior; they suit different evenings.',
          'The one thing that does not change is the information needed at booking: the property name for a hotel, the tower and gate for a residence. A booking made without either will produce a phone call from a lobby or a gate, and that call is the most common reason an arrival runs late.',
        ],
      },
      {
        heading: 'When plans change mid-evening',
        paragraphs: [
          'Plans change, and the service expects it. A dinner that turns into a bar, a hotel that turns into a residence, an evening that ends earlier than expected - each is a message rather than a new booking, provided the companion is told before the change rather than after.',
          'An extension is quoted at the time and confirmed before it starts. A shortening is not refunded pro rata, because the companion blocked the window, but it is handled without drama if the client says so early.',
          'A change of venue mid-evening is possible if the new venue is within the companion working area and the travel is short. A change that adds forty minutes of driving is effectively a new booking, and the coordinator will say so.',
        ],
      },
      {
        heading: 'What happens after the booking ends',
        paragraphs: [
          'Nothing happens after a booking unless the client initiates it. There is no follow-up message, no review request, no newsletter and no re-engagement campaign. The thread stays where it is until it is deleted under the retention policy.',
          'If a client wants to book again, the same number works and the preference note, if one was kept, makes the second booking faster. If the client wants the note deleted, that is a message and it is done the same day.',
          'Feedback is welcome but not solicited. A client who takes the trouble to say what worked and what did not is helping the next booking, and the team reads it rather than filing it.',
        ],
      },
      {
        heading: 'Questions this page does not answer',
        paragraphs: [
          'Some questions depend too much on the specific evening to answer in general: whether a particular companion is free, whether a particular hotel will allow a guest, whether a booking can start at a particular minute. Those are answered in a message, quickly, by a person who can see the schedule.',
          'Other questions are editorial rather than operational: which area suits a first booking, which restaurant is quiet enough for a conversation, which weekend trip is worth the drive. Those are covered in the guides, which are longer and more opinionated than a FAQ can be.',
          'If a question is not answered anywhere, ask it. The answer may become a section on this page, which is how most of it was written in the first place.',
        ],
      },
      {
        heading: 'Can a booking be made for someone else',
        paragraphs: [
          'No. A booking is made by the person who will be present, because the terms, the verification and the payment all depend on that person being there. A client who wants to arrange an evening for a friend or a colleague is asking the service to book with someone it has never spoken to, and that is not accepted.',
          'The same applies to a group booking where one person arranges everything. Each guest is an adult who has agreed to be there, and the coordinator will want to hear from each of them or from one person who can confirm that everyone has agreed.',
          'A gift booking is therefore not possible. A gift voucher, a credit or a prepaid evening is also not offered, for the same reason: the service is not a product that can be handed to someone else.',
        ],
      },
      {
        heading: 'How the service handles a request it cannot meet',
        paragraphs: [
          'The answer is a no, quickly, with a reason. It may be that no companion is free at that time, that the venue is outside the coverage area, or that the request falls outside what the service does. A slow maybe is the one answer the team tries never to give, because it leaves a client planning an evening around nothing.',
          'Where an alternative exists, it is offered at the same time: a different time, a different area, a different companion, or a different format. A client who wanted a hotel booking at eleven and is offered a residence visit at ten can decide in a minute.',
          'A no is not a permanent no. Availability changes, and a request declined on a Friday may be met on a Saturday. The thread keeps the context, so the second attempt does not start from nothing.',
        ],
      },      {
        heading: "What to do when the answer is not the one you wanted",
        paragraphs: [
          "Not every question in this section has a comfortable answer. Sometimes the companion you wanted is unavailable, the hotel will not accept a guest, the rate is above what you budgeted, or the plan you had in mind is simply not something a verified service will arrange. The useful thing is to know what happens next rather than to keep pushing.",
          "If the companion is unavailable, the coordinator will offer two or three profiles who are free at the same time and in the same area. That is not a sales tactic; it is the only honest answer to a booking request that cannot be filled. Clients who accept it usually end up with a good evening, and clients who insist on one name usually end up with none.",
          "If the hotel is the problem, the fix is usually a different property rather than a different companion. A hotel that asks a guest to wait in the lobby at eleven is a hotel that does not host evening visitors, and moving the booking to a property that does is a five-minute change that saves the evening.",
          "If the rate is above budget, say so once and ask what is available at the budget. A companion who cannot meet it will say so, and a coordinator who tries to talk you up from a number you have stated is telling you something about how the rest of the booking will go. The budget conversation is a normal one and it should not be embarrassing for either side.",
          "If the answer is no, it is a no. A service that will not arrange something is usually protecting the companion, the client or both. The requests that get refused are refused because they cannot be done safely, not because the service is being difficult.",
        ],
      },

    ],
    blocks: ['extraFaq', 'expectation', 'timing', 'rate', 'etiquette'],
  },
};
