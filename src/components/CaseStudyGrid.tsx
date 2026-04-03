import { TrendingUp, Clock, ArrowUpRight } from 'lucide-react';

const CaseStudyGrid = () => {
    const studies = [
        {
            title: "Agency Onboarding",
            scenario: "Digital Marketing Agency",
            problem: "Client onboarding took 4 hours and required 12 manual steps.",
            solution: "Automated the entire flow—from contract signature to Slack channel creation and task management initialization.",
            result: "4 Minutes to get a client fully synced. Zero human errors.",
            metrics: "98% Reduction / Onboarding Time",
            color: "blue",
            size: "large"
        },
        {
            title: "Lead Nurturing",
            scenario: "Real Estate SaaS",
            problem: "Leads not followed up with for 24-48 hours.",
            solution: "AI instantly qualifies leads from forms and books calls on the calendar.",
            result: "90% Appointment Rate boost.",
            metrics: "Instant Follow-up",
            color: "emerald",
            size: "small"
        },
        {
            title: "Data Scraping & CRM",
            scenario: "B2B Outreach Team",
            problem: "SDRs manually copying lead data from LinkedIn.",
            solution: "Custom script scrapes, enriches with AI, and injects into CRM.",
            result: "10x Lead Volume monthly. No burn-out.",
            metrics: "1,200 leads/week / Automated",
            color: "amber",
            size: "medium"
        }
    ];

    return (
        <section className="py-24 bg-dark-950 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4">Concrete Proof</div>
                        <h2 className="section-heading mb-0">From <span className="text-dark-400 line-through decoration-red-500/50">Messy</span> to Scalable</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Main large card */}
                    <div className="md:col-span-2 glass-card p-10 flex flex-col justify-between border-blue-500/10 group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 scale-150 rotate-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <TrendingUp className="w-64 h-64 text-blue-400" />
                        </div>
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full">{studies[0].scenario}</span>
                            </div>
                            <h3 className="text-4xl font-bold mb-6">{studies[0].title}</h3>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div>
                                    <p className="text-sm text-dark-400 uppercase font-bold mb-2">The Problem</p>
                                    <p className="text-lg text-dark-200">{studies[0].problem}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-emerald-400 uppercase font-bold mb-2">The Result</p>
                                    <p className="text-lg text-white font-semibold">{studies[0].result}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                            <div className="flex space-x-2">
                                <Clock className="w-5 h-5 text-blue-400" />
                                <span className="font-bold text-blue-100">{studies[0].metrics}</span>
                            </div>
                            <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-bold transition-colors">
                                <span>See Workflow</span>
                                <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Small card 1 */}
                    <div className="glass-card p-8 border-emerald-500/10 flex flex-col justify-between group">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full">{studies[1].scenario}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{studies[1].title}</h3>
                            <p className="text-dark-300 line-clamp-3 mb-6">{studies[1].solution}</p>
                        </div>
                        <div className="pt-6 border-t border-white/5">
                            <div className="text-emerald-400 font-bold mb-1">{studies[1].metrics}</div>
                            <div className="text-xs text-dark-500 font-medium">90% Improvement</div>
                        </div>
                    </div>

                    {/* Small card 2 */}
                    <div className="glass-card p-8 border-amber-500/10 flex flex-col justify-between order-last md:order-none group">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold rounded-full">{studies[2].scenario}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{studies[2].title}</h3>
                            <p className="text-dark-300 mb-6">{studies[2].problem}</p>
                        </div>
                        <div className="pt-6 border-t border-white/5">
                            <div className="text-amber-400 font-bold mb-1">{studies[2].metrics}</div>
                        </div>
                    </div>

                    {/* Final small callout */}
                    <div className="md:col-span-2 glass-card p-8 flex items-center justify-between border-white/5 bg-gradient-to-r from-dark-800 to-dark-900">
                        <div className="flex items-center space-x-6">
                            <div className="w-16 h-16 rounded-full bg-dark-700 flex items-center justify-center text-3xl">🚀</div>
                            <div>
                                <h4 className="text-xl font-bold">Your business could be next.</h4>
                                <p className="text-dark-400">Apply for a custom automation audit today.</p>
                            </div>
                        </div>
                        <button className="px-6 py-3 bg-white text-dark-950 font-bold rounded-xl hover:bg-dark-100 transition-colors hidden md:block">
                            Book Audit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyGrid;
