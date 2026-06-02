import React from 'react';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Smartphones',
      count: '48 products',
      icon: (
        <svg className="w-10 h-10 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth="3" />
        </svg>
      ),
    },
    {
      id: 2,
      name: 'Laptops',
      count: '32 products',
      icon: (
        <svg className="w-10 h-10 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
          <line x1="12" y1="17" x2="12" y2="17" strokeLinecap="round" strokeWidth="3" />
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Audio',
      count: '64 products',
      icon: (
        <svg className="w-10 h-10 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
        </svg>
      ),
    },
    {
      id: 4,
      name: 'TVs & Displays',
      count: '24 products',
      icon: (
        <svg className="w-10 h-10 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
    {
      id: 5,
      name: 'Gaming',
      count: '56 products',
      icon: (
        <svg className="w-10 h-10 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h4m-2-2v4m5-2h.01M17 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 6,
      name: 'Wearables',
      count: '28 products',
      icon: (
        <svg className="w-10 h-10 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7a5 5 0 100 10 5 5 0 000-10z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v5M12 17v5M9 4h6M9 20h6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Discover our premium collections across all tech categories
          </p>
        </div>

        {/* Categories Grid - Bigger & More Visual */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative flex flex-col items-center justify-center p-10 rounded-3xl bg-gradient-to-b from-[#0a0f1c] to-[#040814] border border-gray-900 hover:border-[#4d61fc]/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#4d61fc]/10 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-[#0d1527] border border-gray-800 group-hover:border-[#4d61fc]/30 group-hover:bg-[#121c36] transition-all duration-300 mb-6">
                {category.icon}
              </div>

              {/* Category Name */}
              <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-[#4d61fc] transition-colors">
                {category.name}
              </h3>

              {/* Count */}
              <p className="text-sm text-gray-500 font-medium">
                {category.count}
              </p>

              {/* Subtle Hover Accent */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#4d61fc]/20 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Optional "Browse All" Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
            Browse All Categories
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;