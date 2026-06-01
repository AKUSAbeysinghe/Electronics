import React from 'react';
import SmartTv from "../assets/Collections/SmartTv.jpg";
import HeadPhone from "../assets/Collections/HeadPhone.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      brand: 'NOVATECH',
      title: 'Quantum X Pro',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600',
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
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600',
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
      badge: '', // Left blank to match layout variations
      rating: 4,
      reviews: '1,234',
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Products</h2>
            <p className="text-gray-500 text-sm">Handpicked by our experts</p>
          </div>
          <a 
            href="#view-all" 
            className="flex items-center space-x-1 text-xs font-semibold text-[#4d61fc] hover:text-[#3b4fd9] transition-colors"
          >
            <span>View All</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col bg-[#040814] border border-gray-900/60 rounded-2xl overflow-hidden hover:border-gray-800 transition-all duration-300"
            >
              {/* Product Image Showcase Area */}
              <div className="relative aspect-square w-full bg-gradient-to-b from-[#080f26] to-[#040814] flex items-center justify-center p-6 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Status Badge Left */}
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-[#4d61fc] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md shadow-[#4d61fc]/10">
                    {product.badge}
                  </span>
                )}

                {/* Percentage Discount Badge Right */}
                <span className="absolute top-4 right-4 bg-[#10b981]/20 text-[#10b981] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#10b981]/20">
                  {product.discount}
                </span>
              </div>

              {/* Product Information Area */}
              <div className="flex flex-col flex-grow p-5 pt-4">
                {/* Brand Title */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                  {product.brand}
                </span>
                
                {/* Product Name */}
                <h3 className="text-sm font-bold tracking-wide text-white mb-2 group-hover:text-[#4d61fc] transition-colors">
                  {product.title}
                </h3>

                {/* Stars Rating Layout */}
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

                {/* Pricing Structure */}
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

export default FeaturedProducts;