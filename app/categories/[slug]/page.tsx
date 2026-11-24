import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/home/CtaSection';
import { categories, getCategoryBySlug } from '@/data/categories';
import { siteConfig } from '@/data/siteConfig';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  const title = `${category.name} in Gurgaon | ${siteConfig.name}`;
  const description = category.shortDescription;
  return {
    title,
    description,
    alternates: { canonical: `/categories/${category.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/categories/${category.slug}`,
      type: 'website',
      images: [{ url: category.image, width: 1200, height: 630, alt: category.name }],
    },
  };
}

export default async function CategoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Categories', item: `${siteConfig.url}/categories` },
      { '@type': 'ListItem', position: 3, name: category.name, item: `${siteConfig.url}/categories/${category.slug}` },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${category.name} in Gurgaon`,
    description: category.description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
    },
    areaServed: { '@type': 'City', name: 'Gurgaon' },
    url: `${siteConfig.url}/categories/${category.slug}`,
    image: category.image,
  };

  const others = categories.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHero
        eyebrow="Category"
        title={category.name}
        description={category.shortDescription}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Categories', href: '/categories' }, { label: category.name }]}
      />

      <section className="section-padding bg-[#fffaf9]">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury">
              <Image src={category.image} alt={category.name} width={800} height={600} className="w-full h-auto object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0d]/20 to-transparent" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#671725] mb-3">Category Details</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a0a0d] mb-5">{category.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{category.description}</p>

              <div className="space-y-3 mb-8">
                {category.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#671725] shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={`tel:${siteConfig.phone}`} className="btn-luxury">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${category.name} in Gurgaon.`)}`} target="_blank" rel="noopener noreferrer" className="btn-luxury-whatsapp">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fdf8f5]">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#671725] mb-3">More Categories</p>
            <h2 className="font-serif text-3xl font-bold text-[#1a0a0d]">Explore Other Categories</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((c) => (
              <Link key={c.slug} href={`/categories/${c.slug}`} className="group bg-white rounded-2xl p-6 border border-rose-100/60 shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all">
                <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#671725] transition-colors mb-2">{c.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">{c.shortDescription}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#671725]">View Category <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
