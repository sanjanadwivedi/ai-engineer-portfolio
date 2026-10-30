import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { portfolioData } from '../data/portfolioData';
import darkPastelHero from '../assets/sanjana_dark_pastel.png';

const Hero = () => {
  // Audio / Speech State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Typewriter State
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Typewriter Loop
  useEffect(() => {
    const typewriterTexts = portfolioData.personal.typewriterTexts;
    const fullText = typewriterTexts[textIndex];
    const speed = isDeleting ? 40 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
      } else {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  // Voice Intro Synthesis
  const handleToggleAudio = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        window.speechSynthesis.cancel();
        const textToSpeak = `Hello! I am ${portfolioData.personal.name}, an ${portfolioData.personal.role}. ${portfolioData.personal.shortDescription}`;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(
          (v) => v.lang.includes('en') && (v.name.includes('Female') || v.name.includes('Google') || v.name.includes('Zira') || v.name.includes('Samantha') || v.name.includes('Natural'))
        ) || voices.find((v) => v.lang.includes('en'));

        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }

        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        utterance.onend = () => {
          setIsPlayingAudio(false);
        };

        utterance.onerror = () => {
          setIsPlayingAudio(false);
        };

        window.speechSynthesis.speak(utterance);
        setIsPlayingAudio(true);
      }
    } else {
      alert("Audio synthesis is not supported in this browser.");
    }
  };

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen bg-gradient-to-br from-[#1c0b0e] via-[#2a0e13] to-[#0d0406] flex items-center pt-24 pb-12 px-6 md:px-12 overflow-hidden font-sans">
      
      {/* Background Subtle Muted Tech Grid & Ambient Pastel Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#e26d7c15_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#c84b5b]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#9e3343]/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20">
        
        {/* Left Column: Text & Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Role Pill Badge */}
          <div data-aos="fade-down" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2b1016]/90 border border-[#e26d7c]/30 text-[#f29ca7] text-xs font-mono font-semibold mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.6)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e26d7c] animate-pulse"></span>
            {portfolioData.personal.role}
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-black mb-3 tracking-tight leading-none drop-shadow-2xl"
          >
            Hi, I’m <span className="text-[#e57380]">{portfolioData.personal.name}</span>
          </h1>

          {/* Typewriter Subheading */}
          <div 
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-white mb-6 min-h-[40px] flex items-center"
          >
            <span className="text-[#f5c6cb]">{currentText}</span>
            <span className="inline-block w-2.5 h-6 bg-[#e26d7c] ml-1.5 animate-pulse"></span>
          </div>

          {/* Description */}
          <p 
            data-aos="fade-up"
            data-aos-delay="250"
            className="text-[#e0c9cc] text-sm sm:text-base font-normal mb-8 max-w-xl leading-relaxed drop-shadow-sm"
          >
            {portfolioData.personal.shortDescription}
          </p>

          {/* Action Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="350"
            className="flex flex-row flex-wrap items-center gap-4 w-full mb-8"
          >
            <a 
              href="#projects"
              className="px-7 py-3.5 text-xs sm:text-sm rounded-full bg-[#c84b5b] text-white font-bold hover:bg-[#b53c4c] transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(200,75,91,0.4)] inline-block"
            >
              {portfolioData.hero.ctaWork}
            </a>
            
            <a 
              href="#contact"
              className="px-7 py-3.5 text-xs sm:text-sm rounded-full bg-[#1a090c]/80 border border-[#e26d7c]/30 text-[#f5e6e8] font-semibold hover:bg-[#e26d7c] hover:text-black transition-all duration-300 backdrop-blur-md inline-block"
            >
              {portfolioData.hero.ctaResume}
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div 
            data-aos="fade-up"
            data-aos-delay="450"
            className="pt-6 border-t border-[#e26d7c]/20 w-full flex items-center gap-6 text-xs font-mono text-[#d6b5ba]"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#e26d7c] font-bold text-base">8+</span>
              <span>AI Projects</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#e26d7c]/40"></div>
            <div className="flex items-center gap-2">
              <span className="text-[#e26d7c] font-bold text-base">LLMs & RAG</span>
              <span>Specialist</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#e26d7c]/40"></div>
            <div className="flex items-center gap-2">
              <span className="text-[#e26d7c] font-bold text-base">FastAPI</span>
              <span>Backend</span>
            </div>
          </div>

        </div>

        {/* Right Column: Dark Pastel Artwork */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0">
          
          {/* Glowing Muted Ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#c84b5b]/20 to-transparent rounded-full blur-2xl transform scale-95"></div>

          {/* Image Wrapper */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="300"
            className="relative w-full max-w-[420px] lg:max-w-none flex justify-center items-center"
          >
            <img 
              src={darkPastelHero} 
              alt="Sanjana Dwivedi AI Engineer Dark Pastel Illustration" 
              className="w-full max-h-[70vh] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-102"
            />

            {/* Interactive Floating Play Audio Reel Button */}
            <div 
              onClick={handleToggleAudio}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#1a090c]/90 border border-[#e26d7c]/40 hover:border-[#e26d7c] p-3.5 rounded-2xl backdrop-blur-md shadow-2xl flex items-center gap-3 cursor-pointer group hover:bg-[#2b1016] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#c84b5b] flex items-center justify-center text-white shadow-[0_0_15px_rgba(200,75,91,0.6)] group-hover:scale-110 transition-transform">
                {isPlayingAudio ? (
                  <div className="flex items-center gap-0.5 h-4">
                    <span className="w-1 bg-white h-full animate-bounce"></span>
                    <span className="w-1 bg-white h-2/3 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1 bg-white h-4/5 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                ) : (
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>

              <div className="flex flex-col text-left">
                <span className="text-white text-xs font-bold font-mono tracking-wider">
                  {isPlayingAudio ? "Pause Voice" : "Play Reel"}
                </span>
                <span className="text-[10px] text-[#f29ca7] font-mono">
                  {isPlayingAudio ? "● Playing Intro" : "AI Voice Intro"}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
