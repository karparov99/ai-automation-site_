import Hero from './components/Hero';
import WhoThisIsFor from './components/WhoThisIsFor';
import HowItWorks from './components/HowItWorks';
import Credibility from './components/Credibility';
import LeadMagnet from './components/LeadMagnet';
import ProcessTransparency from './components/ProcessTransparency';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-dark-100">
      <Hero />
      <WhoThisIsFor />
      <HowItWorks />
      <Credibility />
      <LeadMagnet />
      <ProcessTransparency />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
