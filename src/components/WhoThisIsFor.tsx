import { CheckCircle, XCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function WhoThisIsFor() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const forYou = [
    'Real operators managing actual workflows',
    'Teams losing hours to repetitive manual work',
    'Founders seeking clarity on automation opportunities',
    'Companies with fragmented, inefficient processes',
    'Leaders who want to understand what\'s possible before investing',
  ];

  const notForYou = [
    'Looking for a magic button to transform your business overnight',
    'Exploring automation as a hobby project or side experiment',
    'Expecting results without changing how you currently work',
    'Unwilling to evaluate or adjust existing processes',
    'Searching for the cheapest solution rather than the right one',
  ];

  return (
    <section id="who-this-is-for" ref={sectionRef} className="py-32 px-4 bg-dark-950 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-20 text-balance transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Is this the right <span className="text-gradient-emerald">investment?</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto font-medium">
            We work best with operators who understand their problems and are ready to solve them systematically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* For You */}
          <div className={`glass-card glass-card-hover p-8 lg:p-12 hover:border-emerald-500/50 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle className="text-accent-emerald" size={28} />
              </div>
              <h3 className="text-3xl font-bold">This Is For You</h3>
            </div>

            <ul className="space-y-8">
              {forYou.map((item, idx) => (
                <li key={idx} className="flex gap-5 group">
                  <CheckCircle className="text-accent-emerald flex-shrink-0 mt-1 transition-transform group-hover:scale-125" size={20} />
                  <span className="text-dark-100 text-lg lg:text-xl font-medium leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className={`glass-card glass-card-hover p-8 lg:p-12 hover:border-red-500/50 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <XCircle className="text-red-500" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-dark-100">This Is Not For You</h3>
            </div>

            <ul className="space-y-8">
              {notForYou.map((item, idx) => (
                <li key={idx} className="flex gap-5 group">
                  <XCircle className="text-red-500/60 flex-shrink-0 mt-1 transition-transform group-hover:scale-125 group-hover:text-red-500" size={20} />
                  <span className="text-dark-400 text-lg lg:text-xl font-medium leading-normal group-hover:text-dark-200 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
