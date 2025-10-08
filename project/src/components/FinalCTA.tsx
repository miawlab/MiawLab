import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Cinematic Background with Red Horizon */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-red-900/20 via-red-800/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-red-500 rounded-full animate-ping [animation-delay:1s]"></div>
      <div className="absolute top-1/2 right-1/5 w-2 h-2 bg-yellow-400 rounded-full animate-pulse [animation-delay:2s]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-red-400 rounded-full animate-ping [animation-delay:0.5s]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Urgency Message */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Sua marca pode continuar
            <br />
            <span className="text-gray-500">postando sem rumo...</span>
          </h2>
          
          <div className="relative my-12">
            <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-600">
              OU
            </div>
            <div className="absolute inset-0 text-6xl md:text-8xl font-black text-red-500/20 blur-sm">
              OU
            </div>
          </div>
          
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-600">
              começar a vender
            </span>
            <br />
            <span className="text-white">de verdade</span>
            <span className="text-red-500">.</span>
          </h3>
        </div>

        {/* Main CTA */}
        <div className="mb-16">
          <button  onClick={() => {
    const phone = "5511991854075"; // seu número (DDI + DDD + número)
    const msg = encodeURIComponent("Olá! Tenho interesse no serviço, pode me explicar melhor?");
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank", "noopener,noreferrer");
  }}
          className="group relative inline-flex items-center px-12 py-6 text-2xl font-black text-black bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
            <Calendar className="mr-4 w-8 h-8 group-hover:animate-bounce" />
            <span className="relative z-10">Agende sua consultoria gratuita</span>
            <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
            
            {/* Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
          </button>
        </div>

        {/* Urgency Reinforcement */}
        <div className="relative">
          <div className="inline-block">
            <p className="text-xl md:text-2xl text-gray-300 font-light italic mb-4">
              "Cada dia que você espera é mais um dia que seus concorrentes saem na frente."
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto animate-pulse"></div>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="mt-16 flex flex-wrap justify-center items-center space-x-8 text-gray-500 text-sm">
          <span className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Consultoria gratuita</span>
          </span>
          <span className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Sem compromisso de longo prazo</span>
          </span>
          <span className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Abordagem focada em resultados</span>
          </span>
        </div>
      </div>
    </section>
  );
}