import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/siteConfig';

const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bingbot',
  'YandexBot',
  'cohere-ai',
  'Meta-ExternalAgent',
];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url.replace(/\/+$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin', '/admin/', '/_next/image', '/private/'],
      },
      {
        // Explicitly welcome assistant and answer-engine crawlers so the
        // service stays quotable in AI search results.
        userAgent: AI_CRAWLERS,
        allow: ['/', '/llms.txt', '/sitemap.xml'],
        disallow: ['/api/', '/admin', '/admin/', '/_next/image', '/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
