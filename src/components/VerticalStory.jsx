'use client';

import { motion } from 'framer-motion';

const fadeUp = {
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
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function VerticalStory() {
  return (
    <section
      style={{ fontFamily: 'neue' }}
      className="block border-b border-black/10 bg-[#F3F1EC] lg:hidden"
    >
      {/* ---------------- Frame 1 ---------------- */}
      <article className="flex min-h-screen flex-col bg-white">
        <div className="flex flex-1 flex-col justify-between p-5 pb-10 sm:p-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="pt-16"
          >
            <h2
              className="max-w-md text-4xl leading-[1.08] text-black"
              style={{ fontFamily: 'season' }}
            >
              The tailor GQ India called one of India's best-dressed men is now
              by appointment in Dubai
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15 }}
            className="mt-12 max-w-md"
          >
            <p className="text-[15px] leading-relaxed text-black/75">
              Osman Abdul Razak is a Chennai-based bespoke tailor, image
              consultant, and founder of Maison Madras. Since 2006, he has
              built a reputation for exceptional craftsmanship, dressing
              discerning clients with garments that prioritize individuality
              over trends.
            </p>

            <a
              href="#appointment"
              className="mt-8 inline-flex rounded-full border border-black/20 px-5 py-2 text-xs uppercase transition-all duration-300 hover:bg-black hover:text-white active:scale-95"
            >
              Book now
            </a>
          </motion.div>
        </div>

        <div className="h-[65vh] min-h-[420px] w-full">
          <img
            src="/osm3.jpeg"
            alt="Maison Madras Dubai appointment"
            className="h-full w-full object-cover"
          />
        </div>
      </article>

      {/* ---------------- Frame 2 ---------------- */}
      <article className="flex flex-col bg-[#20280F] text-white">
        <div className="flex flex-col justify-center p-5 py-20 sm:p-8 sm:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-md"
          >
            <h2
              className="text-4xl leading-[1.08]"
              style={{ fontFamily: 'season' }}
            >
              A quiet revolution in Modern Menswear
            </h2>

            <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-white/75">
              <p>
                Founded in 2006, Osman's journey began with ready-to-wear and
                evolved into a deeper commitment to bespoke tailoring.
              </p>

              <p>
                Influenced by European classicism yet rooted in Indian
                sophistication, his work champions soft tailoring, natural
                fabrics, and quiet confidence.
              </p>

              <p>
                From the atelier to the airport, every garment is designed to
                feel effortless rather than attention-seeking.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="h-[65vh] min-h-[420px] w-full">
          <img
            src="/osmg.jpeg"
            alt="Maison Madras craftsmanship"
            className="h-full w-full object-cover grayscale"
          />
        </div>
      </article>

      {/* ---------------- Frame 3 ---------------- */}
      <article className="bg-white px-5 py-20 sm:px-8 sm:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl"
        >
          <blockquote
            className="text-[2.15rem] leading-[1.14] text-black sm:text-4xl"
            style={{ fontFamily: 'season' }}
          >
            "A bespoke garment is never about standing out for the sake of
            attention. It is about feeling completely at ease in your own skin.
            When craftsmanship, proportion, and character come together,
            confidence no longer needs an introduction."
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
        </motion.div>
      </article>
    </section>
  );
}