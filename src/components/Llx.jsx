'use client';

import { useEffect, useRef } from 'react';

// Expects /public/1.webp ... /public/12.webp
const IMAGES = Array.from({ length: 12 }, (_, i) => `/${i + 1}.webp`);

const COLUMN_SPEEDS = [0.45, 0.7, 0.45, 0.6];
const ROW_SPEEDS = [0.5, 0.75];

const STATIC_OFFSET_VH = [0, -38, 0, -22];
const COLUMN_HEIGHT_VH = 170;

function Column({ images, colRef }) {
  return (
    <div ref={colRef} className="column">
      {images.map((src, index) => (
        <div className="card" key={`${src}-${index}`}>
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

function Row({ images, rowRef, direction }) {
  return (
    <div
      ref={rowRef}
      className={`row ${direction === 'rtl' ? 'rowRtl' : 'rowLtr'}`}
    >
      {images.map((src, index) => (
        <div className="card" key={`${src}-${index}`}>
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default function ParallaxGallery() {
  const galleryRef = useRef(null);
  const columnRefs = useRef([]);
  const rowRefs = useRef([]);

  const currentColumns = useRef([0, 0, 0, 0]);
  const currentRows = useRef([0, 0]);
  const rafId = useRef(null);

  useEffect(() => {
    const getProgress = () => {
      const element = galleryRef.current;

      if (!element) return 0;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalDistance = rect.height + viewportHeight;
      const passedDistance = viewportHeight - rect.top;

      return Math.min(
        1,
        Math.max(0, passedDistance / totalDistance)
      );
    };

    const tick = () => {
      const progress = getProgress();
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 720;

      if (isMobile) {
        ROW_SPEEDS.forEach((speed, index) => {
          const direction = index === 0 ? 1 : -1;

          const target =
            (progress - 0.5) *
            viewportHeight *
            speed *
            2 *
            direction;

          currentRows.current[index] +=
            (target - currentRows.current[index]) * 0.09;

          const row = rowRefs.current[index];

          if (row) {
            row.style.transform = `translate3d(${currentRows.current[
              index
            ].toFixed(1)}px, 0, 0)`;
          }
        });
      } else {
        COLUMN_SPEEDS.forEach((speed, index) => {
          const staticOffset =
            (STATIC_OFFSET_VH[index] / 100) * viewportHeight;

          const target =
            (progress - 0.5) * viewportHeight * speed * 2;

          currentColumns.current[index] +=
            (target - currentColumns.current[index]) * 0.09;

          const column = columnRefs.current[index];

          if (column) {
            const y =
              currentColumns.current[index] + staticOffset;

            column.style.transform = `translate3d(0, ${y.toFixed(
              1
            )}px, 0)`;
          }
        });
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  const desktopColumns = [0, 1, 2, 3].map((index) => [
    ...IMAGES.slice(index * 3, index * 3 + 3),
    ...IMAGES.slice(index * 3, index * 3 + 3),
  ]);

  // Long repeated strips prevent blank spaces during horizontal movement.
  const mobileRowOne = [
    ...IMAGES,
    ...IMAGES,
    ...IMAGES,
    ...IMAGES,
  ];

  const mobileRowTwo = [
    ...IMAGES.slice(6),
    ...IMAGES.slice(0, 6),
    ...IMAGES.slice(6),
    ...IMAGES.slice(0, 6),
    ...IMAGES.slice(6),
    ...IMAGES.slice(0, 6),
  ];

  return (
    <div className="page">
      <style>{`
        .page {
          width: 100%;
          overflow: hidden;
          background: black;
        }

        .gallery {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .galleryWrapper {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.25vw;
          padding: 0 1.25vw;
        }

        .column {
          display: flex;
          flex-direction: column;
          gap: 1.25vw;
          height: ${COLUMN_HEIGHT_VH}vh;
          will-change: transform;
        }

        .card {
          position: relative;
          flex: none;
          width: 100%;
          height: calc(
            (${COLUMN_HEIGHT_VH}vh - 2.5vw) / 3
          );
          overflow: hidden;
          background: #e8e8e8;
        }

        .card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mobileWrapper {
          display: none;
        }

        @media (max-width: 720px) {
          .gallery {
            height: 80vh;
          }

          .galleryWrapper {
            display: none;
          }

          .mobileWrapper {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 2vw;
            padding: 0.5rem 0;
          }

          .row {
            display: flex;
            flex: none;
            width: max-content;
            height: calc(40vh - 1rem);
            gap: 2vw;
            will-change: transform;
          }

          .row .card {
            width: 58vw;
            height: 100%;
            flex: none;
          }

          /*
            Both rows are intentionally oversized on both sides.
            This prevents the moving strip from exposing the background.
          */
          .rowLtr {
            margin-left: -116vw;
          }

          .rowRtl {
            margin-left: -200vw;
          }
        }
      `}</style>

      <div ref={galleryRef} className="gallery">
        {/* Desktop gallery */}
        <div className="galleryWrapper">
          {desktopColumns.map((images, index) => (
            <Column
              key={`column-${index}`}
              images={images}
              colRef={(element) => {
                columnRefs.current[index] = element;
              }}
            />
          ))}
        </div>

        {/* Mobile gallery */}
        <div className="mobileWrapper">
          <Row
            images={mobileRowOne}
            direction="ltr"
            rowRef={(element) => {
              rowRefs.current[0] = element;
            }}
          />

          <Row
            images={mobileRowTwo}
            direction="rtl"
            rowRef={(element) => {
              rowRefs.current[1] = element;
            }}
          />
        </div>
      </div>
    </div>
  );
}