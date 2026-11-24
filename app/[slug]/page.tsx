import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { Phone, MessageCircle, Shield, Clock, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/home/CtaSection';
import { siteConfig } from '@/data/siteConfig';
import { getLandingAlias, getLandingPageBySlug, landingPageAliases, landingPages } from '@/data/landingPages';
import { locationPageContent } from '@/data/locationPageContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const aliasSlugs = Object.keys(landingPageAliases).map((slug) => ({ slug }));
  return [...landingPages.map((p) => ({ slug: p.slug })), ...aliasSlugs];
}

function resolvePage(slug: string) {
  const direct = getLandingPageBySlug(slug);
  if (direct) return { page: direct, canonicalSlug: direct.slug };
  const aliasTarget = getLandingAlias(slug);
  if (aliasTarget) {
    const targetSlug = aliasTarget.replace(/^\//, '');
    const target = getLandingPageBySlug(targetSlug);
    if (target) return { page: target, canonicalSlug: target.slug };
  }
  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolvePage(slug);
  if (!resolved) return {};
  const { page, canonicalSlug } = resolved;
  const url = `${siteConfig.url}/${canonicalSlug}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${canonicalSlug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      type: 'website',
      siteName: siteConfig.name,
      locale: 'en_IN',
      images: [{ url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: page.locationName || page.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'],
    },
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const resolved = resolvePage(slug);
  if (!resolved) notFound();

  const { page, canonicalSlug } = resolved;
  if (slug !== canonicalSlug) redirect(`/${canonicalSlug}`);
  const rich = locationPageContent[canonicalSlug];
  const isLocation = page.type === 'location';
  const locationName = page.locationName || 'Gurgaon';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: isLocation ? 'Locations' : 'Categories', item: `${siteConfig.url}/${isLocation ? 'locations' : 'categories'}` },
      { '@type': 'ListItem', position: 3, name: page.title, item: `${siteConfig.url}/${canonicalSlug}` },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.metaTitle,
    description: page.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
      address: {
        '@type': 'PostalAddress',
        ...siteConfig.structuredAddress,
      },
    },
    areaServed: {
      '@type': 'Place',
      name: isLocation ? `${locationName}, Gurgaon, Haryana, India` : 'Gurgaon, Haryana, India',
    },
    url: `${siteConfig.url}/${canonicalSlug}`,
  };

  const faqSchema = rich?.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: rich.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Shield, title: 'Verified & Discreet', text: 'Every companion is verified and every booking handled with absolute confidentiality.' },
                { icon: Clock, title: '24/7 Availability', text: 'Round-the-clock booking support with fast response across Gurgaon locations.' },
                { icon: MapPin, title: isLocation ? `Serving ${locationName}` : 'All Gurgaon Areas', text: isLocation ? `Fast, discreet outcall service across ${locationName} and nearby areas.` : 'Coverage across DLF, Cyber City, Golf Course Road, and all major Gurugram sectors.' },
              ].map((item) => (
                <div key={item.title} className="bg-[#fdf8f5] rounded-2xl border border-gray-200/80 p-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#2f3338]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#2f3338]" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#4a4d52] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {rich ? (
              <article>
                <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
                  {rich.intro.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {rich.sections.map((section, idx) => (
                  <div key={idx} className="mt-12">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a4d52] mb-5 leading-tight">{section.heading}</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed text-[17px]">
                      {section.paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {section.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                            <CheckCircle2 className="w-5 h-5 text-[#2f3338] mt-0.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {rich.faqs.length > 0 && (
                  <div className="mt-14">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a4d52] mb-6 leading-tight">
                      Frequently Asked Questions About {isLocation ? `Escort Service in ${locationName}` : page.title}
                    </h2>
                    <div className="space-y-4">
                      {rich.faqs.map((faq, i) => (
                        <details key={i} className="group bg-[#fdf8f5] rounded-2xl border border-gray-200/80 p-5 open:shadow-sm">
                          <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-[#4a4d52]">
                            <span>{faq.question}</span>
                            <ChevronDown className="w-5 h-5 text-[#2f3338] shrink-0 transition-transform group-open:rotate-180" />
                          </summary>
                          <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                )}

                {rich.nearbyAreas.length > 0 && (
                  <div className="mt-14">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a4d52] mb-5 leading-tight">
                      Nearby Areas We Also Serve
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Along with {locationName}, we provide discreet premium companion service across nearby Gurgaon locations. Explore other areas for fast local availability.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {rich.nearbyAreas.map((area) => (
                        <Link
                          key={area.slug}
                          href={`/${area.slug}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2f3338]/5 border border-[#2f3338]/15 text-[#2f3338] text-sm font-medium hover:bg-[#2f3338] hover:text-white transition-colors"
                        >
                          <MapPin className="w-3.5 h-3.5" /> {area.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ) : (
              <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a4d52] mb-4">
                  About {page.title}
                </h2>
                <p className="leading-relaxed mb-6">{page.description}</p>
                <p className="leading-relaxed mb-6">
                  At {siteConfig.name}, we specialize in delivering a premium, discreet, and personalized companion experience.
                  {isLocation
                    ? ` Our ${locationName} service is designed for clients who value privacy, punctuality, and genuine companionship. Whether you are staying at a luxury hotel, a serviced apartment, or a private residence in ${locationName}, our team ensures a smooth and comfortable experience.`
                    : ` We focus on quality, confidentiality, and client satisfaction. Every arrangement is handled with care, from the first inquiry to the completion of your booking.`}
                </p>
                <p className="leading-relaxed mb-6">
                  {isLocation
                    ? `Booking an escort service in ${locationName}, Gurgaon is simple and confidential. Contact us via phone or WhatsApp, share your preferences, and our team will coordinate the rest with complete discretion. We serve ${locationName} and surrounding areas with fast response times and verified companions.`
                    : `From hotel outcalls to social companionship, we handle every request with discretion and professionalism. Contact us to discuss availability, preferences, and arrangements in your preferred Gurgaon location.`}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-200">
              <a href={`tel:${siteConfig.phone}`} className="btn-luxury">
                <Phone className="w-4 h-4" /> Call {siteConfig.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${page.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-whatsapp"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
