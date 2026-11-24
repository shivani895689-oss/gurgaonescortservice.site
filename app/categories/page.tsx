import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CategoryCard from '@/components/CategoryCard';
import TrustBar from '@/components/home/TrustBar';
import CtaSection from '@/components/home/CtaSection';
import { categories } from '@/data/categories';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Categories | Premium Gurgaon Escort Companions',
  description:
    'Browse premium companion categories in Gurgaon including VIP, model, independent, elite, and college companions. Discreet, verified, and available 24/7 across Gurugram.',
  alternates: { canonical: '/categories' },
  openGraph: {
    title: 'Categories | Premium Gurgaon Escort Companions',
    description:
      'Browse premium companion categories in Gurgaon including VIP, model, independent, elite, and college companions across Gurugram.',
    url: `${siteConfig.url}/categories`,
    type: 'website',
    images: [{ url: '/images/hero/hero-main.webp', width: 1200, height: 630, alt: 'Gurgaon Escort Categories' }],
  },
};

export default function CategoriesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Categories', item: `${siteConfig.url}/categories` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Our Categories"
        title="Explore Premium Companion Categories"
        description="Find the perfect companion from our carefully curated categories. Each category represents a distinct experience tailored to your preferences in Gurgaon."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Categories' }]}
      />

      <section className="section-padding bg-[#fffaf9]">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#671725] mb-3">Browse by Category</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a0a0d]">
              Choose Your <span className="gradient-text-gold">Ideal Experience</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <TrustBar />
      <CtaSection />
    </>
  );
}
