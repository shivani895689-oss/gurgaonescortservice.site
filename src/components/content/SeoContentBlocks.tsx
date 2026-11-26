import Link from 'next/link';
import { MapPin, ShieldCheck } from 'lucide-react';
import type { GurgaonArea } from '@/lib/gurgaonAreas';

type Subject = {
  /** "Alina", "Punjabi escorts" – used mid-sentence. */
  name: string;
  /** Lower-case description, e.g. "Russian companion". */
  kind: string;
  slug: string;
};

function pick<T>(variants: T[], seed: string): T {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) hash = (hash * 31 + seed.charCodeAt(i)) % 100000;
  return variants[hash % variants.length];
}

export function AreaCoverageBlock({ subject, areas, heading }: { subject: Subject; areas: GurgaonArea[]; heading?: string }) {
  const intro = pick(
    [
      subject.name + ' is booked across Gurgaon rather than in one neighbourhood, so it helps to know what each area is actually like before you choose a meeting point.',
      'Gurgaon is not one city but a dozen, and the area you pick changes the evening more than the profile does. Here is how ' + subject.name + ' works across the main neighbourhoods.',
      'Every booking with ' + subject.name + ' starts with a location question, and the answer depends on traffic, hotel policy and how private you want the evening to be.',
    ],
    subject.slug,
  );

  return (
    <section className="section-padding bg-white border-t border-gray-200/70">
      <div className="container-luxury">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Local Coverage</p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">{heading || 'Where ' + subject.name + ' is available in Gurgaon'}</h2>
        <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">{intro}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div key={area.name} className="rounded-2xl border border-gray-200 bg-[#faf8f5] p-5">
              <h3 className="flex items-center gap-2 font-semibold text-[#2f3338]">
                <MapPin className="h-4 w-4 shrink-0 text-[#8a7f6d]" />
                {area.path ? (
                  <Link href={area.path} className="hover:underline">
                    {area.name}
                  </Link>
                ) : (
                  area.name
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{area.blurb}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-gray-500">
          Travel time is confirmed at booking. Inside Gurgaon most arrivals take thirty to sixty minutes from the moment an arrangement is agreed,
          and slightly longer during office rush on Golf Course Road, MG Road and the Sohna Road corridor.
        </p>
      </div>
    </section>
  );
}

export function NearMeBlock({ subject, areas }: { subject: Subject; areas: GurgaonArea[] }) {
  const heading = 'Looking for ' + subject.name + ' near me in Gurgaon?';
  return (
    <section className="section-padding bg-[#faf8f5] border-t border-gray-200/70">
      <div className="container-luxury max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Near Me Searches</p>
        <h2 className="font-serif text-3xl font-bold text-gray-900">{heading}</h2>
        <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
          <p>
            Everyone searches with a location attached: {'"'}{subject.name} near me{'"'}, {'"'}{subject.name} in DLF Phase 3{'"'} or {'"'}{subject.name} near Cyber City{'"'}.
            The intent behind those phrases is always the same - someone wants a companion who can reach them quickly without a long journey across the city.
            That is why every booking on this site is organised around the area you are in rather than a single base address.
          </p>
          <p>
            If you are staying in a hotel, tell us the property rather than the street. Hotels on Golf Course Road, MG Road and in Aerocity have guest
            policies that decide how an arrival works, and knowing the building in advance removes the one awkward part of an outcall. If you are at home,
            the society gate and tower number matter more than the sector, because security desks in Gurgaon can add ten minutes to any visit.
          </p>
          <p>
            The areas covered most often for {subject.kind} bookings are {areas.slice(0, 5).map((a) => a.name).join(', ')} and{' '}
            {areas[5] ? areas[5].name : 'the surrounding sectors'}. Anything outside this list is usually still possible - Manesar, Dwarka Expressway and the
            far New Gurgaon sectors simply need a little more notice so travel time is built into the arrangement.
          </p>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {areas.map((area) => (
            <li key={area.name}>
              <Link
                href={area.path || '/locations'}
                className="inline-flex rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:border-[#2f3338]/40 hover:text-[#2f3338]"
              >
                {area.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ExpectationBlock({ subject }: { subject: Subject }) {
  const rows = [
    {
      title: 'Before the booking',
      text:
        'You share the area, the date, the preferred time and how long you would like. The team confirms what is available, states the arrangement clearly and answers any question about the venue before anything is finalised.',
    },
    {
      title: 'On the day',
      text:
        'A short confirmation message goes out a couple of hours before the meeting. If the venue has a dress code, it is discussed then, so nobody arrives underdressed for a five-star restaurant or overdressed for a quiet apartment dinner.',
    },
    {
      title: 'At arrival',
      text:
        'Arrivals are quiet and separate. In a hotel the companion meets you at the lobby or the lift as agreed; at a residence she calls from the gate rather than the tower entrance. Nothing about the booking is announced to staff.',
    },
    {
      title: 'During the evening',
      text:
        'The time is yours. There is no script, no upselling and no clock watching. If plans change - a late table, an earlier flight - say so and the arrangement is adjusted where possible.',
    },
    {
      title: 'Afterwards',
      text:
        'Messages are cleared, details are not shared and no follow-up marketing is sent unless you ask for it. Regular clients simply message again when they want to book.',
    },
  ];
  return (
    <section className="section-padding bg-white border-t border-gray-200/70">
      <div className="container-luxury max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">What To Expect</p>
        <h2 className="font-serif text-3xl font-bold text-gray-900">How a booking with {subject.name} actually works</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Most questions about {subject.kind} bookings are really questions about process: who messages first, what is said at the door, and what happens
          if the evening runs long. The five stages below are the same whether you are in a hotel suite on Golf Course Road or a flat in Sector 56.
        </p>
        <div className="mt-8 space-y-5">
          {rows.map((row, index) => (
            <div key={row.title} className="flex gap-4 rounded-2xl border border-gray-200 p-5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2f3338] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-[#2f3338]">{row.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{row.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BookingJourneyBlock({ subject, phoneDisplay }: { subject: Subject; phoneDisplay: string }) {
  const steps = [
    {
      title: 'Message on WhatsApp',
      text:
        'One message is enough: the area you are in, the date, the time and roughly how long you want. You do not need to explain yourself or send a long introduction. The team reads every message personally and replies with what is genuinely available rather than a copy-paste catalogue.',
    },
    {
      title: 'Choose the companion',
      text:
        'Two or three suitable profiles are suggested, each with real photographs, stated languages and a clear starting rate. If you already know who you want, say the name and the conversation skips straight to timing.',
    },
    {
      title: 'Confirm the arrangement',
      text:
        'The rate, the duration and what is included are stated in writing before anything is agreed. There is no negotiation at the door and no add-on invented on arrival, which is the single most common complaint about ' + subject.kind + ' bookings elsewhere.',
    },
    {
      title: 'Share the location',
      text:
        'A hotel name, a society and tower, or a landmark is enough. For hotels, mention whether the property allows guests, because that decides whether the companion meets you at the lobby or outside. For residences, the gate number saves ten minutes.',
    },
    {
      title: 'Meet at the agreed time',
      text:
        'Arrival is usually within thirty to sixty minutes inside Gurgaon. You receive a short message when the companion leaves, and a call from the gate or lobby when she reaches you. Nothing is announced to hotel staff or security beyond what is necessary.',
    },
    {
      title: 'Pay at the end',
      text:
        'Payment is made directly to the companion at the end of the booking, in cash or by UPI. Some clients prefer to settle at the start; either is fine as long as it is agreed in advance. No card details are ever taken over chat.',
    },
  ];
  return (
    <section className="section-padding bg-[#faf8f5] border-t border-gray-200/70">
      <div className="container-luxury max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Booking Guide</p>
        <h2 className="font-serif text-3xl font-bold text-gray-900">Booking {subject.name} in six steps</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          The process is deliberately short. Most bookings are confirmed in under ten minutes on WhatsApp, and the same steps apply at two in the
          afternoon and at midnight. Call {phoneDisplay} if you would rather speak to someone than type.
        </p>
        <ol className="mt-8 space-y-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="flex items-center gap-3 font-semibold text-[#2f3338]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e9e3d8] text-xs font-bold text-[#5a5346]">{index + 1}</span>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function RateGuideBlock({ subject, baseRate }: { subject: Subject; baseRate: number }) {
  const format = (value: number) => 'Rs ' + value.toLocaleString('en-IN');
  const rows = [
    { duration: 'One hour', price: baseRate, note: 'Short meeting, ideal for a first booking or a quick hotel visit.' },
    { duration: 'Two hours', price: Math.round(baseRate * 1.8), note: 'Dinner and conversation, the most common arrangement.' },
    { duration: 'Three hours', price: Math.round(baseRate * 2.5), note: 'A full evening with travel and a meal built in.' },
    { duration: 'Four hours', price: Math.round(baseRate * 3.2), note: 'Events, long dinners and evenings that run late.' },
    { duration: 'Six hours', price: Math.round(baseRate * 4.4), note: 'Half-day company, useful for travel days and daytime plans.' },
    { duration: 'Full night', price: Math.round(baseRate * 6), note: 'Evening through the following morning, breakfast not included.' },
    { duration: 'Outstation day', price: Math.round(baseRate * 8), note: 'Jaipur, Agra or Chandigarh, travel and stay quoted separately.' },
  ];
  return (
    <section className="section-padding bg-white border-t border-gray-200/70">
      <div className="container-luxury max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Rates</p>
        <h2 className="font-serif text-3xl font-bold text-gray-900">{subject.name} rates in Gurgaon</h2>
        <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
          <p>
            Rates are published so nobody has to ask an awkward question. The figure below is the starting point for {subject.kind} bookings and it
            already includes travel within Gurgaon, the companion arriving dressed for the occasion and the time agreed at booking. There is no
            separate travel charge for DLF, Cyber City, Golf Course Road, MG Road or Sohna Road.
          </p>
          <p>
            Longer bookings cost less per hour than short ones, which is why two hours is usually better value than two separate one-hour meetings.
            Outstation travel, hotel suite upgrades and any meals are quoted separately and always confirmed in writing before the booking is locked.
          </p>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-[#faf8f5] text-[#2f3338]">
              <tr>
                <th className="px-4 py-3 font-semibold">Duration</th>
                <th className="px-4 py-3 font-semibold">Starting rate</th>
                <th className="px-4 py-3 font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.duration} className="border-t border-gray-200">
                  <td className="px-4 py-3 font-medium text-[#2f3338]">{row.duration}</td>
                  <td className="px-4 py-3 text-gray-700">{format(row.price)}</td>
                  <td className="px-4 py-3 text-gray-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-gray-500">
          Indicative rates for planning. The exact arrangement for your date is confirmed on call or WhatsApp before the booking.
        </p>
      </div>
    </section>
  );
}

export function DiscretionBlock({ subject }: { subject: Subject }) {
  return (
    <section className="section-padding bg-[#faf8f5] border-t border-gray-200/70">
      <div className="container-luxury max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Privacy</p>
        <h2 className="font-serif text-3xl font-bold text-gray-900">Discretion, safety and the small things that matter</h2>
        <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
          <p>
            Gurgaon is a small city at the top and a very interconnected one. Client lists, hotel staff, society guards and even building lifts are
            places where a booking can become a story, and that is why {subject.kind} bookings here are handled with a few simple rules. The companion
            uses a first name only, arrives and leaves separately from you, and never discusses a booking in public.
          </p>
          <p>
            Messages are not kept after a booking. Nothing is posted, no photographs are taken without permission, and no client details are stored
            beyond the current arrangement. If you meet someone you know at the venue, the companion will treat you as an acquaintance and let you
            decide whether to explain - there is no script to follow and no scene to manage.
          </p>
          <p>
            Safety works in both directions. Companions share the meeting point and time with the team before travelling, and hotel bookings are
            confirmed with the property where a guest policy exists. If a venue feels wrong, the booking can be cancelled before the meeting without
            argument. A companion who is not comfortable cannot give a good evening, and forcing a booking helps nobody.
          </p>
          <p>
            For clients visiting from outside India, this also means no paperwork surprises: no ID copies are requested by the agency, hotel
            requirements are explained in advance, and payment is settled directly with the companion rather than through a link. What happens in
            {subject.name} bookings stays with the two people in the room.
          </p>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            'First-name introductions only, no questions asked at the door',
            'No photographs without explicit permission',
            'Cash or UPI settled directly with the companion',
            'Venue guest policies checked before the booking',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#8a7f6d]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const zoneCopy: Record<string, { heading: string; paragraphs: string[]; landmarks: string[] }> = {
  old: {
    heading: 'How outcall works in old Gurgaon',
    paragraphs: [
      'Old Gurgaon is the part of the city that existed before the malls, and it still runs on its own rhythm. Streets are narrower, buildings are lower and the landmarks are markets rather than towers. That changes how a booking is planned: the companion needs a clear landmark - a market gate, a metro station, a named chowk - because house numbers in this belt repeat across lanes.',
      'Traffic here is constant rather than peaky. MG Road, the Sadar Bazaar approach and the Sector 29 stretch all slow down between six and nine in the evening, so an arrival scheduled for eight usually leaves earlier than the client expects. If your venue is a small hotel rather than a branded property, confirm the guest policy in advance; the smaller the property, the more the front desk matters.',
      'The advantage of this side of the city is speed. A companion based anywhere between Sector 24 and Sector 33 can reach most addresses inside fifteen minutes, which makes short-notice bookings realistic in a way they are not out in New Gurgaon. Late evening is the busiest window, and Saturday fills first.',
    ],
    landmarks: ['MG Road metro', 'Sector 29 Leisure Valley', 'Sadar Bazaar', 'Galleria market'],
  },
  dlf: {
    heading: 'How outcall works across DLF and Cyber City',
    paragraphs: [
      'DLF is where most Gurgaon bookings actually happen. The five phases, Cyber City and the Sushant Lok belt hold the largest concentration of hotels, serviced apartments and corporate guest houses in the city, and the profiles here work to a rhythm set by business travel rather than weekends.',
      'The practical detail is the building, not the phase. A DLF tower may have two entrances, a visitor policy and a lift that needs a card, and a companion who knows which entrance to use saves ten minutes and an awkward call. For hotel bookings on Golf Course Road the lobby is usually the meeting point; for serviced apartments in Phase 3 the gate is.',
      'Weekday evenings between seven and ten are the busiest window, and Sunday is the quietest day of the week. If you are staying near Cyber Hub and want a dinner booking, a thirty-minute head start on the reservation is usually enough notice for the companion to arrive at the same time as you.',
    ],
    landmarks: ['Cyber Hub', 'DLF Phase 3 rapid metro', 'Galleria', 'Golf Course Road hotels'],
  },
  golf: {
    heading: 'How outcall works on Golf Course Road and Extension',
    paragraphs: [
      'Golf Course Road and its extension are the premium corridor: five-star hotels, high-rise condominiums, private lifts and a client base that expects arrivals to be invisible. Bookings here are usually suites and serviced apartments rather than street-level meetings, and discretion is the part clients ask about first.',
      'Distance is deceptive. The road looks short on a map, but the stretch from DLF Phase 3 to Sector 65 can take forty minutes at seven in the evening. If you are on the extension side, tell the team the sector rather than the road name; the difference between Sector 58 and Sector 65 is fifteen minutes of driving.',
      'The hotels here generally allow visitors, but they ask for a name at the desk. That is normal and the companion will handle it with a first name only. For residences, the tower and flat number matter more than the society name, and security will usually call up before allowing entry.',
    ],
    landmarks: ['Golf Course Road hotels', 'Sector 58 societies', 'Rapid metro corridor', 'Sushant Lok 3'],
  },
  south: {
    heading: 'How outcall works around Sohna Road and the southern sectors',
    paragraphs: [
      'The southern belt - Sohna Road, Sector 48, Sector 50 and the sectors around Medanta - is where the city mixes offices, hospitals and family housing. Bookings here are usually residence visits or short hotel stays attached to a business trip, and the pace is calmer than DLF.',
      'Subhash Chowk is the pinch point. Everything crossing from the Golf Course side to Sohna Road passes through it, and a fifteen-minute delay there is normal at any hour after five. Companions travelling from central Gurgaon build that into the arrival time rather than apologising for it later.',
      'Evening bookings in this belt tend to start later, around nine, and run long. The area also has more independent houses than towers, which means gate instructions are simple and the arrival is usually quicker than in a gated high-rise.',
    ],
    landmarks: ['Subhash Chowk', 'Medanta hospital', 'Sohna Road offices', 'Sector 50 market'],
  },
  new: {
    heading: 'How outcall works in New Gurgaon and on the expressway',
    paragraphs: [
      'New Gurgaon begins around Sector 65 and runs out towards the Dwarka Expressway. The roads are wider, the buildings are newer and the distances are longer than anywhere else in the city. A booking here is a plan rather than an impulse, and an hour of notice is the difference between a smooth arrival and a late one.',
      'Landmarks work better than addresses. Sector 84, Sector 95 and the expressway service roads are easy to find once the companion has a named society or a metro station to aim at, but a bare sector number can mean a ten-minute search inside a large township.',
      'The upside is privacy. These societies are new, security is organised and neighbours are less likely to notice a visitor, which is why clients who value discretion often choose a New Gurgaon address over a hotel. Weekend bookings dominate, and Saturday evening is the busiest slot of the week.',
    ],
    landmarks: ['Dwarka Expressway', 'Sector 84 market', 'Sector 95 societies', 'New Gurgaon high-rises'],
  },
  west: {
    heading: 'How outcall works in west Gurgaon',
    paragraphs: [
      'West Gurgaon - Palam Vihar, Udyog Vihar, the Delhi border and Manesar beyond it - is the industrial and airport side of the city. It has its own hotels, its own guest houses and a client base that is often passing through rather than living here.',
      'Udyog Vihar is full of small hotels and corporate guest houses, and their policies vary more than the branded properties. Confirm whether a visitor can come to the room before booking; the alternative is meeting at a cafe or a lounge nearby, which many clients prefer anyway.',
      'Manesar sits twenty to thirty minutes further out, and bookings there are planned with travel in mind. Palam Vihar, by contrast, is quick from the airport road and is a common choice for travellers with a long layover who would rather not go into central Gurgaon.',
    ],
    landmarks: ['Palam Vihar', 'Udyog Vihar offices', 'Airport road hotels', 'Manesar industrial belt'],
  },
};

export function LocalZoneBlock({ areaName, zone }: { areaName: string; zone: keyof typeof zoneCopy }) {
  const copy = zoneCopy[zone] || zoneCopy.dlf;
  return (
    <section className="section-padding bg-white border-t border-gray-200/70">
      <div className="container-luxury max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Local Notes</p>
        <h2 className="font-serif text-3xl font-bold text-gray-900">{copy.heading}</h2>
        <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
          <p>
            These notes apply to {areaName} and the streets immediately around it. If your venue is a specific hotel or society, mention it when you write
            and the team will confirm the arrival point before the booking is fixed.
          </p>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {copy.landmarks.map((landmark) => (
            <li key={landmark} className="rounded-full border border-gray-200 bg-[#faf8f5] px-4 py-2 text-sm text-gray-700">
              {landmark}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
