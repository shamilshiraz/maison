'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';

const IMAGE = './osm4.jpeg';
const OSMAN_IMAGE = './osm3.jpeg';

export default function MaisonMadras() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageWidth = useTransform(
    scrollYProgress,
    [0.05, 0.45],
    ['72vw', '100vw']
  );

  const imageHeight = useTransform(
    scrollYProgress,
    [0.05, 0.45],
    ['48vh', '72vh']
  );

  return (
    <main
      className="overflow-hidden"
      style={{ fontFamily: 'neue' }}
    >

      {/* =====================================================
          SECTION 01
      ===================================================== */}

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#fff]"
      >
        <div className="flex flex-col items-center">

          <motion.h1
            className="mt-72 text-center text-5xl leading-[0.95] sm:text-7xl"
            style={{ fontFamily: 'season' }}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-10%',
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            A CURATED
            <br />
            WORLDLY AFFAIR
          </motion.h1>

          <motion.div
            className="relative mt-14 overflow-hidden md:mt-20"
            style={{
              width: reduceMotion
                ? '100vw'
                : imageWidth,
              height: reduceMotion
                ? '65vh'
                : imageHeight,
            }}
          >
            <motion.img
              src={IMAGE}
              alt="Maison Madras atelier"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{
                clipPath: reduceMotion
                  ? 'inset(0% 0% 0% 0%)'
                  : 'inset(100% 0% 0% 0%)',
                scale: reduceMotion ? 1 : 1.15,
              }}
              animate={{
                clipPath:
                  'inset(0% 0% 0% 0%)',
                scale: 1,
              }}
              transition={{
                clipPath: {
                  duration: reduceMotion ? 0 : 1.2,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.2,
                },
                scale: {
                  duration: reduceMotion ? 0 : 1.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                },
              }}
            />
          </motion.div>

          <motion.div
            className="w-full max-w-xl py-12 text-center md:py-16"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-10%',
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.3,
            }}
          >
            <p className="text-[12px] leading-normal text-black/60 sm:text-[14px]">
              Maison Madras is not just a trunk show.
              It is an experience — intimate,
              intentional, and quietly extraordinary.
            </p>

            <p className="mt-5 text-[12px] leading-normal text-black/60 sm:text-[14px]">
              Curated personally by Osman Abdul Razak,
              Maison Madras journeys across the globe
              with a singular aim: to offer a handpicked
              selection of garments and accessories
              that reflect the finest traditions of
              menswear, in collaboration with artisans
              and ateliers who share our values of craft
              and integrity.
            </p>

            <p className="mt-5 text-[12px] leading-normal text-black/60 sm:text-[14px]">
              From Neapolitan tailoring to classic
              Indian artistry, each piece is chosen
              for its character, provenance, and
              permanence. This is where cultures
              converse, textiles tell stories, and
              the art of dressing becomes something
              far more personal.
            </p>

            <p className="mt-5 text-[12px] leading-normal text-black/60 sm:text-[14px]">
              For the discerning few, Maison Madras
              is a chance to explore style beyond
              borders — in salons, suites, and quiet
              corners of the world.
            </p>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          SECTION 02 — SAVILE ROW TRAINED
      ===================================================== */}
