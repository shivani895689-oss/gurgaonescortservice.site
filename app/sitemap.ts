import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo';
import { CONTENT_UPDATED, getIndexableRoutes } from '@/lib/siteRoutes';
import { blogPosts } from '@/data/blog';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const postDates = new Map(blogPosts.map((post) => ['/blog/' + post.slug, post.updatedAt || post.publishedAt]));

  return getIndexableRoutes().map((route) => ({
    url: route.path === '/' ? BASE_URL : `${BASE_URL}${route.path}`,
    // Guides carry their real edit date; everything else follows the site-wide
    // content stamp, so lastmod never claims a page changed when it did not.
    lastModified: route.group === 'home' ? now : postDates.get(route.path) || CONTENT_UPDATED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
