import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-red-500 selection:text-white">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceEducation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
