import React from 'react';

export default function Atelier() {
  return (
    <section
      className="overflow-hidden bg-white text-black"
      style={{ fontFamily: 'neue' }}
    >
      <div className="border-t border-black/10">

        <div className="grid gap-12 px-5 py-20 sm:px-8 md:grid-cols-12 md:gap-12 md:px-10 md:py-28 lg:px-16">

          {/* TITLE */}

          <div className="md:col-span-5">

            <div className="md:sticky md:top-28">

              <p className="mb-5 text-[9px] uppercase tracking-[0.25em] text-black/40">
                The Atelier
              </p>

              <h2
                className="text-4xl leading-[0.92] sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ fontFamily: 'season' }}
              >
                N°20KNK
                <br />
                Khader Nawaz
                <br />
                Khan Road
              </h2>

            </div>

          </div>


          {/* CONTENT */}

          <div className="md:col-span-7 md:col-start-6">

            <div className="max-w-2xl text-[12px] leading-[1.6] text-black/70 sm:text-[14px]">

              <p>
                Hidden behind a quiet façade on one of
                Chennai’s most storied boulevards, No. 20
                KNK is more than just an address; it is the
                soul of our brands.
              </p>

              <p className="mt-8">
                This is where the Osman Abdul Razak bespoke
                atelier resides, nestled in an elegant
                building whose walls bear witness to
                precision, artistry, and enduring style.
                Every fitting room, every surface, every
                silence here has been calibrated to reflect
                the values of the man behind the label:
                restraint over flamboyance, refinement over
                fashion, permanence over novelty.
              </p>

              <p className="mt-8">
                On the ground floor, the atelier functions
                as both workshop and sanctum. It is a space
                where cloth becomes architecture, and clients
                are collaborators. From first consultation to
                final fitting, every visit is an experience
                within this space.
              </p>

              <p className="mt-8">
                Above, discreetly perched on the first floor,
                is the residence of Maison Madras, our
                travelling salon’s permanent home when not
                on the road. Accessed by invitation only, the
                Maison is part gallery, part salon, part time
                capsule. Here, amidst rarefied textures and
                softly lit interiors, one finds a world where
                Indian crafts and continental elegance are
                brought together seamlessly.
              </p>

              <p className="mt-8">
                By twilight, the atelier transforms. On select
                evenings, No. 20 KNK becomes host to{' '}
                <em>The Sartorial Nights</em>, private
                gatherings curated by Osman himself. These
                are intimate affairs where connoisseurs and
                collectors come together to explore a rotating
                curation of menswear and accessories. Every
                piece is handpicked by Osman from ateliers,
                archives, and artisans around the world. Each
                evening is a quiet celebration of design,
                dialogue, and the enduring art of dressing
                well.
              </p>

              {/* CLOSING */}

              <div className="mt-10 border-t border-black/15 pt-8">

                <p className="text-[15px] leading-relaxed text-black sm:text-[18px]">
                  This is not retail.
                  <br />
                  This is not a showroom.
                  <br />
                  <span className="text-black/50">
                    This is a destination for those who value
                    the journey.
                  </span>
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}