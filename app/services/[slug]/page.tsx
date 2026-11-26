import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, ArrowRight, Phone, MessageCircle, MapPin, ShieldCheck, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/home/CtaSection';
import ServiceDeepDive from '@/components/ServiceDeepDive';
import { services, getServiceBySlug } from '@/data/services';
import { categories } from '@/data/categories';
import { siteConfig } from '@/data/siteConfig';
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  jsonLdScript,
  pageMetadata,
  serviceKeywords,
  serviceSchema,
  webPageSchema,
} from '@/lib/seo';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: '/services/' + service.slug,
    keywords: [...service.relatedKeywords, ...serviceKeywords(service.name)],
    image: service.image,
    imageAlt: service.imageAlt,
  });
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const path = '/services/' + service.slug;
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const quickAnswer =
    service.name + ' is available in Gurgaon 24/7, booked on call or WhatsApp with a short confirmation. ' +
    'It is an outcall service: the companion travels to your hotel, serviced apartment or private residence, and the arrangement cost is confirmed before dispatch.';

  const whatsappHref =
    'https://wa.me/' + siteConfig.whatsapp + '?text=' +
    encodeURIComponent('Hi, I would like to book ' + service.name + ' in Gurgaon.');

  const schema = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.name, path },
    ]),
    serviceSchema({
      name: service.name + ' in Gurgaon',
      description: service.metaDescription,
      path,
      serviceType: service.name,
      areaServed: ['Gurgaon', 'Gurugram', 'Delhi NCR'],
    }),
    webPageSchema({
      name: service.metaTitle,
      description: service.metaDescription,
      path,
      pageType: 'WebPage',
    }),
    itemListSchema({
      name: 'Other companion services in Gurgaon',
      path,
      items: otherServices.map((item) => ({ name: item.name + ' in Gurgaon', path: '/services/' + item.slug })),
    }),
    ...(service.faqs.length ? [faqSchema(service.faqs, absoluteUrl(path) + '#faq')] : []),
  ];

  return (
    <>
      <PageHero
        eyebrow={service.heroEyebrow}
        title={service.name + ' in Gurgaon'}
        description={service.shortDescription}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name },
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
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">About This Service</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {service.name} by {siteConfig.brand}
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                {service.intro.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury mb-6">
                <Image src={service.image} alt={service.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
              <div className="card-luxury p-6">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2f3338] mt-0.5 shrink-0" />
                      <span>{f}</span>
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
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Why Choose This Service</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              What Makes Our {service.name} Stand Out
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whyChoose.map((item) => (
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
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">What to Expect</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">A Clear, Respectful Experience</h2>
            <ul className="space-y-4">
              {service.whatToExpect.map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-[#2f3338] mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Ideal For</p>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Who This Service Is Perfect For</h3>
              <ul className="space-y-3">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2f3338] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Areas We Cover</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Available Across Gurgaon &amp; Gurugram</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our {service.name.toLowerCase()} is available across major premium locations in Gurgaon. Whether you are searching for a trusted companion service near you, around business hubs, or in upscale residential neighborhoods, our team coordinates discreetly and promptly.
            </p>
            <div className="flex flex-wrap gap-2">
              {service.localAreas.map((area) => (
                <span key={area} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#fdf8f5] border border-gray-200/60 rounded-full text-sm text-gray-700">
                  <MapPin className="w-3.5 h-3.5 text-[#2f3338]" />
                  {area}
                </span>
              ))}
            </div>
            <Link href="/locations" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2f3338]">
              Browse area pages <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="mt-10">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Related Categories</p>
              <ul className="space-y-2">
                {categories.slice(0, 5).map((category) => (
                  <li key={category.slug}>
                    <Link href={'/categories/' + category.slug} className="flex items-center justify-between gap-2 rounded-lg border border-gray-200/70 bg-white px-4 py-3 text-sm text-gray-700 transition-colors hover:border-[#2f3338]/30 hover:text-[#2f3338]">
                      <span>{category.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 card-luxury p-6 bg-[#fdf8f5]">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Local SEO &amp; Near-Me Booking</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Looking for <strong>{service.name.toLowerCase()} near me in Gurgaon</strong>? {siteConfig.brand} provides discreet coordination across Gurugram&apos;s top hotels, residences, and business districts. Call or WhatsApp for fast availability, clear communication, and a respectful premium experience tailored to your location and schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceDeepDive slug={service.slug} name={service.name} />

      <section id="faq" className="section-padding bg-[#fdf8f5]">
        <div className="container-luxury max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">FAQs</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">Clear answers to common questions about our {service.name.toLowerCase()} in Gurgaon.</p>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq) => (
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

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Explore More</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">Other Premium Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link key={s.slug} href={'/services/' + s.slug} className="card-luxury overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={s.image} alt={s.imageAlt} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2f3338] transition-colors">{s.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{s.shortDescription}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2f3338]">Learn More <ArrowRight className="w-4 h-4" /></span>
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



