import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Message, ChatSession } from '../types';
import { Send, Building2, User, Loader2, Zap, History, Plus, Trash2, ChevronLeft } from 'lucide-react';

const STORAGE_KEY = 'homehunt_chat_sessions';

const ChatView: React.FC = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setSessions(parsed);
      if (parsed.length > 0) {
        setCurrentSessionId(parsed[0].id);
      }
    } else {
      createNewSession();
    }
  }, []);

  useEffect(() => {
    if (sessions.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
    }
  }, [sessions]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [sessions, currentSessionId, isLoading]);

  const currentSession = sessions.find(s => s.id === currentSessionId);
  const messages = currentSession?.messages || [];

  const createNewSession = () => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: 'Canadian Property Analysis',
      messages: [],
      updatedAt: Date.now()
    };
    setSessions(prev => [newSession, ...prev]);
    setCurrentSessionId(newSession.id);
  };

  const deleteSession = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = sessions.filter(s => s.id !== id);
    setSessions(filtered);
    if (currentSessionId === id) {
      setCurrentSessionId(filtered.length > 0 ? filtered[0].id : null);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading || !currentSessionId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    const updatedSessions = sessions.map(s => {
      if (s.id === currentSessionId) {
        return {
          ...s,
          title: s.messages.length === 0 ? (input.length > 30 ? input.substring(0, 30) + '...' : input) : s.title,
          messages: [...s.messages, userMessage],
          updatedAt: Date.now()
        };
      }
      return s;
    });

    setSessions(updatedSessions);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [...messages, userMessage].map(m => ({
            role: m.role,
            parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: 'You are the HomeHuntAR Property Strategist for the Canadian Market. You specialize in investment analysis (Toronto, Vancouver, Montreal, Calgary, etc.). Use professional tone and clear headers. Focus on ROI, CMHC guidelines, market trends, and property potential.',
          thinkingConfig: { thinkingBudget: 4000 }
        }
      });

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: response.text || "I encountered an error analyzing the property market.",
        timestamp: Date.now(),
      };

      setSessions(prev => prev.map(s => {
        if (s.id === currentSessionId) {
          return { ...s, messages: [...s.messages, aiMessage], updatedAt: Date.now() };
        }
        return s;
      }));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[80vh] flex bg-[#111111] border-y border-white/5 overflow-hidden">
      {/* History Sidebar */}
      <div className={`transition-all duration-300 border-r border-white/5 bg-[#1a1a1a] flex flex-col ${showHistory ? 'w-80' : 'w-0'}`}>
        <div className="p-6 border-b border-white/5 flex items-center justify-between min-w-[320px]">
          <h3 className="brand-text-heavy text-white flex items-center gap-2 uppercase tracking-widest text-[10px] italic">
            <History size={14} className="text-brand-gold" />
            Market History
          </h3>
          <button 
            onClick={createNewSession}
            className="p-2 bg-brand-gold rounded-xl text-black transition-colors"
          >
            <Plus size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-w-[320px] custom-scrollbar">
          {sessions.map(session => (
            <div 
              key={session.id}
              onClick={() => setCurrentSessionId(session.id)}
              className={`group p-5 rounded-2xl cursor-pointer transition-all border relative ${
                currentSessionId === session.id 
                  ? 'bg-brand-gold border-transparent shadow-xl' 
                  : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex justify-between items-start gap-2">
                <p className={`text-xs brand-text-heavy uppercase tracking-tight truncate flex-1 ${currentSessionId === session.id ? 'text-black italic' : 'text-slate-400'}`}>
                  {session.title}
                </p>
                <button 
                  onClick={(e) => deleteSession(session.id, e)}
                  className={`opacity-0 group-hover:opacity-100 p-1 transition-all ${currentSessionId === session.id ? 'text-black' : 'text-slate-600 hover:text-red-500'}`}
                >
                  <Trash2 size={12} />
                </button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className={`text-[9px] brand-text-heavy uppercase tracking-widest ${currentSessionId === session.id ? 'text-black opacity-40' : 'text-slate-600'}`}>
                  {new Date(session.updatedAt).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative bg-[#111111]">
        <div className="p-8 border-b border-white/5 flex items-center justify-between bg-[#111111] z-10">
          <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowHistory(!showHistory)}
                className="p-3 bg-[#1a1a1a] hover:bg-[#262626] rounded-2xl text-slate-400 transition-colors"
              >
                <ChevronLeft className={`transition-transform duration-300 ${showHistory ? '' : 'rotate-180'}`} size={20} />
              </button>
              <div className="w-12 h-12 rounded-2xl bg-brand-gold text-black flex items-center justify-center shadow-xl shadow-brand-gold/10">
                  <Building2 size={24} />
              </div>
              <div>
                  <h3 className="brand-text-heavy text-white leading-none mb-1 text-2xl tracking-tighter italic uppercase">
                    {currentSession ? currentSession.title : 'Market Strategist'}
                  </h3>
                  <span className="text-[10px] brand-text-heavy uppercase tracking-[0.3em] text-brand-gold opacity-80">Secure Neural Link active</span>
              </div>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center opacity-20">
              <div className="w-24 h-24 rounded-full border-4 border-white/10 flex items-center justify-center mb-8 animate-pulse">
                <Zap size={40} className="text-brand-gold" />
              </div>
              <h3 className="text-3xl brand-text-heavy text-white mb-2 uppercase tracking-tighter italic">Analyze Prospects</h3>
              <p className="text-sm brand-text-heavy text-slate-500 max-w-sm text-center leading-relaxed uppercase tracking-widest">
                Enter a Canadian listing address or goal to receive AI projections.
              </p>
            </div>
          )}
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-reveal`}>
              <div className={`flex gap-5 max-w-[80%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg ${
                  m.role === 'user' ? 'bg-[#1a1a1a] text-brand-gold border border-brand-gold/20' : 'bg-brand-gold text-black'
                }`}>
                  {m.role === 'user' ? <User size={18} /> : <Building2 size={18} />}
                </div>
                <div className={`rounded-3xl px-8 py-6 text-sm brand-text-heavy leading-relaxed shadow-2xl ${
                  m.role === 'user' 
                    ? 'bg-[#1a1a1a] text-white border border-white/5 rounded-tr-none' 
                    : 'bg-[#262626] text-slate-200 border border-white/5 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-5 justify-start">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#1a1a1a] border border-white/5 text-brand-gold shadow-lg">
                <Loader2 size={18} className="animate-spin" />
              </div>
              <div className="bg-[#1a1a1a] border border-white/5 rounded-3xl px-8 py-6 text-[10px] brand-text-heavy text-slate-500 uppercase tracking-widest italic animate-pulse">
                Scanning Canadian market indexes...
              </div>
            </div>
          )}
        </div>

        <div className="p-8 border-t border-white/5 bg-[#1a1a1a]">
          <div className="max-w-4xl mx-auto flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="e.g. ROI analysis for a Toronto condo near Union Station..."
              className="flex-1 bg-[#111111] border border-white/5 rounded-2xl px-8 py-5 text-sm brand-text-heavy outline-none focus:ring-1 focus:ring-brand-gold transition-all text-white placeholder:text-slate-700 shadow-inner"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading || !currentSessionId}
              className="bg-brand-gold text-black p-5 rounded-2xl hover:scale-105 transition-all shadow-xl active:scale-95 disabled:opacity-50 min-w-[64px] flex items-center justify-center"
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatView;