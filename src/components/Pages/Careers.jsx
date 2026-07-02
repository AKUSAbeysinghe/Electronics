import React from 'react';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      experience: "4+ years",
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      experience: "3+ years",
    },
    {
      id: 3,
      title: "Customer Support Executive",
      department: "Customer Success",
      location: "Colombo, Sri Lanka (Hybrid)",
      type: "Full-time",
      experience: "1+ years",
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      experience: "5+ years",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a0f1c] to-black py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-5 py-2 bg-[#4d61fc]/10 text-[#4d61fc] text-sm font-semibold tracking-widest rounded-full mb-6">
            JOIN OUR TEAM
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Build the <span className="text-[#4d61fc]">Future</span> with Us
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            We're on a mission to redefine technology retail in Sri Lanka. 
            Come grow with a passionate team that loves innovation.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why VoltTech?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                desc: "Work on cutting-edge products and latest technologies.",
                icon: "⚡"
              },
              {
                title: "Growth Opportunities",
                desc: "Fast-growing company with clear career progression.",
                icon: "📈"
              },
              {
                title: "Great Culture",
                desc: "Collaborative, fun, and supportive work environment.",
                icon: "👥"
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#0a0f1c] border border-gray-900 rounded-3xl p-10 hover:border-[#4d61fc] transition-all text-center">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 bg-[#05080f]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold">Open Positions</h2>
            <p className="text-gray-400">We’re always looking for great talent</p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job) => (
              <div 
                key={job.id}
                className="bg-[#0a0f1c] border border-gray-900 rounded-3xl p-8 hover:border-[#4d61fc] transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <h3 className="text-2xl font-semibold group-hover:text-[#4d61fc] transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-3">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.experience}</span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open(`https://wa.me/94771234567?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(job.title)}%20position.`, '_blank')}
                  className="bg-[#4d61fc] hover:bg-[#5a71ff] px-8 py-3.5 rounded-2xl font-medium transition-all whitespace-nowrap"
                >
                  Apply via WhatsApp
                </button>
              </div>
            ))}
          </div>

          {openPositions.length === 0 && (
            <p className="text-center text-gray-400 py-16 text-xl">
              No open positions at the moment. Please check back later!
            </p>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-[#0a0f1c] border border-gray-900 rounded-3xl p-16">
          <h2 className="text-4xl font-bold mb-6">Don't see your role?</h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto">
            We're always interested in talented people. Send us your CV and tell us how you'd like to contribute.
          </p>
          
          <button 
            onClick={() => window.open('https://wa.me/94771234567?text=Hi,%20I%27d%20like%20to%20join%20the%20VoltTech%20team.', '_blank')}
            className="bg-[#4d61fc] hover:bg-[#5a71ff] px-12 py-4 rounded-2xl font-semibold text-lg transition-all inline-flex items-center gap-3"
          >
            Send Your CV on WhatsApp
            <span className="text-xl">→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;