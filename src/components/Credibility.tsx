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
    <section className="py-32 px-4 bg-dark-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-6">Built on Real Experience</h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto font-medium">
            Years working directly with teams, not just consulting about what might work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="text-center group transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-accent-blue/5 border border-accent-blue/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 group-hover:shadow-xl group-hover:shadow-accent-blue/10">
                    <Icon className="text-accent-blue" size={40} />
                  </div>
                </div>
                <div className="text-6xl md:text-7xl font-black text-white mb-4 group-hover:text-accent-blue transition-colors duration-300">{stat.value}</div>
                <p className="text-lg text-dark-300 font-medium tracking-wide uppercase">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Partner logos */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <p className="text-center text-dark-400 mb-12 text-sm font-bold uppercase tracking-widest opacity-60">Trusted by teams across industries</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="glass-card w-full h-24 flex items-center justify-center opacity-40 hover:opacity-100 hover:border-accent-blue/30 transition-all duration-500 group"
              >
                <div className="text-dark-500 font-bold text-xs uppercase tracking-tighter group-hover:text-dark-200 transition-colors">
                  Company {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
