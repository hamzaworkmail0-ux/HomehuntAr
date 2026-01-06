import React from 'react';
import { AppView } from '../types';
import Logo from './Logo';
import { Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#262626] text-white pt-60 pb-20 overflow-hidden relative border-t border-white/5">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-gold/5 blur-[180px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-24 relative z-10">
        
        {/* Brand Column (RUFITO STYLE) */}
        <div className="md:col-span-4 space-y-16">
          <div className="flex items-center gap-6 cursor-pointer group" onClick={() => onNavigate(AppView.HOME)}>
            <div className="w-20 h-20 bg-brand-gold rounded-[2rem] flex items-center justify-center text-black group-hover:rotate-12 transition-transform shadow-2xl shadow-brand-gold/20">
               <Logo className="w-12 h-12" strokeColor="black" />
            </div>
            <span className="brand-text-heavy text-5xl tracking-tighter leading-none uppercase">
              HOME HUNT <span className="text-brand-gold">AR</span>
            </span>
          </div>
          <p className="text-[16px] brand-text-heavy uppercase tracking-[0.3em] leading-[2.2] max-w-md text-slate-400 opacity-90">
            Pioneering the future of spatial real estate across Canada. Walk through your dream home before it's even built.
          </p>
          <div className="flex gap-6 pt-6">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
               <div key={i} className="w-16 h-16 glass-panel rounded-3xl flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-black transition-all cursor-pointer shadow-xl border border-white/5">
                  <Icon size={26} />
               </div>
            ))}
          </div>
        </div>

        {/* Property Links */}
        <div className="md:col-span-2">
          <h4 className="text-2xl brand-text-heavy uppercase tracking-tighter text-white mb-12 border-b-2 border-brand-gold w-fit pb-2">Company</h4>
          <ul className="space-y-8 text-[14px] brand-text-heavy uppercase tracking-[0.3em] text-slate-400">
            <li><button onClick={() => onNavigate(AppView.ABOUT)} className="hover:text-brand-gold transition-colors text-left">About Us</button></li>
            <li><button onClick={() => onNavigate(AppView.NRP)} className="hover:text-brand-gold transition-colors text-left">Services</button></li>
            <li><button onClick={() => onNavigate(AppView.HOME)} className="hover:text-brand-gold transition-colors text-left">Apartments</button></li>
            <li><button className="hover:text-brand-gold transition-colors text-left text-slate-600">Careers</button></li>
          </ul>
        </div>

        {/* Article Links */}
        <div className="md:col-span-2">
          <h4 className="text-2xl brand-text-heavy uppercase tracking-tighter text-white mb-12 border-b-2 border-brand-gold w-fit pb-2">Resources</h4>
          <ul className="space-y-8 text-[14px] brand-text-heavy uppercase tracking-[0.3em] text-slate-400">
            <li><button className="hover:text-brand-gold transition-colors text-left">Terms of Use</button></li>
            <li><button className="hover:text-brand-gold transition-colors text-left">Privacy Policy</button></li>
            <li><button onClick={() => onNavigate(AppView.CONTACT)} className="hover:text-brand-gold transition-colors text-left">Contact Support</button></li>
            <li><button className="hover:text-brand-gold transition-colors text-left">Help Center</button></li>
          </ul>
        </div>

        {/* Contact Info (RUFITO) */}
        <div className="md:col-span-4">
          <h4 className="text-2xl brand-text-heavy uppercase tracking-tighter text-white mb-12 border-b-2 border-brand-gold w-fit pb-2">Address</h4>
          <ul className="space-y-12 text-[14px] brand-text-heavy uppercase tracking-[0.1em] text-slate-400">
            <li className="flex gap-6 items-start">
               <div className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/10">
                 <MapPin size={22} />
               </div>
               <span className="leading-loose uppercase tracking-widest pt-1">23 Neural Lane Suite 260 <br />Toronto, Ontario M5V 3L9</span>
            </li>
            <li className="flex gap-6 items-center">
               <div className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/10">
                 <Phone size={22} />
               </div>
               <span className="hover:text-brand-gold transition-colors cursor-pointer uppercase tracking-[0.3em]">+1 416.555.0199</span>
            </li>
            <li className="flex gap-6 items-center">
               <div className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/10">
                 <Mail size={22} />
               </div>
               <span className="hover:text-brand-gold transition-colors cursor-pointer uppercase tracking-[0.3em]">HELLO@HOMEHUNTAR.CA</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-[1700px] mx-auto px-8 lg:px-16 mt-60 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[13px] brand-text-heavy uppercase tracking-[0.6em] text-slate-500 gap-10">
        <span className="opacity-70">All Rights Reserved @ Home Hunt AR 2025 • Canada’s Spatial Choice</span>
        <div className="flex gap-12">
           <button className="hover:text-brand-gold transition-colors">Neural Policy</button>
           <button className="hover:text-white transition-colors">Legal</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;