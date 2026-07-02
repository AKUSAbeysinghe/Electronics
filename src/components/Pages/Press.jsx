import React from 'react';

const PressPage = () => {
  const pressReleases = [
    {
      id: 1,
      date: "June 02, 2026",
      title: "VoltTech Launches Quantum X Pro Series with Revolutionary AI Features",
      excerpt:
        "Our flagship laptop series now comes with next-gen AI optimization and up to 32 hours of battery life.",
      category: "Product Launch",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1200&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      date: "May 15, 2026",
      title: "TechCrunch Names Blade 16 Ultra as Best Gaming Laptop of 2026",
      excerpt:
        "Our premium gaming laptop received outstanding reviews from leading technology publications.",
      category: "Awards",
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1200&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      date: "April 28, 2026",
      title: "Company Expands Global Presence with New Service Centers in Europe",
      excerpt:
        "We are committed to providing faster support and service to our international customers.",
      category: "Company News",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&fit=crop&q=80",
    },
  ];

  const mediaMentions = [
    { logo: "TechCrunch", quote: "“The best premium tech shopping experience in 2026.”", date: "May 2026" },
    { logo: "The Verge", quote: "“Exceptional product quality and customer service.”", date: "April 2026" },
    { logo: "Wired", quote: "“Future-forward gadgets at competitive prices.”", date: "March 2026" },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a0f1c] to-black py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-5 py-2 bg-[#4d61fc]/10 text-[#4d61fc] text-sm font-semibold tracking-widest rounded-full mb-6">
            PRESS & MEDIA
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            In The <span className="text-[#4d61fc]">Spotlight</span>
          </h1>
          <p className="text-gray-400 text-xl">
            Latest news, announcements, and media coverage about VoltTech
          </p>
        </div>
      </section>

      {/* Latest Press Releases */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest Press Releases</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((release) => (
              <div 
                key={release.id}
                className="bg-[#0a0f1c] border border-gray-900 rounded-3xl overflow-hidden hover:border-[#4d61fc] transition-all group"
              >
                <div className="relative h-56 bg-[#1a2338] overflow-hidden">
                  <img 
                    src={release.image} 
                    alt={release.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center text-6xl text-gray-700">📰</div>
                      `;
                    }}
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-medium text-[#4d61fc] uppercase tracking-wider">
                      {release.category}
                    </span>
                    <span className="text-xs text-gray-500">{release.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold leading-tight mb-4 line-clamp-2 group-hover:text-[#4d61fc] transition-colors">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-400 text-[15px] line-clamp-3">
                    {release.excerpt}
                  </p>

                  <button className="mt-6 text-[#4d61fc] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    Read Full Story →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="py-20 px-6 bg-[#05080f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured In</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mediaMentions.map((mention, index) => (
              <div 
                key={index}
                className="bg-[#0a0f1c] border border-gray-900 p-10 rounded-3xl text-center hover:border-[#4d61fc] transition-all"
              >
                <div className="text-3xl font-bold text-gray-400 mb-6 tracking-wider">{mention.logo}</div>
                <p className="italic text-gray-300 mb-6 text-lg">“{mention.quote}”</p>
                <p className="text-xs text-gray-500">{mention.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-[#0a0f1c] border border-gray-900 rounded-3xl p-16">
          <h2 className="text-4xl font-bold mb-6">Press Kit</h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto">
            Download our latest logos, product images, brand guidelines, and fact sheets.
          </p>
          
          <button className="bg-[#4d61fc] hover:bg-[#5a71ff] text-white px-10 py-4 rounded-2xl font-semibold transition-all text-lg">
            Download Press Kit (PDF)
          </button>
        </div>
      </section>

      {/* Contact for Press */}
      <section className="py-20 px-6 bg-[#05080f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Our Press Team</h2>
          <p className="text-gray-400 mb-10">
            For media inquiries, interviews, or partnership opportunities.
          </p>
          
          <div className="bg-[#0a0f1c] rounded-3xl p-10 inline-block">
            <p className="text-[#4d61fc] font-medium mb-2">press@volttech.com</p>
            <p className="text-gray-400">Response time: Within 24 hours</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressPage;