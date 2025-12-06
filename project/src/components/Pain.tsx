import React from 'react';

export default function Pain() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_70%)]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-red-500 text-sm font-semibold tracking-widest uppercase border border-red-500/30 px-4 py-2 rounded-full bg-red-500/5">
                A Realidade Nua e Crua
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              A maioria das marcas
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600"> estão queimando dinheiro</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <div className="relative pl-8">
                <div className="absolute left-0 top-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <p><span className="text-red-400 font-semibold">Postar sem estratégia</span> não vende.</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <p><span className="text-red-400 font-semibold">Anúncios sem segmentação</span> queimam dinheiro.</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <p><span className="text-red-400 font-semibold">Perfis sem posicionamento</span> viram vitrines vazias.</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Cracking Mask Effect */}
              <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-black rounded-3xl relative overflow-hidden border border-gray-700/50 shadow-2xl">
                {/* Inner Glow */}
                <div className="absolute inset-4 bg-gradient-to-br from-red-900/30 via-transparent to-red-800/20 rounded-2xl"></div>
                
                {/* Crack Lines */}
                <div className="absolute top-1/4 left-1/3 w-px h-24 bg-gradient-to-b from-transparent via-red-500 to-transparent rotate-12 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-red-400 to-transparent -rotate-12 animate-pulse [animation-delay:0.5s]"></div>
                <div className="absolute top-3/4 right-1/3 w-px h-20 bg-gradient-to-b from-transparent via-red-600 to-transparent rotate-45 animate-pulse [animation-delay:1s]"></div>
                
                {/* Central Neon Core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-red-500 rounded-full opacity-80 animate-pulse shadow-lg shadow-red-500/50"></div>
                  <div className="absolute inset-0 w-16 h-16 bg-red-400 rounded-full opacity-40 animate-ping"></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.8s]"></div>
              </div>

              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-red-500/20 rounded-3xl blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}