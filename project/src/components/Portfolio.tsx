import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const cases = [
    {
      niche: 'Pizzaria',
      before: 'Fotos genéricas de comida',
      after: 'Storytelling estratégico da marca',
      metric: '+340% pedidos',
      gradient: 'from-orange-500 to-red-500',
      mockup: '/mockups/pizzaria.jpg', // 👈 ajuste o caminho/arquivo conforme os seus
    },
    {
      niche: 'Clínica de Estética',
      before: 'Conteúdo clínico e frio',
      after: 'Marca aspiracional de lifestyle',
      metric: '+280% consultas',
      gradient: 'from-pink-500 to-purple-500',
      mockup: '/mockups/estetica.jpg',
    },
    {
      niche: 'Clínica Odontológica',
      before: 'Posts tradicionais de saúde',
      after: 'Autoridade moderna em bem-estar',
      metric: '+190% agendamentos',
      gradient: 'from-blue-500 to-cyan-500',
      mockup: '/mockups/odontologia.jpg',
    },
    {
      niche: 'Restaurante Japonês',
      before: 'Fotos básicas do cardápio',
      after: 'Marca de experiência cultural',
      metric: '+250% reservas',
      gradient: 'from-green-500 to-emerald-500',
      mockup: '/mockups/japones.jpg',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.05),transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase border border-yellow-400/30 px-6 py-3 rounded-full bg-yellow-400/5">
              Resultados Comprovados
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Transformações reais,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
              impacto mensurável
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Veja como transformamos negócios de diferentes setores com branding estratégico e
            campanhas direcionadas.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cases.map((caseStudy, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-800/50 rounded-2xl p-8 transition-all duration-500 group-hover:border-yellow-400/30 group-hover:shadow-2xl group-hover:shadow-yellow-400/10 group-hover:transform group-hover:-translate-y-2">
                {/* Niche Tag */}
                <div className="inline-block mb-6">
                  <div className={`bg-gradient-to-r ${caseStudy.gradient} p-px rounded-lg`}>
                    <div className="bg-black rounded-lg px-4 py-2">
                      <span className="text-white font-bold text-sm tracking-wide">
                        {caseStudy.niche}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Before/After */}
                <div className="space-y-6 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-red-500/50 rounded-full"></div>
                    <div>
                      <span className="text-red-400 text-sm font-semibold">ANTES:</span>
                      <p className="text-gray-400">{caseStudy.before}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <span className="text-green-400 text-sm font-semibold">DEPOIS:</span>
                      <p className="text-white">{caseStudy.after}</p>
                    </div>
                  </div>
                </div>

                {/* Metric */}
                <div className="relative">
                  <div
                    className={`inline-block text-2xl font-black bg-gradient-to-r ${caseStudy.gradient} bg-clip-text text-transparent`}
                  >
                    {caseStudy.metric}
                  </div>
                </div>

                {/* Mockup Image */}
                <div className="mt-6 aspect-video rounded-lg border border-gray-700/30 overflow-hidden">
                  <img
                    src={caseStudy.mockup}
                    alt={`Mockup ${caseStudy.niche}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Hover Accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${caseStudy.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Behance CTA */}
        <div className="text-center">
          <button
            onClick={() =>
              window.open('https://www.behance.net/labmiaw#', '_blank', 'noopener,noreferrer')
            }
            className="group relative inline-flex items-center px-10 py-5 text-lg font-bold text-white border-2 border-yellow-400/50 rounded-lg transition-all duration-300 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 hover:bg-yellow-400/5"
          >
            <ExternalLink className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Veja nosso portfólio no Behance</span>
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
