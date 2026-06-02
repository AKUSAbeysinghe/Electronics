import React from 'react';

const Footer = () => {
  // Navigation Column Data
  const linkGroups = [
    {
      title: 'Shop',
      links: [
        { label: 'Smartphones', href: '#smartphones' },
        { label: 'Laptops', href: '#laptops' },
        { label: 'Audio', href: '#audio' },
        { label: 'Gaming', href: '#gaming' },
        { label: 'Wearables', href: '#wearables' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '#careers' },
        { label: 'Press', href: '#press' }, 
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#help' },
        { label: 'Returns', href: '#returns' },
        { label: 'Shipping', href: '#shipping' },
        { label: 'Warranty', href: '#warranty' },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-12 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-gray-900/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Brand Profile & Multi-Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-gray-900/60">
          
          {/* Brand Info Left Block (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2 select-none">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4d61fc]">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Volt<span className="text-[#4d61fc]">Tech</span>
              </span>
            </div>

            {/* Mission/Description Text */}
            <p className="text-sm font-light text-gray-500 leading-relaxed max-w-sm">
              Your destination for premium electronics. We curate the best 
              tech from around the world, delivering innovation to your doorstep.
            </p>

            {/* Social Media Button Badges */}
            <div className="flex items-center space-x-3">
              {/* Twitter/X */}
              <a href="#twitter" className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#040814] border border-gray-900 text-gray-400 hover:text-white hover:border-gray-800 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#instagram" className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#040814] border border-gray-900 text-gray-400 hover:text-white hover:border-gray-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#youtube" className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#040814] border border-gray-900 text-gray-400 hover:text-white hover:border-gray-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Links Right Columns Block (Spans 3 columns on large screens) */}
          {linkGroups.map((group, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                {group.title}
              </h4>
              <ul className="flex flex-col space-y-3 text-sm">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      className="text-gray-500 hover:text-white transition-colors duration-200 font-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Section: Metadata Info Bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-start gap-y-4 md:gap-x-10 text-xs sm:text-sm text-gray-500">
          {/* Address */}
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-[#4d61fc]/70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-light">123 Tech Avenue, San Francisco, CA</span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-[#4d61fc]/70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span className="font-light">+1 (555) 123-4567</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-[#4d61fc]/70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="font-light">support@volttech.com</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;