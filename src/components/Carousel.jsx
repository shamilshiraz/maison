'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const items = [
  {
    name: 'Virat Kohli',
    desc: 'Featured in Vogue',
    image:
      '/kohli.jpeg',
    size: 'small',
  },
  {
    name: 'Shahid Kapoor',
    desc: 'Owning the style',
    image:
      '/sk.jpeg',
    size: 'large',
  },
  {
    name: 'Abhishek Bachchan',
    desc: 'Classic evening tailoring',
    image:
      '/ab.jpeg',
    size: 'medium',
  },
  {
    name: 'Ranveer Singh',
    desc: 'Bold bespoke expression',
    image:
      '/rk.jpeg',
    size: 'small',
  },
  {
    name: 'Ram charan',
    desc: 'Effortless modern tailoring',
    image:
      './rc2.jpeg',
    size: 'large',
  },
  {
    name: 'Abhishek Bachchan',
    desc: 'Contemporary elegance',
    image:
      '/ab2.jpeg',
    size: 'medium',
  }
];

const cardClass = { small: 'w-[300px]', medium: 'w-[400px]', large: 'w-[460px]', }; const imageHeight = { small: 'h-[360px]', medium: 'h-[420px]', large: 'h-[500px]', };

export default function FeaturedCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  // duplicate for seamless looping
  const loopItems = [...items, ...items];

  return (
    <section
      className="bg-[#fff] pt-[40vh] pb-24 overflow-hidden"
      style={{ fontFamily: 'neue' }}
    >
      <div className="mx-auto max-w-[1720px] pl-7 lg:pl-16">
        {/* <h2
          className="text-5xl lg:text-6xl text-black mb-14"
          style={{ fontFamily: 'season' }}
        >
          Featured
        </h2> */}

        <motion.div
          animate={{
            x: `-${index * 296}px`,
          }}
          transition={{
            duration: 1.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-start gap-4 will-change-transform pr-4"
        >
          {loopItems.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className={`group shrink-0 ${cardClass[item.size]}`}
            >
              <div className="overflow-hidden bg-white">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full object-cover grayscale-[20%] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 ${imageHeight[item.size]}`}
                />
              </div>

              <div className="pt-3">
                <p className="text-[10px] uppercase tracking-[0.14em] text-black/85">
                  {item.name}
                </p>

                <p className="mt-1 text-[13px] text-black/55 leading-relaxed max-w-[90%]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}