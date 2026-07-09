"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Collection", href: "/collection" },
    { name: "About", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="w-full border-b border-neutral-200 bg-white relative z-40">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-light tracking-widest uppercase">
          Shoe Puzzle
        </Link>
        
        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <span 
            className={`h-0.5 w-6 bg-black transition-all duration-300 transform origin-center ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span 
            className={`h-0.5 w-6 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span 
            className={`h-0.5 w-6 bg-black transition-all duration-300 transform origin-center ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Sliding / Cascading Menu */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out border-neutral-100 ${
          isOpen ? "max-h-80 border-t" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col items-center py-8 gap-6 bg-neutral-50">
          {navItems.map((item, idx) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm tracking-widest uppercase text-neutral-600 hover:text-black transition-colors transform duration-500 ${
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
              style={{
                transitionProperty: "transform, opacity, color",
                transitionDelay: isOpen ? `${idx * 75}ms` : "0ms"
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}