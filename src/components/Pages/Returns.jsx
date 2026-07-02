import React from 'react';

const Returns = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="bg-gradient-to-br from-[#0a0f1c] to-black py-28 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Returns Policy</h1>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12 text-gray-300">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-white">30-Day Return Policy</h2>
          <p className="text-lg">We offer a 30-day return window for most products. Items must be unused, in original packaging, and in resalable condition.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0a0f1c] p-8 rounded-3xl border border-gray-900">
            <h3 className="font-semibold text-[#4d61fc] mb-4">Eligible for Return</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Defective products</li>
              <li>✓ Wrong item received</li>
              <li>✓ Damaged during delivery</li>
            </ul>
          </div>
          <div className="bg-[#0a0f1c] p-8 rounded-3xl border border-gray-900">
            <h3 className="font-semibold text-red-400 mb-4">Not Eligible</h3>
            <ul className="space-y-2 text-sm">
              <li>✗ Opened software &amp; games</li>
              <li>✗ Used wearables &amp; earphones</li>
              <li>✗ Customized products</li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8">
          <a href="https://wa.me/94771234567?text=Hi,%20I%20want%20to%20return%20an%20item" 
             target="_blank" rel="noopener noreferrer"
             className="inline-flex bg-[#4d61fc] hover:bg-[#5a71ff] px-10 py-4 rounded-2xl font-medium">
            Start a Return via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Returns;