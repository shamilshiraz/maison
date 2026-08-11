'use client';

import { motion } from 'framer-motion';

const fadeBlur = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeBlurDelayed = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      delay: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="/oar.jpeg"
        alt="Maison Madras Bespoke Tailoring"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end px-6 pb-12 md:px-12 md:pb-16 lg:px-16 lg:pb-20">
        <div className="max-w-4xl">
          <motion.h1
            variants={fadeBlur}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl leading-[0.95] text-white sm:text-7xl"
            style={{ fontFamily: 'season' }}
          >
            The Poetry of Design &
            <br />
            The Engineering of Craft
          </motion.h1>

          {/* CTAs */}
<motion.div
style={{fontFamily:'neue'}}
  variants={fadeBlurDelayed}
  initial="hidden"
  animate="visible"
  className="mt-8 flex flex-wrap items-center gap-4"
>
  <a
    href="#atelier"
    className="border border-white/30 rounded-full px-4 md:px-5 py-2 text-xs uppercase text-white bg-white/10 backdrop-blur-sm hover:border-white hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
  >
    Explore the Atelier
  </a>

  <a
    href="#fitting"
    className="border border-white/20 bg-black rounded-full px-4 md:px-5 py-2 text-xs uppercase text-white/90 hover:border-white hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
  >
    Book a Fitting
  </a>
</motion.div>
        </div>
      </div>
    </section>
  );
}