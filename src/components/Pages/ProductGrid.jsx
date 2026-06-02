import React from 'react';
import X from "../../assets/Collections/BestSallers/X.jpg";
import Blade from "../../assets/Collections/BestSallers/Blade.jpg";
import HeadPhone from "../../assets/Collections/BestSallers/HeadPhone.jpg";

const ProductGridThreeColumn = () => {
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
      badgeColor: 'bg-[#4d61fc]',
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
      badgeColor: 'bg-[#4d61fc]',
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
      badgeColor: 'bg-[#4d61fc]',
      rating: 4,
      reviews: '4,521',
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Setup: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col bg-[#040814] border border-gray-900/60 rounded-2xl overflow-hidden hover:border-gray-800 transition-all duration-300"
            >
              {/* Product Media Top Area */}
              <div className="relative aspect-square w-full bg-gradient-to-b from-[#080f26] to-[#040814] flex items-center justify-center p-8 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-103"
                />
                
                {/* Product Tag (e.g. Best Seller) */}
                {product.badge && (
                  <span className={`absolute top-4 left-4 ${product.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full`}>
                    {product.badge}
                  </span>
                )}

                {/* Percentage Discount Pill */}
                <span className="absolute top-4 right-4 bg-[#10b981]/15 text-[#10b981] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#10b981]/20">
                  {product.discount}
                </span>

                {/* Interactive Add-to-Cart Action (Reveals seamlessly on desktop hover) */}
                <button className="absolute bottom-4 right-4 p-2 rounded-xl bg-[#040814]/80 border border-gray-800 text-gray-400 hover:text-white hover:bg-[#4d61fc] hover:border-[#4d61fc] transition-all duration-200 lg:opacity-0 lg:group-hover:opacity-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
              </div>

              {/* Product Specifications & Details */}
              <div className="flex flex-col flex-grow p-6 pt-4">
                {/* Brand Label */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                  {product.brand}
                </span>
                
                {/* Title */}
                <h3 className="text-sm font-bold tracking-wide text-white mb-2 group-hover:text-[#4d61fc] transition-colors">
                  {product.title}
                </h3>

                {/* Rating Structure */}
                <div className="flex items-center space-x-1 mb-4">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, index) => (
                      <svg 
                        key={index}
                        className={`w-3.5 h-3.5 ${index < product.rating ? 'fill-current' : 'text-gray-800'}`} 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 font-medium ml-1">
                    ({product.reviews})
                  </span>
                </div>

                {/* Pricing Tiers */}
                <div className="mt-auto flex items-baseline space-x-2">
                  <span className="text-lg font-extrabold text-white">
                    {product.price}
                  </span>
                  <span className="text-xs text-gray-600 line-through font-medium">
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

export default ProductGridThreeColumn;