import React from 'react';
import SmartTv from "../assets/Collections/SmartTv.jpg";
import HeadPhone from "../assets/Collections/HeadPhone.jpg";
import Blade from "../assets/Collections/Blade.jpg";
import X from "../assets/Collections/X.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      brand: 'NOVATECH',
      title: 'Quantum X Pro',
      image: X,
      price: '$1,099',
      originalPrice: '$1,199',
      discount: '-8%',
      badge: 'Best Seller',
      rating: 4,
      reviews: '2,341',
    },
    {
      id: 2,
      brand: 'RAZERTECH',
      title: 'Blade 16 Ultra',
      image: Blade,
      price: '$2,499',
      originalPrice: '$2,799',
      discount: '-11%',
      badge: 'New',
      rating: 4,
      reviews: '876',
    },
    {
      id: 3,
      brand: 'AUDIOZEN',
      title: 'Soundscape Pro Max',
      image: HeadPhone,
      price: '$449',
      originalPrice: '$549',
      discount: '-18%',
      badge: 'Top Rated',
      rating: 4,
      reviews: '4,521',
    },
    {
      id: 4,
      brand: 'LG DISPLAY',
      title: 'Vision OLED 65"',
      image: SmartTv,
      price: '$1,999',
      originalPrice: '$2,499',
      discount: '-20%',
      badge: '',
      rating: 4,
      reviews: '1,234',
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-2">Featured Products</h2>
            <p className="text-gray-500">Handpicked premium selections</p>
          </div>
          <a 
            href="#view-all" 
            className="flex items-center gap-2 text-sm font-semibold text-[#4d61fc] hover:text-[#5a71ff] transition-colors group"
          >
            View All
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col bg-[#0a0f1c] border border-gray-900 rounded-3xl overflow-hidden hover:border-[#4d61fc]/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* BIGGER IMAGE AREA */}
              <div className="relative h-72 sm:h-80 bg-gradient-to-b from-[#0f172a] to-[#02060f] flex items-center justify-center p-8 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                />
                
                {/* Badges */}
                {product.badge && (
                  <span className="absolute top-5 left-5 bg-[#4d61fc] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-[#4d61fc]/30">
                    {product.badge}
                  </span>
                )}

                <span className="absolute top-5 right-5 bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.discount}
                </span>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow p-6">
                <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500 mb-1">
                  {product.brand}
                </span>
                
                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-[#4d61fc] transition-colors">
                  {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? 'fill-current' : 'text-gray-700'}`} 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="mt-auto flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;