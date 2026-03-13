import { CheckCircle } from 'lucide-react';

export default function ProcessTransparency() {
  const timeline = [
    {
      step: 'Submit Request',
      description: 'Tell us about your situation and what you\'re working with',
      timeframe: 'Now',
    },
    {
      step: 'Intro Call',
      description: '30-minute conversation to understand your workflows and goals',
      timeframe: '1-2 Days',
    },
    {
      step: 'Analysis',
      description: 'We document your systems, identify opportunities, scope automations',
      timeframe: '1 Week',
    },
    {
      step: 'Recommendations',
      description: 'Clear report with specific automation opportunities and estimates',
      timeframe: '2 Weeks',
    },
    {
      step: 'Your Decision',
      description: 'You evaluate options and decide if you want to move forward',
      timeframe: 'Your Timeline',
    },
  ];

  return (
    <section className="py-24 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">What Happens Next</h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Complete transparency about our process. No surprises, no pressure, no sales tactics.
          </p>
        </div>

        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-6 md:gap-8 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Timeline node */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-dark-900" size={24} />
                </div>
                {idx < timeline.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-accent-blue to-dark-700"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold">{item.step}</h3>
                  <span className="text-dark-400 font-semibold">{item.timeframe}</span>
                </div>
                <p className="text-lg text-dark-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-dark-800 border border-dark-700 rounded-lg">
          <p className="text-center text-lg text-dark-200">
            <span className="font-semibold">No sales pressure.</span> We present what we find. You understand your options. You decide what makes sense. That's it.
          </p>
        </div>
      </div>
    </section>
  );
}
