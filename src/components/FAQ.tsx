import { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "Will this replace my team?",
      answer: "Absolutely not. Think of automation as a digital assistant for your team. It handles the repetitive, soul-crushing stuff so your best people can focus on high-value strategy and client relationships."
    },
    {
      question: "How long before we see actual results?",
      answer: "Most manual processes can be automated and deployed within 2 to 4 weeks. Once live, you'll see an immediate reduction in manual workload and human error."
    },
    {
      question: "Is this suitable for my specific industry?",
      answer: "While we specialize in agencies and service-based businesses, any organization with repetitive digital tasks can benefit. If you copy-paste more than 5 times a day, we can help."
    },
    {
      question: "How much of my time will implementation take?",
      answer: "We handle 90% of the heavy lifting. We'll need about 2-3 hours of your time upfront to map your processes, and then we take it from there."
    }
  ];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="py-24 bg-dark-900 overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                <span>Got Questions?</span>
            </div>
            <h2 className="section-heading mb-6">Common <span className="text-white">Curiosities</span></h2>
            <p className="text-xl text-dark-300 mb-10">
              We're transparent about our approach. Here's what most founders ask before we start building.
            </p>
            <div className="p-8 glass-card border-blue-500/10 bg-blue-500/[0.02]">
                <h4 className="text-xl font-bold mb-4">Still unsure?</h4>
                <p className="text-dark-400 mb-6">Every business is different. Book a 15-min discovery call to see if we're a fit.</p>
                <button className="flex items-center space-x-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
                    <span>Book Discovery Call</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`glass-card overflow-hidden transition-all duration-300 ${activeFaq === index ? 'bg-white/10 ring-1 ring-blue-500/20 shadow-xl shadow-blue-500/5' : ''}`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full p-8 text-left flex items-center justify-between"
                >
                  <h3 className={`text-2xl font-bold transition-colors ${activeFaq === index ? 'text-blue-400' : 'text-white'}`}>
                    {faq.question}
                  </h3>
                  <div className={`p-2 rounded-lg transition-all duration-300 ${activeFaq === index ? 'bg-blue-500 text-white rotate-180' : 'bg-dark-800 text-dark-400'}`}>
                    {activeFaq === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </div>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out px-8 overflow-hidden ${activeFaq === index ? 'max-h-[300px] pb-10 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}`}
                >
                  <p className="text-xl text-dark-300 leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
