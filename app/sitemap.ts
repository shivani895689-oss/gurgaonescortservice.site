import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo';
import { CONTENT_UPDATED, getIndexableRoutes } from '@/lib/siteRoutes';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getIndexableRoutes().map((route) => ({
    url: route.path === '/' ? BASE_URL : `${BASE_URL}${route.path}`,
    lastModified: route.group === 'home' ? now : CONTENT_UPDATED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
