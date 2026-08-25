import React from "react";

const footerData = {
  newsletter: {
    title: "NEWSLETTER",
    description:
      "Sign up to receive special offers and updates via our newsletter",
    placeholder: "Email",
  },

  columns: [
    {
      label: "SHOP",
      links: [
        { label: "Shirts", href: "/collections/shirts" },
        { label: "Gilets", href: "/collections/gilets" },
        { label: "Suits", href: "/collections/suits" },
        { label: "Jackets", href: "/collections/jackets" },
      ],
    },
    {
      label: "COMPANY",
      links: [
        { label: "About us", href: "/pages/about-us" },
        { label: "Contact", href: "/pages/contact" },
        { label: "Journal", href: "/blogs/journal" },
      ],
    },
    {
      label: "SUPPORT",
      links: [
        { label: "Returns and exchanges", href: "/pages/returns" },
        { label: "FAQ", href: "/pages/faq" },
        {
          label: "Payment and Delivery",
          href: "/pages/payment-delivery",
        },
      ],
    },
    {
      label: "SOCIALS",
      links: [
        {
          label: "Instagram",
          href: "https://instagram.com",
        },
        {
          label: "Facebook",
          href: "https://facebook.com",
        },
      ],
    },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black">

      {/* Logo */}
      <div className="flex w-full justify-center pt-5 md:pt-6">
        <a
          href="/"
          className="flex flex-col items-center leading-none"
        >
          <span className="text-[24px] tracking-[-0.05em]">
            OSMAN
          </span>

          <span className="mt-[2px] text-[7px] tracking-[0.08em]">
            MADRAS
          </span>
        </a>
      </div>

      {/* Footer columns */}
      <div
        className="
          mt-14
          grid
          w-full
          grid-cols-1

          sm:grid-cols-2

          lg:grid-cols-5

          gap-y-10

          px-4
          pb-10

          md:px-8
          lg:px-4
        "
      >

        {/* Newsletter */}
        <div className="w-full">

          <p className="text-[11px] leading-none">
            {footerData.newsletter.title}
          </p>

          <p
            className="
              mt-3
              max-w-[230px]
              text-[11px]
              leading-[1.35]
            "
          >
            {footerData.newsletter.description}
          </p>

          <form
            className="mt-5 w-full max-w-[230px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={footerData.newsletter.placeholder}
              className="
                w-full
                border-0
                border-b
                border-black/50
                bg-transparent
                pb-2
                text-[11px]
                outline-none
                placeholder:text-black
                focus:border-black
              "
            />
          </form>

        </div>

        {/* Navigation */}
        {footerData.columns.map((column, index) => (
          <div
            key={index}
            className="w-full"
          >

            <p className="text-[11px] leading-none">
              {column.label}
            </p>

            <nav className="mt-3 flex flex-col gap-[7px]">

              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  className="
                    w-fit
                    text-[11px]
                    leading-[1.2]
                    transition-opacity
                    duration-200
                    hover:opacity-50
                  "
                >
                  {link.label}
                </a>
              ))}

            </nav>

          </div>
        ))}

      </div>

    </footer>
  );
};

export default Footer;