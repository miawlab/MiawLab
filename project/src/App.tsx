import React from 'react';
import Hero from './components/Hero';
import Pain from './components/Pain';
import Solution from './components/Solution';
import Portfolio from './components/Portfolio';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <Pain />
      <Solution />
      <Portfolio />
      <Benefits />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;