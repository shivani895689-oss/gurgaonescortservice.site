interface FaqProps {
  q: string;
  a: string;
}

export function Faq({ q, a }: FaqProps) {
  return (
    <details className="group rounded-xl border border-gray-200 bg-white px-5 py-4 transition-colors open:border-gray-300">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-[#4a4d52]">
        <span>{q}</span>
        <span className="shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-gray-600 pr-6">{a}</p>
    </details>
  );
}
