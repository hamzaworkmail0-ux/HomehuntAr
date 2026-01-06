import React from 'react';
import Logo from './Logo';
import { Target, Users, ShieldCheck, AlertCircle, CheckCircle } from 'lucide-react';

const AboutView: React.FC = () => {
  return (
    <div className="pb-32 bg-brand-charcoal text-white border-t border-white/5">
      {/* HERO HEADER */}
      <section className="relative pt-40 pb-40 overflow-hidden">
        <div className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-[1700px] mx-auto px-8 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-reveal">
            <h1 className="hero-title select-none">
              <span className="brand-text-heavy text-white uppercase leading-none block mb-4 hover:text-brand-gold transition-colors duration-500 cursor-default">The Purpose</span>
              <span className="brand-text-heavy text-white uppercase leading-none block mb-4 hover:text-brand-gold transition-colors duration-500 cursor-default">Of Choosing</span>
              <span className="brand-text-heavy text-brand-gold uppercase leading-none block hover:scale-[1.02] transition-transform origin-left cursor-default">HomeHunt AR</span>
            </h1>
            
            <p className="max-w-xl text-slate-300 brand-text-heavy uppercase tracking-widest text-[16px] mt-12 leading-relaxed opacity-80 hover:text-brand-gold transition-colors duration-300 cursor-default">
              We are not just a listing platform; we are a spatial intelligence agency dedicated to redefining how Canadians discover their future sanctuaries.
            </p>
          </div>

          <div className="hidden lg:flex justify-end animate-reveal [animation-delay:200ms]">
            <div className="w-64 h-64 p-12 bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-3xl flex items-center justify-center text-brand-gold group hover:rotate-6 hover:border-brand-gold transition-all duration-500">
               <Logo strokeColor="currentColor" className="w-full h-full opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="max-w-[1700px] mx-auto px-8 lg:px-16 mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#262626] border border-white/5 p-12 rounded-[3.5rem] shadow-2xl space-y-8 animate-reveal group hover:border-red-500 transition-all duration-500">
            <div className="flex items-center gap-4 border-b border-white/5 pb-6">
               <AlertCircle size={32} className="text-red-500 group-hover:scale-125 transition-transform" />
               <h3 className="text-2xl brand-text-heavy uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">THE FRICTION</h3>
            </div>
            <ul className="space-y-6">
              {[
                "PROPERTY SEARCH REMAINS DISCONNECTED FROM REALITY.",
                "BUYERS SCROLL ENDLESSLY THROUGH FLAT 2D LISTINGS.",
                "PRECONSTRUCTION PROJECTS ARE HARD TO VISUALIZE ON SITE.",
                "VACANT UNITS FEEL COLD AND UNINSPIRING FOR BUYERS."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start text-xl font-bold text-slate-400 uppercase tracking-tighter leading-tight group-hover:text-white transition-colors">
                  <span className="text-brand-gold mt-1.5 brand-text-heavy">•</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-gold border-2 border-black/10 p-12 rounded-[3.5rem] shadow-2xl space-y-8 animate-reveal [animation-delay:200ms] group hover:bg-white hover:border-brand-gold transition-all duration-500">
            <div className="flex items-center gap-4 border-b border-black/10 pb-6">
               <CheckCircle size={32} className="text-black group-hover:scale-125 transition-transform" />
               <h3 className="text-2xl brand-text-heavy uppercase tracking-tighter text-black group-hover:text-brand-gold transition-colors">OUR ENGINE</h3>
            </div>
            <ul className="space-y-6">
              {[
                "WALK THROUGH NEIGHBORHOODS AND VIEW PROPERTIES VIA AR.",
                "INSTANT REAL ESTATE DISCOVERY THAT IS CONTEXTUAL.",
                "3D ON-SITE VISUALIZATION FOR UNBUILT PROJECTS.",
                "AI-POWERED STAGING TO VISUALIZE THE FUTURE."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start text-xl brand-text-heavy text-black uppercase tracking-tighter leading-tight group-hover:text-brand-gold transition-colors">
                  <span className="mt-1.5">•</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="max-w-[1700px] mx-auto px-8 lg:px-16 py-40 space-y-24">
         <div className="space-y-6 text-center lg:text-left">
            <span className="text-[16px] brand-text-heavy text-brand-gold uppercase tracking-[0.6em] inline-block border-b-2 border-brand-gold pb-3 cursor-default">Our Mission</span>
            <h2 className="text-6xl brand-text-heavy text-white uppercase tracking-tighter leading-[1.1] hover:text-brand-gold transition-colors duration-500 cursor-default">Who We <br />Actually Serve</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "BUYERS & RENTERS", desc: "EFFORTLESSLY DISCOVER POTENTIAL PROPERTIES THROUGH IMMERSIVE AR TOURS.", icon: Users },
              { title: "REAL ESTATE AGENTS", desc: "SHOWCASE MULTIPLE PROPERTIES WITH EASE AND MANAGE LISTINGS.", icon: Target },
              { title: "DEVELOPERS", desc: "PRESENT PRE-CONSTRUCTION PROPERTIES IN REALISTIC 3D MODELS.", icon: ShieldCheck }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#111111] border border-white/5 p-12 rounded-[2.5rem] hover:bg-white/5 transition-all group cursor-pointer h-80 flex flex-col justify-between hover:border-brand-gold">
                 <item.icon size={48} className="text-brand-gold group-hover:scale-110 transition-transform" />
                 <div>
                   <h4 className="text-2xl brand-text-heavy uppercase mb-4 tracking-tighter text-white group-hover:text-brand-gold transition-colors">{item.title}</h4>
                   <p className="text-[14px] brand-text-heavy text-slate-400 leading-relaxed uppercase tracking-widest opacity-90 group-hover:text-white transition-colors">
                      {item.desc}
                   </p>
                 </div>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default AboutView;