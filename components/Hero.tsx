
import React from 'react';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  onScrollNext: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onScrollNext }) => {
  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-hidden bg-slate-900 px-4">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-blue-600 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-indigo-600 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-700"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-medium">
            <CheckCircle2 size={14} className="md:w-4 md:h-4" />
            <span>ITVE Admissions Open 2024-25</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1]">
            Crafting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Future of Skills</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed">
            World-class vocational training designed to empower the next generation of engineers, creators, and innovators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button 
              onClick={onCtaClick}
              className="group flex items-center justify-center gap-2 bg-blue-600 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40 active:scale-95"
            >
              Explore Programs
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-slate-800 text-slate-200 border border-slate-700 px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-slate-700 transition-all active:scale-95">
              Watch Tour
            </button>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="relative z-10 rounded-3xl overflow-hidden border-4 md:border-8 border-slate-800 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" 
              alt="Technical Training" 
              className="w-full h-auto min-h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          </div>
          
          {/* Decorative Stat Card */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 md:p-6 rounded-2xl shadow-2xl animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Job Ready Rate</p>
                <p className="text-xl md:text-2xl font-bold text-slate-900">98.4%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={onScrollNext}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 text-white/50 hover:text-white transition-colors animate-scroll-hint"
      >
        <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Scroll Down</span>
        <ChevronDown size={16} className="md:w-5 md:h-5" />
      </button>
    </section>
  );
};

export default Hero;
