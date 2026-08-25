import React from 'react';

const images = [
  '/og.webp',
  '/og2.webp',
  '/og3.webp',
  '/og4.webp',
  '/og5.webp',
  '/og6.webp',
  '/og7.webp',
  '/og8.webp',
  '/og9.webp',
  'og10.webp'
];

export default function StoreGallery() {
  return (
    <section
      className="overflow-hidden bg-white text-black"
      style={{ fontFamily: 'neue' }}
    >

      {/* ============================== */}
      {/* INTRO */}
      {/* ============================== */}

      <div className="grid gap-10 px-5 pb-20 pt-20 sm:px-8 md:grid-cols-12 md:gap-12 md:px-10 md:pb-28 md:pt-28 lg:px-16">

        {/* HEADING */}

        <div className="md:col-span-7">

          <h2
            className="text-5xl leading-[0.88] sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: 'season' }}
          >
            Experience
            <br />
            Store
          </h2>

        </div>


        {/* TEXT */}

        <div className="md:col-span-5">

          <div className="max-w-md text-[12px] leading-normal text-black/70 sm:text-[14px]">

            <p>
              Step into Maison Madras and experience
              menswear beyond the garment. Our store
              brings together considered tailoring,
              exceptional fabrics, and a space designed
              around the art of dressing well.
            </p>

            <p className="mt-6">
              From the first conversation to the final
              fitting, every detail is personal. Explore
              our collections, discover our fabrics, and
              experience the quiet precision of bespoke
              tailoring in person.
            </p>

            <p className="mt-6">
              Visit us in Chennai and experience
              Maison Madras at your own pace.
            </p>

          </div>

        </div>

      </div>


      {/* ============================== */}
      {/* MARQUEE */}
      {/* ============================== */}

      <div className="relative overflow-hidden pb-20 md:pb-28">

        {/* ROW 1 — RIGHT */}

        <div className="store-marquee store-marquee-right">

          <div className="store-marquee-track">

            {[...images, ...images].map((src, index) => (
              <div
                key={`top-${index}`}
                className="
                  relative
                  ml-3
                  h-[48vw]
                  w-[65vw]
                  flex-shrink-0
                  overflow-hidden
                  sm:ml-4
                  sm:h-[38vw]
                  sm:w-[50vw]
                  md:ml-5
                  md:h-[28vw]
                  md:w-[37vw]
                  lg:h-[25vw]
                  lg:w-[32vw]
                "
              >
                <img
                  src={src}
                  alt="Maison Madras store"
                  className="absolute inset-0 h-full w-full object-cover"
                  draggable="false"
                />
              </div>
            ))}

          </div>

        </div>


        {/* ROW 2 — LEFT */}

        <div className="store-marquee store-marquee-left mt-3 md:mt-5">

          <div className="store-marquee-track">

            {[...images.slice(4), ...images, ...images.slice(0, 4)].map(
              (src, index) => (
                <div
                  key={`bottom-${index}`}
                  className="
                    relative
                    ml-3
                    h-[48vw]
                    w-[65vw]
                    flex-shrink-0
                    overflow-hidden
                    sm:ml-4
                    sm:h-[38vw]
                    sm:w-[50vw]
                    md:ml-5
                    md:h-[28vw]
                    md:w-[37vw]
                    lg:h-[25vw]
                    lg:w-[32vw]
                  "
                >
                  <img
                    src={src}
                    alt="Maison Madras store"
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable="false"
                  />
                </div>
              )
            )}

          </div>

        </div>

      </div>


      {/* ============================== */}
      {/* STYLES */}
      {/* ============================== */}

      <style>{`

        .store-marquee {
          width: 100%;
          overflow: hidden;
        }

        .store-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .store-marquee-right
        .store-marquee-track {
          animation: storeMarqueeRight 35s linear infinite;
        }

        .store-marquee-left
        .store-marquee-track {
          animation: storeMarqueeLeft 35s linear infinite;
        }

        @keyframes storeMarqueeRight {

          from {
            transform: translateX(-25%);
          }

          to {
            transform: translateX(0%);
          }

        }

        @keyframes storeMarqueeLeft {

          from {
            transform: translateX(0%);
          }

          to {
            transform: translateX(-25%);
          }

        }

        .store-marquee-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {

          .store-marquee-track {
            animation: none !important;
            transform: none !important;
          }

        }

      `}</style>

    </section>
  );
}