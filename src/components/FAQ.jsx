'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Bespoke vs. made-to-measure — what’s the difference?',
    answer:
      'Bespoke garments are drafted from an individual paper pattern created specifically for you, with multiple fittings and hand-finished adjustments. Made-to-measure starts from an existing block pattern that is altered to your measurements.',
  },
  {
    question: 'How long does the process take',
    answer:
      'A first bespoke garment typically takes 4–8 weeks depending on fabric availability, construction details, and the number of fittings required.',
  },
  {
    question: 'How many fittings are required',
    answer:
      'Most clients require two to three fittings: a baste fitting, a forward fitting, and a final fitting before delivery.',
  },
  {
    question: 'How do the appointments work',
    answer:
      'Appointments begin with a consultation to understand your wardrobe, lifestyle, and preferences, followed by fabric selection, measurements, fittings, and final delivery.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-32"
      style={{ fontFamily: 'neue' }}
    >
      <div className="mx-auto w-full max-w-[760px] px-5 sm:px-8 md:px-10 lg:px-12">
        <h2
          className="text-center text-3xl leading-tight text-black sm:text-4xl lg:text-5xl"
          style={{ fontFamily: 'season' }}
        >
          Know more about us
        </h2>

        <div className="mt-10 divide-y divide-black/10 sm:mt-12 md:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div key={faq.question} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-start justify-between gap-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="max-w-[calc(100%-2rem)] text-[13px] leading-6 text-black/80 sm:text-[15px] sm:leading-7">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{
                      duration: 0.25,
                      ease: 'easeOut',
                    }}
                    className="mt-1 shrink-0 text-black/40"
                  >
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[680px] pt-4 pr-7 text-[13px] leading-6 text-black/60 sm:pr-10 sm:text-[14px] sm:leading-7">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}