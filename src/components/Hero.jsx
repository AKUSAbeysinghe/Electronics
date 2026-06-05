import React from "react";
import { Link } from "react-router-dom";
import MainImage from "../assets/Mains/Mains.jpg";

const HeroSection = () => {
  const whatsappNumber = '94771234567'; // Same number as in Navbar

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={MainImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center lg:text-left">
        <div className="max-w-2xl mx-auto lg:mx-0">

          {/* Small Announcement */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full mb-8">
            <span className="text-[#4d61fc] text-xl">✦</span>

            <span className="uppercase tracking-[3px] text-sm font-semibold text-white">
              Limited Time Offer
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter mb-6">
            NEXT-GEN TECH.
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4d61fc] via-blue-400 to-[#4d61fc]">
              UNMATCHED
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0">
            Premium gadgets engineered for those who live ahead of the curve.
            Experience innovation at its finest.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            {/* Shop the Collection Button */}
            <Link
              to="/featured-products"
              className="group px-10 py-4 bg-white text-black font-semibold rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-all text-lg"
            >
              Shop the Collection

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 group-hover:translate-x-1 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            {/* Learn More Button - Now redirects to WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/60 hover:bg-white/10 text-white font-medium rounded-2xl transition-all text-lg backdrop-blur-sm flex items-center justify-center"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-10 text-left">

            <div>
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-gray-400 text-sm">
                Premium Products
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-white">98%</p>
              <p className="text-gray-400 text-sm">
                Satisfaction Rate
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-white">24h</p>
              <p className="text-gray-400 text-sm">
                Delivery in Cities
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Product Card */}
      <div className="hidden xl:block absolute bottom-12 right-12 bg-[#0a0f1c] border border-gray-700 rounded-3xl p-5 shadow-2xl max-w-[240px]">

        <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">
          Featured Today
        </div>

        <div className="font-semibold text-lg leading-tight text-white">
          Quantum X Pro Laptop
        </div>

        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-white">
            $1,099
          </span>

          <span className="text-emerald-400 text-sm font-medium">
            -8% OFF
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 text-xs tracking-widest">

        SCROLL TO DISCOVER

        <div className="mt-3 w-5 h-8 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;