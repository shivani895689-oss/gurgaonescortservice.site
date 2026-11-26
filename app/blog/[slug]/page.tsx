import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock, Phone, User } from 'lucide-react';
import PageHero from '@/components/PageHero';
import BlogCard from '@/components/BlogCard';
import BlogLongform from '@/components/BlogLongform';
import CtaSection from '@/components/home/CtaSection';
import { blogPath, blogPosts, getBlogPost, relatedBlogPosts } from '@/data/blog';
import { siteConfig } from '@/data/siteConfig';
import { locations, locationPath } from '@/data/locations';
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  jsonLdScript,
  pageMetadata,
  webPageSchema,
} from '@/lib/seo';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: blogPath(post),
    keywords: post.tags,
    type: 'article',
    image: post.image,
    imageAlt: post.imageAlt,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const path = blogPath(post);
  const url = absoluteUrl(path);
  const related = relatedBlogPosts(post);
  const areaLinks = locations.slice(0, 6);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': url + '#article',
    headline: post.title,
    description: post.description,
    image: [absoluteUrl(post.image)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Organization', name: post.author, url: absoluteUrl('/about') },
    publisher: { '@type': 'Organization', name: 'Gurgaon Escort Service', url: absoluteUrl('/') },
    mainEntityOfPage: { '@id': url + '#webpage' },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    inLanguage: 'en-IN',
  };

  const schema = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path },
    ]),
    articleSchema,
    webPageSchema({
      name: post.title,
      description: post.description,
      path,
      pageType: 'WebPage',
      faqs: post.faqs,
    }),
    faqSchema(post.faqs, url + '#faq'),
  ];

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.h1}
        description={post.excerpt}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.category },
        ]}
      />

      <section className="border-b border-gray-100 bg-[#fdf8f5]">
        <div className="container-luxury py-5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-600">
            <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {post.author}</span>
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> Updated {post.updatedAt}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
            <a href={'tel:' + siteConfig.phone} className="inline-flex items-center gap-1.5 font-semibold text-[#2f3338] underline underline-offset-4">
              <Phone className="h-3.5 w-3.5" /> {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <article className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <div className="relative aspect-16/9 w-full">
                  <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover object-top" />
                </div>
              </div>

              <div className="mt-8 space-y-5 text-gray-600 leading-relaxed">
                {post.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#2f3338]/15 bg-[#fdf8f5] p-6">
                <h2 className="font-serif text-lg font-bold text-[#2f3338]">Key takeaways</h2>
                <ul className="mt-3 space-y-2">
                  {post.keyTakeaways.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-gray-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a7f6d]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {post.sections.map((section) => (
                <div key={section.heading} className="mt-10">
                  <h2 className="font-serif text-2xl font-bold text-[#2f3338]">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f3338]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}

              <div id="faq" className="mt-12">
                <h2 className="font-serif text-2xl font-bold text-[#2f3338]">Frequently asked questions</h2>
                <div className="mt-4 space-y-3">
                  {post.faqs.map((faq) => (
                    <details key={faq.question} className="group rounded-xl border border-gray-200 bg-white px-5 py-4">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-[#2f3338]">
                        <span>{faq.question}</span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="font-serif text-lg font-bold text-[#2f3338]">Plan the evening</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Verified companions are available across Gurgaon seven days a week, with hotel and residence outcall in every belt covered in
                  this guide. Call or WhatsApp with your area and time and the team will confirm who can reach you fastest.
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {areaLinks.map((location) => (
                    <Link key={location.slug} href={locationPath(location)} className="flex items-center justify-between gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 transition hover:border-[#2f3338]/30">
                      <span>Call girls in {location.name}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-gray-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            <aside className="space-y-6 lg:col-span-1">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="font-serif text-lg font-bold text-[#2f3338]">In this guide</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {post.sections.map((section) => (
                    <li key={section.heading} className="text-gray-600">{section.heading}</li>
                  ))}
                  <li className="text-gray-600">Frequently asked questions</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="font-serif text-lg font-bold text-[#2f3338]">More guides</h2>
                <ul className="mt-4 space-y-3">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link href={blogPath(item)} className="text-sm text-gray-600 transition hover:text-[#2f3338]">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#2f3338] p-6 text-white">
                <h2 className="font-serif text-lg font-bold">Check availability</h2>
                <p className="mt-2 text-sm text-gray-300">Send your area, hotel or society and preferred time. Most requests are confirmed within minutes.</p>
                <a href={'tel:' + siteConfig.phone} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4">
                  <Phone className="h-4 w-4" /> {siteConfig.phoneDisplay}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <BlogLongform post={post} />

      {related.length > 0 && (
        <section className="section-padding bg-[#fdf8f5] border-t border-gray-200/70">
          <div className="container-luxury">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Keep Reading</p>
            <h2 className="font-serif text-3xl font-bold text-[#4a4d52]">Related Gurgaon guides</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} />
              ))}
            </div>
            <div className="mt-8">
              <Link href="/blog" className="btn-luxury text-sm">All guides <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>
      )}

      <CtaSection />

      {schema.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(item)} />
      ))}
    </>
  );
}
