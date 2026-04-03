import { Target, ListChecks, BarChart3, TrendingDown, Plus, MousePointer2 } from 'lucide-react';

const AuditPreview = () => {
    return (
        <section className="py-32 bg-dark-950 relative border-b border-white/5 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
                            <span>Your Custom Roadmap</span>
                        </div>
                        <h2 className="section-heading mb-8">The <span className="text-white">Automation Audit</span>: What You Get</h2>
                        <p className="text-xl text-dark-300 mb-10 leading-relaxed">
                            We don't send you a generic PDF. Your audit is a comprehensive strategic breakdown of exactly where your time is leaking and how to plug those holes with AI.
                        </p>

                        <ul className="space-y-8">
                            <li className="flex items-start space-x-6">
                                <div className="p-3 bg-dark-800 rounded-xl border border-white/10 shrink-0">
                                    <Target className="w-8 h-8 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Pain Point Map</h3>
                                    <p className="text-dark-400">Identification of the top 3 high-friction manual processes costing you the most time and money.</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-6">
                                <div className="p-3 bg-dark-800 rounded-xl border border-white/10 shrink-0">
                                    <BarChart3 className="w-8 h-8 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Efficiency Projections</h3>
                                    <p className="text-dark-400">Calculated ROI showing exactly how many hours per month can be reclaimed after implementation.</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-6">
                                <div className="p-3 bg-dark-800 rounded-xl border border-white/10 shrink-0">
                                    <ListChecks className="w-8 h-8 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Step-by-Step Implementation</h3>
                                    <p className="text-dark-400">A clear, phased roadmap from current "mess" to automated infrastructure.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="relative">
                        {/* Mockup of a report */}
                        <div className="glass-card p-4 md:p-8 relative bg-white/[0.03] backdrop-blur-3xl transform rotate-1 lg:rotate-2 shadow-2xl shadow-blue-500/5 group">
                            <div className="w-full bg-dark-900 border border-white/10 rounded-xl overflow-hidden shadow-inner">
                                <div className="p-6 border-b border-white/10 bg-dark-800 flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-blue-500/20 rounded flex items-center justify-center font-bold text-blue-400 italic">S</div>
                                        <div className="h-4 w-32 bg-white/10 rounded" />
                                    </div>
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                    </div>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="h-10 w-2/3 bg-gradient-to-r from-blue-500/20 to-transparent rounded" />
                                        <div className="h-10 w-20 bg-white/5 rounded" />
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-32 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 flex flex-col justify-end">
                                            <TrendingDown className="w-8 h-8 text-emerald-400 mb-2" />
                                            <div className="h-3 w-2/3 bg-emerald-400/20 rounded" />
                                        </div>
                                        <div className="h-32 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 flex flex-col justify-end">
                                            <BarChart3 className="w-8 h-8 text-amber-400 mb-2" />
                                            <div className="h-3 w-1/2 bg-amber-400/20 rounded" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="h-4 w-full bg-white/5 rounded" />
                                        <div className="h-4 w-5/6 bg-white/5 rounded" />
                                        <div className="h-4 w-4/6 bg-white/5 rounded" />
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="h-6 w-32 bg-blue-500/30 rounded-full" />
                                        <div className="flex space-x-2">
                                            <div className="w-12 h-6 bg-white/5 rounded" />
                                            <div className="w-12 h-6 bg-white/5 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating UI element */}
                            <div className="absolute -bottom-10 -right-4 p-6 glass-card bg-dark-800/80 border-blue-500/40 w-64 shadow-2xl animate-float">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                                        <Plus className="w-4 h-4" />
                                    </div>
                                    <span className="font-bold text-sm">Actionable Priority</span>
                                </div>
                                <div className="h-3 w-full bg-white/10 rounded mb-2" />
                                <div className="h-3 w-2/3 bg-white/10 rounded" />
                            </div>

                            {/* Interaction cursor */}
                            <MousePointer2 className="absolute top-1/2 left-2/3 w-10 h-10 text-blue-500 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditPreview;
