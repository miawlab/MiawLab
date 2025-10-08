import React from 'react';
import { Target, Zap, Brain, TrendingUp } from 'lucide-react';

export default function Solution() {
  const services = [
    {
      icon: Target,
      title: "Gestão Estratégica de Redes Sociais",
      description: "Transforme sua presença digital em uma máquina de geração de leads com estratégias de conteúdo baseadas em dados."
    },
    {
      icon: Zap,
      title: "Criação de Conteúdo Persuasivo",
      description: "Conteúdo que converte. Cada post projetado para aproximar sua audiência da compra."
    },
    {
      icon: TrendingUp,
      title: "Tráfego Pago com Funis de Precisão",
      description: "Anúncios ultra-segmentados que trazem prospects qualificados diretamente para seus funis de conversão."
    },
    {
      icon: Brain,
      title: "Escalonamento com IA",
      description: "Aproveite a inteligência artificial para automatizar e escalar seus resultados exponencialmente."
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase border border-yellow-400/30 px-6 py-3 rounded-full bg-yellow-400/5">
              A Solução Miaw Lab
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Construímos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> impérios</span>,
            não apenas perfis
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cada estratégia é criada para transformar sua marca em uma autoridade que atrai, converte e retém clientes premium.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-800/50 rounded-2xl p-8 transition-all duration-500 group-hover:border-red-500/30 group-hover:shadow-2xl group-hover:shadow-red-500/10 group-hover:transform group-hover:-translate-y-2">
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg shadow-red-500/25 group-hover:shadow-red-500/50 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-16 h-16 bg-red-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
              </div>

              {/* Chess Piece Inspiration */}
              <div className="absolute -top-2 -right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded transform rotate-45 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
  onClick={() => {
    const phone = "5511991854075"; // seu número (DDI + DDD + número)
    const msg = encodeURIComponent("Olá! Tenho interesse no serviço, pode me explicar melhor?");
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank", "noopener,noreferrer");
  }}
  className="group relative inline-flex items-center px-10 py-4 text-lg font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30"
>
  <span className="relative z-10">Conheça Nossa Metodologia</span>
  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
</button>
        </div>
      </div>
    </section>
  );
}