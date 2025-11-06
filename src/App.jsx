import React from 'react';
import HeroSection from './components/HeroSection';
import ClientLogos from './components/ClientLogos';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ClosingCTA from './components/ClosingCTA';

export default function App() {
  return (
    <div className="font-inter antialiased">
      <HeroSection />
      <ClientLogos />
      <PainPoints />
      <Solutions />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ClosingCTA />

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Metasocial. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-500 hover:text-slate-900">FAQ</a>
            <a href="mailto:hello@metasocial.id" className="text-slate-500 hover:text-slate-900">Contact</a>
            <a href="https://wa.me/6281234567890" className="text-slate-500 hover:text-slate-900">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
