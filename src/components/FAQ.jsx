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
    <section className="bg-[#fff] py-24 lg:py-32" style={{ fontFamily: 'neue' }}>
      <div className="mx-auto max-w-[760px] px-20">
        <h2
          className="text-center text-4xl text-black lg:text-5xl"
          style={{ fontFamily: 'season' }}
        >
          Know more about us
        </h2>

        <div className="mt-16 divide-y divide-black/10">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div key={faq.question} className="py-5">
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="text-[15px] text-black/80">{faq.question}</span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="shrink-0 text-black/40"
                  >
                    <ChevronDown className="h-4 w-4" />
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
                      <p className="pt-4 pr-8 text-[14px] leading-7 text-black/60">
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