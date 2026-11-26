export interface GurgaonArea {
  name: string;
  /** Path on this site, when a dedicated page exists. */
  path?: string;
  /** Two sentences of genuinely local detail. */
  blurb: string;
  zone: 'old' | 'dlf' | 'golf' | 'new' | 'south' | 'west';
}

export const gurgaonAreas: GurgaonArea[] = [
  { name: 'DLF Phase 1', path: '/escort-service-dlf-phase-1-gurgaon', zone: 'dlf', blurb: 'The oldest of the DLF phases, laid out around quiet tree-lined lanes just off Golf Course Road. Most bookings here are apartment visits or dinners at the Qutab Plaza restaurants.' },
  { name: 'DLF Phase 2', path: '/escort-service-dlf-phase-2-gurgaon', zone: 'dlf', blurb: 'A dense mix of offices, guest houses and residential towers between Cyber City and MG Road. Companions usually arrive from the MG Road side, which keeps travel time short even in evening traffic.' },
  { name: 'DLF Phase 3', path: '/escort-service-dlf-phase-3-gurgaon', zone: 'dlf', blurb: 'Home to the original Cyber Hub crowd and a long line of serviced apartments along Golf Course Road. It is the most common outcall location in our booking records.' },
  { name: 'DLF Phase 4', path: '/escort-service-dlf-phase-4-gurgaon', zone: 'dlf', blurb: 'Quieter than Phase 3, with gated complexes and the Galleria market at its edge. Hotel and residence bookings here are usually short-notice and late evening.' },
  { name: 'DLF Phase 5', path: '/escort-service-dlf-phase-5-gurgaon', zone: 'dlf', blurb: 'Gurgaon at its most upscale: Golf Course Road towers, private lifts and a client base that expects arrivals to be invisible. Discretion matters more here than speed.' },
  { name: 'Cyber City', path: '/escort-service-cyber-city-gurgaon', zone: 'dlf', blurb: 'The corporate heart of Gurugram, where most weekday bookings come from visiting consultants and finance teams. Companions meet guests in hotel lobbies rather than office towers.' },
  { name: 'Golf Course Road', path: '/escort-service-golf-course-road-gurgaon', zone: 'golf', blurb: 'Five-star hotels, premium condominiums and a steady flow of business travellers. A Golf Course Road booking usually means a suite, a late dinner and a quiet exit.' },
  { name: 'Golf Course Extension Road', path: '/escort-service-golf-course-extension-road-gurgaon', zone: 'golf', blurb: 'The newer luxury corridor towards Sector 58 and 65, full of high-rise societies and boutique hotels. Travel here is quick from Sushant Lok but slower from old Gurgaon.' },
  { name: 'MG Road', path: '/escort-service-mg-road-gurgaon', zone: 'old', blurb: 'The commercial spine of old Gurgaon, with metro access, budget hotels and the Sector 29 restaurant belt at one end. It is the easiest meeting point for anyone new to the city.' },
  { name: 'Sector 29', path: '/escort-service-sector-29-gurgaon', zone: 'old', blurb: 'Gurgaon nightlife central: bars, breweries and the Leisure Valley grounds. Evening bookings here tend to start late and finish later.' },
  { name: 'Sector 24', path: '/escort-service-sector-24-gurgaon', zone: 'old', blurb: 'A settled residential sector behind MG Road, popular with families and long-term residents. Bookings are typically discreet residence visits rather than hotel stays.' },
  { name: 'Sector 33', path: '/escort-service-sector-33-gurgaon', zone: 'old', blurb: 'Low-rise housing and small markets between Sector 29 and Subhash Chowk. Companions rarely need more than twenty minutes to reach a Sector 33 address.' },
  { name: 'Sector 38', path: '/escort-service-sector-38-gurgaon', zone: 'south', blurb: 'Ardee City and its surrounding blocks, close to Sector 46 and the Jharsa Road crossing. A calm, mostly residential sector with plenty of gated entries.' },
  { name: 'Sector 42', path: '/escort-service-sector-42-gurgaon', zone: 'south', blurb: 'The hospital and hospitality belt around Medanta, which brings a steady stream of short business stays. Hotel outcall is the norm here.' },
  { name: 'Sector 46', path: '/escort-service-sector-46-gurgaon', zone: 'south', blurb: 'A quiet pocket between Sector 45 and Ardee City, mostly independent houses. Bookings are usually private residence visits in the evening.' },
  { name: 'Sector 48', path: '/escort-service-sector-48-gurgaon', zone: 'south', blurb: 'Sohna Road at its busiest, stacked with offices, clinics and new apartment towers. Weekday evening is the peak window for outcall here.' },
  { name: 'Sector 50', path: '/escort-service-sector-50-gurgaon', zone: 'south', blurb: 'One of the earliest planned sectors on Sohna Road, now a mature residential area with wide roads. Arrivals are quick from Subhash Chowk.' },
  { name: 'Sector 56', path: '/escort-service-sector-56-gurgaon', zone: 'south', blurb: 'A well-established sector beside Golf Course Road with schools, markets and family homes. Evenings are quiet, which suits residential bookings.' },
  { name: 'Sector 57', path: '/escort-service-sector-57-gurgaon', zone: 'south', blurb: 'Sushant Lok 3 and the Golf Course Extension edge, full of newer towers. Companions usually come in from Sector 58 or 65.' },
  { name: 'Sector 58', path: '/escort-service-sector-58-gurgaon', zone: 'golf', blurb: 'A fast-growing stretch of Golf Course Extension Road with premium societies and a handful of boutique hotels. Popular for weekend bookings.' },
  { name: 'Sector 62', path: '/escort-service-sector-62-gurgaon', zone: 'new', blurb: 'Nirvana Country and the surrounding gated communities, close to Golf Course Extension. Easy access and a client base that values privacy.' },
  { name: 'Sector 65', path: '/escort-service-sector-65-gurgaon', zone: 'new', blurb: 'The gateway to New Gurgaon, where the wide sectors begin. Good road access makes it one of the fastest areas to reach from the expressway.' },
  { name: 'Sector 70', path: '/escort-service-sector-70-gurgaon', zone: 'new', blurb: 'A newer residential sector near Sector 65 with high-rise societies and plenty of parking. Outcall here usually means an apartment visit.' },
  { name: 'Sector 84', path: '/escort-service-sector-84-gurgaon', zone: 'new', blurb: 'New Gurgaon proper, close to the Dwarka Expressway and the Sector 84 markets. Travel from central Gurgaon takes around thirty minutes.' },
  { name: 'Sector 95', path: '/escort-service-sector-95-gurgaon', zone: 'new', blurb: 'One of the newest sectors off the Dwarka Expressway, still filling up with residents. Bookings are usually planned a day ahead because of distance.' },
  { name: 'Dwarka Expressway', path: '/escort-service-dwarka-expressway-gurgaon', zone: 'new', blurb: 'The expressway corridor linking Gurgaon to Delhi, lined with new towers and hotels. Fastest to reach when you are coming from the airport side.' },
  { name: 'Sushant Lok', path: '/escort-service-sushant-lok-gurgaon', zone: 'dlf', blurb: 'A large, mixed neighbourhood between MG Road and Golf Course Road, with markets on every corner. Companions know the internal lanes well enough to avoid the main jams.' },
  { name: 'Sushant Lok 2', path: '/escort-service-sushant-lok-gurgaon', zone: 'golf', blurb: 'Quieter than Sushant Lok 1, with independent houses and low-rise apartments. Evening residence visits are the most common booking type.' },
  { name: 'South City 1', path: '/escort-service-south-city-gurgaon', zone: 'south', blurb: 'A long-established neighbourhood off Sohna Road with wide streets and family homes. Bookings here are usually unhurried and planned in advance.' },
  { name: 'Palam Vihar', path: '/escort-service-palam-vihar-gurgaon', zone: 'west', blurb: 'The western edge of Gurgaon, close to the Delhi border and the airport road. A mature colony with independent houses and a calm evening atmosphere.' },
  { name: 'Udyog Vihar', path: '/escort-service-udyog-vihar-gurgaon', zone: 'west', blurb: 'An industrial and office belt beside Cyber City, full of budget hotels and guest houses. Weekday outcall is common among business visitors.' },
  { name: 'Manesar', path: '/escort-service-manesar-gurgaon', zone: 'west', blurb: 'The industrial township south-west of Gurgaon, home to large factories and company guest houses. Bookings are usually planned with travel time in mind.' },
  { name: 'New Gurgaon', path: '/escort-service-new-gurgaon', zone: 'new', blurb: 'The collective name for the sectors beyond 65, where the city is still expanding. High-rise living, wide roads and a young professional crowd.' },
];

export function areaByName(name: string): GurgaonArea | undefined {
  return gurgaonAreas.find((a) => a.name === name);
}
