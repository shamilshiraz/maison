'use client';

import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header style={{fontFamily:'neue'}} className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md border-b border-black/5">
      <nav className="relative h-20 flex items-center justify-between px-6 md:px-12 lg:px-16">
        
        {/* Left Links */}
        <div className="flex items-center gap-6 md:gap-10 text-[11px] md:text-xs  uppercase text-black/80">
          <Link to="/about" className="hover:text-black transition-colors">
            About
          </Link>
          <a href="#trunk-shows" className="hover:text-black transition-colors hidden sm:block">
            Trunk Shows
          </a>
          <a href="#atelier" className="hover:text-black transition-colors hidden md:block">
            Atelier
          </a>
        </div>

        {/* Center Logo Image */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="/" className="block">
            <img
              src="/mm.svg"
              alt="Maison Madras"
              className="h-6 md:h-6 w-auto object-contain"
            />
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 md:gap-6 text-[11px] md:text-xs uppercase text-black/80">
          <button
            aria-label="Search"
            className="p-2 hover:text-black transition-colors"
          >
            <Search className="h-4 w-4" />
          </button>

          <a
            href="#appointment"
            className="border border-black/20 rounded-full px-4 md:px-5 py-2 hover:border-black hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            Book Appointment
          </a>
        </div>
      </nav>
    </header>
  );
}