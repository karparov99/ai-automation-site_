import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import AuditModal from './AuditModal';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  const scrollToSection = () => {
    const element = document.getElementById('who-this-is-for');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Stop managing<br />
              <span className="bg-gradient-to-r from-accent-blue via-accent-blue to-accent-slate bg-clip-text text-transparent">
                scattered systems
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-dark-200 max-w-3xl mx-auto leading-relaxed mb-2">
              Your team spends hours on manual, repetitive work. Disconnected tools create friction. Systems thinking can change that.
            </p>

            <p className="text-lg md:text-xl text-dark-300 max-w-3xl mx-auto">
              AI isn't magic. It's a practical tool for automating what slows you down—when designed thoughtfully for your operations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-accent-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg"
            >
              Request an Automation Audit
            </button>
            <p className="text-dark-300 text-sm">Free. No obligation. Takes 5 minutes.</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-dark-400 hover:text-dark-200 transition-colors"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      <AuditModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
