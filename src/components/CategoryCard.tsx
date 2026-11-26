import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Category } from '@/data/categories';

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-900/5 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#4a4d52]/50 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-serif text-xl font-semibold text-white">{category.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{category.shortDescription}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2f3338] group-hover:gap-2.5 transition-all">
          View Category <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
