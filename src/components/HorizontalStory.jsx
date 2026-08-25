'use client';

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { useRef } from 'react';

export default function HorizontalStory() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // 250vw track → move 150vw
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', '-150vw']);

  const smoothX = useSpring(x, {
    stiffness: 70,
    damping: 22,
    mass: 0.7,
  });

  return (
    <section
      ref={sectionRef}
      style={{ fontFamily: 'neue' }}
      className="hidden lg:block border-b border-black/10 relative h-[250vh] bg-[#F3F1EC]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{
            x: smoothX,
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
          className="flex h-full w-[250vw]"
        >
          {/* ---------------- Frame 1 (100vw) ---------------- */}
          <div className="w-screen h-full flex bg-[#fff]">
            <div className="w-1/2 flex flex-col justify-between p-12">
              <div className="max-w-md">
                <h2
                  className="text-4xl leading-[1.08] text-black pt-20"
                  style={{ fontFamily: 'season' }}
                >
                  The tailor GQ India called one of India's best-dressed men is now by appointment in Dubai
                </h2>
              </div>

              <div className="max-w-sm">
                <p className="text-[15px] leading-relaxed text-black/75">
                  Osman Abdul Razak is a Chennai-based bespoke tailor, image consultant,
                  and founder of Maison Madras. Since 2006, he has built a reputation
                  for exceptional craftsmanship, dressing discerning clients with garments
                  that prioritize individuality over trends.
                </p>

                <a
                  href="#appointment"
                  className="mt-8 inline-flex border border-black/20 rounded-full px-5 py-2 text-xs uppercase hover:bg-black hover:text-white transition-all duration-300"
                >
                  Book now
                </a>
              </div>
            </div>

            <div className="w-1/2 h-full">
              <img
                src="/osm3.jpeg"
                alt="Maison Madras Dubai appointment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ---------------- Frame 2 (75vw) ---------------- */}
          <div className="w-[75vw] h-full flex bg-[#20280F] text-white">
            <div className="w-[48%] flex items-center p-12">
              <div className="max-w-md">
                <h2
                  className="text-4xl leading-[1.08]"
                  style={{ fontFamily: 'season' }}
                >
                  A quiet revolution in Modern Menswear
                </h2>

                <div className="mt-6 space-y-4 text-white/75 leading-relaxed text-[14px]">
                  <p>
                    Founded in 2006, Osman's journey began with ready-to-wear and evolved
                    into a deeper commitment to bespoke tailoring.
                  </p>

                  <p>
                    Influenced by European classicism yet rooted in Indian sophistication,
                    his work champions soft tailoring, natural fabrics, and quiet confidence.
                  </p>

                  <p>
                    From the atelier to the airport, every garment is designed to feel
                    effortless rather than attention-seeking.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[52%] h-full">
              <img
                src="/osmg.jpeg"
                alt="Maison Madras craftsmanship"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* ---------------- Frame 3 (75vw) ---------------- */}
          <div className="w-[75vw] h-full flex bg-[#fff]">
            {/* Same image continues visually */}

            {/* Quote */}
            <div className="w-[64%] flex items-center px-12 py-16">
              <div className="max-w-2xl">
                <blockquote
                  className="text-[2.35rem] leading-[1.14] text-black"
                  style={{ fontFamily: 'season' }}
                >
                  "A bespoke garment is never about standing out for the sake of attention.
                  It is about feeling completely at ease in your own skin. When craftsmanship,
                  proportion, and character come together, confidence no longer needs an
                  introduction."
                </blockquote>

                <div className="mt-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-black/45">
                    As featured in
                  </p>

<div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-5">
  <img
    src="/vogue.svg"
    alt="Vogue"
    className="h-5 w-auto object-contain opacity-40"
  />

  <img
    src="/gq.png"
    alt="GQ"
    className="h-5 w-auto object-contain opacity-40"
  />

  <img
    src="/elle.svg"
    alt="Elle"
    className="h-5 w-auto object-contain opacity-40"
  />

  <img
    src="/rr.png"
    alt="Robb Report"
    className="h-5 w-auto object-contain opacity-40"
  />

  <img
    src="/esq.png"
    alt="Esquire"
    className="h-5 w-auto object-contain opacity-40"
  />

  <img
    src="/mrp.jpg"
    alt="MR PORTER"
    className="h-5 w-auto object-contain opacity-40"
  />

  <img
    src="/hindu.png"
    alt="The Hindu"
    className="h-5 w-auto object-contain opacity-40"
  />

  <img
    src="/ad.png"
    alt="Architectural Digest"
    className="h-6 w-auto object-contain opacity-40"
  />
</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}