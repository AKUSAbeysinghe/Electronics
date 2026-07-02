import React, { useState } from 'react';

const Navbar = () => {
  const whatsappNumber = '94771234567';

  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Categories with dedicated paths
  const categories = [
    { name: "Smartphones", path: "/smartphones" },
    { name: "Laptops", path: "/laptops" },
    { name: "Audio", path: "/audio" },
    { name: "TVs & Displays", path: "/tvs-displays" },
    { name: "Gaming", path: "/gaming" },
    { name: "Wearables", path: "/wearables" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close products dropdown when closing mobile menu
    if (isMobileMenuOpen) setIsProductsOpen(false);
  };

  return (
    <nav className="bg-black border-b border-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo Section */}
          <div className="flex items-center space-x-2 select-none">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4d61fc]">
              <svg
                className="h-5 w-5 text-white"
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

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="/"
              className="text-[#4d61fc] hover:text-white transition-colors duration-300"
            >
              Home
            </a>

            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <span className="text-gray-400 hover:text-[#4d61fc] transition-colors duration-300 flex items-center gap-1 cursor-pointer">
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
              </span>

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

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* WhatsApp Icon */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#4d61fc] transition-colors duration-300"
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

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6h12v12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-[#0a0f1c] border-t border-gray-800 px-4 py-6 space-y-6">
          <a
            href="/"
            className="block text-lg font-medium py-2 text-[#4d61fc]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>

          {/* Mobile Products Accordion */}
          <div>
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="w-full flex items-center justify-between text-lg font-medium py-2 text-gray-400 hover:text-white"
            >
              <span>Products</span>
              <svg
                className={`w-5 h-5 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`pl-4 mt-2 space-y-1 transition-all duration-200 ${isProductsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={category.path}
                  className="block py-3 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/about"
            className="block text-lg font-medium py-2 text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>

          <a
            href="/contact"
            className="block text-lg font-medium py-2 text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;