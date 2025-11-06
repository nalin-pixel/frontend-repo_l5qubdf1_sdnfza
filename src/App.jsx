import React from 'react';
import HeroSection from './components/HeroSection';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import ClosingCTA from './components/ClosingCTA';

function App() {
  return (
    <div className="font-inter text-gray-900">
      <HeroSection />
      <PainPoints />
      <Solutions />
      <Benefits />
      <Pricing />
      <ClosingCTA />
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Metasocial. All rights reserved.</p>
          <a className="hover:text-gray-700" href="#faq">FAQ</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
