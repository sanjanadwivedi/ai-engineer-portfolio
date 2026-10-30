import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectPortalView = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  const handleLaunchLive = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[99999] bg-[#0c0406] text-white overflow-y-auto font-sans selection:bg-[#e26d7c] selection:text-white"
    >
      {/* Background Marvel Portal Ring Glow Effect */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#c84b5b]/30 via-[#e26d7c]/15 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="fixed inset-0 bg-[radial-gradient(#e26d7c12_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>

      {/* Top Floating Portal Bar */}
      <div className="sticky top-0 z-50 bg-[#0c0406]/90 backdrop-blur-md border-b border-[#e26d7c]/20 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#e26d7c] animate-ping"></div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#f29ca7] uppercase">
            // LIVE PROJECT PORTAL :: #{project.number}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <button
              onClick={handleLaunchLive}
              className="px-5 py-2 rounded-full bg-[#c84b5b] hover:bg-[#b53c4c] text-white font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(200,75,91,0.6)] flex items-center gap-2 transform hover:scale-105"
            >
              <span>Launch Portal</span>
              <span>🚀</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-[#2b1016] border border-[#e26d7c]/40 text-[#f29ca7] font-mono text-xs font-bold hover:bg-[#c84b5b] hover:text-white transition-all"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-12 relative z-10">
        
        {/* Header Title & Badge */}
        <div className="flex flex-col gap-4 items-start">
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 rounded-full bg-[#2b1016] border border-[#e26d7c]/40 text-[#f29ca7] text-xs font-mono font-bold shadow-inner">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-[#d6b5ba]">Live AI Application</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-[#e0c9cc] text-lg sm:text-xl font-normal leading-relaxed max-w-3xl">
            {project.longDescription || project.description}
          </p>

          {/* Launch Direct Button */}
          {project.liveUrl && (
            <button
              onClick={handleLaunchLive}
              className="mt-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#c84b5b] to-[#e26d7c] text-white font-mono font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(226,109,124,0.6)] transform hover:scale-105 flex items-center gap-3"
            >
              <span>Launch Live Project Portal</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          )}
        </div>

        {/* Hero Screenshot / Architecture Banner */}
        {project.image && (
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={handleLaunchLive}
            className="w-full rounded-3xl overflow-hidden border-2 border-[#e26d7c]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-[#170609] relative group cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[550px] object-cover object-top transform group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0406] via-transparent to-transparent opacity-60"></div>
            
            {/* Click to Launch Banner Overlay */}
            <div className="absolute inset-0 bg-[#0c0406]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-6 py-3 rounded-full bg-[#c84b5b] text-white font-mono font-bold text-sm shadow-[0_0_25px_rgba(200,75,91,0.8)] flex items-center gap-2">
                <span>Click to Launch Live Demo</span>
                <span>🚀</span>
              </span>
            </div>
          </motion.div>
        )}

        {/* Key Features Grid */}
        {project.keyFeatures && (
          <div className="bg-[#170609] border border-[#e26d7c]/25 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xs font-mono font-bold text-[#f29ca7] uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e26d7c]"></span>
              Core System Features & Capabilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="bg-[#240a0f] border border-[#e26d7c]/20 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c84b5b]/30 text-[#e26d7c] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm font-mono text-[#e0c9cc] leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="bg-[#170609] border border-[#e26d7c]/25 rounded-3xl p-8 shadow-2xl flex flex-col gap-4">
          <h3 className="text-xs font-mono font-bold text-[#d6b5ba] uppercase tracking-widest">
            Technologies & Tools Used
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-4 py-2 rounded-xl bg-[#240a0f] border border-[#e26d7c]/30 text-xs font-mono text-white font-semibold shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="pt-8 border-t border-[#e26d7c]/20 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#d6b5ba]">
            <span className="w-2 h-2 rounded-full bg-[#e26d7c]"></span>
            <span>Built by Sanjana Dwivedi • AI Engineer</span>
          </div>

          <div className="flex items-center gap-4">
            {project.liveUrl && (
              <button
                onClick={handleLaunchLive}
                className="px-8 py-3.5 rounded-full bg-[#c84b5b] hover:bg-[#b53c4c] text-white font-mono text-xs font-bold transition-all shadow-[0_0_25px_rgba(200,75,91,0.5)] transform hover:scale-105 flex items-center gap-2"
              >
                <span>Launch Live Application</span>
                <span>🚀</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-6 py-3.5 rounded-full bg-[#2b1016] border border-[#e26d7c]/40 text-[#f29ca7] font-mono text-xs font-bold transition-all hover:bg-white hover:text-black"
            >
              Close Portal
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectPortalView;
