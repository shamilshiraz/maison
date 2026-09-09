'use client';

import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        style={{ fontFamily: 'neue' }}
        className="fixed top-0 left-0 z-50 w-full border-b border-black/5 bg-white backdrop-blur-md"
      >
        <nav className="relative flex h-16 items-center justify-between px-5 sm:h-20 sm:px-6 md:px-12 lg:px-16">

          {/* LEFT - DESKTOP */}

          <div className="hidden items-center gap-6 text-[11px] uppercase text-black/80 sm:flex md:gap-10 md:text-xs">
            <Link
              to="/about"
              className="transition-colors hover:text-black"
            >
              About
            </Link>

            <Link
              to="/store"
              className="transition-colors hover:text-black"
            >
              Store
            </Link>
                       <Link
              to="/trunkshows"
              className="transition-colors hover:text-black"
            >
              Trunk Shows
            </Link>


          </div>


          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex items-center justify-center p-1 sm:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>


          {/* CENTER LOGO */}

          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="block">
              <img
                src="/oar.avif"
                alt="Maison Madras"
                className="h-5 w-auto object-contain sm:h-6"
              />
            </Link>
          </div>


          {/* RIGHT */}

          <div className="flex items-center gap-2 text-[10px] uppercase text-black/80 sm:gap-4 sm:text-[11px] md:gap-6 md:text-xs">

            <a
              href="https://wa.me/919715531333?text=Hi"
              className="hidden whitespace-nowrap rounded-full border border-black/20 px-4 py-2 transition-all duration-300 hover:border-black hover:bg-black hover:text-white sm:block md:px-5"
            >
              Book Appointment
            </a>

          </div>

        </nav>
      </header>


      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 z-[60] bg-[#182B1C] text-[#F4F0E6] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] sm:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* MOBILE MENU HEADER */}

        <div className="flex h-16 items-center justify-between px-5">

          <Link
            to="/"
            onClick={closeMenu}
            className="block"
          >
            <img
              src="/mm.svg"
              alt="Maison Madras"
              className="h-5 w-auto brightness-0 invert"
            />
          </Link>

          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="p-1"
          >
            <X
              className="h-6 w-6"
              strokeWidth={1.2}
            />
          </button>

        </div>


        {/* MOBILE LINKS */}

        <div className="flex h-[calc(100vh-64px)] flex-col justify-between px-5 pb-8 pt-16">

          <nav className="flex flex-col">

            <Link
              to="/about"
              onClick={closeMenu}
              className="border-b border-[#F4F0E6]/20 py-5 text-3xl"
            >
              About
            </Link>

            <a
              href="#trunk-shows"
              onClick={closeMenu}
              className="border-b border-[#F4F0E6]/20 py-5 text-3xl"
            >
              Trunk Shows
            </a>

            <a
              href="#atelier"
              onClick={closeMenu}
              className="border-b border-[#F4F0E6]/20 py-5 text-3xl"
            >
              Atelier
            </a>

            <a
              href="#appointment"
              onClick={closeMenu}
              className="border-b border-[#F4F0E6]/20 py-5 text-3xl"
            >
              Appointment
            </a>

          </nav>


          {/* MOBILE FOOTER */}

          <div className="flex items-end justify-between text-[9px] uppercase tracking-[0.2em] text-[#F4F0E6]/50">

            <span>
              Maison Madras
            </span>

            <span>
              Chennai · India
            </span>

          </div>

        </div>

      </div>
    </>
  );
}