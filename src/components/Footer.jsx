'use client';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-300 text-black" style={{ fontFamily: 'neue' }}>
      <div className="mx-auto max-w-[1600px] px-20 py-16">
        {/* Centered logo image */}
        <div className="flex justify-center">
          <img
            src="/mm.svg"
            alt="Maison Madras"
            className="h-6 w-auto object-contain"
          />
        </div>

        {/* 5 columns - exact single row layout */}
        <div className="mt-16 grid grid-cols-[1.8fr_0.7fr_0.9fr_1.2fr_0.7fr] gap-14">
          {/* Newsletter */}
          <div className="max-w-[340px]">
            <h3 className="text-sm font-medium uppercase ">
              NEWSLETTER
            </h3>

            <p className="mt-5 text-[15px] leading-6 text-black/75">
              Sign up to receive special offers and updates via our newsletter
            </p>

            <div className="mt-8 border-b border-black/70 pb-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-[15px] text-black placeholder:text-black/45 focus:outline-none"
              />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-medium uppercase -[0.08em]">
              SHOP
            </h3>

            <ul className="mt-5 space-y-4 text-[15px] text-black/80">
              <li>Shirts</li>
              <li>Gilets</li>
              <li>Suits</li>
              <li>Jackets</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium uppercase -[0.08em]">
              COMPANY
            </h3>

            <ul className="mt-5 space-y-4 text-[15px] text-black/80">
              <li>About us</li>
              <li>Contact</li>
              <li>Journal</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-medium uppercase -[0.08em]">
              SUPPORT
            </h3>

            <ul className="mt-5 space-y-4 text-[15px] text-black/80">
              <li>Returns and exchanges</li>
              <li>FAQ</li>
              <li>Payment and Delivery</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-medium uppercase -[0.08em]">
              SOCIALS
            </h3>

            <ul className="mt-5 space-y-4 text-[15px] text-black/80">
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}