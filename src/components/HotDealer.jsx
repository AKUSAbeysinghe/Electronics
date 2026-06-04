import React from 'react';

const HotDealsBanner = () => {
  return (
    <section className="bg-black text-white py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#090d22] border border-gray-900/50 p-8 sm:p-12 md:p-16 flex flex-col items-start justify-center min-h-[260px]">
          
          {/* Decorative subtle background ambient glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 rounded-full bg-[#4d61fc]/5 blur-[120px] pointer-events-none" />
          
          {/* Tagline Badge */}
          <div className="mb-4 inline-block rounded-full bg-[#dc2626]/10 px-3.5 py-1 text-xs font-semibold text-[#ef4444] border border-[#dc2626]/20">
            Limited Time
          </div>

          {/* Banner Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Hot Deals This Week
          </h2>

          {/* Banner Description */}
          <p className="max-w-md text-sm sm:text-base font-normal leading-relaxed text-gray-400">
            Grab these amazing discounts before they are gone. Up to 30% off on premium tech.
          </p>

        </div>
      </div>
    </section>
  );
};

export default HotDealsBanner;