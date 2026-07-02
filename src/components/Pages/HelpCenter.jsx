import React from 'react';

const HelpCenter = () => {
  const faqs = [
    { q: "How do I track my order?", a: "You can track your order using the tracking link sent to your email or by logging into your account." },
    { q: "What payment methods do you accept?", a: "We accept Visa, Mastercard, American Express, Bank Transfers, and Cash on Delivery." },
    { q: "How long does delivery take?", a: "Standard delivery takes 2-5 business days. Express delivery is available in selected areas." },
    { q: "Can I cancel my order?", a: "Yes, you can cancel your order within 24 hours of placing it." },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="bg-gradient-to-br from-[#0a0f1c] to-black py-28 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Help Center</h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">Find answers to common questions and get support</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#0a0f1c] border border-gray-900 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-[#4d61fc]">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Still need help?</p>
          <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center gap-3 bg-[#4d61fc] hover:bg-[#5a71ff] px-10 py-4 rounded-2xl font-medium">
            Chat with Support on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;