
import React, { useState } from 'react';
import { COURSES } from '../constants';
import { ExternalLink, Clock } from 'lucide-react';

const Programs: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(COURSES.map(c => c.category)))];

  const filteredCourses = filter === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === filter);

  return (
    <section className="w-full h-full bg-slate-50 py-12 flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col h-full">
        <div className="text-center mb-8 flex-shrink-0">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Programs & Courses</h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
            Industry-vetted courses designed to jumpstart your career.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 flex-shrink-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                filter === cat 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scrollable Grid Container */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div 
                key={course.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 flex flex-col"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-blue-600">
                    {course.category}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold mb-1">
                    <Clock size={12} />
                    <span>{course.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                    {course.description}
                  </p>
                  <button className="flex items-center justify-between w-full text-xs font-bold text-slate-700 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 hover:text-white transition-all">
                    Course Details
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
