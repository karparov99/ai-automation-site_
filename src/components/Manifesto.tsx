import { Quote, Smartphone, Globe, Shield } from 'lucide-react';

const Manifesto = () => {
    return (
        <section className="py-32 bg-dark-900 relative overflow-hidden group">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20 text-center relative">
                        <Quote className="w-20 h-20 text-white/5 absolute -top-10 left-1/2 -translate-x-1/2" />
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight italic">
                            "Automation isn't about replacing people. <br />
                            It's about <span className="text-blue-400">rehumanizing</span> operations."
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500/50 to-transparent mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 mb-20">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                                    <span className="w-8 h-8 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-400 text-sm">01</span>
                                    <span>Systems Over Tools</span>
                                </h3>
                                <p className="text-lg text-dark-400 leading-relaxed">
                                    Most companies buy software to fix problems. We build systems. Software is a tool; a system is a philosophy of flow that remains robust even as your tech stack changes.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                                    <span className="w-8 h-8 flex items-center justify-center bg-emerald-500/10 rounded-lg text-emerald-400 text-sm">02</span>
                                    <span>Deep Context AI</span>
                                </h3>
                                <p className="text-lg text-dark-400 leading-relaxed">
                                    Generic AI prompts are useless. We build "Context-Aware" automations that understand your specific business logic, tone of voice, and customer history.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                                    <span className="w-8 h-8 flex items-center justify-center bg-amber-500/10 rounded-lg text-amber-400 text-sm">03</span>
                                    <span>The Human Bridge</span>
                                </h3>
                                <p className="text-lg text-dark-400 leading-relaxed">
                                    The "last mile" of any workflow should always be human. We automate the 95% of grind so your team can focus on the 5% that actually matters: relationships and complex strategy.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                                    <span className="w-8 h-8 flex items-center justify-center bg-purple-500/10 rounded-lg text-purple-400 text-sm">04</span>
                                    <span>Future-Proofing</span>
                                </h3>
                                <p className="text-lg text-dark-400 leading-relaxed">
                                    We don't build black boxes. Our systems are transparent, easily auditable, and designed to grow with your team as you scale from 10 to 100+ members.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Founder Note */}
                    <div className="glass-card p-10 md:p-14 border-white/5 bg-gradient-to-br from-dark-950 to-dark-900 group">
                        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
                            <div className="w-24 h-24 shrink-0 rounded-full border-2 border-blue-500/20 overflow-hidden bg-dark-700 p-2 grayscale group-hover:grayscale-0 transition-all duration-700">
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl">👤</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-xl text-dark-200 italic mb-8 leading-relaxed">
                                    "I started this agency after watching brilliant founders get buried by the very operations they built. My goal is to build you a digital infrastructure that works while you sleep, so you can focus on the vision you started with."
                                </p>
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                    <div>
                                        <div className="font-extrabold text-white text-2xl mb-1 flex items-center space-x-2">
                                            <span>Alex Parker</span>
                                            <div className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] uppercase font-bold rounded tracking-widest">Founder</div>
                                        </div>
                                        <div className="text-dark-500 font-medium">Head of Systems & Strategy</div>
                                    </div>
                                    <div className="flex space-x-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <Globe className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
                                        <Smartphone className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
                                        <Shield className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
