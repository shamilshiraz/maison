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
    status: 'Concluded',
  },
  {
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85',
    name: 'London Trunk Show',
    date: 'November 08, 2026',
    location: 'London, England',
    venue: 'The Beaumont',
    status: 'Upcoming',
  },
  {
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1800&q=85',
    name: 'Dubai Trunk Show',
    date: 'November 21, 2026',
    location: 'Dubai, UAE',
    venue: 'The Lana',
    status: 'Upcoming',
  },
  {
    image:
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1800&q=85',
    name: 'Mumbai Trunk Show',
    date: 'December 05, 2026',
    location: 'Mumbai, India',
    venue: 'The Taj Mahal Palace',
    status: 'Concluded',
  },
];

export default function TrunkShow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // The image actually painted on the base layer. It only updates once
  // an incoming wipe finishes, so the base never animates or exits —
  // it just sits there while the next image wipes across on top of it.
  const [displayedImage, setDisplayedImage] = useState(SHOWS[0].image);
  const [incoming, setIncoming] = useState(null); // { index, direction } while a wipe is in flight

  const show = SHOWS[current];

  const goTo = (nextIndex, dir) => {
    setDirection(dir);
    setCurrent(nextIndex);
    setIncoming({ index: nextIndex, direction: dir });
  };

  const next = () => {
    const nextIndex = current === SHOWS.length - 1 ? 0 : current + 1;
    goTo(nextIndex, 1);
  };

  const prev = () => {
    const prevIndex = current === 0 ? SHOWS.length - 1 : current - 1;
    goTo(prevIndex, -1);
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

            {/* BASE — the currently active image. It never animates and
                never exits, it just sits underneath until the incoming
                image finishes wiping over it, at which point it's swapped
                to match (invisibly, since the wipe already shows it). */}

            <img
              src={displayedImage}
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

            {/* INCOMING — the new image, masked in with a clip-path wipe
                that grows over the base image until it fully covers it. */}

            <AnimatePresence
              initial={false}
              onExitComplete={() => {}}
            >

              {incoming && (
                <motion.div
                  key={incoming.index}
                  className="absolute inset-0 z-10"
                  initial={{
                    clipPath:
                      incoming.direction > 0
                        ? 'inset(0 100% 0 0)'
                        : 'inset(0 0 0 100%)',
                  }}
                  animate={{
                    clipPath: 'inset(0 0% 0 0)',
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  onAnimationComplete={() => {
                    setDisplayedImage(SHOWS[incoming.index].image);
                    setIncoming(null);
                  }}
                >

                  <img
                    src={SHOWS[incoming.index].image}
                    alt={SHOWS[incoming.index].name}
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
              )}

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
                text-[14px]
                transform-uppercase
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

              <span className="mx-3 text-black/30">
                
              </span>

 <span>
  Status:{' '}
  <span
    className={
      show.status.toLowerCase() === 'concluded'
        ? 'text-red-600'
        : 'text-black'
    }
  >
    {show.status}
  </span>
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