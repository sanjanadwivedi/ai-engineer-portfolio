import React from 'react';
import { portfolioData } from '../data/portfolioData';

// SVG Icons for each category
const getCategoryIcon = (category) => {
  switch (category) {
    case 'AI & GenAI':
      return (
        <svg className="w-5 h-5 text-[#e26d7c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'Backend':
      return (
        <svg className="w-5 h-5 text-[#e26d7c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      );
    case 'Frontend':
      return (
        <svg className="w-5 h-5 text-[#e26d7c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'Database':
      return (
        <svg className="w-5 h-5 text-[#e26d7c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      );
    case 'Machine Learning':
      return (
        <svg className="w-5 h-5 text-[#e26d7c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-[#e26d7c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
  }
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#120507] text-white pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-[#e26d7c]/15">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e26d7c10_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="flex flex-col items-start mb-16">
          <span className="text-[#e26d7c] text-xs font-mono font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e26d7c] animate-pulse"></span>
            // TECHNICAL STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Skills & Expertise
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gradient-to-b from-[#220c11] to-[#1a080c] border border-[#e26d7c]/20 hover:border-[#e26d7c]/50 rounded-3xl p-7 transition-all duration-500 flex flex-col group shadow-xl transform hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(200,75,91,0.15)]"
            >
              {/* Category Header with Icon */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e26d7c]/15">
                <div className="w-10 h-10 rounded-xl bg-[#2b1016] border border-[#e26d7c]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getCategoryIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-bold font-mono text-white tracking-wide">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Badges List */}
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-3 py-1.5 rounded-lg bg-[#140608] border border-[#e26d7c]/20 text-xs font-mono font-medium text-[#e0c9cc] hover:text-white hover:border-[#e26d7c]/60 hover:bg-[#2b1016] transition-all duration-200 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
