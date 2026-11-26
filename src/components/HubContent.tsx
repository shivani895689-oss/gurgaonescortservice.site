import {
  AreaCoverageBlock,
  BookingJourneyBlock,
  DiscretionBlock,
  ExpectationBlock,
  LocalZoneBlock,
  NearMeBlock,
  RateGuideBlock,
} from '@/components/content/SeoContentBlocks';
import { EtiquetteBlock, ExtraFaqBlock, TimingBlock } from '@/components/content/SeoContentExtra';
import { hubContent } from '@/data/hubContent';
import { siteConfig } from '@/data/siteConfig';
import { gurgaonAreas } from '@/lib/gurgaonAreas';

type Zone = 'old' | 'dlf' | 'golf' | 'south' | 'new' | 'west';

const zones: Record<string, Zone> = {
  home: 'dlf',
  about: 'dlf',
  services: 'golf',
  locations: 'dlf',
  profiles: 'golf',
  booking: 'dlf',
  faq: 'old',
};

function pool(seed: string, count: number, step = 2) {
  const start = seed.length % gurgaonAreas.length;
  return Array.from({ length: count }, (_, index) => gurgaonAreas[(start + index * step) % gurgaonAreas.length]);
}

export default function HubContent({ page }: { page: string }) {
  const entry = hubContent[page];
  if (!entry) return null;

  const subject = { name: 'call girls in Gurgaon', kind: 'escort', slug: page };
  const areas = pool(page, 30);
  const nearMe = pool(page.slice(1) || page, 12, 3);

  const block = (name: string) => {
    switch (name) {
      case 'areaCoverage':
        return <AreaCoverageBlock key={name} subject={subject} areas={areas} />;
      case 'nearMe':
        return <NearMeBlock key={name} subject={subject} areas={nearMe} />;
      case 'journey':
        return <BookingJourneyBlock key={name} subject={subject} phoneDisplay={siteConfig.phoneDisplay} />;
      case 'expectation':
        return <ExpectationBlock key={name} subject={subject} />;
      case 'rate':
        return <RateGuideBlock key={name} subject={subject} baseRate={7000} />;
      case 'timing':
        return <TimingBlock key={name} subject={subject} />;
      case 'etiquette':
        return <EtiquetteBlock key={name} subject={subject} />;
      case 'extraFaq':
        return <ExtraFaqBlock key={name} subject={subject} phoneDisplay={siteConfig.phoneDisplay} />;
      case 'discretion':
        return <DiscretionBlock key={name} subject={subject} />;
      case 'local':
        return <LocalZoneBlock key={name} areaName="Gurgaon" zone={zones[page] || 'dlf'} />;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="section-padding bg-[#fdf8f5] border-t border-gray-200/70">
        <div className="container-luxury max-w-4xl">
          {entry.sections.map((section) => (
            <div key={section.heading} className="mb-10 last:mb-0">
              <h2 className="font-serif text-2xl font-bold text-[#2f3338]">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f3338]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
      {entry.blocks.map((name) => block(name))}
    </>
  );
}
