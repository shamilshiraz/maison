'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const items = [
  {
    name: 'Virat Kohli',
    desc: 'Featured in Vogue',
    image: '/kohli.jpeg',
  },
  {
    name: 'Shahid Kapoor',
    desc: 'Owning the style',
    image: '/sk.jpeg',
  },
  {
    name: 'Abhishek Bachchan',
    desc: 'Classic evening tailoring',
    image: '/ab.jpeg',
  },
  {
    name: 'Ranveer Singh',
    desc: 'Bold bespoke expression',
    image: '/rk.jpeg',
  },
  {
    name: 'Ram Charan',
    desc: 'Effortless modern tailoring',
    image: '/rc2.jpeg',
  },
  {
    name: 'Abhishek Bachchan',
    desc: 'Contemporary elegance',
    image: '/ab2.jpeg',
  },
];

const CARD_WIDTH = 300;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;
const STEP_INTERVAL = 3000;

export default function FeaturedCarousel() {
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);
  const [jump, setJump] = useState(false);
  const timerRef = useRef(null);

  // three copies so we can step forward indefinitely and reset seamlessly
  const loopItems = [...items, ...items, ...items];

  useEffect(() => {
    if (paused) return undefined;

    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, STEP_INTERVAL);

    return () => clearInterval(timerRef.current);
  }, [paused]);

  // once we've stepped through the second copy, snap back to the equivalent
  // position in the first copy with no transition so the loop feels infinite
  useEffect(() => {
    if (index >= items.length * 2) {
      const timeout = setTimeout(() => {
        setJump(true);
        setIndex((prev) => prev - items.length);
        requestAnimationFrame(() => setJump(false));
      }, 800); // wait for the eased move to finish first

      return () => clearTimeout(timeout);
    }

    return undefined;
  }, [index]);

  return (
    <section
      className="overflow-hidden bg-white pt-[20vh] sm:pt-[30vh] pb-24"
      style={{ fontFamily: 'neue' }}
    >
      <h2 style={{ fontFamily: 'season' }} className="text-center text-2xl pb-20 sm:pb-40  text-black/85">
        As styled for:
      </h2>
      <div className="mx-auto max-w-[1720px] pl-2 lg:pl-2">
        <motion.div
          className="flex w-max items-start gap-2 pr-4"
          animate={{ x: -index * STEP }}
          transition={
            jump
              ? { duration: 0 }
              : { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }
          onHoverStart={() => setPaused(true)}
          onHoverEnd={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          style={{
            willChange: 'transform',
          }}
        >
          {loopItems.map((item, i) => (
            <article
              key={`${item.name}-${i}`}
              className="group w-[320px] shrink-0"
            >
              <div className="h-[420px] w-full overflow-hidden bg-[#f3f1ec]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                />
              </div>

              <div className="pt-3">
                <p className="text-[10px] uppercase text-black/85">
                  {item.name}
                </p>

                <p className="mt-1 max-w-[90%] text-[13px] leading-relaxed text-black/55">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}