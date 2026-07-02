import React from 'react';

const Shipping = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="bg-gradient-to-br from-[#0a0f1c] to-black py-28 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Shipping Information</h1>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-[#0a0f1c] rounded-3xl p-10 border border-gray-900">
          <h2 className="text-3xl font-bold mb-10">Delivery Options</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-24 h-20 bg-[#1a2338] rounded-2xl flex items-center justify-center text-3xl">🚚</div>
              <div>
                <h3 className="font-semibold text-lg">Standard Delivery</h3>
                <p className="text-gray-400">2 - 5 business days • Islandwide</p>
                <p className="text-[#4d61fc] font-medium">Free on orders above Rs. 25,000</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-24 h-20 bg-[#1a2338] rounded-2xl flex items-center justify-center text-3xl">⚡</div>
              <div>
                <h3 className="font-semibold text-lg">Express Delivery</h3>
                <p className="text-gray-400">Next day in Colombo &amp; suburbs</p>
                <p className="text-[#4d61fc]">Rs. 499</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;