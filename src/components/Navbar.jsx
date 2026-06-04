import React, { useState } from 'react';

const Navbar = () => {
  const whatsappNumber = '94771234567';

  const [isProductsOpen, setIsProductsOpen] = useState(false);

  // Categories with dedicated paths
  const categories = [
    { name: "Smartphones", path: "/smartphones" },
    { name: "Laptops", path: "/laptops" },
    { name: "Audio", path: "/audio" },
    { name: "TVs & Displays", path: "/tvs-displays" },
    { name: "Gaming", path: "/gaming" },
    { name: "Wearables", path: "/wearables" },
  ];

  return (
    <nav className="flex items-center justify-between bg-black px-8 py-4 text-white border-b border-gray-900">
      
      {/* Left: Logo Section */}
      <div className="flex items-center space-x-2 select-none">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4d61fc]">
          <svg
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight">
          Volt<span className="text-[#4d61fc]">Tech</span>
        </span>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex items-center space-x-8 text-sm font-medium">
        
        <a
          href="/"
          className="text-[#4d61fc] transition-colors duration-300"
        >
          Home
        </a>

        {/* Products with Dropdown */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsProductsOpen(true)}
          onMouseLeave={() => setIsProductsOpen(false)}
        >
          <a
            href="/products"
            className="text-gray-400 hover:text-[#4d61fc] transition-colors duration-300 flex items-center gap-1"
          >
            Products
            <svg 
              className="w-3 h-3 transition-transform group-hover:rotate-180" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          {/* Dropdown Menu */}
          <div className={`absolute left-0 mt-3 w-56 bg-[#0a0f1c] border border-gray-800 rounded-2xl shadow-2xl py-3 transition-all duration-200 z-50 ${isProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            {categories.map((category, index) => (
              <a
                key={index}
                href={category.path}
                className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-[#1a2338] transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>

        <a
          href="/about"
          className="text-gray-400 hover:text-[#4d61fc] transition-colors duration-300"
        >
          About
        </a>

        <a
          href="/contact"
          className="text-gray-400 hover:text-[#4d61fc] transition-colors duration-300"
        >
          Contact
        </a>
      </div>

      {/* Right: WhatsApp Icon */}
      <div className="flex items-center">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#25D366] transition-colors duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="h-7 w-7"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.76-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.917-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;