import { useState } from 'react';
import { AlertCircle, Clock, MessageSquare, Database, ArrowRight } from 'lucide-react';

const ProblemReveal = () => {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);

  const painPoints = [
    {
      icon: <Clock className="w-8 h-8 text-red-400" />,
      title: "Lost Time",
      description: "Managing spreadsheets and manual scheduling instead of growing your business.",
      quiz: "Do you spend 2+ hours/day on manual data entry or copying?"
    },
    {
      icon: <Database className="w-8 h-8 text-red-500" />,
      title: "Messy Data",
      description: "Missing leads and customer info scattered across a dozen different tools.",
      quiz: "Have you ever lost a lead because someone forgot to follow up?"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-red-600" />,
      title: "Burning Out",
      description: "Your team is exhausted by repetitive tasks, killing their creativity and morale.",
      quiz: "Is your best talent spending their time on 'robot work'?"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full noise-overlay opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-500/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4" />
            <span>The Invisible Cost of Manual Work</span>
          </div>
          <h2 className="section-heading mb-6">
            The <span className="text-red-500">Messy Middle</span> is Killing Your Growth
          </h2>
          <p className="text-xl text-dark-300">
            Behind every successful agency is a mountain of manual work that shouldn't exist. 
            It's not just "extra work"—it's a massive drag on your scalability and profit margins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className={`glass-card p-8 transition-all duration-500 ${activeQuiz === index ? 'ring-2 ring-red-500/50 scale-[1.02]' : ''}`}
              onMouseEnter={() => setActiveQuiz(index)}
              onMouseLeave={() => setActiveQuiz(null)}
            >
              <div className="mb-6 p-3 w-fit rounded-xl bg-dark-800 border border-white/5">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
              <p className="text-dark-400 mb-8 leading-relaxed">
                {point.description}
              </p>
              
              <div className={`mt-auto pt-6 border-t border-white/5 transition-opacity duration-300 ${activeQuiz === index ? 'opacity-100' : 'opacity-40'}`}>
                <p className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">Quick Assessment</p>
                <p className="text-dark-200 text-lg italic">"{point.quiz}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-10 md:p-16 border-red-500/10 relative overflow-hidden bg-gradient-to-br from-dark-900 to-red-950/20">
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="max-w-2xl mb-10 md:mb-0">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                If you answered <span className="text-red-500">"YES"</span> to any of these...
              </h3>
              <p className="text-xl text-dark-300">
                You're losing roughly 30% of your operational capacity to tasks that could be handled by AI in seconds.
                It's time to stop fighting the systems and start building them.
              </p>
            </div>
            <button className="group relative px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-red-600/20 flex items-center space-x-3 whitespace-nowrap">
              <span>Fix My Workflow</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemReveal;
