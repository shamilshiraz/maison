'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlipLink = ({ to, children, className = '' }) => {
  const text = String(children);

  return (
    <Link to={to} className={`flip-link ${className}`}>
      <span className="flip-link-inner">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="flip-letter"
            style={{ '--i': index }}
          >
            <span className="flip-letter-inner">
              <span className="flip-letter-front">
                {char === ' ' ? '\u00A0' : char}
              </span>
              <span className="flip-letter-back">
                {char === ' ' ? '\u00A0' : char}
              </span>
            </span>
          </span>
        ))}
      </span>
    </Link>
  );
};

const FlipText = ({ children }) => {
  const text = String(children);

  return (
    <span className="flip-link-inner">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="flip-letter"
          style={{ '--i': index }}
        >
          <span className="flip-letter-inner">
            <span className="flip-letter-front">
              {char === ' ' ? '\u00A0' : char}
            </span>
            <span className="flip-letter-back">
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        </span>
      ))}
    </span>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        style={{ fontFamily: 'neue' }}
        className="fixed top-0 left-0 z-50 w-full border-b border-black/5 bg-white text-black backdrop-blur-md"
      >
        <nav className="relative grid h-16 grid-cols-2 items-center px-5 sm:h-20 sm:grid-cols-3 sm:px-6 md:px-12 lg:px-16">

          {/* LEFT — LOGO */}

          <div className="flex items-center justify-start">
            <Link to="/" className="block">
              <img
                src="/oar.avif"
                alt="Osman Abdul Razak"
                className="h-8 w-auto object-contain sm:h-8"
              />
            </Link>
          </div>


          {/* CENTER — DESKTOP MENU */}

          <div className="hidden items-center justify-center gap-6 text-[11px] uppercase text-black/80 sm:flex md:gap-10 md:text-xs">
            <FlipLink to="/about">Story</FlipLink>
            <FlipLink to="/store">The Atelier</FlipLink>
            <FlipLink to="/trunkshows">Maison Madras</FlipLink>
            <FlipLink to="/trunkshows">Ready to wear</FlipLink>
          </div>


          {/* RIGHT — DESKTOP APPOINTMENT / MOBILE MENU */}

          <div className="flex items-center justify-end">

            {/* DESKTOP ONLY — APPOINTMENT BUTTON */}

            <a
              href="https://wa.me/919715531333?text=Hi"
              className="appointment-button hidden whitespace-nowrap rounded-full bg-black px-4 py-2 text-[10px] uppercase text-white transition-all duration-300 hover:bg-black/80 sm:block md:px-5 md:text-[11px]"
            >
              <FlipText>Book Appointment</FlipText>
            </a>

            {/* MOBILE ONLY — HAMBURGER */}

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-8 w-8 flex-col items-end justify-center gap-[5px] sm:hidden"
            >
              <span className="block h-[1px] w-5 bg-black" />
              <span className="block h-[1px] w-3.5 bg-black" />
            </button>

          </div>

        </nav>
      </header>


      {/* MOBILE MENU — SLIDES DOWN FROM TOP */}

      <div
        className={`fixed inset-0 z-[60] bg-white text-black transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] sm:hidden ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
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
              src="/oar.avif"
              alt="Osman Abdul Razak"
              className="h-8 w-auto brightness-0"
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


        {/* MOBILE SITEMAP */}

        <div className="flex h-[calc(100vh-64px)] flex-col justify-between px-5 pb-8 pt-16">

          <nav className="flex flex-col">

            <Link
              to="/about"
              onClick={closeMenu}
              style={{ fontFamily: 'season' }}
              className="border-b border-black/10 py-5 text-4xl"
            >
              Story
            </Link>

            <Link
              to="/store"
              onClick={closeMenu}
              style={{ fontFamily: 'season' }}
              className="border-b border-black/10 py-5 text-4xl"
            >
              The Atelier
            </Link>

            <Link
              to="/trunkshows"
              onClick={closeMenu}
              style={{ fontFamily: 'season' }}
              className="border-b border-black/10 py-5 text-4xl"
            >
              Maison Madras
            </Link>

            <Link
              to="/trunkshows"
              onClick={closeMenu}
              style={{ fontFamily: 'season' }}
              className="border-b border-black/10 py-5 text-4xl"
            >
              Ready to wear
            </Link>

          </nav>


          {/* MOBILE FOOTER */}

          <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-black/50">

            <span>
              Osman Abdul Razak
            </span>

            <div className="flex items-center gap-5">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/919715531333?text=Hi"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>

              <a href="mailto:hello@example.com">
                Mail
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* LETTER-BY-LETTER FLIP STYLES */}

      <style>{`
        .flip-link {
          display: inline-block;
          color: inherit;
          text-decoration: none;
        }

        .flip-link-inner {
          display: inline-flex;
          align-items: center;
          perspective: 600px;
        }

        .flip-letter {
          display: inline-block;
          position: relative;
          height: 1em;
          overflow: hidden;
          line-height: 1;
        }

        .flip-letter-inner {
          display: flex;
          flex-direction: column;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
          transition-delay: calc(var(--i) * 0.025s);
        }

        .flip-letter-front,
        .flip-letter-back {
          display: block;
          height: 1em;
          line-height: 1;
          backface-visibility: hidden;
        }

        .flip-letter-back {
          position: absolute;
          top: 100%;
          left: 0;
          transform-origin: top center;
          transform: rotateX(-90deg);
          opacity: 0;
          transition:
            transform 0.6s cubic-bezier(0.76, 0, 0.24, 1),
            opacity 0.6s cubic-bezier(0.76, 0, 0.24, 1);
          transition-delay: calc(var(--i) * 0.025s);
        }

        .flip-link:hover .flip-letter-inner {
          transform: translateY(-100%);
        }

        .flip-link:hover .flip-letter-back {
          opacity: 1;
          transform: rotateX(0deg);
        }

        /* Appointment button */

        .appointment-button .flip-link-inner {
          display: inline-flex;
        }

        .appointment-button .flip-letter {
          height: 1em;
        }

        .appointment-button .flip-letter-inner {
          transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
          transition-delay: calc(var(--i) * 0.025s);
        }

        .appointment-button:hover .flip-letter-inner {
          transform: translateY(-100%);
        }

        .appointment-button .flip-letter-back {
          opacity: 0;
          transition:
            transform 0.6s cubic-bezier(0.76, 0, 0.24, 1),
            opacity 0.6s cubic-bezier(0.76, 0, 0.24, 1);
          transition-delay: calc(var(--i) * 0.025s);
        }

        .appointment-button:hover .flip-letter-back {
          opacity: 1;
          transform: rotateX(0deg);
        }
      `}</style>
    </>
  );
}