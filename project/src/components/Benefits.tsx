import React from 'react';
import { Users, Award, Target, TrendingUp } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Users,
      title: "Mais clientes entrando em contato",
      description: "Transforme sua presença digital em um ímã de leads que atrai prospects de alto valor diariamente."
    },
    {
      icon: Award,
      title: "Mais autoridade e reconhecimento",
      description: "Posicione-se como o especialista de referência no seu setor com liderança de pensamento estratégica."
    },
    {
      icon: Target,
      title: "Mais clareza na sua estratégia digital",
      description: "Chega de achismo. Cada ação alinhada com objetivos de negócio mensuráveis."
    },
    {
      icon: TrendingUp,
      title: "Vendas mais previsíveis",
      description: "Transforme receita irregular em fluxos de receita consistentes e escaláveis."
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Symbolic Background - Glowing Thread */}
      <div className="absolute inset-0">
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
          <path 
            d="M100,400 Q300,200 500,400 T900,400" 
            stroke="rgba(239,68,68,0.5)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M200,300 Q400,500 600,300 T800,300" 
            stroke="rgba(239,68,68,0.3)" 
            strokeWidth="1" 
            fill="none"
            className="animate-pulse [animation-delay:1s]"
          />
        </svg>
        
        {/* Floating Connected Objects */}
        <div className="absolute top-1/4 left-1/6 w-8 h-8 border-2 border-red-500/30 rounded rotate-45 animate-spin [animation-duration:12s]"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-6 bg-red-500/20 rounded animate-pulse"></div>
        <div className="absolute top-3/4 right-1/6 w-6 h-6 bg-red-500/30 rounded-full animate-bounce [animation-delay:2s]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-red-500 text-sm font-semibold tracking-widest uppercase border border-red-500/30 px-6 py-3 rounded-full bg-red-500/5">
              Sua Transformação
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            O que você vai
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-600"> conquistar</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pare de correr atrás de métricas de vaidade. Comece a construir um negócio que cresce enquanto você dorme.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              {/* Connecting Thread Visualization */}
              {index < benefits.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-5 w-10 h-px bg-gradient-to-r from-red-500/50 to-transparent animate-pulse"></div>
              )}
              
              {/* Benefit Card */}
              <div className="flex items-start space-x-6 p-8 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/40 to-black/60 transition-all duration-500 group-hover:border-red-500/30 group-hover:bg-gradient-to-br group-hover:from-red-900/10 group-hover:to-black/80">
                
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25 group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 w-14 h-14 bg-red-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Connection Visual */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-red-500/20 to-yellow-400/20 rounded-full flex items-center justify-center border border-red-500/30">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-400 rounded-full animate-pulse shadow-2xl shadow-red-500/50"></div>
            </div>
            <div className="absolute inset-0 w-32 h-32 border-2 border-red-500/20 rounded-full animate-spin [animation-duration:8s]"></div>
            <div className="absolute inset-4 w-24 h-24 border border-yellow-400/30 rounded-full animate-ping [animation-duration:3s]"></div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl text-gray-300 font-light italic max-w-4xl mx-auto leading-relaxed">
            "Cada conexão importa. Cada estratégia se multiplica. 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400 font-normal"> Seu sucesso é inevitável.</span>"
          </p>
        </div>
      </div>
    </section>
  );
}