import Image from 'next/image';

export default function HeroImage({
  src,
  title,
  subtitle
}: {
  src: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative min-h-[85vh] w-full overflow-hidden">
      <Image
        src={src}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
      <div className="absolute bottom-10 left-8 max-w-3xl text-white sm:left-12">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/70">The Turndown Review</p>
        <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 text-sm text-white/80 sm:text-base">{subtitle}</p>}
      </div>
    </div>
  );
}
