import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-6 py-8 flex justify-between items-center border-b border-neutral-200">
      <Link href="/" className="text-2xl font-light tracking-wider">
        Shoe Puzzle
      </Link>
      <nav className="flex gap-8">
        <Link href="/collection" className="text-sm hover:opacity-60 transition-opacity">
          Collection
        </Link>
        <Link href="/about" className="text-sm hover:opacity-60 transition-opacity">
          About
        </Link>
        <Link href="/leadership" className="text-sm hover:opacity-60 transition-opacity">
          Leadership
        </Link>
        <Link href="/contact" className="text-sm hover:opacity-60 transition-opacity">
          Contact
        </Link>
      </nav>
    </header>
  );
}