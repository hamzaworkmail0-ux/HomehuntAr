import React, { useState, useEffect } from 'react';
import { AppView } from '../types';
import Logo from './Logo';
import { Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

interface NavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', view: AppView.HOME },
    { label: 'ABOUT US', view: AppView.ABOUT },
    { label: 'SERVICES', view: AppView.NRP },
    { label: 'CONTACT', view: AppView.CONTACT },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
      {/* RUFITO TOP BAR */}
      <div className={`bg-brand-charcoal py-4 px-8 lg:px-16 border-b border-white/5 flex flex-wrap justify-between items-center gap-6 transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'opacity-100'}`}>
         <div className="flex items-center gap-10 text-[13px] brand-text-heavy uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-2 hover:text-brand-gold transition-colors cursor-pointer">
               <Mail size={16} className="text-brand-gold" /> hello@homehuntar.ca
            </div>
            <div className="flex items-center gap-2 hover:text-brand-gold transition-colors cursor-pointer">
               <Phone size={16} className="text-brand-gold" /> +1 416.555.0199
            </div>
         </div>
         <div className="flex items-center gap-8">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <Icon key={i} size={16} className="text-slate-400 hover:text-brand-gold cursor-pointer transition-colors" />
            ))}
         </div>
      </div>

      <nav className={`transition-all duration-500 h-24 lg:h-32 flex items-center ${isScrolled ? 'bg-brand-charcoal/90 backdrop-blur-3xl border-b border-white/10 shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-[1700px] mx-auto w-full px-8 lg:px-16 flex justify-between items-center">
          <div 
            className="flex items-center gap-6 cursor-pointer group" 
            onClick={() => onNavigate(AppView.HOME)}
          >
            <div className={`p-3 rounded-2xl bg-brand-gold text-black transition-all group-hover:rotate-12 ${isScrolled ? 'scale-90' : 'scale-110'}`}>
               <Logo className="w-8 h-8" strokeColor="black" />
            </div>
            <span className={`tracking-tighter text-white transition-all ${isScrolled ? 'text-2xl' : 'text-4xl'}`}>
              <span className="brand-text-light uppercase">HOME HUNT</span>
              <span className="brand-text-heavy uppercase text-brand-gold"> AR</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-16">
            <div className="flex items-center gap-14">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => onNavigate(link.view)}
                  className={`text-[14px] brand-text-heavy uppercase tracking-[0.3em] transition-all relative group py-2 ${currentView === link.view ? 'text-brand-gold' : 'text-slate-300 hover:text-white'}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transition-transform duration-500 origin-left ${currentView === link.view ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => onNavigate(AppView.CONTACT)}
              className="bg-brand-gold text-black px-12 py-5 rounded-full brand-text-heavy uppercase text-[14px] tracking-widest hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-brand-gold/30"
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;