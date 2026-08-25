'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SHOWS = [
  {
    image:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1800&q=85',
    name: 'Tokyo Trunk Show',
    date: 'October 25, 2026',
    location: 'Tokyo, Japan',
    venue: 'Tokyodrome',
  },
  {
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85',
    name: 'London Trunk Show',
    date: 'November 08, 2026',
    location: 'London, England',
    venue: 'The Beaumont',
  },
  {
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1800&q=85',
    name: 'Dubai Trunk Show',
    date: 'November 21, 2026',
    location: 'Dubai, UAE',
    venue: 'The Lana',
  },
  {
    image:
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1800&q=85',
    name: 'Mumbai Trunk Show',
    date: 'December 05, 2026',
    location: 'Mumbai, India',
    venue: 'The Taj Mahal Palace',
  },
];

export default function TrunkShow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const show = SHOWS[current];

  const next = () => {
    setDirection(1);

    setCurrent((prev) =>
      prev === SHOWS.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setDirection(-1);

    setCurrent((prev) =>
      prev === 0 ? SHOWS.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-white text-black"
      style={{ fontFamily: 'neue' }}
    >

      <div className="relative flex min-h-screen w-full items-center justify-center">

        {/* PREVIOUS */}

        <button
          onClick={prev}
          aria-label="Previous trunk show"
          className="
            absolute
            left-4
            top-1/2
            z-30
            -translate-y-1/2
            text-[16px]
            uppercase
            tracking-[0.04em]
            text-black
            transition-opacity
            hover:opacity-40
            sm:left-8
            md:left-12
            lg:left-16
          "
        >
          PREV
        </button>


        {/* CENTER IMAGE */}

        <div
          className="
            relative
            w-[62vw]
            max-w-[900px]
            sm:w-[58vw]
            md:w-[54vw]
            lg:w-[50vw]
          "
        >

          <div
            className="
              relative
              aspect-[16/8.7]
              w-full
              overflow-hidden
              bg-neutral-100
            "
          >

            <AnimatePresence
              mode="sync"
              initial={false}
              custom={direction}
            >

              <motion.div
                key={current}
                custom={direction}
                className="absolute inset-0"
                initial={{
                  clipPath:
                    direction > 0
                      ? 'inset(0 100% 0 0)'
                      : 'inset(0 0 0 100%)',
                }}
                animate={{
                  clipPath: 'inset(0 0% 0 0)',
                }}
                exit={{
                  clipPath:
                    direction > 0
                      ? 'inset(0 0 0 100%)'
                      : 'inset(0 100% 0 0)',
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >

                <img
                  src={show.image}
                  alt={show.name}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                  draggable="false"
                />

              </motion.div>

            </AnimatePresence>


            {/* REVEAL CURTAIN */}

            <AnimatePresence
              mode="sync"
              initial={false}
            >

              <motion.div
                key={`curtain-${current}`}
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-10
                  bg-[#182B1C]
                "
                initial={{
                  scaleX: 1,
                  transformOrigin:
                    direction > 0
                      ? 'left'
                      : 'right',
                }}
                animate={{
                  scaleX: 0,
                }}
                exit={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />

            </AnimatePresence>

          </div>


          {/* EVENT INFO */}

          <AnimatePresence
            mode="wait"
            initial={false}
          >

            <motion.div
              key={current}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.45,
                delay: 0.25,
                ease: 'easeOut',
              }}
              className="
                mt-5
                text-center
                text-[16px]
                leading-normal
                text-black/80
              "
            >

              <span>
                {show.name}
              </span>

              <span className="mx-3 text-black/30">
                |
              </span>

              <span>
                {show.date}
              </span>

              <span className="mx-3 text-black/30">
                |
              </span>

              <span>
                Location: {show.location}
              </span>

              <span className="mx-3 text-black/30">
                |
              </span>

              <span>
                Venue: {show.venue}
              </span>

            </motion.div>

          </AnimatePresence>

        </div>


        {/* NEXT */}

        <button
          onClick={next}
          aria-label="Next trunk show"
          className="
            absolute
            right-4
            top-1/2
            z-30
            -translate-y-1/2
            text-[16px]
            uppercase
            tracking-[0.04em]
            text-black
            transition-opacity
            hover:opacity-40
            sm:right-8
            md:right-12
            lg:right-16
          "
        >
          NEXT
        </button>

      </div>


      <style>{`

        button {
          cursor: pointer;
        }

        @media (max-width: 768px) {

          .trunk-info {
            font-size: 13px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

        }

      `}</style>

    </section>
  );
}