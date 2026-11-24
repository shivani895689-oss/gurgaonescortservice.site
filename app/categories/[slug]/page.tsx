import { getCategoryBySlug, categories } from '@/data/categories';
import { Faq } from '@/components/Faq';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';

interface Params {
  params: Promise<{ slug: string }> | { slug: string };
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params) {
  const resolved = await params;
  const category = getCategoryBySlug(resolved.slug);
  if (!category) return { title: 'Category Not Found' };
  const canonical = `/categories/${category.slug}`;
  const title = category.seoTitle ?? `${category.name} in Gurgaon | ${siteConfig.name}`;
  const description = category.seoDescription ?? category.shortDescription;
  return {
    title,
    description,
    keywords: category.keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      images: [{ url: category.image, alt: `${category.name} in Gurgaon` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({ params }: Params) {
  const resolved = await params;
  const category = getCategoryBySlug(resolved.slug);

  if (!category) {
    return <div className="p-8 text-center text-gray-500">Category not found.</div>;
  }

  const faqs = category.faqs ?? [];
  const introContent = category.introContent ?? [category.description];
  const whyChoose = category.whyChoose ?? category.highlights;
  const idealFor = category.idealFor ?? [];
  const localAreas = category.localAreas ?? [];
  const keywords = category.keywords ?? [];
  const seoDescription = category.seoDescription ?? category.shortDescription;

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
    description: seoDescription,
    provider: { '@type': 'LocalBusiness', name: siteConfig.name, telephone: siteConfig.phone, url: siteConfig.url },
    areaServed: { '@type': 'City', name: 'Gurgaon' },
    url: `${siteConfig.url}/categories/${category.slug}`,
    image: category.image,
  };

  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <section className="relative overflow-hidden bg-[#4a4d52] text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image src={category.image} alt={category.name} fill className="object-cover" priority />
        </div>
        <div className="container-luxury relative z-10">
          <nav className="text-sm text-gray-300 mb-4" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li>/</li>
              <li><a href="/categories" className="hover:text-white">Categories</a></li>
              <li>/</li>
              <li className="text-white">{category.name}</li>
            </ol>
          </nav>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#D8DCE2] mb-3">Premium Category</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">{category.name} in Gurgaon</h1>
          <p className="max-w-3xl text-gray-200 text-lg leading-relaxed">{category.shortDescription}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-8">
              <Image src={category.image} alt={`${category.name} in Gurgaon`} width={1200} height={700} className="w-full h-auto object-cover" />
            </div>

            <h2 className="font-serif text-3xl font-bold text-[#2f3338] mb-4">{category.introHeading ?? `About ${category.name}`}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {introContent.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {whyChoose.length > 0 && (
              <div className="mt-10">
                <h3 className="font-serif text-2xl font-semibold text-[#2f3338] mb-4">Why Choose This Category</h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {whyChoose.map((reason, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-700">
                      <span className="mt-0.5 text-[#4a4d52]">✓</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {idealFor.length > 0 && (
              <div className="mt-10">
                <h3 className="font-serif text-2xl font-semibold text-[#2f3338] mb-4">Ideal For</h3>
                <div className="flex flex-wrap gap-3">
                  {idealFor.map((item, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-[#4a4d52]/10 text-[#2f3338] text-sm font-medium">{item}</span>
                  ))}
                </div>
              </div>
            )}

            {localAreas.length > 0 && (
              <div className="mt-10">
                <h3 className="font-serif text-2xl font-semibold text-[#2f3338] mb-4">Popular Areas in Gurgaon</h3>
                <div className="flex flex-wrap gap-2">
                  {localAreas.map((area, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-md border border-gray-200 text-sm text-gray-600 bg-white">{area}</span>
                  ))}
                </div>
              </div>
            )}

            {keywords.length > 0 && (
              <div className="mt-10">
                <h3 className="font-serif text-2xl font-semibold text-[#2f3338] mb-4">Related Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {keywords.map((kw, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-md bg-gray-100 text-sm text-gray-600">{kw}</span>
                  ))}
                </div>
              </div>
            )}

            {faqs.length > 0 && (
              <div className="mt-12">
                <h3 className="font-serif text-2xl font-semibold text-[#2f3338] mb-6">Frequently Asked Questions</h3>
                {faqs.map((faq, i) => (
                  <Faq key={i} q={faq.question} a={faq.answer} />
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sticky top-24">
              <h3 className="font-serif text-xl font-semibold text-[#2f3338] mb-2">Book This Category</h3>
              <p className="text-sm text-gray-600 mb-5">Contact us for discreet availability, pricing, and personalized recommendations in Gurgaon.</p>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#25D366] text-white font-semibold py-3 rounded-full mb-3 hover:brightness-110 transition">WhatsApp Now</a>
              <a href={`tel:${siteConfig.phone}`} className="block w-full text-center bg-[#2f3338] text-white font-semibold py-3 rounded-full hover:bg-[#4a4d52] transition">Call Now</a>
              <div className="mt-5 pt-5 border-t border-gray-200 text-sm text-gray-600 space-y-2">
                <p><span className="font-medium text-[#2f3338]">Location:</span> {siteConfig.city}</p>
                <p><span className="font-medium text-[#2f3338]">Availability:</span> 24/7</p>
                <p><span className="font-medium text-[#2f3338]">Privacy:</span> 100% Discreet</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
