import React from 'react';

const Gaming = () => {
  const gamingProducts = [
    {
      id: 1,
      name: "Blade 16 Ultra",
      brand: "RAZERTECH",
      price: "$2,499",
      originalPrice: "$2,799",
      discount: "-11%",
      image: "💻",
      rating: 4.9,
      reviews: "1,234",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "ThunderForge RTX 5090",
      brand: "NOVATECH",
      price: "$3,299",
      originalPrice: "$3,599",
      discount: "-8%",
      image: "🖥️",
      rating: 4.8,
      reviews: "876",
      badge: "Premium"
    },
    {
      id: 3,
      name: "AetherPad Pro RGB",
      brand: "LUMEN",
      price: "$129",
      originalPrice: "$159",
      discount: "-19%",
      image: "⌨️",
      rating: 4.7,
      reviews: "3,452",
      badge: "New"
    },
    {
      id: 4,
      name: "Vortex Mouse Elite",
      brand: "RAZERTECH",
      price: "$89",
      originalPrice: "$109",
      discount: "-18%",
      image: "🖱️",
      rating: 4.9,
      reviews: "2,987",
      badge: "Gaming"
    },
    {
      id: 5,
      name: "ShadowCore 32 OLED",
      brand: "NOVATECH",
      price: "$899",
      originalPrice: "$999",
      discount: "-10%",
      image: "🖥️",
      rating: 4.8,
      reviews: "1,654",
      badge: ""
    },
    {
      id: 6,
      name: "NeoBuds Gaming X",
      brand: "LUMEN",
      price: "$149",
      originalPrice: "$179",
      discount: "-17%",
      image: "🎧",
      rating: 4.6,
      reviews: "4,321",
      badge: ""
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-black text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Gaming</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ultimate gaming gear engineered for performance, precision, and victory.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-black text-white pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <p className="text-gray-400">Showing 64 premium gaming products</p>
            <select className="bg-[#0a0f1c] border border-gray-800 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#4d61fc]">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rating</option>
              <option>Newest First</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {gamingProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-[#0a0f1c] border border-gray-900 rounded-3xl overflow-hidden hover:border-[#4d61fc] transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Area */}
                <div className="relative h-72 bg-gradient-to-b from-[#1a2338] to-[#0a0f1c] flex items-center justify-center text-8xl transition-transform group-hover:scale-110">
                  {product.image}
                  
                  {product.badge && (
                    <span className="absolute top-5 left-5 bg-[#4d61fc] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-medium text-gray-500 mb-1">{product.brand}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4d61fc] transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-white">{product.price}</span>
                    <span className="text-gray-500 line-through text-lg">{product.originalPrice}</span>
                    <span className="text-emerald-400 text-sm font-medium">{product.discount}</span>
                  </div>

                  <button className="mt-6 w-full bg-[#4d61fc] hover:bg-[#5a71ff] py-3.5 rounded-2xl font-medium transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gaming;