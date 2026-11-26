import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import type { BlogPost } from '@/data/blog';
import { blogPath } from '@/data/blog';

export default function BlogCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <Link
      href={blogPath(post)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2f3338]/20 hover:shadow-xl hover:shadow-gray-900/5"
    >
      <div className="relative aspect-16/10 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#2f3338]">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-bold leading-snug text-[#2f3338] transition-colors group-hover:text-[#8a7f6d]">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {post.updatedAt}</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2f3338]">
          Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
