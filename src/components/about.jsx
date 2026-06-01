
import React from 'react';
import { Zap, Users, Award, Globe, TrendingUp, Target } from 'lucide-react';

export default function OurStory() {
  return (
    <>
      {/* ==================== OUR STORY HEADER ==================== */}
      <div className="bg-black text-center py-20 px-4 min-h-[400px] flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#081026] border border-[#1e2d5a] px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5 text-[#4f6ef7] fill-[#4f6ef7]/20" />
            <span className="text-[#4f6ef7] text-xs font-semibold tracking-wide">
              Our Story
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Powering Your <span className="text-[#5c7aff]">Digital Life</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-slate-500 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl tracking-wide">
            Since 2015, VoltTech has been at the forefront of consumer electronics retail.
            We believe technology should inspire, empower, and connect. Our mission is to
            make cutting-edge tech accessible to everyone.
          </p>
        </div>
      </div>

      {/* ==================== METRICS GRID ==================== */}
      <div className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {[
            { icon: Users, value: '2M+', label: 'Happy Customers' },
            { icon: Award, value: '50+', label: 'Industry Awards' },
            { icon: Globe, value: '30+', label: 'Countries Served' },
            { icon: TrendingUp, value: '99.2%', label: 'Satisfaction Rate' },
          ].map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-[#070b19] border border-slate-900/40 p-4 rounded-2xl flex items-center justify-center mb-5 w-16 h-16 shadow-inner">
                  <IconComponent className="w-6 h-6 text-[#3b59df]" />
                </div>
                <h3 className="text-white text-3xl font-bold tracking-tight mb-2">
                  {metric.value}
                </h3>
                <p className="text-slate-500 text-sm font-medium tracking-wide">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================== OUR VALUES ==================== */}
      <div className="bg-black py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Our Values
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-normal">
              What drives us every day
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Customer First',
                description: 'Every decision we make starts with our customers. We listen, adapt, and deliver experiences that exceed expectations.',
              },
              {
                icon: Award,
                title: 'Quality Obsessed',
                description: 'We curate only the best products from trusted brands. Every item in our catalog meets our rigorous quality standards.',
              },
              {
                icon: Zap,
                title: 'Innovation Driven',
                description: 'Technology moves fast, and so do we. We are always on the lookout for the next breakthrough to bring to our customers.',
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#040610] border border-slate-900/60 rounded-2xl p-8 flex flex-col items-start transition hover:border-slate-800"
                >
                  <div className="bg-[#0b122c] border border-slate-800/40 p-3 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-5 h-5 text-[#3b59df]" />
                  </div>
                  <h3 className="text-white text-xl font-semibold tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==================== BUILT BY TECH SECTION ==================== */}
      <div className="bg-black min-h-screen flex items-center justify-center p-6 sm:p-12 md:p-16">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Built by Tech Enthusiasts
            </h2>
            <div className="space-y-6 text-slate-500 text-sm sm:text-base font-normal leading-relaxed tracking-wide">
              <p>
                VoltTech was founded by a group of engineers and designers who were
                frustrated with the electronics shopping experience. We set out to build a
                store that treats technology with the respect it deserves — with detailed
                specs, honest reviews, and expert guidance.
              </p>
              <p>
                Today, our team of 200+ passionate experts serves millions of customers
                worldwide, helping them find the perfect tech for their lives.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="bg-[#03050c] border border-slate-950 rounded-3xl p-6 sm:p-8 grid grid-cols-2 gap-4 sm:gap-6 shadow-2xl">
            {[
              { value: '2015', label: 'Founded' },
              { value: '200+', label: 'Team Members' },
              { value: '15K+', label: 'Products' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-[#050917]/60 border border-slate-900/40 rounded-2xl py-10 px-4 flex flex-col items-center justify-center text-center transition duration-300 hover:border-slate-800"
              >
                <span className="text-[#3b59df] text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-slate-500 text-xs sm:text-sm font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}