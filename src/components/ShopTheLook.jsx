import React, { useState } from "react";

const products = [
  { id: 1, name: "Brownjacket", price: "₹ 50,000", image: "/images/brown-jacket.jpg" },
  { id: 2, name: "Classic Trouser – Cinnamon", price: "₹ 22,500", image: "/images/cinnamon-trouser.jpg" },
  { id: 3, name: "Classic Shirt – White", price: "₹ 13,500", image: "/images/white-shirt.jpg" },
  { id: 4, name: "Classic Shirt – Navy Blue", price: "₹ 13,500", image: "/images/navy-shirt.jpg" },
];

const ShopTheLook = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProducts = () => {
    setCurrentIndex((prev) => (prev + 2 >= products.length ? 0 : prev + 2));
  };

  const previousProducts = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? Math.max(products.length - 2, 0) : prev - 2));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + 2);

  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] lg:h-screen border-t border-black">
        <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full border-b lg:border-b-0 lg:border-r border-black overflow-hidden">
          <img src="/images/shop-the-look.jpg" alt="Shop the look" className="absolute inset-0 h-full w-full object-cover" />
        </div>

        <div className="relative flex min-h-0 flex-col border-black px-2">
          <div className="py-14 sm:px-12 sm:py-16 md:px-16 md:py-20 lg:flex-1 lg:px-[10%] lg:py-10 xl:px-[10%]">
            <p className="mb-5 text-[11px] tracking-[0.16em] uppercase text-neutral-600">Shop the look</p>
            <h2 className="max-w-[760px] text-[44px] leading-[0.95] tracking-[-0.045em] sm:text-[52px] md:text-[60px] lg:text-[54px] xl:text-[62px]">
              Designed for every day
            </h2>
            <p className="mt-7 text-[14px] leading-relaxed text-black">Discover the pieces that complete the look.</p>
          </div>

          <div className="sm:px-12 md:px-16 lg:px-[10%] xl:px-[10%]">
            <div className="grid grid-cols-2 gap-[4px]">
              {visibleProducts.map((product) => (
                <div key={product.id} className="min-w-0">
                  <div className="relative aspect-[1/1] overflow-hidden bg-[#f5f3ef]">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.025]" />
                  </div>
                  <div className="pt-3 pb-5">
                    <h3 className="text-[14px] leading-[1.2]">{product.name}</h3>
                    <p className="mt-3 text-[14px] leading-none">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 px-8 pb-8 sm:px-12 sm:pb-10 md:px-16 md:pb-12 lg:px-[10%] lg:pb-8 xl:px-[10%]">
            <button onClick={previousProducts} aria-label="Previous products" className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-[20px] leading-none transition-colors duration-200 hover:bg-black hover:text-white">
              ←
            </button>
            <button onClick={nextProducts} aria-label="Next products" className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-[20px] leading-none transition-colors duration-200 hover:bg-black hover:text-white">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopTheLook;