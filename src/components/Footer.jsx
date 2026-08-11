'use client';

export default function Footer() {
  return (
    <footer className="bg-[#F3F1EC] text-black" style={{ fontFamily: 'neue' }}>
      <div className="mx-auto max-w-[1600px] px-20 py-16 lg:py-20">
        {/* Logo */}
        <div className="flex justify-center">
          <h2
            className="text-3xl tracking-[0.06em] lg:text-4xl"
            style={{ fontFamily: 'season' }}
          >
            MAISON MADRAS
          </h2>
        </div>

        {/* Columns */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-16">
          {/* Newsletter */}
          <div className="lg:col-span-2 max-w-[320px]">
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-black/80">
              Newsletter
            </h3>

            <p className="mt-5 text-[15px] leading-6 text-black/70">
              Sign up to receive special offers and updates via our newsletter
            </p>

            <div className="mt-8 border-b border-black/30 pb-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-[15px] text-black placeholder:text-black/45 focus:outline-none"
              />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-black/80">
              Shop
            </h3>

            <ul className="mt-5 space-y-4 text-[15px] text-black/75">
              <li><a href="#" className="transition hover:text-black">Shirts</a></li>
              <li><a href="#" className="transition hover:text-black">Gilets</a></li>
              <li><a href="#" className="transition hover:text-black">Suits</a></li>
              <li><a href="#" className="transition hover:text-black">Jackets</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-black/80">
              Company
            </h3>

            <ul className="mt-5 space-y-4 text-[15px] text-black/75">
              <li><a href="#" className="transition hover:text-black">About us</a></li>
              <li><a href="#" className="transition hover:text-black">Contact</a></li>
              <li><a href="#" className="transition hover:text-black">Journal</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-black/80">
              Support
            </h3>

            <ul className="mt-5 space-y-4 text-[15px] text-black/75">
              <li>
                <a href="#" className="transition hover:text-black">
                  Returns and exchanges
                </a>
              </li>
              <li><a href="#" className="transition hover:text-black">FAQ</a></li>
              <li>
                <a href="#" className="transition hover:text-black">
                  Payment and Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-black/80">
              Socials
            </h3>

            <ul className="mt-5 space-y-4 text-[15px] text-black/75">
              <li><a href="#" className="transition hover:text-black">Instagram</a></li>
              <li><a href="#" className="transition hover:text-black">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-sm text-black/50 lg:flex-row">
          <p>© 2026 Maison Madras. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-black">Privacy Policy</a>
            <a href="#" className="transition hover:text-black">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}