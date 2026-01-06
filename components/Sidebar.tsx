
import React from 'react';
import { AppView } from '../types';
import { Compass, Sparkles, Video, Mic, MapPin, Search, Layers, Hexagon } from 'lucide-react';

interface SidebarProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const menuItems = [
    { id: AppView.CHAT, icon: Search, label: 'Strategist' },
    { id: AppView.IMAGE, icon: Layers, label: 'Designer' },
    { id: AppView.VIDEO, icon: Video, label: 'Cinema' },
    { id: AppView.VOICE, icon: Mic, label: 'Concierge' },
  ];

  return (
    <aside className="w-20 lg:w-72 h-full flex flex-col bg-black/40 backdrop-blur-3xl glass-panel rounded-[2.5rem] overflow-hidden transition-all duration-500">
      <div className="p-8 mb-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-2xl shadow-emerald-500/30 group">
          <Hexagon className="w-7 h-7 text-white fill-white/10 group-hover:rotate-90 transition-transform duration-700" />
        </div>
        <div className="hidden lg:block overflow-hidden whitespace-nowrap">
          <h1 className="font-black text-2xl tracking-tighter text-white italic">HOME HUNT</h1>
          <p className="text-[10px] text-emerald-500/80 font-black uppercase tracking-[0.3em] -mt-1">AR ECOSYSTEM</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-3xl transition-all duration-500 group relative overflow-hidden ${
                isActive 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
                  : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/5'
              }`}
            >
              <Icon className={`w-6 h-6 shrink-0 transition-transform duration-500 ${isActive ? 'scale-110 text-emerald-400' : 'group-hover:scale-110 group-hover:text-zinc-300'}`} />
              <span className="hidden lg:block font-bold text-sm tracking-tight uppercase">{item.label}</span>
              {isActive && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-emerald-500 rounded-l-full shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-6">
        <div className="hidden lg:block bg-zinc-900/40 rounded-[2rem] p-5 border border-white/5 relative group cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
            <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Neural Link</span>
          </div>
          <p className="text-xs font-bold text-zinc-300 relative z-10">Gemini 3 Pro <span className="text-emerald-500">v2.5</span></p>
          <div className="mt-2 w-full h-1 bg-zinc-800 rounded-full overflow-hidden relative z-10">
            <div className="w-2/3 h-full bg-emerald-500/50" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
