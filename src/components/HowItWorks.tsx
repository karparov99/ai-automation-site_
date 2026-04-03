import { Search, Lightbulb, Wrench, Handshake } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Analyze Operations',
      description: 'We learn how you actually work—not how org charts say you should. Real workflows, real constraints, real opportunities.',
    },
    {
      icon: Lightbulb,
      title: 'Spot Inefficiencies',
      description: 'Together we find where manual work creates friction, where tools don\'t talk to each other, and where time is being lost.',
    },
    {
      icon: Wrench,
      title: 'Design Strategies',
      description: 'We create practical, implementable automation strategies—not theoretical concepts. Clear, documented, and ready for execution.',
    },
    {
      icon: Handshake,
      title: 'Define Next Steps',
      description: 'You own the decision. Understand exactly what\'s possible, the effort required, and what success looks like for your business.',
    },
  ];

  return (
    <section className="py-32 px-4 bg-dark-900 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            How it <span className="text-gradient-blue">works</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto font-medium">
            A straightforward process built on understanding before suggesting, and learning before deciding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="glass-card glass-card-hover p-10 h-full flex flex-col items-start hover:border-accent-blue/30 group">
                  <div className="flex items-center justify-between w-full mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-accent-blue/5 border border-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/10 group-hover:scale-110 transition-all duration-500">
                      <Icon className="text-accent-blue" size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-4xl font-black text-white/5 group-hover:text-accent-blue/10 transition-colors duration-500">{idx + 1}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-0.5 w-6 bg-accent-blue/40 rounded-full"></div>
                    <span className="text-xs font-black text-accent-blue uppercase tracking-widest">Phase {idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-5 group-hover:text-white transition-colors">{step.title}</h3>
                  <p className="text-dark-300 leading-relaxed font-medium">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
