import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black px-8 py-4 text-white">
      {/* Left: Logo Section */}
      <div className="flex items-center space-x-2 select-none">
        {/* Lightning Bolt Icon Badge */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4d61fc]">
          <svg
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        {/* Brand Name */}
        <span className="text-xl font-bold tracking-tight">
          Volt<span className="text-[#4d61fc]">Tech</span>
        </span>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex items-center space-x-8 text-sm font-medium">
        <a href="/" className="text-[#4d61fc] transition-colors">
          Home
        </a>
        <a href="/products" className="text-gray-400 hover:text-white transition-colors">
          Products
        </a>
        <a href="/about" className="text-gray-400 hover:text-white transition-colors">
          About
        </a>
        <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
          Contact
        </a>
      </div>

      {/* Right: Actions (Search & Cart) */}
      <div className="flex items-center space-x-6">
        {/* Search Icon */}
        <button className="text-gray-400 hover:text-white transition-colors focus:outline-none">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Cart Icon with Badge */}
        <button className="relative text-gray-400 hover:text-white transition-colors focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {/* Notification Badge */}
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#4d61fc] text-[10px] font-bold text-white">
            0
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;