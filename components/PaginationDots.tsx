
import React from 'react';
import { SectionID } from '../types';
import { NAV_ITEMS } from '../constants';

interface PaginationDotsProps {
  activeSection: SectionID;
  onDotClick: (id: SectionID) => void;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({ activeSection, onDotClick }) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
      {NAV_ITEMS.map((item, index) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onDotClick(item.id as SectionID)}
            className="group relative flex items-center justify-end"
          >
            <div className={`mr-4 transition-all duration-300 transform ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`}>
               <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded border border-white/10 whitespace-nowrap">
                 {item.label}
               </span>
            </div>
            <div className="relative flex items-center justify-center">
              <div 
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  isActive 
                    ? 'bg-blue-500 scale-150 shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                    : 'bg-slate-400/30 group-hover:bg-slate-400'
                }`}
              />
              {isActive && (
                <div className="absolute w-4 h-4 border border-blue-500/50 rounded-full animate-ping" />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default PaginationDots;
