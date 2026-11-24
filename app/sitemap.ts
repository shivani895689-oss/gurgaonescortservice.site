import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/siteConfig';
import { categories } from '@/data/categories';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { landingPages } from '@/data/landingPages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/+$/, '');
  const now = new Date();

  const staticRoutes = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily' as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/booking`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/categories`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
  ];

  const categoryRoutes = categories.map((c) => ({
    url: `${baseUrl}/categories/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${baseUrl}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const landingRoutes = landingPages.map((p) => ({
    url: `${baseUrl}/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p.type === 'location' ? 0.7 : 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...serviceRoutes, ...locationRoutes, ...landingRoutes];
}
