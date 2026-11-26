import { categories } from '@/data/categories';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { landingPages } from '@/data/landingPages';
import { blogPosts } from '@/data/blog';
import { profiles } from '@/lib/profiles';

export type RouteGroup = 'home' | 'hub' | 'category' | 'service' | 'location' | 'area' | 'profile' | 'blog' | 'legal';

export type IndexableRoute = {
  path: string;
  group: RouteGroup;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
};

/** Bump when page copy changes materially so sitemap lastmod stays truthful. */
export const CONTENT_UPDATED = new Date('2026-11-20T00:00:00.000Z');

/**
 * Single source of truth for every indexable URL on the site.
 * Used by sitemap.xml, llms.txt and IndexNow submissions so the three
 * never drift apart (a common cause of "discovered but not indexed").
 */
export function getIndexableRoutes(): IndexableRoute[] {
  const routes: IndexableRoute[] = [
    { path: '/', group: 'home', priority: 1, changeFrequency: 'daily' },
    { path: '/booking', group: 'hub', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services', group: 'hub', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/categories', group: 'hub', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/locations', group: 'hub', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/profiles', group: 'hub', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/about', group: 'hub', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', group: 'hub', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/faq', group: 'hub', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog', group: 'hub', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/privacy-policy', group: 'legal', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms-and-conditions', group: 'legal', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/disclaimer', group: 'legal', priority: 0.3, changeFrequency: 'yearly' },
  ];

  for (const category of categories) {
    routes.push({
      path: `/categories/${category.slug}`,
      group: 'category',
      priority: 0.9,
      changeFrequency: 'weekly',
    });
  }

  for (const service of services) {
    routes.push({
      path: `/services/${service.slug}`,
      group: 'service',
      priority: 0.85,
      changeFrequency: 'weekly',
    });
  }

  for (const location of locations) {
    routes.push({
      path: '/' + location.path,
      group: 'location',
      priority: 0.8,
      changeFrequency: 'weekly',
    });
  }

  for (const post of blogPosts) {
    routes.push({
      path: '/blog/' + post.slug,
      group: 'blog',
      priority: 0.75,
      changeFrequency: 'monthly',
    });
  }

  for (const page of landingPages) {
    if (page.type !== 'location') continue;
    routes.push({
      path: `/${page.slug}`,
      group: 'area',
      priority: 0.8,
      changeFrequency: 'weekly',
    });
  }

  for (const profile of profiles) {
    routes.push({
      path: `/${profile.seoSlug}`,
      group: 'profile',
      priority: 0.6,
      changeFrequency: 'weekly',
    });
  }

  const seen = new Set<string>();
  return routes.filter((route) => {
    if (seen.has(route.path)) return false;
    seen.add(route.path);
    return true;
  });
}
