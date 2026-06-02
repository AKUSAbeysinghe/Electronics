import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'Free Shipping',
      description: 'On orders over $500',
      icon: (
        <svg className="w-8 h-8 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1h1m6-1v-4a2 2 0 00-2-2h-3V5a1 1 0 00-1-1H3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 12h7l2 3v4a1 1 0 01-1 1h-3" />
        </svg>
      ),
    },
    {
      id: 2,
      title: '2-Year Warranty',
      description: 'Full coverage on all products',
      icon: (
        <svg className="w-8 h-8 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: '30-Day Returns',
      description: 'No questions asked',
      icon: (
        <svg className="w-8 h-8 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Fast Delivery',
      description: 'Same-day in select cities',
      icon: (
        <svg className="w-8 h-8 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Optional Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-3">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-lg">
            Premium service with every purchase
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col items-center text-center p-8 rounded-3xl bg-[#0a0f1c] border border-gray-900 hover:border-[#4d61fc]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4d61fc]/5"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-[#121c36] border border-gray-800 group-hover:border-[#4d61fc]/30 group-hover:bg-[#1a2544] transition-all duration-300 mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 tracking-wide group-hover:text-[#4d61fc] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;