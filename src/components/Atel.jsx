"use client";

import "./Atel.css";

const sections = [
  {
    type: "image",
    image: "/osm.jpeg",
  },

  {
    type: "card",
    cardClass: "quote-card",
    children: (
      <>
        <p className="quote">
          "A bespoke garment is never about standing out for the sake
          of attention. It is about feeling completely at ease in your own
          skin. When craftsmanship, proportion, and character come
          together, confidence no longer needs an introduction."
        </p>

        <p className="signature">
          Osman Abdul Razak
        </p>
      </>
    ),
  },

  {
    type: "card",
    cardClass: "story-card",
    children: (
      <>
        <h2>Osman Abdul Razak</h2>
        <span>The sartorial reformist</span>

        <p>
          Savile-Row trained and recognised by GQ India as one of the
          best-dressed men, Osman Abdul Razak brings traditional artistry
          together with a modern perspective. Osman's vision of bespoke
          menswear is intimately personal yet universally elegant.
        </p>

        <p>
          He believes firmly in the silent eloquence of style, exceptional
          tailoring, and a deep respect for tradition balanced with
          modernity.
        </p>
      </>
    ),
  },

  {
    type: "image",
    image: "/osm3.jpeg",
  },

  {
    type: "card",
    cardClass: "atelier-card",
    children: (
      <>
        <h2>
          The Atelier - N°20KNK - Khader Nawaz Khan Road
        </h2>

        <p>
          Hidden Behind A Quiet Façade On One Of Chennai's Most Storied
          Boulevards, No. 20 KNK Is More Than Just An Address; It Is The
          Soul Of Our Brand.
        </p>

        <p>
          This Is Where The Osman Abdul Razak Bespoke Atelier Resides,
          Nestled In An Elegant Building Whose Walls Bear Witness To
          Precision, Artistry, And Enduring Style.
        </p>

        <p>
          By Twilight, The Atelier Transforms. On Select Evenings,
          No. 20 KNK Becomes Host To The Sartorial Nights, Private
          Gatherings Curated By Osman Himself.
        </p>

        <p>
          This Is A Destination For Those Who Value The Journey.
        </p>
      </>
    ),
  },
];

export default function AtelierStack() {
  return (
    <main className="atelier-stack">
      {sections.map((section, index) => {
        if (section.type === "image") {
          return (
            <section
              key={index}
              className="stack-section stack-image"
              style={{
                zIndex: index + 1,
                backgroundImage: `url(${section.image})`,
              }}
            />
          );
        }

        return (
          <section
            key={index}
            className="stack-section stack-transparent"
            style={{
              zIndex: index + 1,
            }}
          >
            <div className={`stack-card ${section.cardClass}`}>
              {section.children}
            </div>
          </section>
        );
      })}
    </main>
  );
}