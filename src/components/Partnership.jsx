import React from 'react';

const PartnerCTA = () => {
  return (
    <section className="bg-[#2E7D56] py-20 px-8 rounded-3xl mx-4 my-16 text-center text-white">
      <div className="max-w-2xl mx-auto">
        
        {/* Heading */}  
        <h2 className="text-5xl font-semibold mb-6">
          Become a Vivara partner.
        </h2>

        {/* Subtext */}
        <p className="text-xl text-green-50 mb-10 opacity-90 leading-relaxed">
          Join 350+ leading brands reaching millions of wellness-focused 
          customers every day. Grow with the platform built for health.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-white text-[#2E7D56] rounded-full font-semibold hover:bg-gray-100 transition-all">
            Apply now →
          </button>
          <button className="px-8 py-4 text-white font-semibold hover:underline">
            Talk to sales
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default PartnerCTA;