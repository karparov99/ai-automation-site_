import { useState } from 'react';
import AuditModal from './AuditModal';

export default function FinalCTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-24 px-4 bg-dark-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          Ready to Understand Your Automation Opportunities?
        </h2>

        <p className="text-xl md:text-2xl text-dark-200 mb-4 max-w-2xl mx-auto leading-relaxed">
          The free audit is the practical first step. No obligation. No pitch. Just clarity.
        </p>

        <p className="text-lg text-dark-300 mb-12 max-w-2xl mx-auto">
          Let's spend 30 minutes understanding how you work, then we'll show you what's possible.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="px-10 py-5 bg-accent-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 text-lg transform hover:scale-105 active:scale-95 mb-6"
        >
          Request an Automation Audit
        </button>

        <p className="text-dark-400 text-sm">Takes 5 minutes to request. Initial conversation is 30 minutes.</p>
      </div>

      <AuditModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
