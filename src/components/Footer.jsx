import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-[#0f0406] text-[#d6b5ba] py-12 px-6 md:px-12 w-full font-mono text-xs border-t border-[#e26d7c]/15">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Author info */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="text-white font-bold text-sm">
            Designed & Developed by {portfolioData.footer.author}
          </p>
          <p className="text-[#b58c92] text-xs">
            {portfolioData.footer.credits}
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-[#d6b5ba]">
          <a 
            href={portfolioData.contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#e57380] transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href={portfolioData.contact.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#e57380] transition-colors"
          >
            GitHub
          </a>
          <a 
            href={`mailto:${portfolioData.contact.email}`} 
            className="hover:text-[#e57380] transition-colors"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[#a37980] text-[11px] text-center md:text-right">
          &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
