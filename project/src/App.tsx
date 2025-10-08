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
       <div className="w-full max-w-full overflow-x-hidden bg-gradient-to-b from-[#0a1224] to-[#040812]">
      {/* Container Global de Padding e Centralização */}
      <div className="px-4 sm:px-6">
        <Hero />
        <Pain />
        <Solution />
        <Portfolio />
        <Benefits />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
