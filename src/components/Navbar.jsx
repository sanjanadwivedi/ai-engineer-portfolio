import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-[#140608]/95 py-4 border-b border-[#e26d7c]/20'
          : isScrolled 
            ? 'bg-[#140608]/85 backdrop-blur-md py-4 border-b border-[#e26d7c]/15' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#home" className="text-white text-xl font-mono font-black tracking-tight flex items-center gap-1">
            <span className="text-[#e26d7c]">&lt;</span>
            {portfolioData.personal.logoText}
            <span className="text-[#e26d7c]"> /&gt;</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-[#e0c9cc] hover:text-white font-mono text-xs uppercase tracking-wider relative group transition-colors duration-300"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e26d7c] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-[#c84b5b]/20 border border-[#e26d7c]/40 text-[#f29ca7] font-mono text-xs font-bold hover:bg-[#c84b5b] hover:text-white transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(200,75,91,0.2)]"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[#140608]/95 border-b border-[#e26d7c]/20 shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4 font-mono text-sm">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#e0c9cc] hover:text-[#f29ca7] font-bold border-b border-[#e26d7c]/10 pb-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 pb-2">
             <a 
               href="#contact" 
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-[#c84b5b] text-white font-bold hover:bg-[#b53c4c] transition-colors w-full text-center shadow-lg"
             >
               Get In Touch
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
