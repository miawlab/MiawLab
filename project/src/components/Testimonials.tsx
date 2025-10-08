import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Clunes Cambrea",
      role: "Escritora e Professora",
      comment:
        "Estou assustada com tantas possibilidades, que até a chegada de vocês era inalcançável pra mim.",
      avatar: "/avatars/clunes.png",
    },
    {
      name: "João Santos",
      role: "Personal Trainer",
      comment:
        "Equipe profissional, entregou mais do que prometeu. Hoje tenho um posicionamento claro e clientes recorrentes.",
      avatar: "/avatars/joao.png",
    },
    {
      name: "Fernanda Lima",
      role: "Médica Esteta",
      comment:
        "A consultoria abriu minha visão sobre marketing digital. Consegui dobrar meus atendimentos em poucos meses.",
      avatar: "/avatars/fernanda.png",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(239,68,68,0.1)_25%,transparent_25%,transparent_75%,rgba(239,68,68,0.1)_75%),linear-gradient(45deg,rgba(239,68,68,0.1)_25%,transparent_25%,transparent_75%,rgba(239,68,68,0.1)_75%)] bg-[size:40px_40px] bg-[position:0_0,20px_20px]" />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Título da seção */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase border border-yellow-400/30 px-6 py-3 rounded-full bg-yellow-400/5">
              Prova Social
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            O que nossos clientes
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
              estão dizendo
            </span>
          </h2>
        </div>

        {/* Cards de depoimentos */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="group relative">
              <div className="relative h-full min-h-[340px] flex flex-col justify-between bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-800/50 rounded-2xl p-6 sm:p-8 transition-all duration-500 group-hover:border-yellow-400/30 group-hover:shadow-2xl group-hover:shadow-yellow-400/10 group-hover:-translate-y-2">
                
                <div>
                  {/* Ícone de aspas */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-red-500 opacity-50" />
                  </div>

                  {/* Estrelas */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Comentário */}
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.comment}"</p>
                </div>

                {/* Avatar + Nome + Cargo */}
                <div className="flex items-center space-x-4 mt-auto">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-700"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/avatars/fallback.png';
                    }}
                  />
                  <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                </div>

                {/* Linha de destaque ao hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Texto final */}
        <div className="text-center mt-16 px-4">
          <p className="text-gray-400 text-base sm:text-lg font-light italic leading-relaxed">
            Depoimentos reais de transformações reais.
            <span className="text-yellow-400"> Sua história pode ser a próxima.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
