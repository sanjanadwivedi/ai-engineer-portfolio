import React from 'react';
import { portfolioData } from '../data/portfolioData';
import sanjanaPhoto from '../assets/sanjana_photo.jpg';

const About = () => {
  return (
    <section id="about" className="bg-[#16080b] text-white pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-[#e26d7c]/15">
      
      {/* Background Subtle Tech Grid & Pastel Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#e26d7c12_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#c84b5b]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Badge & Title */}
        <div data-aos="fade-up" className="flex flex-col items-start mb-12">
          <span className="text-[#e26d7c] text-xs font-mono font-bold tracking-widest uppercase mb-2">
            // GET TO KNOW ME
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {portfolioData.about.heading}
          </h2>
        </div>

        {/* Main Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: ID Badge Card with Real Photo */}
          <div data-aos="fade-right" className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <div className="relative w-full max-w-[320px]">
              
              {/* Glowing Dark Rose Backlight */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#c84b5b] to-[#9e3343] rounded-3xl blur-xl opacity-30 group-hover:opacity-80 transition duration-1000"></div>

              {/* ID Card Wrapper */}
              <div className="relative bg-[#1f0b0f] border border-[#e26d7c]/30 rounded-3xl p-5 shadow-2xl flex flex-col items-center">
                
                {/* Lanyard Cutout Slot */}
                <div className="w-12 h-2.5 bg-[#120507] border border-[#e26d7c]/20 rounded-full mb-4 shadow-inner flex items-center justify-center">
                  <div className="w-6 h-1 bg-[#e26d7c]/60 rounded-full"></div>
                </div>

                {/* Photo Container */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-[#e26d7c]/40 bg-[#120507] mb-5 shadow-lg relative group">
                  <img 
                    src={sanjanaPhoto} 
                    alt="Sanjana Dwivedi" 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16080b]/50 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Card Title & Role */}
                <div className="w-full text-center">
                  <h3 className="text-xl font-bold font-mono text-white tracking-wide">
                    {portfolioData.personal.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2b1016] border border-[#e26d7c]/40 text-[#f29ca7] text-xs font-mono font-semibold mt-2">
                    <span className="w-2 h-2 rounded-full bg-[#e26d7c] animate-pulse"></span>
                    {portfolioData.personal.role}
                  </div>
                </div>

                {/* Card Footer Details */}
                <div className="w-full mt-4 pt-3 border-t border-[#e26d7c]/15 flex justify-between items-center text-[11px] font-mono text-[#d6b5ba]">
                  <span>ID: AI-8824</span>
                  <span className="text-emerald-400 font-bold">● VERIFIED</span>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Bio Paragraphs & Details */}
          <div data-aos="fade-left" className="lg:col-span-7 flex flex-col gap-6 text-[#e0c9cc] text-base md:text-lg leading-relaxed font-normal">
            {portfolioData.about.description.map((paragraph, index) => (
              <p key={index} className="bg-[#1f0b0f]/80 border border-[#e26d7c]/20 p-6 rounded-2xl backdrop-blur-sm hover:border-[#e26d7c]/40 transition-colors">
                {paragraph}
              </p>
            ))}
          </div>

        </div>

        {/* Stats Grid Section */}
        <div data-aos="fade-up" className="mt-16 pt-12 border-t border-[#e26d7c]/15">
          <h3 className="text-xs font-mono font-bold text-[#d6b5ba] uppercase tracking-widest mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e26d7c]"></span>
            Key Metrics & Specializations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.stats.map((stat, idx) => {
              const isShort = stat.value.length <= 5;
              return (
                <div 
                  key={idx}
                  className="bg-[#1f0b0f] border border-[#e26d7c]/20 hover:border-[#e26d7c]/50 rounded-2xl p-6 flex flex-col justify-between min-h-[135px] transition-all duration-300 group shadow-lg transform hover:-translate-y-1"
                >
                  <div className="flex flex-col justify-center flex-1 mb-3">
                    <span 
                      className={`font-black text-[#e57380] group-hover:text-[#f29ca7] transition-colors ${
                        isShort ? 'text-3xl sm:text-4xl' : 'text-sm sm:text-base leading-snug font-bold font-mono'
                      }`}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#d6b5ba] uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
