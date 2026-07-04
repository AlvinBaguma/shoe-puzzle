import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">
        Shoe Puzzle
      </h1>
      <p className="text-lg md:text-xl text-neutral-600 mb-12 max-w-md">
        [INSERT BRAND TAGLINE]
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/collection" className="px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm tracking-wider">
          Explore Collection
        </Link>
        <a href="https://www.instagram.com/shoe_puzzle?igsh=M2c3b2dzYmJtem4=" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm tracking-wider">
          Visit Instagram
        </a>
      </div>
    </section>
  );
}