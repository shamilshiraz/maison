'use client';

export default function Footer() {
  return (
    <footer
      className="border-t border-neutral-300 bg-white text-black"
      style={{ fontFamily: 'neue' }}
    >
      <div className="mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-16 md:px-12 lg:px-16 xl:px-20">

        {/* LOGO */}

        <div className="flex justify-center">
          <img
            src="/oar.avif"
            alt="Maison Madras"
            className="h-6 w-auto object-contain"
          />
        </div>


        {/* CONTENT */}

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 sm:mt-16 sm:gap-x-12 md:grid-cols-4 md:gap-10 lg:grid-cols-[1.8fr_0.7fr_0.9fr_1.2fr_0.7fr] lg:gap-14">

          {/* NEWSLETTER */}

          <div className="col-span-2 max-w-[340px] md:col-span-2 lg:col-span-1">

            <h3 className="text-[11px] font-medium uppercase tracking-[0.08em] sm:text-sm">
              Newsletter
            </h3>

            <p className="mt-4 max-w-[300px] text-[13px] leading-5 text-black/75 sm:mt-5 sm:text-[15px] sm:leading-6">
              Sign up to receive special offers and updates via our newsletter
            </p>

            <div className="mt-6 border-b border-black/70 pb-2 sm:mt-8">

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-[13px] text-black placeholder:text-black/45 focus:outline-none sm:text-[15px]"
              />

            </div>

          </div>


          {/* SHOP */}

          <div>

            <h3 className="text-[11px] font-medium uppercase tracking-[0.08em] sm:text-sm">
              Shop
            </h3>

            <ul className="mt-4 space-y-3 text-[13px] text-black/80 sm:mt-5 sm:space-y-4 sm:text-[15px]">

              <li className="cursor-pointer transition-opacity hover:opacity-50">
                Shirts
              </li>

              <li className="cursor-pointer transition-opacity hover:opacity-50">
                Gilets
              </li>

              <li className="cursor-pointer transition-opacity hover:opacity-50">
                Suits
              </li>

              <li className="cursor-pointer transition-opacity hover:opacity-50">
                Jackets
              </li>

            </ul>

          </div>


          {/* COMPANY */}

          <div>

            <h3 className="text-[11px] font-medium uppercase tracking-[0.08em] sm:text-sm">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-[13px] text-black/80 sm:mt-5 sm:space-y-4 sm:text-[15px]">

              <li className="cursor-pointer transition-opacity hover:opacity-50">
                About us
              </li>

              <li className="cursor-pointer transition-opacity hover:opacity-50">
                Contact
              </li>

              <li className="cursor-pointer transition-opacity hover:opacity-50">
                Journal
              </li>

            </ul>

          </div>


          {/* SUPPORT */}

          <div>

            <h3 className="text-[11px] font-medium uppercase tracking-[0.08em] sm:text-sm">
              Support
            </h3>

            <ul className="mt-4 space-y-3 text-[13px] text-black/80 sm:mt-5 sm:space-y-4 sm:text-[15px]">

              <li className="cursor-pointer transition-opacity hover:opacity-50">
                Returns and exchanges
              </li>

              <li className="cursor-pointer transition-opacity hover:opacity-50">
                FAQ
              </li>

              <li className="cursor-pointer transition-opacity hover:opacity-50">
                Payment and Delivery
              </li>

            </ul>

          </div>


          {/* SOCIALS */}

          <div>

            <h3 className="text-[11px] font-medium uppercase tracking-[0.08em] sm:text-sm">
              Socials
            </h3>

            <ul className="mt-4 space-y-3 text-[13px] text-black/80 sm:mt-5 sm:space-y-4 sm:text-[15px]">

              <li className="cursor-pointer transition-opacity hover:opacity-50">
                Instagram
              </li>

              <li className="cursor-pointer transition-opacity hover:opacity-50">
                Facebook
              </li>

            </ul>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="mt-14 flex flex-col gap-3 border-t border-black/10 pt-5 text-[9px] uppercase tracking-[0.15em] text-black/40 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © {new Date().getFullYear()} Maison Madras
          </span>

          <span>
            Chennai · India
          </span>

        </div>

      </div>
    </footer>
  );
}