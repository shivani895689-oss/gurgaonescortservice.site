interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, description, align = 'center', light = false }: SectionHeadingProps) {
  const center = align === 'center';
  return (
    <div className={`mb-10 md:mb-14 ${center ? 'text-center' : 'text-left'}`}>
      {eyebrow ? (
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-serif text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-[#4a4d52]'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-base md:text-lg leading-relaxed ${center ? 'max-w-3xl mx-auto' : 'max-w-3xl'} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
