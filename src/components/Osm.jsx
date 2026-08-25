import { useEffect, useState } from "react";

export default function OsmanNavbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Placeholder for Shopify menu.
  // Later this will be replaced with your Shopify navigation data.
  const shopMenu = [
    {
      title: "Summer",
      url: "#",
    },
    {
      title: "Exclusives",
      url: "#",
    },
    {
      title: "Accessories",
      url: "#",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".osman-navbar") &&
        !event.target.closest(".osman-shop-menu")
      ) {
        setShopOpen(false);
        setMobileOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShopOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const openShop = () => {
    setShopOpen(true);
    setMobileOpen(false);
  };

  const toggleMobile = (event) => {
    event.stopPropagation();

    setMobileOpen((prev) => !prev);
    setShopOpen(false);
  };

  return (
    <>
      {/* =================================
          NAVBAR
      ================================= */}

      <header className="osman-navbar">

        {/* =================================
            LEFT
        ================================= */}

        <div className="osman-navbar__left">

          {/* SHOP */}

          <button
            className={`osman-navbar__shop ${
              shopOpen ? "is-active" : ""
            }`}
            onMouseEnter={openShop}
            onClick={(event) => {
              event.stopPropagation();
              setShopOpen((prev) => !prev);
            }}
          >
            Shop
          </button>


          {/* SHOPIFY MENU */}

          <nav className="osman-navbar__menu">

            {shopMenu.map((item) => (
              <a
                key={item.title}
                href={item.url}
              >
                {item.title}
              </a>
            ))}

          </nav>

        </div>


        {/* =================================
            MOBILE HAMBURGER
        ================================= */}

        <button
          className={`osman-navbar__mobile ${
            mobileOpen ? "is-open" : ""
          }`}
          onClick={toggleMobile}
          aria-label="Open menu"
        >
          <span />
          <span />
        </button>


        {/* =================================
            CENTER LOGO
        ================================= */}

        <a
          href="/"
          className="osman-navbar__logo"
        >
          <span className="osman-navbar__logo-main">
            OSMAN
          </span>

          <span className="osman-navbar__logo-sub">
            MADRAS
          </span>
        </a>


        {/* =================================
            RIGHT UTILITIES
        ================================= */}

        <nav className="osman-navbar__right">

          <a href="/search">
            Search
          </a>

          <a href="/account">
            Account
          </a>

          <a href="/pages/wishlist">
            Wishlist
          </a>

          <a href="/cart">
            Cart
          </a>

        </nav>

      </header>


      {/* =================================
          BACKDROP
      ================================= */}

      <div
        className={`osman-navbar__backdrop ${
          shopOpen || mobileOpen ? "is-visible" : ""
        }`}
        onClick={() => {
          setShopOpen(false);
          setMobileOpen(false);
        }}
      />


      {/* =================================
          SHOP / MOBILE MENU
      ================================= */}

      <aside
        className={`osman-shop-menu ${
          shopOpen || mobileOpen ? "is-open" : ""
        }`}
        onClick={(event) => event.stopPropagation()}
      >

        <div className="osman-shop-menu__header">

          <span>
            Shop
          </span>

          <button
            className="osman-shop-menu__close"
            onClick={() => {
              setShopOpen(false);
              setMobileOpen(false);
            }}
            aria-label="Close menu"
          >
            ×
          </button>

        </div>


        <nav className="osman-shop-menu__list">

          {shopMenu.map((item, index) => (

            <a
              href={item.url}
              key={item.title}
              className="osman-shop-menu__item"
            >

              <span className="osman-shop-menu__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="osman-shop-menu__name">
                {item.title}
              </span>

              <span className="osman-shop-menu__arrow">
                →
              </span>

            </a>

          ))}

        </nav>

      </aside>


      {/* =================================
          CSS
      ================================= */}

      <style jsx>{`

        /* =================================
           NAVBAR
        ================================= */

        .osman-navbar {
          position: relative;

          width: 100%;
          height: 64px;

          display: flex;
          align-items: center;

          padding: 0 18px;

          box-sizing: border-box;

          background: #ffffff;
          color: #111111;

          z-index: 1000;
        }


        /* =================================
           LEFT
        ================================= */

        .osman-navbar__left {
          display: flex;
          align-items: center;

          height: 100%;

          gap: 35px;
        }


        /* =================================
           SHOP
        ================================= */

        .osman-navbar__shop {
          position: relative;

          height: 100%;

          display: flex;
          align-items: center;

          padding: 0;

          border: none;

          background: transparent;

          color: inherit;

          font-family: inherit;

          font-size: 14px;
          font-weight: 400;

          cursor: pointer;
        }


        .osman-navbar__shop::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: 16px;

          width: 100%;
          height: 1px;

          background: currentColor;

          transform: scaleX(0);

          transform-origin: right;

          transition:
            transform 0.3s ease;
        }


        .osman-navbar__shop:hover::after,
        .osman-navbar__shop.is-active::after {
          transform: scaleX(1);

          transform-origin: left;
        }


        /* =================================
           SHOPIFY MENU
        ================================= */

        .osman-navbar__menu {
          display: flex;
          align-items: center;

          height: 100%;

          gap: 35px;
        }


        .osman-navbar__menu a {
          position: relative;

          height: 100%;

          display: flex;
          align-items: center;

          color: inherit;

          font-family: inherit;

          font-size: 14px;
          font-weight: 400;

          text-decoration: none;
        }


        .osman-navbar__menu a::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: 16px;

          width: 100%;
          height: 1px;

          background: currentColor;

          transform: scaleX(0);

          transform-origin: right;

          transition:
            transform 0.3s ease;
        }


        .osman-navbar__menu a:hover::after {
          transform: scaleX(1);

          transform-origin: left;
        }


        /* =================================
           CENTER LOGO
        ================================= */

        .osman-navbar__logo {
          position: absolute;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          color: inherit;

          text-decoration: none;

          white-space: nowrap;
        }


        .osman-navbar__logo-main {
          font-size: 31px;

          font-weight: 400;

          line-height: 0.85;

          letter-spacing: -1.5px;
        }


        .osman-navbar__logo-sub {
          margin-top: 5px;

          font-size: 9px;

          line-height: 1;

          letter-spacing: 1px;
        }


        /* =================================
           RIGHT UTILITIES
        ================================= */

        .osman-navbar__right {
          margin-left: auto;

          height: 100%;

          display: flex;
          align-items: center;

          gap: 28px;
        }


        .osman-navbar__right a {
          position: relative;

          height: 100%;

          display: flex;
          align-items: center;

          color: inherit;

          font-family: inherit;

          font-size: 14px;
          font-weight: 400;

          text-decoration: none;
        }


        .osman-navbar__right a::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: 16px;

          width: 100%;
          height: 1px;

          background: currentColor;

          transform: scaleX(0);

          transform-origin: right;

          transition:
            transform 0.3s ease;
        }


        .osman-navbar__right a:hover::after {
          transform: scaleX(1);

          transform-origin: left;
        }


        /* =================================
           BACKDROP
        ================================= */

        .osman-navbar__backdrop {
          position: fixed;

          inset: 0;

          z-index: 999;

          background: rgba(0, 0, 0, 0.15);

          opacity: 0;

          visibility: hidden;

          pointer-events: none;

          transition:
            opacity 0.4s ease,
            visibility 0s linear 0.4s;
        }


        .osman-navbar__backdrop.is-visible {
          opacity: 1;

          visibility: visible;

          pointer-events: auto;

          transition:
            opacity 0.4s ease,
            visibility 0s linear 0s;
        }


        /* =================================
           SHOP SIDEBAR
        ================================= */

        .osman-shop-menu {
          position: fixed;

          top: 0;
          left: 0;

          width: min(420px, 90vw);
          height: 100vh;

          z-index: 1001;

          box-sizing: border-box;

          padding: 28px;

          background: #f5edcf;
          color: #111111;

          transform: translateX(-100%);

          visibility: hidden;

          overflow-y: auto;

          transition:
            transform 0.55s cubic-bezier(
              0.77,
              0,
              0.175,
              1
            ),
            visibility 0s linear 0.55s;
        }


        .osman-shop-menu.is-open {
          transform: translateX(0);

          visibility: visible;

          transition:
            transform 0.55s cubic-bezier(
              0.77,
              0,
              0.175,
              1
            ),
            visibility 0s linear 0s;
        }


        /* =================================
           SIDEBAR HEADER
        ================================= */

        .osman-shop-menu__header {
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding-bottom: 20px;

          border-bottom:
            1px solid rgba(0, 0, 0, 0.15);

          font-size: 13px;

          text-transform: uppercase;

          letter-spacing: 0.08em;
        }


        .osman-shop-menu__close {
          width: 30px;
          height: 30px;

          display: flex;

          align-items: center;
          justify-content: center;

          padding: 0;

          border: none;

          background: transparent;

          font-size: 27px;
          font-weight: 300;

          cursor: pointer;
        }


        /* =================================
           SIDEBAR ITEMS
        ================================= */

        .osman-shop-menu__list {
          display: flex;

          flex-direction: column;

          padding-top: 10px;
        }


        .osman-shop-menu__item {
          display: grid;

          grid-template-columns:
            35px
            1fr
            30px;

          align-items: center;

          min-height: 70px;

          border-bottom:
            1px solid rgba(0, 0, 0, 0.12);

          color: inherit;

          text-decoration: none;
        }


        .osman-shop-menu__number {
          font-size: 10px;

          opacity: 0.45;
        }


        .osman-shop-menu__name {
          font-size: 18px;

          font-weight: 400;

          transition:
            transform 0.35s ease;
        }


        .osman-shop-menu__arrow {
          font-size: 18px;

          opacity: 0;

          transform: translateX(-8px);

          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }


        .osman-shop-menu__item:hover
        .osman-shop-menu__name {
          transform: translateX(8px);
        }


        .osman-shop-menu__item:hover
        .osman-shop-menu__arrow {
          opacity: 1;

          transform: translateX(0);
        }


        /* =================================
           MOBILE HAMBURGER
        ================================= */

        .osman-navbar__mobile {
          display: none;

          position: absolute;

          left: 18px;
          top: 50%;

          transform: translateY(-50%);

          width: 26px;
          height: 20px;

          padding: 0;

          border: none;

          background: transparent;

          cursor: pointer;
        }


        .osman-navbar__mobile span {
          position: absolute;

          left: 0;

          width: 100%;
          height: 1px;

          background: #111111;

          transition:
            transform 0.3s ease,
            top 0.3s ease;
        }


        .osman-navbar__mobile span:first-child {
          top: 5px;
        }


        .osman-navbar__mobile span:last-child {
          top: 13px;
        }


        .osman-navbar__mobile.is-open
        span:first-child {
          top: 9px;

          transform: rotate(45deg);
        }


        .osman-navbar__mobile.is-open
        span:last-child {
          top: 9px;

          transform: rotate(-45deg);
        }


        /* =================================
           MOBILE
        ================================= */

        @media (max-width: 700px) {

          .osman-navbar {
            height: 60px;

            display: flex;

            justify-content: center;

            padding: 0 16px;
          }


          .osman-navbar__left {
            display: none;
          }


          .osman-navbar__right {
            display: none;
          }


          .osman-navbar__mobile {
            display: block;
          }


          .osman-navbar__logo-main {
            font-size: 27px;
          }


          .osman-navbar__logo-sub {
            font-size: 8px;
          }


          .osman-shop-menu {
            width: 88vw;

            padding: 24px;
          }

        }

      `}</style>
    </>
  );
}