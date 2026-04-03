import { CheckCircle, FileText, Clock, Target } from 'lucide-react';
import { useState } from 'react';
import AuditModal from './AuditModal';

export default function LeadMagnet() {
  const [showModal, setShowModal] = useState(false);

  const benefits = [
    'Complete workflow assessment & documentation',
    'Identified bottlenecks & manual work points',
    'Specific automation opportunities with effort estimates',
    'Clear recommendations you can act on immediately',
  ];

  return (
    <section className="py-32 px-4 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-accent-blue/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-10 lg:p-20 relative overflow-hidden animate-fade-in group hover:border-accent-blue/20 transition-all duration-700">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
            <FileText size={200} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center">
                <FileText className="text-accent-blue" size={32} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                Free <span className="text-gradient-emerald">Automation Audit</span>
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-dark-200 mb-12 leading-relaxed font-medium">
              A thorough, practical review of your current workflows. We identify where manual work creates friction and where automation could help—with no sales pitch attached.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 group/item">
                  <CheckCircle className="text-accent-emerald flex-shrink-0 mt-1 transition-transform group-hover/item:scale-110" size={24} />
                  <p className="text-lg text-dark-100 font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Key highlights */}
            <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden mb-12 border border-white/5">
              <div className="bg-dark-950/50 p-8 flex gap-5">
                <Clock className="text-accent-blue flex-shrink-0" size={28} />
                <div>
                  <p className="font-bold text-xl mb-1 text-white">30 Minutes</p>
                  <p className="text-dark-400 font-medium">A focused conversation about how you actually work</p>
                </div>
              </div>
              <div className="bg-dark-950/50 p-8 flex gap-5">
                <Target className="text-accent-blue flex-shrink-0" size={28} />
                <div>
                  <p className="font-bold text-xl mb-1 text-white">Zero Pressure</p>
                  <p className="text-dark-400 font-medium">Standalone value regardless of whether you move forward</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <button
                onClick={() => setShowModal(true)}
                className="w-full md:w-auto px-12 py-5 bg-white text-dark-950 hover:bg-dark-50 hover:text-black font-black rounded-xl transition-all duration-300 text-xl shadow-2xl shadow-white/10"
              >
                Get Your Free Audit
              </button>
              <p className="text-dark-400 font-bold italic text-sm">
                "Simple, actionable, and zero fluff."
              </p>
            </div>
          </div>
        </div>
      </div>

      <AuditModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
