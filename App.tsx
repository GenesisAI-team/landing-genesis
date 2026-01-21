import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CalculatorSection from './components/CalculatorSection';
import ProcessSection from './components/ProcessSection';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress Logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white font-mono selection:bg-neon selection:text-black">
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-[3px] bg-neon z-[60] shadow-[0_0_10px_#ff652e]" style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.1s linear' }}></div>

      {/* CRT Scanline Overlay - Kept Global */}
      <div className="fixed inset-0 z-50 pointer-events-none scanlines opacity-30"></div>

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <HeroSection />
          <ServicesSection />
          <CalculatorSection />
          <ProcessSection />
          {/* Contact & Footer Section */}
          <ContactFooter />
        </main>
      </div>
      
    </div>
  );
};

export default App;