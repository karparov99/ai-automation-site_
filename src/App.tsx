import Hero from './components/Hero';
import WhoThisIsFor from './components/WhoThisIsFor';
import HowItWorks from './components/HowItWorks';
import Credibility from './components/Credibility';
import LeadMagnet from './components/LeadMagnet';
import ProcessTransparency from './components/ProcessTransparency';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProblemReveal from './components/ProblemReveal';
import WorkflowComparison from './components/WorkflowComparison';
import CaseStudyGrid from './components/CaseStudyGrid';
import Manifesto from './components/Manifesto';
import AuditPreview from './components/AuditPreview';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-dark-100 selection:bg-blue-500/30">
      <Hero />
      <ProblemReveal />
      <WhoThisIsFor />
      <WorkflowComparison />
      <HowItWorks />
      <CaseStudyGrid />
      <Credibility />
      <Manifesto />
      <LeadMagnet />
      <AuditPreview />
      <ProcessTransparency />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
