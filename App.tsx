
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import Admissions from './components/Admissions';
import PaginationDots from './components/PaginationDots';
import AdvisorBot from './components/AdvisorBot';
import { SectionID } from './types';

/**
 * PAGINATION LOGIC EXPLANATION:
 * 1. IntersectionObserver: We use the native Browser API to detect which section 
 *    occupies the majority of the viewport (threshold: 0.5).
 * 2. Scroll-Snap: The container uses CSS 'scroll-snap-type: y mandatory' to 
 *    ensure users always land perfectly on a section boundary.
 * 3. State Sync: 'activeSection' state is updated via the observer, which in turn
 *    highlights the corresponding Dot and Navbar items.
 * 4. Programmatic Scroll: Navigating via clicks uses 'scrollIntoView({ behavior: 'smooth' })',
 *    leveraging standard browser smooth scrolling for performance.
 */

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionID>(SectionID.Hero);
  const sections = Object.values(SectionID);
  const activeIndex = sections.indexOf(activeSection);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionID);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: SectionID) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen bg-slate-900 overflow-hidden">
      {/* Global Navigation Components */}
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      <PaginationDots activeSection={activeSection} onDotClick={scrollToSection} />
      <AdvisorBot />

      {/* Page Progress Indicator */}
      <div className="fixed left-8 bottom-8 z-50 pointer-events-none hidden md:block">
        <div className="flex items-center gap-4 text-white/40 font-mono text-sm tracking-widest">
          <span className="text-blue-500 font-bold text-lg">0{activeIndex + 1}</span>
          <div className="w-12 h-[1px] bg-white/20"></div>
          <span>0{sections.length}</span>
        </div>
      </div>

      {/* Main Snap Container */}
      <main className="snap-container">
        <div id={SectionID.Hero} className="snap-section">
          <Hero 
            onCtaClick={() => scrollToSection(SectionID.Programs)} 
            onScrollNext={() => scrollToSection(SectionID.About)}
          />
        </div>
        
        <div id={SectionID.About} className="snap-section">
          <About />
        </div>

        <div id={SectionID.Programs} className="snap-section">
          <Programs />
        </div>

        <div id={SectionID.Benefits} className="snap-section">
          <WhyChooseUs />
        </div>

        <div id={SectionID.Admissions} className="snap-section">
          <Admissions />
        </div>
      </main>
    </div>
  );
};

export default App;
