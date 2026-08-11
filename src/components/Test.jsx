'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    image: '/cli.jpeg',
    quote:
      'Working with Osman was unlike any tailoring experience I’ve had before. He took the time to understand not just how I wanted to look, but who I was. The result was a suit that felt effortless to wear and impossible to replace.',
    name: 'Rajesh Menon',
    role: 'CEO of ABC company',
  },
  {
    image: '/clie.jpeg',
    quote:
      'From the first consultation to the final fitting, every detail was handled with remarkable precision. The garment felt deeply personal, refined, and built to last beyond trends.',
    name: 'Arjun Varma',
    role: 'Founder of Varma & Co.',
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const active = testimonials[index];

  return (
    <section className="bg-[#20280F] text-white" style={{ fontFamily: 'neue' }}>
      <div className="mx-auto max-w-[1600px] px-20 py-20">
        <h2
          className="text-3xl text-[#E8E1D2] lg:text-4xl"
          style={{ fontFamily: 'season' }}
        >
          Words from our clients
        </h2>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left image */}
          <div className="relative h-[520px] w-full max-w-[420px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.name}
                initial={{ opacity: 0, scale: 1.03, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.985, filter: 'blur(6px)' }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Right quote */}
          <div className="flex min-h-[520px] items-center justify-center lg:justify-start">
            <div className="max-w-[520px] text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.quote}
                  initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <blockquote
                    className="text-[1.25rem] leading-[1.75] text-[#E8E1D2] lg:text-[1.55rem]"
                    style={{ fontFamily: 'season' }}
                  >
                    “{active.quote}”
                  </blockquote>

                  <div className="mt-14">
                    <div className="h-px w-14 bg-white/20 mx-auto lg:mx-0" />

                    <p className="mt-6 text-sm font-medium text-[#E8E1D2]">
                      {active.name}
                    </p>

                    <p className="mt-1 text-sm text-white/55">
                      {active.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}