<section className="overflow-hidden bg-[#182B1C] text-[#F4F0E6]">
  <div className="flex flex-col">

    <div className="grid gap-10 px-5 pt-20 md:grid-cols-12 md:gap-12 md:px-10 md:pt-28 lg:px-16">

      <motion.div
        className="md:col-span-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ fontFamily: 'season' }}
        >
          Savile Row
          <br />
          Trained
        </h2>
      </motion.div>

      <motion.div
        className="md:col-span-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className="max-w-md text-[12px] leading-normal text-[#F4F0E6]/70 sm:text-[14px]">

          <p>
            Osman Abdul Razak is a Chennai-based
            bespoke tailor, image consultant, and
            founder of Maison Madras. His sartorial
            journey has been shaped by a deep
            appreciation for traditional tailoring,
            refined proportions, and the quiet
            confidence of well-made clothing.
          </p>

          <p className="mt-6">
            Trained in the traditions of Savile Row
            and influenced by European classicism
            and Indian sophistication, Osman
            approaches menswear with a belief that
            clothing should feel personal rather
            than prescribed.
          </p>

          <p className="mt-6">
            Since 2006, his work has centred on
            individuality, craftsmanship, and garments
            that are made to live with their wearer —
            qualities that continue to shape the
            world of Maison Madras.
          </p>

        </div>
      </motion.div>

    </div>

    {/* EDITORIAL IMAGE */}

    <div className="px-5 pb-20 pt-20 md:px-10 md:pb-32 md:pt-32 lg:px-16">

      <div className="grid grid-cols-12 items-end gap-6 md:gap-10">

        {/* Small vertical label */}

        <motion.div
          className="col-span-2 hidden md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span
            className="text-[10px] uppercase tracking-[0.25em] text-[#F4F0E6]/40"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            Maison Madras · Since 2006
          </span>
        </motion.div>

        {/* Image */}

        <motion.div
          className="col-span-12 md:col-span-7 md:col-start-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="relative aspect-[4/5] overflow-hidden">

            <img
              src="./osm4.jpeg"
              alt="Osman Abdul Razak"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Reveal curtain */}

            <motion.div
              className="absolute inset-0 bg-[#182B1C]"
              initial={{ y: '0%' }}
              whileInView={{ y: '100%' }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
              }}
            />

          </div>
        </motion.div>

        {/* Side text */}

        <motion.div
          className="col-span-12 md:col-span-3 md:col-start-10 md:pb-3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <p
            className="max-w-[220px] text-[11px] leading-relaxed text-[#F4F0E6]/45 sm:text-[12px]"
          >
            A tradition of British tailoring,
            interpreted through an Indian eye.
          </p>

          <div className="mt-8 h-px w-10 bg-[#F4F0E6]/30" />

          <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-[#F4F0E6]/35">
            Osman Abdul Razak
          </p>
        </motion.div>

      </div>

    </div>

  </div>
</section>


<section className="bg-[#fff] text-[#000] overflow-hidden">
  <div className="px-5 py-20 md:px-10 md:py-28 lg:px-16">

    {/* HEADER */}

    <motion.div
      className="mb-16 grid gap-8 md:grid-cols-12 md:mb-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div className="md:col-span-7">
        <h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ fontFamily: 'season' }}
        >
          Brands We
          <br />
          Feature
        </h2>
      </div>

      <div className="md:col-span-5 md:flex md:items-end">
        <p className="max-w-md text-[12px] leading-relaxed text-[#182B1C]/60 sm:text-[14px]">
          A considered selection of houses and ateliers
          whose approach to craftsmanship, fabric, and
          timeless menswear reflects the Maison Madras
          philosophy.
        </p>
      </div>
    </motion.div>


    {/* LOGO GRID */}

    <div className="grid grid-cols-2 border-l border-t border-[#182B1C]/20 sm:grid-cols-3 md:grid-cols-5">

      {[
        {
          name: 'Loro Piana',
          logo: 'LORO PIANA',
        },
        {
          name: 'Brunello Cucinelli',
          logo: 'BRUNELLO CUCINELLI',
        },
        {
          name: 'Kiton',
          logo: 'KITON',
        },
        {
          name: 'Cesare Attolini',
          logo: 'CESARE ATTOLINI',
        },
        {
          name: 'Zegna',
          logo: 'ZEGNA',
        },
        {
          name: 'Drake’s',
          logo: 'DRAKE’S',
        },
        {
          name: 'Cifonelli',
          logo: 'CIFONELLI',
        },
        {
          name: 'Edward Sexton',
          logo: 'EDWARD SEXTON',
        },
        {
          name: 'Anderson & Sheppard',
          logo: 'ANDERSON & SHEPPARD',
        },
        {
          name: 'Rubinacci',
          logo: 'RUBINACCI',
        },
      ].map((brand, index) => (
        <motion.div
          key={brand.name}
          className="
            group
            relative
            flex
            min-h-[150px]
            items-center
            justify-center
            border-b
            border-r
            border-[#182B1C]/20
            px-6
            py-10
            transition-colors
            duration-500
            hover:bg-[#182B1C]
            sm:min-h-[170px]
            md:min-h-[190px]
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.05,
            ease: [0.76, 0, 0.24, 1],
          }}
        >

          <div className="text-center">

            <div
              className="
                text-[15px]
                tracking-[0.12em]
                text-[#182B1C]
                transition-colors
                duration-500
                group-hover:text-[#F4F0E6]
                sm:text-[17px]
              "
              style={{
                fontFamily: 'Georgia, serif',
              }}
            >
              {brand.logo}
            </div>

            <div
              className="
                mt-3
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-[#182B1C]/35
                transition-colors
                duration-500
                group-hover:text-[#F4F0E6]/40
              "
            >
              Atelier
            </div>

          </div>

          {/* INDEX */}

          <span
            className="
              absolute
              left-4
              top-4
              text-[8px]
              tracking-[0.15em]
              text-[#182B1C]/30
              transition-colors
              duration-500
              group-hover:text-[#F4F0E6]/30
            "
          >
            {String(index + 1).padStart(2, '0')}
          </span>

        </motion.div>
      ))}

    </div>


    {/* FOOTER LINE */}

    <motion.div
      className="mt-8 flex items-center justify-between border-t border-[#182B1C]/20 pt-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <span className="text-[9px] uppercase tracking-[0.25em] text-[#182B1C]/40">
        Selected Houses
      </span>

      <span className="text-[9px] uppercase tracking-[0.25em] text-[#182B1C]/40">
        Maison Madras
      </span>
    </motion.div>

  </div>
</section>
    </main>
  );
}