import { BarChart3, Zap, Globe } from 'lucide-react';

export default function Credibility() {
  const stats = [
    {
      icon: BarChart3,
      value: '8+',
      label: 'Years of Systems & Data Experience',
    },
    {
      icon: Zap,
      value: '150+',
      label: 'Production Automations Deployed',
    },
    {
      icon: Globe,
      value: '12+',
      label: 'Industries & Use Cases',
    },
  ];

  return (
    <section className="py-24 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Built on Real Experience</h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Years working directly with teams, not just consulting about what might work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <Icon className="text-accent-blue" size={40} />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-accent-blue mb-2">{stat.value}</div>
                <p className="text-lg text-dark-300">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Partner logos placeholder */}
        <div className="mt-20 pt-16 border-t border-dark-700">
          <p className="text-center text-dark-400 mb-10 text-sm uppercase tracking-wide">Trusted by teams across industries</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-24 h-24 bg-dark-800 border border-dark-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="text-dark-500 font-semibold text-sm">Company {i}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
