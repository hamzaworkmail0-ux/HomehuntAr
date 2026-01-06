import React, { useState } from 'react';
import { AppView } from '../types';
import Logo from './Logo';
import { 
  ArrowRight, Search, MapPin, ChevronRight, 
  BedDouble, Bath, Car, Layers, Play, Star,
  Smartphone, Home, Calendar, MessageSquare, Download,
  Wind, Zap, Shield, Heart, Cpu, Target
} from 'lucide-react';

const HomeView: React.FC<{ onNavigate: (view: AppView) => void }> = ({ onNavigate }) => {
  const [activePlan, setActivePlan] = useState('Luxury Apartments');
  const [propertyFilter, setPropertyFilter] = useState('Residential');

  return (
    <div className="bg-brand-charcoal text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1700px] mx-auto px-8 pt-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 animate-reveal">
            <h1 className="hero-title select-none">
              <span className="brand-text-heavy text-white uppercase leading-none block mb-4 hover:text-brand-gold transition-colors duration-500 cursor-default">Find The Future</span>
              <span className="brand-text-heavy text-white uppercase leading-none block mb-4 hover:text-brand-gold transition-colors duration-500 cursor-default">Apartment Of</span>
              <span className="brand-text-heavy text-brand-gold uppercase leading-none block hover:scale-[1.02] transition-transform origin-left cursor-default">Your Dream</span>
            </h1>
            
            <p className="max-w-xl text-slate-300 brand-text-heavy uppercase tracking-widest text-[15px] leading-relaxed opacity-80 hover:text-brand-gold hover:opacity-100 transition-all duration-300 cursor-default">
              Your home is your sanctuary. Discover, visualize, and secure your perfect residence through Canada's most advanced spatial intelligence platform.
            </p>

            <button 
              onClick={() => onNavigate(AppView.CONTACT)}
              className="bg-brand-gold text-black px-14 py-6 rounded-full brand-text-heavy uppercase text-[14px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand-gold/20"
            >
              Schedule A Visit
            </button>

            {/* SEARCH INTELLIGENCE BAR */}
            <div className="relative mt-24 flex items-center w-full max-w-5xl">
               <div className="glass-panel p-2 rounded-[5rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] flex flex-wrap lg:flex-nowrap items-center border border-white/10 w-full z-10 bg-white/[0.04]">
                  <div className="flex-[1.2] min-w-[160px] pl-10 pr-6 py-6 flex flex-col gap-2 border-r border-white/10 group cursor-text">
                     <span className="text-[13px] brand-text-heavy text-brand-gold uppercase tracking-[0.3em] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                       <MapPin size={14} /> Location
                     </span>
                     <input 
                       type="text" 
                       placeholder="TORONTO, ON" 
                       className="bg-transparent border-none outline-none text-white brand-text-heavy text-[18px] uppercase placeholder:text-slate-200 w-full tracking-tight focus:text-brand-gold transition-colors" 
                     />
                  </div>
                  <div className="flex-1 min-w-[160px] px-8 py-6 flex flex-col gap-2 border-r border-white/10 group cursor-pointer relative">
                     <span className="text-[13px] brand-text-heavy text-brand-gold uppercase tracking-[0.3em] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                       <Home size={14} /> Type
                     </span>
                     <div className="relative flex items-center overflow-hidden">
                        <select className="bg-transparent border-none outline-none text-white brand-text-heavy text-[18px] uppercase appearance-none cursor-pointer w-full relative z-10 pr-8 truncate group-hover:text-brand-gold transition-colors">
                          <option className="bg-brand-darker">MODERN CONDOS</option>
                          <option className="bg-brand-darker">LUXURY VILLAS</option>
                          <option className="bg-brand-darker">SMART LOFTS</option>
                        </select>
                        <ChevronRight size={20} className="absolute right-0 text-brand-gold/80 rotate-90 pointer-events-none" />
                     </div>
                  </div>
                  <div className="flex-1 min-w-[160px] px-8 py-6 flex flex-col gap-2 group cursor-pointer relative">
                     <span className="text-[13px] brand-text-heavy text-brand-gold uppercase tracking-[0.3em] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                       <Zap size={14} /> Price
                     </span>
                     <div className="relative flex items-center overflow-hidden">
                        <select className="bg-transparent border-none outline-none text-white brand-text-heavy text-[18px] uppercase appearance-none cursor-pointer w-full relative z-10 pr-8 truncate group-hover:text-brand-gold transition-colors">
                          <option className="bg-brand-darker">$2,500 - $5,000</option>
                          <option className="bg-brand-darker">$5,000 - $10,000</option>
                          <option className="bg-brand-darker">$10,000+</option>
                        </select>
                        <ChevronRight size={20} className="absolute right-0 text-brand-gold/80 rotate-90 pointer-events-none" />
                     </div>
                  </div>
                  <button className="bg-brand-gold text-black w-24 h-24 lg:w-32 lg:h-32 rounded-full flex flex-col items-center justify-center group hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand-gold/30 shrink-0 relative overflow-hidden ml-4 mr-1">
                    <div className="absolute inset-0 bg-white/30 -translate-y-full group-hover:translate-y-full transition-transform duration-700 pointer-events-none" />
                    <div className="flex flex-col items-center justify-center text-center relative z-10">
                      <span className="text-[20px] lg:text-[26px] brand-text-heavy leading-none mb-1">1.2K+</span>
                      <div className="flex flex-col items-center">
                        <span className="text-[11px] lg:text-[13px] brand-text-heavy uppercase tracking-[0.15em] leading-none">Listings</span>
                        <span className="text-[11px] lg:text-[13px] brand-text-heavy uppercase tracking-[0.15em] leading-none opacity-60">Live Now</span>
                      </div>
                    </div>
                  </button>
               </div>
            </div>
          </div>
          <div className="relative animate-reveal [animation-delay:200ms] flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[460px] aspect-[9/14] bg-[#1a1a1a] rounded-[5rem] p-4 shadow-[0_60px_120px_rgba(0,0,0,0.6)] border-[14px] border-[#222] overflow-hidden group scale-90 lg:scale-100">
                <div className="relative h-full w-full rounded-[3.5rem] overflow-hidden bg-brand-charcoal border border-white/5 ar-grid">
                    <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80" alt="Luxury House AR" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[10s] ease-in-out" />
                    <div className="absolute left-0 right-0 h-1 bg-brand-gold shadow-[0_0_20px_rgba(255,165,0,1),0_0_40px_rgba(255,165,0,0.5)] z-30 animate-scan pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 bg-brand-gold rounded-[2.5rem] p-10 text-black shadow-2xl flex flex-col gap-8 z-40 group-hover:bg-white transition-colors duration-500">
                        <div className="flex justify-between items-start">
                           <div>
                              <span className="text-[11px] brand-text-heavy uppercase tracking-[0.2em] opacity-60 block mb-1">Ending In:</span>
                              <p className="text-lg brand-text-heavy uppercase tracking-tighter">1h 20m 30s</p>
                           </div>
                           <div className="text-right">
                              <span className="text-[11px] brand-text-heavy uppercase tracking-[0.2em] opacity-60 block mb-1">Highest Bid:</span>
                              <p className="text-lg brand-text-heavy uppercase tracking-tighter">32.4 ETH</p>
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <button className="flex-1 bg-black text-white py-5 rounded-2xl text-[12px] brand-text-heavy uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-lg hover:bg-brand-gold">Place A Bid</button>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS BAR */}
      <section className="py-24 bg-white/5 border-y border-white/10">
         <div className="max-w-[1700px] mx-auto px-16 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { count: "7500", label: "Square Areas", icon: Layers },
              { count: "320", label: "Apartments", icon: Home },
              { count: "580", label: "Car Parking", icon: Car },
              { count: "950", label: "Bedrooms", icon: BedDouble }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-6 group cursor-default">
                 <div className="w-24 h-24 rounded-[3rem] glass-panel flex items-center justify-center text-brand-gold group-hover:scale-110 group-hover:border-brand-gold transition-all border border-brand-gold/20 shadow-xl">
                    <stat.icon size={36} />
                 </div>
                 <div className="space-y-1">
                    <h4 className="text-4xl brand-text-heavy text-white group-hover:text-brand-gold transition-colors">{stat.count}</h4>
                    <p className="text-[14px] brand-text-heavy text-slate-400 uppercase tracking-[0.3em] mt-2 group-hover:text-white transition-colors">{stat.label}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* 3. APARTMENT PLANS */}
      <section className="py-60">
        <div className="max-w-[1700px] mx-auto px-8 lg:px-16 text-center space-y-8 mb-32">
            <span className="text-[16px] brand-text-heavy text-brand-gold uppercase tracking-[0.6em] hover:tracking-[0.8em] transition-all cursor-default">Spatial Plans</span>
            <h2 className="text-6xl brand-text-heavy text-white uppercase tracking-tighter hover:text-brand-gold transition-colors duration-500 cursor-default">Apartment Blueprints</h2>
        </div>
        <div className="max-w-[1700px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
           <div className="lg:col-span-4 space-y-8">
              {['Luxury Apartments', 'Garden City', 'Farm House', 'Pent House'].map(plan => (
                 <button key={plan} onClick={() => setActivePlan(plan)} className={`w-full p-12 rounded-[3.5rem] flex items-center gap-8 transition-all duration-700 border ${activePlan === plan ? 'bg-brand-gold text-black shadow-2xl border-transparent scale-105' : 'glass-panel text-slate-500 border-white/5 hover:border-brand-gold hover:text-white'}`}>
                    <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-colors ${activePlan === plan ? 'bg-black text-brand-gold' : 'bg-white/5'}`}>
                       <Home size={32} />
                    </div>
                    <span className="brand-text-heavy uppercase text-sm tracking-[0.3em]">{plan}</span>
                 </button>
              ))}
           </div>
           <div className="lg:col-span-8 glass-panel p-20 rounded-[5rem] grid grid-cols-1 md:grid-cols-2 gap-20 items-center shadow-[0_60px_120px_rgba(0,0,0,0.4)] border border-white/10 animate-reveal group">
              <div className="space-y-12">
                 <div className="border-b border-white/10 pb-8 flex justify-between items-center">
                    <h4 className="text-4xl brand-text-heavy text-white uppercase tracking-tighter group-hover:text-brand-gold transition-colors">{activePlan.toUpperCase()}</h4>
                    <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-black transition-all cursor-pointer"><Download size={20} /></div>
                 </div>
                 <div className="space-y-8">
                    {[{ l: "Total Area", v: "2800 Sq. Ft" }, { l: "Floor Level", v: "3rd Floor" }, { l: "Total Rooms", v: "06 Rooms" }, { l: "Parking Space", v: "2 Slots" }, { l: "Current Price", v: "$4,500/Mo", highlight: true }].map((row, i) => (
                      <div key={i} className="flex justify-between items-center text-[14px] brand-text-heavy uppercase tracking-[0.2em] group/row">
                         <span className="text-slate-400 group-hover/row:text-brand-gold transition-colors duration-300">{row.l}</span>
                         <span className={row.highlight ? 'text-brand-gold text-2xl tracking-tighter border-b border-brand-gold pb-1 group-hover/row:scale-110 transition-transform' : 'text-white group-hover/row:text-brand-gold transition-colors duration-300'}>{row.v}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE HOMEHUNT */}
      <section className="py-60 bg-white/5">
         <div className="max-w-[1700px] mx-auto px-8 lg:px-16 text-center space-y-8 mb-32">
            <span className="text-[16px] brand-text-heavy text-brand-gold uppercase tracking-[0.6em] cursor-default">Our Features</span>
            <h2 className="text-6xl brand-text-heavy text-white uppercase tracking-tighter hover:text-brand-gold transition-colors duration-500 cursor-default">Why Choose HomeHunt</h2>
         </div>
         <div className="max-w-[1700px] mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Pet Friendly", icon: Heart, desc: "Specially designed green spaces and pet-friendly amenities for your furry companions." },
              { title: "Smart Living", icon: Smartphone, desc: "Fully integrated smart home systems accessible via our spatial dashboard." },
              { title: "Modern Appliances", icon: Cpu, desc: "Equipped with the latest energy-efficient, AI-integrated residential appliances." },
              { title: "Eco Construction", icon: Wind, desc: "Sustainable building practices that prioritize environmental health and longevity." },
              { title: "Security Guaranteed", icon: Shield, desc: "24/7 neural-monitored security systems ensuring complete peace of mind." },
              { title: "Green Space", icon: Target, desc: "Curated outdoor environments that bring the serenity of nature to your doorstep." }
            ].map((feat, i) => (
              <div key={i} className="glass-panel p-16 rounded-[4rem] group hover:border-brand-gold transition-all duration-700 cursor-pointer border border-white/5">
                 <div className="w-20 h-20 rounded-3xl bg-brand-gold text-black flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-xl">
                    <feat.icon size={32} />
                 </div>
                 <h4 className="text-2xl brand-text-heavy text-white uppercase tracking-tighter mb-6 group-hover:text-brand-gold transition-colors">{feat.title}</h4>
                 <p className="text-[15px] brand-text-heavy text-slate-400 uppercase tracking-widest leading-loose group-hover:text-white transition-colors">
                    {feat.desc}
                 </p>
                 <div className="mt-10 flex items-center gap-3 text-brand-gold group-hover:scale-105 transition-all">
                    <span className="text-[13px] brand-text-heavy uppercase tracking-[0.4em]">Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* 5. TOP PROPERTIES */}
      <section className="py-60">
        <div className="max-w-[1700px] mx-auto px-8 lg:px-16 mb-24">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-16">
              <div className="space-y-8">
                <span className="text-[16px] brand-text-heavy text-brand-gold uppercase tracking-[0.6em] cursor-default">Properties</span>
                <h2 className="text-6xl brand-text-heavy text-white uppercase tracking-tighter hover:text-brand-gold transition-colors duration-500 cursor-default">Our Top Properties</h2>
              </div>
              <div className="flex bg-white/5 p-3 rounded-full border border-white/10 backdrop-blur-3xl shadow-2xl">
                 {['Family', 'Residential', 'Office Space', 'Commercials'].map(cat => (
                   <button key={cat} onClick={() => setPropertyFilter(cat)} className={`px-12 py-4 rounded-full brand-text-heavy uppercase text-[14px] tracking-widest transition-all ${propertyFilter === cat ? 'bg-brand-gold text-black shadow-xl' : 'text-slate-400 hover:text-brand-gold'}`}>
                     {cat}
                   </button>
                 ))}
              </div>
           </div>
        </div>
        <div className="max-w-[1700px] mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-16">
           {[
             { name: "Royal York Mansion", loc: "Etobicoke, ON", price: "15,000", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80" },
             { name: "Union Loft", loc: "Downtown Toronto", price: "4,500", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" },
             { name: "Parkside Estates", loc: "Burnaby, BC", price: "8,200", img: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80" }
           ].map((house, i) => (
             <div key={i} className="group glass-panel rounded-[5rem] overflow-hidden border border-white/5 hover:-translate-y-6 transition-all duration-700 shadow-[0_50px_100px_rgba(0,0,0,0.3)] hover:border-brand-gold">
                <div className="relative aspect-[4/3] overflow-hidden">
                   <img src={house.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={house.name} />
                   <div className="absolute top-8 left-8 flex flex-col gap-3">
                      <span className="bg-black/40 backdrop-blur-xl px-6 py-2.5 rounded-full text-[12px] brand-text-heavy uppercase text-white border border-white/10 shadow-lg group-hover:bg-brand-gold group-hover:text-black transition-colors">1100 SQ FT</span>
                      <span className="bg-brand-gold px-6 py-2.5 rounded-full text-[12px] brand-text-heavy uppercase text-black shadow-2xl font-black group-hover:bg-white transition-colors">${house.price}.00 / MO</span>
                   </div>
                </div>
                <div className="p-16 space-y-10">
                   <div className="space-y-4">
                      <h4 className="text-3xl brand-text-heavy text-white uppercase tracking-tighter group-hover:text-brand-gold transition-colors">{house.name}</h4>
                      <div className="flex items-center gap-3 text-slate-400 group-hover:text-white transition-colors">
                         <MapPin size={18} className="text-brand-gold group-hover:scale-125 transition-transform" />
                         <span className="text-[13px] brand-text-heavy uppercase tracking-widest">{house.loc}</span>
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 6. WHAT OUR CLIENTS SAY */}
      <section className="py-60 bg-white/5 relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-8 lg:px-16 text-center space-y-8 mb-32 relative z-10">
           <span className="text-[16px] brand-text-heavy text-brand-gold uppercase tracking-[0.6em] inline-block cursor-default">Testimonials</span>
           <h2 className="text-6xl brand-text-heavy text-white uppercase tracking-tighter hover:text-brand-gold transition-colors duration-500 cursor-default">What Our Client’s Say</h2>
        </div>
        <div className="flex gap-12 overflow-x-auto px-16 pb-20 no-scrollbar snap-x relative z-10">
          {[1,2,3,4].map(i => (
            <div key={i} className="min-w-[600px] glass-panel rounded-[5rem] p-20 snap-center relative group hover:bg-white/5 transition-all duration-700 border border-white/10 shadow-2xl hover:border-brand-gold">
               <h4 className="text-3xl brand-text-heavy text-white uppercase tracking-tighter mb-8 leading-tight group-hover:text-brand-gold transition-colors">"The Most Advanced Real Estate Experience I've Ever Had"</h4>
               <p className="text-[16px] text-slate-300 brand-text-heavy leading-loose tracking-widest uppercase mb-16 opacity-80 group-hover:text-white transition-colors">
                 Home Hunt AR completely changed the way I look at properties. The spatial walk-through allowed me to see exactly how my furniture would fit before even stepping foot in the unit.
               </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SERVICES GRID */}
      <section className="py-60">
         <div className="max-w-[1700px] mx-auto px-8 lg:px-16 text-center space-y-8 mb-32">
            <span className="text-[16px] brand-text-heavy text-brand-gold uppercase tracking-[0.6em] inline-block border-b-2 border-brand-gold pb-3 cursor-default">Our AR Services</span>
            <h2 className="text-6xl brand-text-heavy text-white uppercase tracking-tighter hover:text-brand-gold transition-colors duration-500 cursor-default">Services We Offer</h2>
         </div>
         <div className="max-w-[1700px] mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Spatial Management", icon: Shield, desc: "Secure and verified property data management using our proprietary spatial protocol." },
              { title: "Interactive Tours", icon: Wind, desc: "Walk through your potential home from anywhere in Canada using high-fidelity AR.", accent: true },
              { title: "Neural Staging", icon: Cpu, desc: "AI-powered interior design that stages vacant properties based on your personal style." },
              { title: "Vibrant Amenities", icon: Target, desc: "Visualize and explore shared spaces, pools, and recreational areas in real-time." },
              { title: "Lifestyle Sync", icon: Heart, desc: "Integrate your daily habits and needs to find the property that perfectly matches your life." },
              { title: "Energy Analysis", icon: Zap, desc: "Get real-time AR overlays of thermal efficiency and energy consumption forecasts." }
            ].map((service, i) => (
              <div key={i} className={`glass-panel p-20 rounded-[5rem] text-center space-y-10 hover:-translate-y-6 transition-all duration-700 group cursor-pointer border border-white/5 hover:border-brand-gold ${service.accent ? 'bg-brand-gold/5 border-brand-gold/20' : ''}`}>
                 <div className="w-28 h-28 mx-auto rounded-[3.5rem] flex items-center justify-center mb-12 transition-transform duration-700 group-hover:rotate-12 shadow-2xl bg-brand-gold text-black">
                    <service.icon size={48} />
                 </div>
                 <h4 className="text-3xl brand-text-heavy uppercase tracking-tighter transition-colors text-white group-hover:text-brand-gold">{service.title}</h4>
                 <p className="text-[15px] brand-text-heavy uppercase tracking-[0.15em] leading-relaxed transition-colors text-slate-400 group-hover:text-white">
                    {service.desc}
                 </p>
              </div>
            ))}
         </div>
      </section>

      {/* 8. TEAM SECTION */}
      <section className="py-60 bg-white/5">
         <div className="max-w-[1700px] mx-auto px-8 lg:px-16 text-center space-y-8 mb-32">
            <span className="text-[16px] brand-text-heavy text-brand-gold uppercase tracking-[0.6em] cursor-default">Our Team</span>
            <h2 className="text-6xl brand-text-heavy text-white uppercase tracking-tighter hover:text-brand-gold transition-colors duration-500 cursor-default">Meet Our Experts</h2>
         </div>
         <div className="max-w-[1700px] mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: "David C. Smith", role: "Chief Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
              { name: "John O. Thomas", role: "Spatial Lead", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" },
              { name: "Teresa S. Todd", role: "Design Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80" }
            ].map((member, i) => (
              <div key={i} className="group flex flex-col items-center cursor-default">
                 <div className="relative aspect-[3/4] w-full rounded-[4rem] overflow-hidden mb-12 shadow-2xl border border-white/10 group-hover:border-brand-gold transition-colors">
                    <img src={member.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={member.name} />
                 </div>
                 <div className="text-center space-y-2">
                    <h4 className="text-3xl brand-text-heavy text-white uppercase tracking-tighter group-hover:text-brand-gold transition-colors">{member.name}</h4>
                    <p className="text-[13px] brand-text-heavy text-brand-gold uppercase tracking-[0.4em] group-hover:text-white transition-colors">{member.role}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* 9. BLOG / NEWSROOM */}
      <section className="py-60">
         <div className="max-w-[1700px] mx-auto px-8 lg:px-16 text-center space-y-8 mb-32">
            <span className="text-[16px] brand-text-heavy text-brand-gold uppercase tracking-[0.6em] cursor-default">Spatial Insights</span>
            <h2 className="text-6xl brand-text-heavy text-white uppercase tracking-tighter hover:text-brand-gold transition-colors duration-500 cursor-default">Latest From Our Newsroom</h2>
         </div>
         <div className="max-w-[1700px] mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-16">
            {[1, 2, 3].map(i => (
              <div key={i} className="group glass-panel rounded-[5rem] overflow-hidden border border-white/5 hover:border-brand-gold transition-all duration-700 shadow-2xl cursor-pointer">
                 <div className="relative aspect-video overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80&sig=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt="Blog Post" />
                 </div>
                 <div className="p-16 space-y-10">
                    <h4 className="text-3xl brand-text-heavy text-white uppercase tracking-tighter leading-tight group-hover:text-brand-gold transition-colors">How Spatial AI is Reshaping Canadian Cities</h4>
                    <div className="pt-10 border-t border-white/5 flex items-center justify-between">
                       <button className="text-[13px] brand-text-heavy uppercase text-brand-gold tracking-[0.3em] flex items-center gap-3 group-hover:gap-6 transition-all">Read More <ArrowRight size={18} /></button>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* 10. SUBSCRIBE CTA */}
      <section className="py-40 px-8 lg:px-16 relative">
         <div className="max-w-[1500px] mx-auto bg-brand-gold rounded-[5rem] p-32 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16 shadow-[0_60px_120px_rgba(255,165,0,0.25)] group hover:border-brand-darker transition-all duration-700">
            <h2 className="text-6xl brand-text-heavy text-black uppercase tracking-tighter text-center lg:text-left leading-[1.1] max-w-2xl relative z-10 group-hover:scale-[1.02] transition-transform">
               Receive Regular Updates From The AR Frontier
            </h2>
            <div className="flex w-full lg:w-auto bg-black/15 p-3 rounded-full border border-black/5 max-w-2xl backdrop-blur-md relative z-10 shadow-inner group-hover:bg-brand-charcoal transition-colors">
               <input type="email" placeholder="Your email address..." className="bg-transparent border-none outline-none flex-1 px-10 brand-text-heavy uppercase text-[15px] text-black placeholder:text-black/50 group-hover:text-white" />
               <button className="bg-black text-white px-16 py-6 rounded-full brand-text-heavy uppercase text-[14px] tracking-[0.4em] hover:scale-105 transition-all shadow-2xl">Subscribe</button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default HomeView;