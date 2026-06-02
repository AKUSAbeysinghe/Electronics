import React from 'react';
import Navbar from './Navbar';

const Smartphones = () => {
  const smartphones = [
    {
      id: 1,
      name: "Quantum X Pro",
      brand: "NOVATECH",
      price: "$1,099",
      originalPrice: "$1,199",
      discount: "-8%",
      image: "📱",
      rating: 4.8,
      reviews: "2,341",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Nova Ultra 5G",
      brand: "NOVATECH",
      price: "$899",
      originalPrice: "$999",
      discount: "-10%",
      image: "📱",
      rating: 4.6,
      reviews: "1,874",
      badge: "New"
    },
    {
      id: 3,
      name: "PixelForge 9",
      brand: "RAZERTECH",
      price: "$749",
      originalPrice: "$849",
      discount: "-12%",
      image: "📱",
      rating: 4.7,
      reviews: "3,245",
      badge: ""
    },
    {
      id: 4,
      name: "Galaxy Edge 24",
      brand: "LUMEN",
      price: "$1,299",
      originalPrice: "$1,399",
      discount: "-7%",
      image: "📱",
      rating: 4.9,
      reviews: "987",
      badge: "Premium"
    },
    {
      id: 5,
      name: "Aether Pro",
      brand: "AUDIOZEN",
      price: "$649",
      originalPrice: "$749",
      discount: "-13%",
      image: "📱",
      rating: 4.5,
      reviews: "1,456",
      badge: ""
    },
    {
      id: 6,
      name: "Velocity Z Fold",
      brand: "RAZERTECH",
      price: "$1,499",
      originalPrice: "$1,699",
      discount: "-12%",
      image: "📱",
      rating: 4.8,
      reviews: "654",
      badge: "Foldable"
    },
  ];

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="bg-black text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Smartphones</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the latest flagship smartphones with cutting-edge technology and premium design.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-black text-white pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <p className="text-gray-400">Showing 48 premium smartphones</p>
            <select className="bg-[#0a0f1c] border border-gray-800 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#4d61fc]">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rating</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {smartphones.map((phone) => (
              <div
                key={phone.id}
                className="group bg-[#0a0f1c] border border-gray-900 rounded-3xl overflow-hidden hover:border-[#4d61fc] transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Area */}
                <div className="relative h-72 bg-gradient-to-b from-[#1a2338] to-[#0a0f1c] flex items-center justify-center text-8xl transition-transform group-hover:scale-110">
                  {phone.image}
                  
                  {phone.badge && (
                    <span className="absolute top-5 left-5 bg-[#4d61fc] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      {phone.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-medium text-gray-500 mb-1">{phone.brand}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4d61fc] transition-colors">
                    {phone.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({phone.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-white">{phone.price}</span>
                    <span className="text-gray-500 line-through text-lg">{phone.originalPrice}</span>
                    <span className="text-emerald-400 text-sm font-medium">{phone.discount}</span>
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

export default Smartphones;