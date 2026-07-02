import React from 'react';

const Warranty = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="bg-gradient-to-br from-[#0a0f1c] to-black py-28 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Warranty Policy</h1>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        <div className="bg-[#0a0f1c] border border-gray-900 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-8">Manufacturer Warranty</h2>
          <ul className="space-y-6 text-gray-300">
            <li className="flex gap-4">
              <span className="text-[#4d61fc] font-bold text-xl">01</span>
              <div>
                <strong className="block">1 Year Warranty</strong>
                <p>on most electronic products</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-[#4d61fc] font-bold text-xl">02</span>
              <div>
                <strong className="block">2-3 Years Warranty</strong>
                <p>on laptops, smartphones &amp; premium audio</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <a href="https://wa.me/94771234567?text=Hi,%20I%20have%20a%20warranty%20claim" 
             target="_blank" rel="noopener noreferrer"
             className="inline-flex bg-[#4d61fc] hover:bg-[#5a71ff] px-12 py-4 rounded-2xl font-medium text-lg">
            Claim Warranty via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Warranty;