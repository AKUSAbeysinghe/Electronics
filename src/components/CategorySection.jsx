import React from 'react';

const CategorySection = () => {
  // Category data containing names, product counts, and explicit SVG paths
  const categories = [
    {
      id: 1,
      name: 'Smartphones',
      count: '48 products',
      icon: (
        <svg className="w-6 h-6 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth="3" />
        </svg>
      ),
    },
    {
      id: 2,
      name: 'Laptops',
      count: '32 products',
      icon: (
        <svg className="w-6 h-6 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
        <svg className="w-6 h-6 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
        </svg>
      ),
    },
    {
      id: 4,
      name: 'TVs & Displays',
      count: '24 products',
      icon: (
        <svg className="w-6 h-6 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
        <svg className="w-6 h-6 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h4m-2-2v4m5-2h.01M17 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 6,
      name: 'Wearables',
      count: '28 products',
      icon: (
        <svg className="w-6 h-6 text-[#4d61fc]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7a5 5 0 100 10 5 5 0 000-10z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v5M12 17v5M9 4h6M9 20h6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Shop by Category
        </h2>
        <p className="text-gray-500 text-base sm:text-lg mb-14 font-medium">
          Browse our curated collections
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-[#040814] border border-gray-900/50 hover:border-[#4d61fc]/40 transition-all duration-300 cursor-pointer select-none"
            >
              {/* Icon Container Badge */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0d1527] border border-[#1e2d4d]/30 group-hover:bg-[#121c36] transition-colors mb-5">
                {category.icon}
              </div>

              {/* Category Name */}
              <h3 className="text-sm font-bold tracking-wide text-white mb-1">
                {category.name}
              </h3>

              {/* Product Counter */}
              <p className="text-xs text-gray-600 font-medium tracking-normal">
                {category.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;