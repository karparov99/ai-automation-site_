import { CheckCircle, XCircle } from 'lucide-react';

export default function WhoThisIsFor() {
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
    <section id="who-this-is-for" className="py-24 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">This Is For You If...</h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            We work best with operators who understand their problems and are ready to solve them systematically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* For You */}
          <div className="bg-dark-800 border border-dark-700 rounded-lg p-8 lg:p-10 hover:border-accent-emerald transition-colors duration-300 animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="text-accent-emerald" size={32} />
              <h3 className="text-2xl font-bold">This Is For You</h3>
            </div>

            <ul className="space-y-6">
              {forYou.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <CheckCircle className="text-accent-emerald flex-shrink-0 mt-1" size={20} />
                  <span className="text-dark-100 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="bg-dark-800 border border-dark-700 rounded-lg p-8 lg:p-10 hover:border-red-500 transition-colors duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-8">
              <XCircle className="text-red-500" size={32} />
              <h3 className="text-2xl font-bold">This Is Not For You</h3>
            </div>

            <ul className="space-y-6">
              {notForYou.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-dark-100 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
