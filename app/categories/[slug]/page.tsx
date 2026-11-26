import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, Phone, MessageCircle, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/home/CtaSection';
import { getCategoryBySlug, categories } from '@/data/categories';
import { services } from '@/data/services';
import { profilePath, profiles } from '@/lib/profiles';
import { siteConfig } from '@/data/siteConfig';
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  jsonLdScript,
  pageMetadata,
  serviceSchema,
  webPageSchema,
} from '@/lib/seo';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return pageMetadata({
    title: category.seoTitle ?? category.name + ' | ' + siteConfig.name,
    description: category.seoDescription ?? category.shortDescription,
    path: '/categories/' + category.slug,
    keywords: category.keywords,
    image: category.image,
    imageAlt: category.name + ' in Gurgaon',
  });
}

export default async function CategoryDetail({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const path = '/categories/' + category.slug;
  const otherCategories = categories.filter((c) => c.slug !== category.slug).slice(0, 3);
  const introContent = category.introContent ?? [category.description];
  const whyChoose = category.whyChoose ?? category.highlights.map((h) => ({ title: h, text: h + ' is a key part of our ' + category.name.toLowerCase() + ' experience in Gurgaon, delivered with discretion and professionalism.' }));
  const idealFor = category.idealFor ?? ['Premium hotel meetings in Gurgaon', 'Private companionship across Gurugram', 'Discreet bookings with verified companions'];
  const localAreas = category.localAreas ?? ['DLF Phase 1-5', 'Golf Course Road', 'Cyber City', 'MG Road', 'Sohna Road', 'Golf Course Extension Road'];
  const faqs = category.faqs ?? [];

  const description = category.seoDescription ?? category.shortDescription;
  const quickAnswer =
    category.name + ' are available in Gurgaon seven days a week, bookable on call or WhatsApp with a short confirmation call. ' +
    'Bookings are outcall to hotels, serviced apartments and private residences across Gurugram, and the arrangement cost is confirmed before the companion is dispatched.';

  const whatsappHref =
    'https://wa.me/' + siteConfig.whatsapp + '?text=' +
    encodeURIComponent('Hi, I would like to know more about ' + category.name + ' in Gurgaon.');

  const schema = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Categories', path: '/categories' },
      { name: category.name, path },
    ]),
    serviceSchema({
      name: category.name + ' in Gurgaon',
      description,
      path,
      serviceType: 'Escort and companion service',
    }),
    webPageSchema({ name: category.seoTitle ?? category.name, description, path }),
    ...(faqs.length ? [faqSchema(faqs, absoluteUrl(path) + '#faq')] : []),
  ];

  return (
    <>
      <PageHero
        eyebrow="Premium Category"
        title={category.name}
        description={category.shortDescription}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Categories', href: '/categories' },
          { label: category.name },
        ]}
      />

      <section className="border-b border-gray-100 bg-[#fdf8f5]">
        <div className="container-luxury py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="page-summary max-w-3xl text-sm leading-relaxed text-gray-700">
              <span className="font-semibold text-[#2f3338]">Quick answer: </span>
              {quickAnswer}
            </p>
            <div className="flex shrink-0 flex-wrap gap-2">
              <a href={'tel:' + siteConfig.phone} className="btn-luxury text-sm">
                <Phone className="w-4 h-4" /> {siteConfig.phoneDisplay}
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-luxury-whatsapp text-sm">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">About This Category</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {category.introHeading ?? category.name + ' in Gurugram'}
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                {introContent.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury mb-6">
                <Image src={category.image} alt={category.name + ' in Gurgaon'} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
              <div className="card-luxury p-6">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Category Highlights</h3>
                <ul className="space-y-3">
                  {category.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2f3338] mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={'tel:' + siteConfig.phone} className="btn-luxury-primary w-full justify-center">
                    <Phone className="w-4 h-4" /> {siteConfig.phoneDisplay}
                  </a>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-luxury-whatsapp w-full justify-center">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
                <p className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-3.5 h-3.5" /> Available 24/7 · {siteConfig.openingHoursDisplay}
                </p>
                <p className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                  <ShieldCheck className="w-3.5 h-3.5" /> Confidential booking · verified profiles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fdf8f5]">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Why Choose Us</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              Why Clients Choose Our {category.name}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <div key={item.title} className="card-luxury p-6">
                <div className="w-10 h-10 rounded-full bg-[#fdf1ef] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#2f3338]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Ideal For</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Perfect For These Occasions</h2>
            <ul className="space-y-4">
              {idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-[#2f3338] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 card-luxury p-6 bg-[#fdf8f5]">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Book with Confidence</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                At {siteConfig.brand}, every {category.name.toLowerCase()} booking is handled with professionalism, verified profiles, and strict privacy. Whether you are searching for a premium companion near you in Gurgaon or planning ahead for a special occasion, our team is available 24/7 to assist with clear, respectful communication.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Areas We Serve</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Available Across Gurgaon &amp; Gurugram</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our {category.name.toLowerCase()} service is available across major premium locations in Gurgaon. If you are looking for a trusted companion near me, around business districts, luxury hotels, or upscale residential neighborhoods, we coordinate discreetly and promptly.
            </p>
            <div className="flex flex-wrap gap-2">
              {localAreas.map((area) => (
                <span key={area} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#fdf8f5] border border-gray-200/60 rounded-full text-sm text-gray-700">
                  <MapPin className="w-3.5 h-3.5 text-[#2f3338]" />
                  {area}
                </span>
              ))}
            </div>
            <Link href="/locations" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2f3338]">
              Browse all area pages <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="mt-10">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Booking Options</p>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={'/services/' + service.slug} className="flex items-center justify-between gap-2 rounded-lg border border-gray-200/70 bg-white px-4 py-3 text-sm text-gray-700 transition-colors hover:border-[#2f3338]/30 hover:text-[#2f3338]">
                      <span>{service.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {category.keywords && category.keywords.length > 0 && (
              <div className="mt-10">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Related Searches</p>
                <div className="flex flex-wrap gap-2">
                  {category.keywords.map((kw) => (
                    <span key={kw} className="px-3 py-1.5 bg-white border border-gray-200/60 rounded-full text-xs text-gray-600">{kw}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section id="faq" className="section-padding bg-[#fdf8f5]">
          <div className="container-luxury max-w-4xl">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">FAQs</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-gray-600">Common questions about {category.name.toLowerCase()} in Gurgaon, answered clearly.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="card-luxury p-6 group">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-[#2f3338] text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-[#faf8f5] border-t border-gray-200/70">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Verified Companions</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">Book a companion in Gurgaon</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Every profile on this page is reviewed before publication, with stated languages, rates and availability.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((profile) => (
              <li key={profile.id}>
                <Link
                  href={profilePath(profile)}
                  className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 transition hover:border-[#2f3338]/30 hover:shadow-sm"
                >
                  <span className="text-sm text-gray-700">
                    <span className="font-semibold text-[#2f3338]">{profile.name}</span>, {profile.age} &middot; {profile.categoryLabel}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-gray-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Explore More</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">Other Premium Categories</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.map((c) => (
              <Link key={c.slug} href={'/categories/' + c.slug} className="card-luxury overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={c.image} alt={c.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2f3338] transition-colors">{c.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{c.shortDescription}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2f3338]">Explore <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />

      {schema.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(item)} />
      ))}
    </>
  );
}
