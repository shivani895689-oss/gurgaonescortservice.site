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
import type { BlogBlock, BlogPost } from '@/data/blog';
import { siteConfig } from '@/data/siteConfig';
import { gurgaonAreas } from '@/lib/gurgaonAreas';

type Zone = 'old' | 'dlf' | 'golf' | 'south' | 'new' | 'west';

const zoneFor: Record<string, Zone> = {
  'call-girls-in-gurgaon-guide': 'dlf',
  'best-fine-dining-restaurants-in-gurgaon': 'golf',
  'gurgaon-nightlife-guide': 'south',
  'luxury-hotels-in-gurgaon-guide': 'golf',
  'weekend-getaways-near-gurgaon': 'new',
  'call-girl-near-me-gurgaon': 'dlf',
  'vip-escort-service-in-gurgaon': 'golf',
  'air-hostess-escorts-in-gurgaon': 'west',
};

function pool(seed: string, count: number, step = 1) {
  const start = seed.length % gurgaonAreas.length;
  return Array.from({ length: count }, (_, index) => gurgaonAreas[(start + index * step) % gurgaonAreas.length]);
}

export default function BlogLongform({ post }: { post: BlogPost }) {
  const subject = { name: 'call girls in Gurgaon', kind: 'escort', slug: post.slug };
  const areas = pool(post.slug, 30);
  const nearMe = pool(post.slug.slice(2), 12, 3);

  const render = (block: BlogBlock) => {
    switch (block) {
      case 'areaCoverage':
        return <AreaCoverageBlock key={block} subject={subject} areas={areas} />;
      case 'nearMe':
        return <NearMeBlock key={block} subject={subject} areas={nearMe} />;
      case 'journey':
        return <BookingJourneyBlock key={block} subject={subject} phoneDisplay={siteConfig.phoneDisplay} />;
      case 'expectation':
        return <ExpectationBlock key={block} subject={subject} />;
      case 'rate':
        return <RateGuideBlock key={block} subject={subject} baseRate={7000} />;
      case 'discretion':
        return <DiscretionBlock key={block} subject={subject} />;
      case 'timing':
        return <TimingBlock key={block} subject={subject} />;
      case 'etiquette':
        return <EtiquetteBlock key={block} subject={subject} />;
      case 'extraFaq':
        return <ExtraFaqBlock key={block} subject={subject} phoneDisplay={siteConfig.phoneDisplay} />;
      case 'local':
        return <LocalZoneBlock key={block} areaName="Gurgaon" zone={zoneFor[post.slug] || 'dlf'} />;
      default:
        return null;
    }
  };

  return <>{post.blocks.map(render)}</>;
}
