
import React from 'react';
import { Send, Phone, Mail, MapPin, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <section className="w-full h-full bg-white flex flex-col overflow-y-auto custom-scrollbar px-4">
      <div className="max-w-7xl mx-auto py-10 md:py-20 w-full flex-1">
        {/* CTA Card */}
        <div className="bg-blue-600 rounded-2xl md:rounded-3xl p-6 md:p-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between shadow-2xl shadow-blue-500/20 text-white mb-12 md:mb-20">
          <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Ready to start your <span className="text-blue-200">career journey?</span>
            </h2>
            <p className="text-blue-100 text-sm md:text-lg opacity-90 max-w-xl mx-auto lg:mx-0">
              Download our latest prospectus and start your application process today. Fall 2024 admissions are active.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button className="bg-white text-blue-600 px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:bg-blue-50 transition-all shadow-xl active:scale-95">
                Apply Online Now
              </button>
              <button className="bg-blue-700/50 backdrop-blur-sm border border-blue-400/30 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:bg-blue-700 transition-all active:scale-95">
                Download Prospectus
              </button>
            </div>
          </div>
          <div className="hidden lg:block w-64 h-64 border-8 border-white/20 rounded-full flex items-center justify-center p-4">
             <div className="w-full h-full border-4 border-dashed border-white/40 rounded-full flex items-center justify-center animate-spin-slow">
                <img src="https://picsum.photos/id/180/400/400" className="w-40 h-40 rounded-full object-cover border-4 border-white" alt="Grad" />
             </div>
          </div>
        </div>

        {/* Contact & Form */}
        <div className="grid lg:grid-cols-3 gap-10 md:gap-12 pb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Get in Touch</h3>
            <p className="text-slate-500 text-sm md:text-base">Have questions about admissions or financial aid? Our team is here to help you.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-600">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span className="font-medium text-sm md:text-base">+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <span className="font-medium text-sm md:text-base">info@itve.pk</span>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <MapPin size={18} className="text-blue-600 shrink-0" />
                <span className="font-medium text-sm md:text-base">Education Road, Sector H-8, Islamabad</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 bg-slate-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm">
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs md:text-sm font-bold text-slate-700">Interested Course</label>
                <select className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white appearance-none">
                  <option>Select a Program</option>
                  <option>Computer Science</option>
                  <option>Electrical Engineering</option>
                  <option>Graphic Design</option>
                </select>
              </div>
              <button type="submit" className="sm:col-span-2 flex items-center justify-center gap-2 bg-slate-900 text-white py-3 md:py-4 rounded-xl font-bold text-sm md:text-base hover:bg-slate-800 transition-all active:scale-95 mt-2">
                Request Information
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Responsive Footer */}
      <footer className="bg-slate-900 text-white pt-12 md:pt-16 pb-8 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <div className="text-xl md:text-2xl font-bold">ITVE <span className="text-blue-500">Academy</span></div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                Empowering the future through technical excellence and vocational mastery.
              </p>
              <div className="flex gap-4 pt-2">
                <Facebook size={18} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter size={18} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram size={18} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin size={18} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm md:text-base mb-4 md:mb-6">Explore</h4>
              <ul className="space-y-2 md:space-y-4 text-slate-400 text-xs md:text-sm">
                <li className="hover:text-white cursor-pointer">Programs</li>
                <li className="hover:text-white cursor-pointer">Admissions</li>
                <li className="hover:text-white cursor-pointer">Student Life</li>
                <li className="hover:text-white cursor-pointer">Career Center</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm md:text-base mb-4 md:mb-6">Quick Links</h4>
              <ul className="space-y-2 md:space-y-4 text-slate-400 text-xs md:text-sm">
                <li className="hover:text-white cursor-pointer">Verify Certificate</li>
                <li className="hover:text-white cursor-pointer">LMS Login</li>
                <li className="hover:text-white cursor-pointer">Job Portal</li>
                <li className="hover:text-white cursor-pointer">Staff Login</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm md:text-base mb-4 md:mb-6">Support</h4>
              <ul className="space-y-2 md:space-y-4 text-slate-400 text-xs md:text-sm">
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Terms of Service</li>
                <li className="hover:text-white cursor-pointer">Cookie Policy</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-[10px] md:text-xs">
            © 2024 Institute of Technical & Vocational Education (ITVE). All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Admissions;
