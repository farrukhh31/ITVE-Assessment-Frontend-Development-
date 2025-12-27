
import React from 'react';
import { BENEFITS, ICON_MAP } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full h-full bg-slate-900 text-white flex items-center py-16 md:py-24 overflow-y-auto custom-scrollbar px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-4 md:space-y-6">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs md:text-sm">Unique Advantages</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Why students prefer ITVE for <span className="text-blue-500">technical education.</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              We focus on a comprehensive educational ecosystem that blends theoretical knowledge with intense practical simulation.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-blue-400 font-bold text-xl md:text-2xl">98%</div>
                <p className="text-slate-300 text-xs md:text-sm">Student satisfaction rate among active learners.</p>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-blue-400 font-bold text-xl md:text-2xl">200+</div>
                <p className="text-slate-300 text-xs md:text-sm">Active industrial partnerships for placements.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pb-8 lg:pb-0">
            {BENEFITS.map((benefit, idx) => (
              <div 
                key={idx} 
                className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-slate-800 hover:bg-slate-800/80 transition-all border border-slate-700 hover:border-blue-500/50 group"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <div className="scale-75 md:scale-100">
                    {ICON_MAP[benefit.icon]}
                  </div>
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{benefit.title}</h4>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
