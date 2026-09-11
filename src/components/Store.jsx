'use client';

export default function ExperienceStore() {
  return (
    <section
      className="relative h-[200vh] bg-[#F3F1EC]"
      style={{ fontFamily: 'neue' }}
    >
      {/* Sticky image frame */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <img
          src="/store.webp"
          alt="Maison Madras experience store"
          className="h-full w-full object-cover object-center"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Card rises over the image */}
      <div className="relative z-10 -mt-screen flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="w-full max-w-[920px] bg-[#F3F1EC] px-5 py-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.12)] sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
          <h2
            className="text-2xl leading-tight text-black sm:text-3xl lg:text-4xl"
            style={{ fontFamily: 'season' }}
          >
            Experience store
          </h2>

          <div className="mx-auto mt-6 max-w-[640px] sm:mt-8">
            <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-black/70 sm:text-[10px] md:text-[11px] md:tracking-[0.18em]">
              The Atelier · N20KNK · Khader Nawaz Khan Road
            </p>

            <div className="mt-5 space-y-4 text-[13px] leading-[1.75] text-black/70 sm:mt-6 sm:space-y-5 sm:text-[14px] sm:leading-[1.85] md:text-[15px]">
              <p>
                Hidden behind a quiet façade on one of Chennai’s most storied
                boulevards, No. 20 KNK is more than just an address; it is the
                soul of our brand.
              </p>

              <p>
                This is where the Osman Abdul Razak bespoke atelier resides,
                nestled in an elegant building whose walls bear witness to
                precision, artistry, and enduring style. Every fitting room,
                every surface, every silence here has been calibrated to reflect
                the values of the man behind the label: restraint over
                flamboyance, refinement over fashion, permanence over novelty.
              </p>

              <p>
                On the ground floor, the atelier functions as both workshop and
                sanctum. It is a space where cloth becomes architecture, and
                clients are collaborators. From first consultation to final
                fitting, every visit is an experience within this space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}