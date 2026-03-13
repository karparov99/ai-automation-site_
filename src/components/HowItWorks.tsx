import { Search, Lightbulb, Wrench, Handshake } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Understand Your Systems',
      description: 'We learn how you actually work—not how org charts say you should work. Real workflows, real constraints, real opportunities.',
    },
    {
      icon: Lightbulb,
      title: 'Identify Bottlenecks',
      description: 'Together we find where manual work creates friction, where tools don\'t talk to each other, and where time is being wasted.',
    },
    {
      icon: Wrench,
      title: 'Design Automations',
      description: 'We create practical, implementable automation strategies—not theoretical concepts. Clear, documented, executable.',
    },
    {
      icon: Handshake,
      title: 'You Decide Next Steps',
      description: 'You own the decision. Understand what\'s possible, the effort required, and what success looks like. Then choose your path.',
    },
  ];

  return (
    <section className="py-24 px-4 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            A straightforward process built on understanding before suggesting, learning before deciding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Connecting line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-24 w-full h-1 bg-gradient-to-r from-accent-blue to-transparent transform translate-y-16 -translate-x-1/2 pointer-events-none"></div>
                )}

                <div className="relative bg-dark-700 border border-dark-600 rounded-lg p-8 h-full hover:border-accent-blue hover:bg-dark-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent-blue/20">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent-blue/10 border border-accent-blue/30 mb-6 group-hover:bg-accent-blue/20 transition-colors">
                    <Icon className="text-accent-blue" size={28} />
                  </div>

                  <div className="flex items-start gap-2 mb-4">
                    <span className="text-sm font-bold text-accent-blue">Step {idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-dark-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
