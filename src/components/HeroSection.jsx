import Link from "next/link";
import Image from "next/image";
import logoImg from "../app/images/logo/SHOEPUZZLE1.png";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <div className="mb-6 flex justify-center">
        <Image
          src={logoImg}
          alt="Shoe Puzzle Logo"
          className="w-60 h-auto"
          priority
        />
      </div>
      <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">
        Shoe Puzzle
      </h1>
      <p className="text-sm md:text-base text-neutral-600 mb-12 max-w-md">
        PRETTY FEET, BEAUTIFUL TOES
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