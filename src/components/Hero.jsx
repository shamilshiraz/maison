'use client';

import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const fadeBlur = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(14px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      delay: 2,
      ease,
    },
  },
};

const fadeBlurSubtext = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      delay: 2.2,
      ease,
    },
  },
};

const fadeBlurDelayed = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      delay: 2.4,
      ease,
    },
  },
};

const buttonMotion = {
  whileHover: {
    y: -3,
    scale: 1.02,
  },
  whileTap: {
    scale: 0.96,
    y: 0,
  },
  transition: {
    duration: 0.3,
    ease,
  },
};

const FlipText = ({ children }) => {
  const text = String(children);

  return (
    <span className="flip-link-inner">
      {text.split('').map((char, index) => (
        <span
          key={`${char}-${index}`}
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

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black sm:h-screen">
      {/* Background Image */}
      <motion.img
        src="/oar.jpeg"
        alt="Maison Madras Bespoke Tailoring"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.8,
          ease,
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark-to-light overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end px-2 pb-12 md:px-12 md:pb-16 lg:px-16 lg:pb-20">
        <div className="max-w-4xl">
          {/* Heading */}
          <motion.h1
            variants={fadeBlur}
            initial="hidden"
            animate="visible"
            className="font-serif text-3xl leading-[0.95] text-white sm:text-6xl"
            style={{ fontFamily: 'season' }}
          >
            The Poetry of Design &
            <br />
            The Engineering of Craft
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeBlurSubtext}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-3xl text-sm leading-relaxed text-white/75 sm:mt-6 sm:text-base"
            style={{ fontFamily: 'neue' }}
          >
            Every garment begins with an idea and is refined through precision,
            proportion, and patience. We create considered pieces where
            architectural form meets the individuality of the wearer.
          </motion.p>

          {/* CTAs */}
          <motion.div
            style={{ fontFamily: 'neue' }}
            variants={fadeBlurDelayed}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#atelier"
              {...buttonMotion}
              className="hero-button group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase text-white backdrop-blur-sm transition-colors duration-500 hover:border-white hover:bg-white hover:text-black md:px-5"
            >
              <FlipText>Explore the Atelier</FlipText>
            </motion.a>

            <motion.a
              href="#fitting"
              {...buttonMotion}
              className="hero-button group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full border border-white/20 bg-black px-4 py-2 text-xs uppercase text-white/90 transition-colors duration-500 hover:border-white hover:bg-white hover:text-black md:px-5"
            >
              <FlipText>Book a Fitting</FlipText>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Letter-by-letter flip animation */}
      <style>{`
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

        .hero-button:hover .flip-letter-inner {
          transform: translateY(-100%);
        }

        .hero-button:hover .flip-letter-back {
          opacity: 1;
          transform: rotateX(0deg);
        }
      `}</style>
    </section>
  );
}