import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import PortalCanvas from './PortalCanvas';

const Projects = () => {
  // Portal State
  const [clickOrigin, setClickOrigin] = useState({ x: 0, y: 0 });
  const [isPortalAnimating, setIsPortalAnimating] = useState(false);
  const [targetUrl, setTargetUrl] = useState(null);

  const handleLaunchProject = (e, project) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;

    setClickOrigin({ x, y });
    setTargetUrl(project.liveUrl);
    setIsPortalAnimating(true);
  };

  const handlePortalComplete = () => {
    setIsPortalAnimating(false);
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="bg-[#16080b] text-white pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-[#e26d7c]/15">
      
      {/* Marvel Portal Particle Canvas Animation */}
      {isPortalAnimating && (
        <PortalCanvas
          originX={clickOrigin.x}
          originY={clickOrigin.y}
          onPortalComplete={handlePortalComplete}
        />
      )}

      {/* Ambient Backdrop Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#c84b5b]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#e26d7c]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="flex flex-col items-start mb-16">
          <span className="text-[#e26d7c] text-xs font-mono font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e26d7c] animate-pulse"></span>
            // FEATURED WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            AI Projects & Applications
          </h2>
          <p className="text-[#e0c9cc] text-sm md:text-base mt-2">
            Click any project card or arrow to trigger the Marvel Portal and launch the live application directly.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              onClick={(e) => handleLaunchProject(e, project)}
              className="bg-gradient-to-b from-[#220c11] to-[#1a080c] border border-[#e26d7c]/25 rounded-3xl p-8 hover:border-[#e26d7c]/60 transition-all duration-500 flex flex-col justify-between group shadow-2xl relative overflow-hidden transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(200,75,91,0.3)] cursor-pointer"
            >
              {/* Corner Ambient Glow Effect */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br from-[#e26d7c]/20 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>

              <div>
                {/* Top Row: Number & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-mono font-black text-[#855960] group-hover:text-[#e57380] transition-colors">
                    {project.number}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-[#2b1016] border border-[#e26d7c]/35 text-[#f29ca7] text-xs font-mono font-bold shadow-inner flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e26d7c] animate-ping"></span>
                    {project.badge}
                  </span>
                </div>

                {/* Title & Interactive Marvel Portal Arrow Button */}
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-[#f29ca7] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <div 
                    title="Launch Live Application"
                    className="w-11 h-11 rounded-full bg-[#2b1016] border border-[#e26d7c]/40 flex items-center justify-center group-hover:bg-[#c84b5b] group-hover:border-transparent transition-all duration-300 shadow-[0_0_15px_rgba(226,109,124,0.3)]"
                  >
                    <svg className="w-5 h-5 text-[#e26d7c] group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </h3>

                {/* Description */}
                <p className="text-[#e0c9cc] text-sm leading-relaxed mb-8 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Bottom Section: Technologies */}
              <div className="pt-6 border-t border-[#e26d7c]/15 flex flex-col gap-4">
                <div className="text-[11px] font-mono font-bold text-[#d6b5ba] uppercase tracking-widest">
                  Stack
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-[#140608] border border-[#e26d7c]/20 text-xs font-mono text-[#e0c9cc] hover:border-[#e26d7c]/50 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Projects;
