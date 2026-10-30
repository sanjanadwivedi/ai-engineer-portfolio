import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const steps = portfolioData.preloader;
    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 600);
          return prev;
        }
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#140608] z-[100000] flex flex-col items-center justify-center font-mono px-6"
        >
          {/* AI Pulsing Glow Circle */}
          <div className="relative mb-8 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-[#e26d7c]/30 animate-ping absolute"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#c84b5b] to-[#e26d7c] flex items-center justify-center shadow-[0_0_40px_rgba(226,109,124,0.6)]">
              <span className="text-white font-black text-xl tracking-wider">AI</span>
            </div>
          </div>

          {/* Animated Loading Text */}
          <motion.div
            key={stepIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-[#f29ca7] text-lg md:text-2xl font-bold tracking-widest text-center"
          >
            {portfolioData.preloader[stepIndex]}
          </motion.div>

          {/* Progress Line */}
          <div className="w-48 md:w-64 h-1.5 bg-[#260e12] rounded-full mt-6 overflow-hidden border border-[#e26d7c]/20">
            <motion.div
              className="h-full bg-gradient-to-r from-[#c84b5b] to-[#e26d7c] shadow-[0_0_15px_#e26d7c]"
              initial={{ width: "0%" }}
              animate={{ width: `${((stepIndex + 1) / portfolioData.preloader.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <div className="mt-4 text-xs text-[#d6b5ba] tracking-widest uppercase">
            {portfolioData.personal.name} • {portfolioData.personal.role}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
