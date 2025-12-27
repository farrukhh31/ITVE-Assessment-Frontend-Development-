
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="w-full h-full bg-white flex items-center justify-center py-12 md:py-20 overflow-y-auto custom-scrollbar">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative group hidden sm:block">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=500" 
              className="rounded-2xl shadow-lg mt-8 h-48 sm:h-64 md:h-80 object-cover transform transition-transform group-hover:translate-y-2" 
              alt="Students" 
            />
            <img 
              src="https://images.unsplash.com/photo-1544650039-2288001712a3?auto=format&fit=crop&q=80&w=500" 
              className="rounded-2xl shadow-lg h-48 sm:h-64 md:h-80 object-cover transform transition-transform group-hover:-translate-y-2" 
              alt="Learning" 
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
        </div>

        <div className="space-y-5 md:space-y-6">
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-blue-50 text-blue-600 rounded-lg text-xs md:text-sm font-bold uppercase tracking-widest">
            Our Legacy
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Bridging Potential with <span className="text-blue-600 decoration-blue-200 underline-offset-8">Industry Ready</span> Skills.
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Founded with a vision to revolutionize vocational education in Pakistan, ITVE is now a premier hub for technical excellence. We cultivate craftsmen, engineers, and digital pioneers who lead the market.
          </p>
          
          <div className="grid grid-cols-2 gap-6 md:gap-8 pt-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-2xl md:text-3xl font-bold text-slate-900">25+</h4>
              <p className="text-slate-500 text-xs md:text-sm font-medium">Professional Courses</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-2xl md:text-3xl font-bold text-slate-900">15k+</h4>
              <p className="text-slate-500 text-xs md:text-sm font-medium">Successful Alumni</p>
            </div>
          </div>

          <div className="pt-6 md:pt-8 border-t border-slate-100 italic text-slate-500 text-sm md:text-base">
            "We empower every student with the technical mastery required to excel globally."
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
