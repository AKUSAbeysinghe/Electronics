import React from 'react';
import { Heart, ShieldCheck, Sparkles, Star } from 'lucide-react';

const stats = [
  { label: 'Active members', value: '2M+', icon: <Heart className="w-6 h-6" /> },
  { label: 'Partner brands', value: '350+', icon: <ShieldCheck className="w-6 h-6" /> },
  { label: 'Locations', value: '10K+', icon: <Sparkles className="w-6 h-6" /> },
  { label: 'Avg. rating', value: '4.9', icon: <Star className="w-6 h-6" /> },
];

const StatsSection = () => {
  return (
    // <div className="flex flex-wrap justify-between gap-8 py-12 px-8">
    <div className="flex flex-wrap justify-between gap-8 py-12 px-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-4">
          
          {/* Icon Container */}
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#F0EFE9] text-[#2E7D56]">
            {stat.icon}
          </div>
          
          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default StatsSection;