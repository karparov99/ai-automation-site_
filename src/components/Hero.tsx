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
        {/* Deep background with shifting gradients */}
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 via-transparent to-transparent animate-slow-pan"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-blue/5 blur-[120px] rounded-full"></div>
        </div>

        {/* Noise overlay for texture */}
        <div className="absolute inset-0 noise-overlay"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, #fff 25%, #fff 26%, transparent 27%, transparent 74%, #fff 75%, #fff 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #fff 25%, #fff 26%, transparent 27%, transparent 74%, #fff 75%, #fff 76%, transparent 77%, transparent)',
            backgroundSize: '80px 80px',
          }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
              Stop managing<br />
              <span className="text-gradient-blue">
                scattered systems
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-dark-200 max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
              Your team spends hours on manual, repetitive work. Disconnected tools create friction. Systems thinking can change that.
            </p>

            <p className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto leading-relaxed">
              AI isn't magic. It's a tool for automating what slows you down—when designed thoughtfully for your operations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 animate-fade-in animation-delay-200">
            <button
              onClick={() => setShowModal(true)}
              className="px-10 py-5 bg-accent-blue hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-accent-blue/20 transition-all duration-300 transform hover:scale-105 active:scale-95 text-xl"
            >
              Request an Automation Audit
            </button>
            <div className="flex flex-col items-center sm:items-start gap-1">
              <span className="text-dark-100 font-semibold">Free. No obligation.</span>
              <span className="text-dark-400 text-sm">Takes only 5 minutes to request.</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToSection}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-dark-400 hover:text-accent-blue transition-colors p-2"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={40} strokeWidth={1.5} />
        </button>
      </section>

      <AuditModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
