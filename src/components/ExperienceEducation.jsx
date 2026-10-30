import React from 'react';
import { portfolioData } from '../data/portfolioData';

const ExperienceEducation = () => {
  return (
    <section id="experience" className="bg-[#120507] text-white pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-[#e26d7c]/15">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e26d7c10_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Experience */}
          <div data-aos="fade-right">
            <div className="flex flex-col items-start mb-10">
              <span className="text-[#e26d7c] text-xs font-mono font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e26d7c] animate-pulse"></span>
                // CAREER PATH
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Work Experience
              </h2>
            </div>

            <div className="bg-gradient-to-b from-[#220c11] to-[#1a080c] border border-[#e26d7c]/25 rounded-3xl p-8 hover:border-[#e26d7c]/50 transition-all duration-500 relative shadow-2xl transform hover:-translate-y-1.5">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#e26d7c]/15">
                <div>
                  <h3 className="text-2xl font-black text-white">
                    {portfolioData.experience.role}
                  </h3>
                  <span className="text-xs font-mono text-[#e57380] font-semibold">Generative AI & Scalable Systems</span>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#2b1016] border border-[#e26d7c]/40 text-[#f29ca7] text-xs font-mono font-bold shadow-inner">
                  Present
                </span>
              </div>

              <p className="text-[#e0c9cc] text-sm leading-relaxed font-normal mb-6">
                {portfolioData.experience.description}
              </p>

              {/* Highlights Bullet List */}
              <div className="flex flex-col gap-2.5 font-mono text-xs text-[#d6b5ba]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e26d7c]"></span>
                  <span>End-to-End LLM Applications & Prompt Pipelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e26d7c]"></span>
                  <span>Autonomous AI Agents with LangChain & LangGraph</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e26d7c]"></span>
                  <span>FastAPI & PostgreSQL Backend Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education */}
          <div data-aos="fade-left">
            <div className="flex flex-col items-start mb-10">
              <span className="text-[#e26d7c] text-xs font-mono font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e26d7c] animate-pulse"></span>
                // ACADEMIC BACKGROUND
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Education
              </h2>
            </div>

            <div className="bg-gradient-to-b from-[#220c11] to-[#1a080c] border border-[#e26d7c]/25 rounded-3xl p-8 hover:border-[#e26d7c]/50 transition-all duration-500 relative shadow-2xl transform hover:-translate-y-1.5">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#e26d7c]/15">
                <span className="text-xs font-mono font-bold text-[#e57380] bg-[#2b1016] px-3 py-1 rounded-full border border-[#e26d7c]/30">
                  {portfolioData.education.years}
                </span>
                <span className="text-xs font-mono text-[#d6b5ba] uppercase tracking-wider">
                  B.Sc. CS (Hons)
                </span>
              </div>

              <h3 className="text-xl font-black text-white mb-3 leading-tight">
                {portfolioData.education.degree}
              </h3>

              <p className="text-[#e0c9cc] font-medium text-sm mb-1">
                {portfolioData.education.institution}
              </p>
              <p className="text-[#d6b5ba] font-mono text-xs">
                {portfolioData.education.university}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceEducation;
