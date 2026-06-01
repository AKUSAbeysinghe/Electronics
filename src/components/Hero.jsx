import React from 'react';
import MainImage from "../assets/Mains/Mains.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#030712] text-white flex items-center justify-center px-6 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Content */}
        <div className="flex flex-col space-y-6 max-w-xl">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#1e293b]/40 border border-[#4d61fc]/30 rounded-full px-4 py-1.5 w-fit">
            <svg 
              className="w-4 h-4 text-[#4d61fc]" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span className="text-xs font-medium text-gray-300 tracking-wide">
              New Arrivals Available
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
            The Future of <br />
            <span className="text-[#4d61fc]">Technology</span> Is Here
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Discover premium electronics curated for the modern lifestyle. 
            From flagship smartphones to immersive gaming rigs, we bring 
            innovation to your doorstep.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="flex items-center space-x-2 bg-[#4d61fc] hover:bg-[#3b4fd9] text-white font-medium px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#4d61fc]/20">
              <span>Shop Now</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <button className="bg-transparent hover:bg-white/5 border border-gray-800 text-white font-medium px-6 py-3 rounded-xl transition-all">
              Explore Gaming
            </button>
          </div>

          {/* Trust Badges / Footer Info */}
          <div className="flex items-center space-x-6 pt-6 border-t border-gray-900 text-sm text-gray-400">
            {/* Reviews */}
            <div className="flex items-center space-x-1.5">
              <svg 
                className="w-4 h-4 text-amber-400 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="font-bold text-white">4.9</span>
              <span className="text-gray-500">(12K+ reviews)</span>
            </div>
            
            {/* Divider */}
            <div className="h-4 w-[1px] bg-gray-800" />

            {/* Shipping */}
            <div>
              <span>Free shipping over $500</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image Showcase */}
        <div className="relative aspect-square w-full max-w-lg lg:max-w-none mx-auto rounded-3xl overflow-hidden shadow-2xl group">
          <img 
            src={MainImage } // Fallback high-quality tech/retail interior image URL
            alt="Futuristic Tech Store Showcase" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle vignette overlay mimicking the original layout's dark ambiance */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;