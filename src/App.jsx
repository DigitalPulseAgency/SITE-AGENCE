import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { MockupSection } from './components/sections/MockupSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { SolutionSection } from './components/sections/SolutionSection';
import { PricingSection } from './components/sections/PricingSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { FounderSection } from './components/sections/FounderSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { FaqSection } from './components/sections/FaqSection';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <MockupSection />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <PortfolioSection />
      <ComparisonSection />
      <FounderSection />
      <ProcessSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
