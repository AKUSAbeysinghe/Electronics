import React from 'react';

const WarrantyPage = () => {
  const warrantyFeatures = [
    {
      title: "2-Year Comprehensive Warranty",
      desc: "All our products come with a minimum 2-year manufacturer warranty.",
      icon: "🛡️",
    },
    {
      title: "Free Repairs & Replacements",
      desc: "Covers manufacturing defects, hardware failure, and performance issues.",
      icon: "🔧",
    },
    {
      title: "Quick Claim Process",
      desc: "Submit your claim online and get resolution within 48 hours.",
      icon: "⚡",
    },
    {
      title: "Nationwide Service",
      desc: "Authorized service centers available across the country.",
      icon: "📍",
    },
  ];

  const coveredItems = [
    "Manufacturing defects",
    "Hardware malfunctions",
    "Battery performance issues",
    "Display & screen defects",
    "Overheating problems",
  ];

  const notCovered = [
    "Physical damage due to misuse",
    "Liquid damage",
    "Unauthorized repairs",
    "Normal wear and tear",
    "Software issues or viruses",
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a0f1c] to-black py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#4d61fc]/10 border border-[#4d61fc]/30 rounded-full px-6 py-2 mb-6">
            <span className="text-2xl">🛡️</span>
            <span className="font-semibold tracking-widest text-[#4d61fc]">PREMIUM PROTECTION</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Warranty You Can <span className="text-[#4d61fc]">Trust</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Peace of mind with every purchase. We stand behind the quality of our products.
          </p>
        </div>
      </section>

      {/* Warranty Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {warrantyFeatures.map((item, index) => (
              <div 
                key={index}
                className="bg-[#0a0f1c] border border-gray-900 rounded-3xl p-8 hover:border-[#4d61fc]/40 transition-all group"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#4d61fc] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-20 px-6 bg-[#05080f]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* What's Covered */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              ✅ <span>What’s Covered</span>
            </h2>
            <div className="space-y-4">
              {coveredItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-[#0a0f1c] p-5 rounded-2xl">
                  <div className="w-6 h-6 rounded-full bg-[#4d61fc]/20 flex items-center justify-center text-[#4d61fc] text-sm mt-0.5">✓</div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What's Not Covered */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              ❌ <span>What’s Not Covered</span>
            </h2>
            <div className="space-y-4">
              {notCovered.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-[#0a0f1c] p-5 rounded-2xl">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 text-sm mt-0.5">✕</div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How to Claim Warranty</h2>
          
          <div className="space-y-8">
            {[
              { step: "01", title: "Submit Your Claim", desc: "Visit our support page and fill out the warranty claim form with your order ID and issue details." },
              { step: "02", title: "Upload Documents", desc: "Upload your invoice, product photos, and serial number." },
              { step: "03", title: "Get Confirmation", desc: "Our team will review and approve your claim within 24-48 hours." },
              { step: "04", title: "Repair or Replacement", desc: "We’ll arrange pickup or direct you to the nearest service center." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-[#0a0f1c] p-7 rounded-3xl border border-gray-900">
                <div className="text-4xl font-bold text-[#4d61fc]">{item.step}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Final CTA */}
      <section className="py-20 px-6 bg-[#05080f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gray-400 mb-10">Our customer support team is ready to help you.</p>
          
          <button className="bg-[#4d61fc] hover:bg-[#5a71ff] px-10 py-4 rounded-2xl font-semibold text-lg transition-all">
            Contact Support
          </button>

          <p className="text-sm text-gray-500 mt-16">
            Warranty is valid only for products purchased from our official website.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WarrantyPage;