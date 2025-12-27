
import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { SectionID } from '../types';

interface NavbarProps {
  activeSection: SectionID;
  onNavClick: (id: SectionID) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 px-6 py-3">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavClick(SectionID.Hero)}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
            <GraduationCap size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            ITVE <span className="text-blue-600">Academy</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id as SectionID)}
              className={`text-sm font-semibold transition-colors duration-300 ${
                activeSection === item.id 
                  ? 'text-blue-600' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => onNavClick(SectionID.Admissions)}
            className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 bg-white rounded-2xl shadow-2xl border border-slate-100 md:hidden p-6 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick(item.id as SectionID);
                  setIsOpen(false);
                }}
                className={`text-left py-3 text-lg font-medium border-b border-slate-50 last:border-none ${
                  activeSection === item.id ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                onNavClick(SectionID.Admissions);
                setIsOpen(false);
              }}
              className="mt-2 bg-blue-600 text-white w-full py-4 rounded-xl font-bold"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
