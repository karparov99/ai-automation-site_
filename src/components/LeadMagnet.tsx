import { CheckCircle, FileText, Clock, Target } from 'lucide-react';
import { useState } from 'react';
import AuditModal from './AuditModal';

export default function LeadMagnet() {
  const [showModal, setShowModal] = useState(false);

  const benefits = [
    'Complete workflow assessment and documentation',
    'Identified bottlenecks and manual work points',
    'Specific automation opportunities with effort estimates',
    'Clear recommendations you can act on immediately',
  ];

  return (
    <section className="py-24 px-4 bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-dark-700 to-dark-800 border border-dark-700 rounded-xl p-10 lg:p-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-accent-blue" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Free Automation Audit</h2>
          </div>

          <p className="text-xl text-dark-200 mb-8 leading-relaxed">
            A thorough, practical review of your current workflows. We identify where manual work creates friction and where automation could help—with no sales pitch attached.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle className="text-accent-emerald flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-dark-100">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Key highlights */}
          <div className="grid md:grid-cols-2 gap-6 mb-10 bg-dark-900 rounded-lg p-8">
            <div className="flex gap-4">
              <Clock className="text-accent-blue flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold mb-1">Takes 30 Minutes</p>
                <p className="text-dark-300">A focused conversation about how you actually work</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Target className="text-accent-blue flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold mb-1">No Pressure</p>
                <p className="text-dark-300">Standalone value regardless of whether you move forward</p>
              </div>
            </div>
          </div>

          <p className="text-dark-300 mb-8 italic">
            You'll receive a clear, documented report of findings and recommendations. From there, you decide what makes sense for your situation.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="w-full md:w-auto px-8 py-4 bg-accent-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 text-lg"
          >
            Request Your Free Audit
          </button>
        </div>
      </div>

      <AuditModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
