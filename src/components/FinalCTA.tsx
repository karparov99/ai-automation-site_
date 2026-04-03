import { useState } from 'react';
import AuditModal from './AuditModal';

export default function FinalCTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-40 px-4 bg-dark-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/5 blur-[160px] rounded-full"></div>
      <div className="absolute inset-0 noise-overlay"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in group">
        <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tight leading-[1.1]">
          Ready to <span className="text-gradient-blue transition-all duration-700 group-hover:tracking-normal">automate?</span>
        </h2>

        <p className="text-xl md:text-3xl text-dark-200 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
          The free audit is the practical first step. No obligation. No pitch. Just clarity.
        </p>

        <p className="text-lg md:text-xl text-dark-400 mb-16 max-w-2xl mx-auto font-medium">
          Let's spend 30 minutes understanding how you work, then we'll show you what's possible for your business.
        </p>

        <div className="flex flex-col items-center gap-8">
          <button
            onClick={() => setShowModal(true)}
            className="px-12 py-6 bg-accent-blue hover:bg-blue-500 text-white font-black rounded-2xl shadow-2xl shadow-accent-blue/30 transition-all duration-300 transform hover:scale-105 active:scale-95 text-2xl"
          >
            Request Your Free Audit
          </button>
          
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-white/10"></div>
            <p className="text-dark-400 font-bold uppercase tracking-widest text-xs">
              Takes just 5 minutes to get started
            </p>
            <div className="h-px w-8 bg-white/10"></div>
          </div>
        </div>
      </div>

      <AuditModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
