import { Mail, Database, Send, CheckCircle2, XCircle, ArrowRight, UserCheck, Zap, Cog, Users } from 'lucide-react';

const WorkflowComparison = () => {
  const manualSteps = [
    { icon: <Mail className="w-5 h-5" />, label: "Manual Email Check" },
    { icon: <Database className="w-5 h-5" />, label: "Copying to Sheets" },
    { icon: <Users className="w-5 h-5" />, label: "Manually Slack Team" },
    { icon: <Cog className="w-5 h-5" />, label: "Scheduling Meeting" },
    { icon: <Send className="w-5 h-5" />, label: "Manual Follow-up" },
  ];

  const automatedSteps = [
    { icon: <Zap className="w-5 h-5" />, label: "AI Lead Capture" },
    { icon: <CheckCircle2 className="w-5 h-5" />, label: "Instant CRM Update" },
    { icon: <UserCheck className="w-5 h-5" />, label: "Team Notification" },
    { icon: <Send className="w-5 h-5" />, label: "Automated Outreach" },
  ];

  return (
    <section className="py-24 bg-dark-900 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-4">
          <h2 className="section-heading mb-6">Visualizing the <span className="text-gradient-emerald">Transformation</span></h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            From fragmented manual steps to a single, seamless automated flow.
            We take your mess and turn it into a system.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Manual Workflow */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <XCircle className="w-24 h-24 text-red-500" />
            </div>
            
            <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
              <span className="p-2 bg-red-500/10 rounded-lg"><XCircle className="w-6 h-6 text-red-500" /></span>
              <span>The "Before" Mess</span>
            </h3>

            <div className="space-y-6 relative">
              {manualSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-4 relative">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-dark-800 border border-red-500/20 flex items-center justify-center text-red-400">
                    {step.icon}
                  </div>
                  <div className="flex-1 p-4 bg-dark-800/50 border border-white/5 rounded-xl text-dark-300 font-medium">
                    {step.label}
                  </div>
                  {index < manualSteps.length - 1 && (
                    <div className="absolute top-12 left-6 w-[2px] h-6 bg-gradient-to-b from-red-500/30 to-transparent" />
                  )}
                </div>
              ))}
              <div className="pt-4 text-sm text-red-400 font-semibold uppercase tracking-wider flex items-center space-x-2">
                <span>⚠️ Time: 4+ Hours / Daily</span>
              </div>
            </div>
          </div>

          {/* Automated Workflow */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden group border-emerald-500/20 bg-emerald-500/[0.02]">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-24 h-24 text-emerald-400" />
            </div>
            
            <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
              <span className="p-2 bg-emerald-500/10 rounded-lg"><Zap className="w-6 h-6 text-emerald-400" /></span>
              <span>The "After" System</span>
            </h3>

            <div className="space-y-8">
              {automatedSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-4 relative">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                    {step.icon}
                  </div>
                  <div className="flex-1 p-5 bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl text-white font-semibold">
                    {step.label}
                  </div>
                  {index < automatedSteps.length - 1 && (
                    <div className="absolute top-14 left-7 w-[2px] h-8 bg-gradient-to-b from-emerald-500/50 to-emerald-500/10" />
                  )}
                </div>
              ))}
              <div className="pt-4 text-sm text-emerald-400 font-semibold uppercase tracking-wider flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>✅ Time: 4 Minutes / Once</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
            <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 shadow-xl shadow-emerald-500/10">
                <div className="px-8 py-3 bg-dark-950 rounded-full flex items-center space-x-3 text-lg font-bold">
                    <span>Ready to reclaim your time?</span>
                    <ArrowRight className="w-5 h-5 text-emerald-400" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowComparison;
